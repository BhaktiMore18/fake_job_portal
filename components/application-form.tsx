"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Upload, FileText, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { jobsData } from "@/lib/jobs-data"

interface ApplicationFormProps {
  jobId: number
  onBack: () => void
  onSubmit: () => void
}

export default function ApplicationForm({ jobId, onBack, onSubmit }: ApplicationFormProps) {
  const job = jobsData[jobId]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    resume: null as File | null,
    coverLetter: "",
    experience: "",
    skills: "",
    portfolio: "",
    availability: "",
    salaryExpectations: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    onSubmit()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
          <h2 className="text-lg font-semibold text-foreground">{job.title}</h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Application Form</h1>
          <p className="text-muted-foreground">Complete the form below to apply for this position</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <section className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <User size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">Personal Information</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="City, Country"
                />
              </div>
            </div>
          </section>

          {/* Professional Information */}
          <section className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">Professional Information</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Years of Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Key Skills *</label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="List your key skills and competencies..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Cover Letter *</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us why you're a great fit for this role..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Portfolio / Website</label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Additional Information</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">When can you start? *</label>
                <input
                  type="date"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Salary Expectations</label>
                <input
                  type="text"
                  name="salaryExpectations"
                  value={formData.salaryExpectations}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="e.g., Rs.80,000 - Rs.120,000"
                />
              </div>
            </div>
          </section>

          {/* Resume Upload */}
          <section className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Upload size={24} className="text-primary" />
              <h2 className="text-xl font-bold text-foreground">Upload Resume</h2>
            </div>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <Upload size={32} className="mx-auto text-primary mb-4" />
              <label className="block cursor-pointer">
                <span className="text-foreground font-medium">Click to upload</span>
                <span className="text-muted-foreground"> or drag and drop</span>
                <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx" className="hidden" />
              </label>
              <p className="text-xs text-muted-foreground mt-2">PDF, DOC, or DOCX (max 5MB)</p>
              {formData.resume && <p className="mt-2 text-sm text-primary font-medium">{formData.resume.name}</p>}
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={onBack}
              className="flex-1 bg-card border-border hover:bg-muted"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
