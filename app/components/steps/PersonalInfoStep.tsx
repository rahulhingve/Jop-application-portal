'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input } from "@/app/components/ui/input"
import { FormData } from "@/app/page"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
})

type FormValues = z.infer<typeof formSchema>

interface PersonalInfoStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
}

export function PersonalInfoStep({ formData, updateFormData, nextStep }: PersonalInfoStepProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: formData.personalInfo.name,
      email: formData.personalInfo.email,
      phone: formData.personalInfo.phone,
    },
  })

  function onSubmit(values: FormValues) {
    updateFormData({
      personalInfo: values
    })
    nextStep()
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#1e40af]">Personal Information</h2>
        <p className="text-[#475569] mt-1">
          Please provide your contact details
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#475569]" htmlFor="name">
            Full Name
          </label>
          <Input
            id="name"
            className="form-input"
            {...form.register("name")}
            placeholder="John Doe"
          />
          {form.formState.errors.name && (
            <p className="text-sm text-[#ef4444]">
              {form.formState.errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#475569]" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            type="email"
            className="form-input"
            {...form.register("email")}
            placeholder="john@example.com"
          />
          {form.formState.errors.email && (
            <p className="text-sm text-[#ef4444]">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#475569]" htmlFor="phone">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            className="form-input"
            {...form.register("phone")}
            placeholder="1234567890"
          />
          {form.formState.errors.phone && (
            <p className="text-sm text-[#ef4444]">
              {form.formState.errors.phone.message}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="btn-primary"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  )
} 