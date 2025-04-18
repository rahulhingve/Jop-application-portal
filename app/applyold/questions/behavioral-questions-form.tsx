'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/app/components/ui/input'

export function BehavioralQuestionsForm() {
  const router = useRouter()
  const [textAnswer, setTextAnswer] = useState('')
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [error, setError] = useState('')

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError('Audio file must be less than 10MB')
        return
      }
      setAudioFile(file)
      setError('')
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
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!textAnswer && !audioFile && !videoFile) {
      setError('Please provide at least one form of response')
      return
    }

    try {
      const response = {
        textAnswer,
        audioFileName: audioFile?.name || null,
        videoFileName: videoFile?.name || null,
      }
      localStorage.setItem('behavioralAnswers', JSON.stringify(response))

      const allData = {
        personalInfo: JSON.parse(localStorage.getItem('personalInfo') || '{}'),
        resumeFile: localStorage.getItem('resumeFile'),
        behavioralAnswers: response,
      }
      console.log('Application data:', allData)

      router.push('/')
    } catch (error) {
      console.error('Error submitting form:', error)
      setError('Error submitting form. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
            onChange={(e) => setTextAnswer(e.target.value)}
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

      <button
        type="submit"
        className="btn-primary w-full"
      >
        Submit Application
      </button>
    </form>
  )
} 