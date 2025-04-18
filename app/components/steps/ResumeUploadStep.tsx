'use client'

import { useState, useEffect } from 'react'
import { FormData } from '@/app/page'
import { saveFile } from '@/app/utils/fileStorage'

interface ResumeUploadStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export function ResumeUploadStep({ formData, updateFormData, nextStep, prevStep }: ResumeUploadStepProps) {
  const [file, setFile] = useState<File | null>(formData.resume.file)
  const [error, setError] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(!!formData.resume.file)
  const [isUploading, setIsUploading] = useState<boolean>(false)

  useEffect(() => {
    setIsValid(!!file && !error)
  }, [file, error])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) {
      setError('Please select a file')
      setFile(null)
      return
    }

    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
    if (!allowedTypes.includes(selectedFile.type)) {
      setError('Please upload a PDF, DOCX, or TXT file')
      setFile(null)
      return
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB')
      setFile(null)
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
      setIsUploading(true)
      
      // Save file and get URL
      const fileUrl = await saveFile(file);
      
      updateFormData({
        resume: {
          file,
          fileName: file.name,
          fileUrl // Store the URL reference
        }
      })
      
      setIsUploading(false)
      nextStep()
    } catch (error) {
      console.error('Error uploading file:', error)
      setError('Error uploading file. Please try again.')
      setIsUploading(false)
    }
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#1e40af]">Resume Upload</h2>
        <p className="text-[#475569] mt-1">
          Please upload your resume in PDF, DOCX, or TXT format
        </p>
      </div>

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
            {isUploading ? 'Uploading...' : 'Continue'}
          </button>
        </div>
      </form>
    </div>
  )
} 