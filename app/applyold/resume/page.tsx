import { ResumeUploadForm } from './resume-upload-form'

export default function ResumePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1e40af]">Upload Resume</h1>
        <p className="text-[#475569] mt-2">
          Please upload your resume in PDF, DOCX, or TXT format
        </p>
      </div>
      <div className="bg-white rounded-lg border border-[#bfd6f6] shadow-md p-6">
        <ResumeUploadForm />
      </div>
    </div>
  )
} 