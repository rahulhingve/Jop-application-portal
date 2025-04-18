'use client'

import { useState } from 'react'
import { PersonalInfoStep } from './components/steps/PersonalInfoStep'
import { ResumeUploadStep } from './components/steps/ResumeUploadStep'
import { BehavioralQuestionsStep } from './components/steps/BehavioralQuestionsStep'
import { SuccessStep } from './components/steps/SuccessStep'

export type FormData = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  resume: {
    file: File | null;
    fileName: string;
    fileUrl?: string;
  };
  behavioral: {
    textAnswer: string;
    audioFile: File | null;
    videoFile: File | null;
    audioFileUrl?: string;
    videoFileUrl?: string;
  };
}

export default function Home() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
    },
    resume: {
      file: null,
      fileName: '',
    },
    behavioral: {
      textAnswer: '',
      audioFile: null,
      videoFile: null,
    }
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateFormData = (stepData: Partial<FormData>) => {
    setFormData(prevFormData => {
      // Create a new object that properly merges nested objects
      const updatedFormData = { ...prevFormData };
      
      // Handle personal info updates
      if (stepData.personalInfo) {
        updatedFormData.personalInfo = {
          ...prevFormData.personalInfo,
          ...stepData.personalInfo
        };
      }
      
      // Handle resume updates
      if (stepData.resume) {
        updatedFormData.resume = {
          ...prevFormData.resume,
          ...stepData.resume
        };
      }
      
      // Handle behavioral updates
      if (stepData.behavioral) {
        updatedFormData.behavioral = {
          ...prevFormData.behavioral,
          ...stepData.behavioral
        };
      }
      
      console.log('Updated form data:', updatedFormData);
      return updatedFormData;
    });
  }

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)
      
      // Create a clean version of the form data for submission
      // Add direct references to each field to ensure they're included
      const submissionData = {
        personalInfo: { ...formData.personalInfo },
        resume: {
          fileName: formData.resume.fileName,
          fileUrl: formData.resume.fileUrl
        },
        behavioral: {
          textAnswer: formData.behavioral.textAnswer || '',
          audioFileUrl: formData.behavioral.audioFileUrl,
          videoFileUrl: formData.behavioral.videoFileUrl
        },
        // Include direct references as a fallback
        behavioralAnswer: formData.behavioral.textAnswer || '',
        audioResponseUrl: formData.behavioral.audioFileUrl,
        videoResponseUrl: formData.behavioral.videoFileUrl
      };
      
      console.log("Final form state:", formData.behavioral);
      console.log('Submitting form data:', JSON.stringify(submissionData, null, 2));
      
      // Submit the data to our API endpoint
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Failed to submit application: ${errorData.details || response.statusText}`);
      }
      
      const result = await response.json()
      console.log('Application submitted successfully:', result)
      
      // Store data in localStorage for demo purposes
      localStorage.setItem('applicationData', JSON.stringify({
        id: result.id,
        personalInfo: formData.personalInfo,
        resumeFileName: formData.resume.fileName,
        resumeFileUrl: formData.resume.fileUrl,
        behavioralAnswer: formData.behavioral.textAnswer,
        audioFileUrl: formData.behavioral.audioFileUrl,
        videoFileUrl: formData.behavioral.videoFileUrl
      }))
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      setStep(4) // Move to success step
    } catch (error) {
      console.error('Error submitting application:', error)
      setIsSubmitting(false)
      alert('There was an error submitting your application. Please try again.')
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#1e40af]">
        Aimploy Job Application
      </h1>
      
      {!isSubmitted && (
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map((num) => (
              <div 
                key={num}
                className={`flex items-center justify-center w-10 h-10 rounded-full 
                  ${step === num 
                    ? 'bg-[#2563eb] text-white' 
                    : step > num 
                      ? 'bg-[#93c5fd] text-white' 
                      : 'bg-[#e6f0fd] text-[#64748b]'
                  } 
                  transition-colors duration-200`}
              >
                {step > num ? '✓' : num}
              </div>
            ))}
          </div>
          <div className="relative mb-4">
            <div className="absolute top-0 left-5 right-5 h-1 bg-[#e6f0fd]"></div>
            <div 
              className="absolute top-0 left-5 h-1 bg-[#93c5fd] transition-all duration-200" 
              style={{ width: `${Math.min((step - 1) * 50, 100)}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-[#64748b]">
            <span>Personal Info</span>
            <span>Resume</span>
            <span>Questions</span>
          </div>
        </div>
      )}
      
      <div className="bg-white rounded-lg border border-[#bfd6f6] shadow-md">
        {step === 1 && (
          <PersonalInfoStep 
            formData={formData} 
            updateFormData={updateFormData} 
            nextStep={nextStep} 
          />
        )}
        
        {step === 2 && (
          <ResumeUploadStep 
            formData={formData} 
            updateFormData={updateFormData} 
            nextStep={nextStep} 
            prevStep={prevStep} 
          />
        )}
        
        {step === 3 && (
          <BehavioralQuestionsStep 
            formData={formData} 
            updateFormData={updateFormData} 
            prevStep={prevStep} 
            handleSubmit={handleSubmit} 
          />
        )}
        
        {step === 4 && (
          <SuccessStep formData={formData} />
        )}
      </div>
    </div>
  )
}
