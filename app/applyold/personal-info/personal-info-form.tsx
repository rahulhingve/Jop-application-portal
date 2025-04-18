'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input } from "@/app/components/ui/input"
import { useRouter } from "next/navigation"

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

export function PersonalInfoForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Here we would typically save to the database
      // For now, we'll just store in localStorage
      localStorage.setItem('personalInfo', JSON.stringify(values))
      router.push('/apply/resume')
    } catch (error) {
      console.error('Error saving form:', error)
    }
  }

  return (
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

      <button
        type="submit"
        className="btn-primary w-full"
      >
        Next Step
      </button>
    </form>
  )
} 