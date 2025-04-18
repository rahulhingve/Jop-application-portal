'use client'

import { useState, useEffect } from 'react'
import { FormData } from '@/app/page'
import { Input } from '@/app/components/ui/input'
import { saveFile } from '@/app/utils/fileStorage'

interface BehavioralQuestionsStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  prevStep: () => void;
  handleSubmit: () => void;
}

export function BehavioralQuestionsStep({ 
  formData, 
  updateFormData, 
  prevStep,
  handleSubmit 
}: BehavioralQuestionsStepProps) {
  const [textAnswer, setTextAnswer] = useState(formData.behavioral.textAnswer)
  const [audioFile, setAudioFile] = useState<File | null>(formData.behavioral.audioFile)
  const [videoFile, setVideoFile] = useState<File | null>(formData.behavioral.videoFile)
  const [error, setError] = useState('')
  const [isValid, setIsValid] = useState(!!formData.behavioral.textAnswer || !!formData.behavioral.audioFile || !!formData.behavioral.videoFile)
  const [isUploading, setIsUploading] = useState(false)
  
  // Keep local state in sync with parent formData
  useEffect(() => {
    console.log("Parent formData changed:", formData.behavioral);
    setTextAnswer(formData.behavioral.textAnswer || '');
  }, [formData.behavioral.textAnswer]);

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError('Audio file must be less than 10MB')
        return
      }
      setAudioFile(file)
      setError('')
      setIsValid(true)
    }
  }

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        setError('Video file must be less than 50MB')
        return
      }
      setVideoFile(file)
      setError('')
      setIsValid(true)
    }
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTextAnswer = e.target.value;
    console.log("Text answer updated:", newTextAnswer);
    
    // Update local state
    setTextAnswer(newTextAnswer);
    
    // Update parent form data immediately when text changes
    // This is a DIRECT update to make sure the text is saved
    updateFormData({
      behavioral: {
        ...formData.behavioral,
        textAnswer: newTextAnswer
      }
    });
    
    if (newTextAnswer.trim() || audioFile || videoFile) {
      setIsValid(true)
      setError('')
    } else {
      setIsValid(false)
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!textAnswer && !audioFile && !videoFile) {
      setError('Please provide at least one form of response')
      setIsValid(false)
      return
    }

    // Log the current form state for debugging
    console.log("Current text value before submission:", textAnswer);
    console.log("Current formData before submission:", formData);

    try {
      setIsUploading(true)
      
      // Process and save files
      let audioFileUrl = formData.behavioral.audioFileUrl;
      let videoFileUrl = formData.behavioral.videoFileUrl;
      
      if (audioFile && (!formData.behavioral.audioFileUrl || formData.behavioral.audioFile !== audioFile)) {
        console.log("Uploading audio file...");
        audioFileUrl = await saveFile(audioFile);
        console.log("Audio file uploaded:", audioFileUrl);
      }
      
      if (videoFile && (!formData.behavioral.videoFileUrl || formData.behavioral.videoFile !== videoFile)) {
        console.log("Uploading video file...");
        videoFileUrl = await saveFile(videoFile);
        console.log("Video file uploaded:", videoFileUrl);
      }
      
      // Get the final text answer directly from the local state
      const finalTextAnswer = textAnswer;
      console.log("Final text answer for submission:", finalTextAnswer);

      // Do one final update of the parent form data
      // with the most current values
      const updatedBehavioral = {
        textAnswer: finalTextAnswer,
        audioFile,
        videoFile,
        audioFileUrl,
        videoFileUrl
      };
      
      // Update parent form before submission
      updateFormData({
        behavioral: updatedBehavioral
      });
      
      console.log("Final form state before submit:", updatedBehavioral);
      
      // Set loading state to false
      setIsUploading(false);
      
      // Don't use timeout, just handle submit with the current form data
      handleSubmit();
    } catch (error) {
      console.error('Error uploading files:', error)
      setError('Error uploading files. Please try again.')
      setIsUploading(false)
    }
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#1e40af]">Behavioral Questions</h2>
        <p className="text-[#475569] mt-1">
          Please answer the following question. You can provide your response in text, audio, or video format.
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-[#1e40af]">
            Why are you interested in joining this organisation?
          </h3>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#475569]" htmlFor="text-answer">
              Text Response
            </label>
            <textarea
              id="text-answer"
              className="w-full min-h-[150px] px-3 py-2 rounded-md border border-[#bfd6f6] bg-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 transition-colors"
              value={textAnswer}
              onChange={handleTextChange}
              placeholder="Type your answer here..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#475569]" htmlFor="audio">
              Audio Response (optional)
            </label>
            <Input
              id="audio"
              type="file"
              className="form-input"
              accept="audio/*"
              onChange={handleAudioChange}
            />
            {audioFile && (
              <p className="text-sm text-[#2563eb]">
                Selected audio: {audioFile.name}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#475569]" htmlFor="video">
              Video Response (optional)
            </label>
            <Input
              id="video"
              type="file"
              className="form-input"
              accept="video/*"
              onChange={handleVideoChange}
            />
            {videoFile && (
              <p className="text-sm text-[#2563eb]">
                Selected video: {videoFile.name}
              </p>
            )}
          </div>

          {error && (
            <p className="text-sm text-[#ef4444]">
              {error}
            </p>
          )}
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="px-4 py-2 text-sm font-medium text-[#475569] border border-[#bfd6f6] rounded-md hover:bg-[#f5f9ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 transition-colors"
            disabled={isUploading}
          >
            Back
          </button>
          <button
            type="submit"
            className="btn-primary"
            disabled={!isValid || isUploading}
          >
            {isUploading ? 'Uploading...' : 'Submit Application'}
          </button>
        </div>
      </form>
    </div>
  )
} 