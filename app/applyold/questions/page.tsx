import { BehavioralQuestionsForm } from './behavioral-questions-form'

export default function QuestionsPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1e40af]">Behavioral Questions</h1>
        <p className="text-[#475569] mt-2">
          Please answer the following question. You can provide your response in text, audio, or video format.
        </p>
      </div>
      <div className="bg-white rounded-lg border border-[#bfd6f6] shadow-md p-6">
        <BehavioralQuestionsForm />
      </div>
    </div>
  )
} 