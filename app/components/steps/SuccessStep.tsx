'use client'

import { FormData } from '@/app/page'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getFileByUrl, getMimeTypeFromBase64 } from '@/app/utils/fileStorage'

interface SuccessStepProps {
  formData: FormData;
}

export function SuccessStep({ formData }: SuccessStepProps) {
  const [resumeDownloadUrl, setResumeDownloadUrl] = useState<string | null>(null)
  const [audioDownloadUrl, setAudioDownloadUrl] = useState<string | null>(null)
  const [videoDownloadUrl, setVideoDownloadUrl] = useState<string | null>(null)
  const [filePaths, setFilePaths] = useState<{
    resumePath: string | null;
    audioPath: string | null;
    videoPath: string | null;
  }>({
    resumePath: null,
    audioPath: null,
    videoPath: null
  })

  useEffect(() => {
    // Store file paths
    if (formData.resume.fileUrl) {
      setFilePaths(prev => ({ 
        ...prev, 
        resumePath: formData.resume.fileUrl as string 
      }))
    }
    
    if (formData.behavioral.audioFileUrl) {
      setFilePaths(prev => ({ 
        ...prev, 
        audioPath: formData.behavioral.audioFileUrl as string 
      }))
    }
    
    if (formData.behavioral.videoFileUrl) {
      setFilePaths(prev => ({ 
        ...prev, 
        videoPath: formData.behavioral.videoFileUrl as string 
      }))
    }

    // For direct file access (files are now in the public directory)
    if (formData.resume.fileUrl) {
      setResumeDownloadUrl(formData.resume.fileUrl);
    }

    if (formData.behavioral.audioFileUrl) {
      setAudioDownloadUrl(formData.behavioral.audioFileUrl);
    }

    if (formData.behavioral.videoFileUrl) {
      setVideoDownloadUrl(formData.behavioral.videoFileUrl);
    }

    // Cleanup URLs on unmount - not needed for direct file paths, but kept for compatibility
    return () => {
      if (resumeDownloadUrl && resumeDownloadUrl.startsWith('blob:')) URL.revokeObjectURL(resumeDownloadUrl);
      if (audioDownloadUrl && audioDownloadUrl.startsWith('blob:')) URL.revokeObjectURL(audioDownloadUrl);
      if (videoDownloadUrl && videoDownloadUrl.startsWith('blob:')) URL.revokeObjectURL(videoDownloadUrl);
    }
  }, [formData])

  // Helper function to convert base64 to Blob
  const base64ToBlob = (base64Data: string): Blob => {
    const parts = base64Data.split(';base64,')
    const contentType = getMimeTypeFromBase64(base64Data)
    const byteCharacters = atob(parts[1])
    const byteArrays = []

    for (let i = 0; i < byteCharacters.length; i += 512) {
      const slice = byteCharacters.slice(i, i + 512)
      const byteNumbers = new Array(slice.length)
      for (let j = 0; j < slice.length; j++) {
        byteNumbers[j] = slice.charCodeAt(j)
      }
      const byteArray = new Uint8Array(byteNumbers)
      byteArrays.push(byteArray)
    }

    return new Blob(byteArrays, { type: contentType })
  }

  return (
    <div className="p-6">
      <div className="mb-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-[#ecfdf5] rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-[#10b981]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-[#1e40af] mb-2">Application Submitted!</h2>
        <p className="text-[#475569]">
          Thank you for your interest in joining our organization. We've received your application and will review it shortly.
        </p>
      </div>

      <div className="bg-[#f5f9ff] border border-[#bfd6f6] rounded-lg p-4 mb-6">
        <h3 className="font-medium text-[#1e40af] mb-2">Application Summary</h3>
        <div className="space-y-4 text-[#475569]">
          <div>
            <p><span className="font-medium">Name:</span> {formData.personalInfo.name}</p>
            <p><span className="font-medium">Email:</span> {formData.personalInfo.email}</p>
            <p><span className="font-medium">Phone:</span> {formData.personalInfo.phone}</p>
          </div>

          {resumeDownloadUrl && filePaths.resumePath && (
            <div className="pt-2">
              <p className="font-medium">Resume:</p>
              <div className="mt-1">
                <div className="bg-[#f8fafc] p-3 rounded border border-[#e2e8f0] text-[#64748b] text-sm mb-2 font-mono overflow-auto">
                  <p>Stored at: public{filePaths.resumePath}</p>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#3b82f6] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <a 
                    href={resumeDownloadUrl} 
                    download={formData.resume.fileName}
                    className="text-[#2563eb] hover:underline"
                  >
                    {formData.resume.fileName}
                  </a>
                </div>
              </div>
            </div>
          )}

          {formData.behavioral.textAnswer && (
            <div>
              <p className="font-medium">Your Response:</p>
              <p className="text-sm bg-white p-2 rounded border border-[#bfd6f6] mt-1">
                {formData.behavioral.textAnswer}
              </p>
            </div>
          )}

          {audioDownloadUrl && formData.behavioral.audioFile && filePaths.audioPath && (
            <div className="pt-2">
              <p className="font-medium">Audio Response:</p>
              <div className="mt-1">
                <div className="bg-[#f8fafc] p-3 rounded border border-[#e2e8f0] text-[#64748b] text-sm mb-2 font-mono overflow-auto">
                  <p>Stored at: public{filePaths.audioPath}</p>
                </div>
                <audio controls className="w-full">
                  <source src={audioDownloadUrl} type={formData.behavioral.audioFile.type} />
                  Your browser does not support the audio element.
                </audio>
                <div className="mt-1 flex items-center">
                  <svg className="w-5 h-5 text-[#3b82f6] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <a 
                    href={audioDownloadUrl} 
                    download={formData.behavioral.audioFile.name}
                    className="text-[#2563eb] hover:underline"
                  >
                    Download Audio
                  </a>
                </div>
              </div>
            </div>
          )}

          {videoDownloadUrl && formData.behavioral.videoFile && filePaths.videoPath && (
            <div className="pt-2">
              <p className="font-medium">Video Response:</p>
              <div className="mt-1">
                <div className="bg-[#f8fafc] p-3 rounded border border-[#e2e8f0] text-[#64748b] text-sm mb-2 font-mono overflow-auto">
                  <p>Stored at: public{filePaths.videoPath}</p>
                </div>
                <video controls className="w-full">
                  <source src={videoDownloadUrl} type={formData.behavioral.videoFile.type} />
                  Your browser does not support the video element.
                </video>
                <div className="mt-1 flex items-center">
                  <svg className="w-5 h-5 text-[#3b82f6] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <a 
                    href={videoDownloadUrl} 
                    download={formData.behavioral.videoFile.name}
                    className="text-[#2563eb] hover:underline"
                  >
                    Download Video
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="text-center">
        <p className="text-[#475569] mb-4">
          We'll contact you soon about the next steps in the hiring process.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="btn-primary inline-block"
          >
            Return Home
          </Link>
          <Link
            href="/applications"
            className="px-4 py-2 text-sm font-medium text-[#475569] border border-[#bfd6f6] rounded-md hover:bg-[#f5f9ff] focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 transition-colors"
          >
            View All Applications
          </Link>
        </div>
      </div>
    </div>
  )
} 