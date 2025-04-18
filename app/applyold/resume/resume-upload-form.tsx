'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function ResumeUploadForm() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string>('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) {
      setError('Please select a file')
      return
    }

    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
    if (!allowedTypes.includes(selectedFile.type)) {
      setError('Please upload a PDF, DOCX, or TXT file')
      return
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB')
      return
    }

    setFile(selectedFile)
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setError('Please select a file')
      return
    }

    try {
      localStorage.setItem('resumeFile', file.name)
      router.push('/apply/questions')
    } catch (error) {
      console.error('Error uploading file:', error)
      setError('Error uploading file. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="resume"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-[#bfd6f6] rounded-lg cursor-pointer bg-[#f5f9ff] hover:bg-[#e6f0fd] transition-colors"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-[#3b82f6]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-[#64748b]">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-[#64748b]">PDF, DOCX or TXT (MAX. 5MB)</p>
            </div>
            <input
              id="resume"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
            />
          </label>
        </div>
        {file && (
          <p className="text-sm text-[#2563eb]">
            Selected file: {file.name}
          </p>
        )}
        {error && (
          <p className="text-sm text-[#ef4444]">
            {error}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="btn-primary w-full"
        disabled={!file || !!error}
      >
        Next Step
      </button>
    </form>
  )
} 