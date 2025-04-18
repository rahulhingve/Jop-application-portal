import { PersonalInfoForm } from './personal-info-form'

export default function PersonalInfoPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1e40af]">Personal Information</h1>
        <p className="text-[#475569] mt-2">
          Please provide your contact details
        </p>
      </div>
      <div className="bg-white rounded-lg border border-[#bfd6f6] shadow-md p-6">
        <PersonalInfoForm />
      </div>
    </div>
  )
} 