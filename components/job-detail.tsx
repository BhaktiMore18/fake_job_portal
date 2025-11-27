"use client"

import { ArrowLeft, Building2, Users, Globe, Target, Award, TrendingUp, Briefcase } from "lucide-react"
import { jobsData } from "@/lib/jobs-data"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface JobDetailProps {
  jobId: number
}

export default function JobDetail({ jobId }: JobDetailProps) {
  const router = useRouter()
  const job = jobsData[jobId]

  const onBack = () => router.back()
  const onApply = () => router.push(`/jobs/${jobId}/apply`)

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
          <Button onClick={onApply} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Apply Now
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Building2 size={32} className="text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-2">{job.title}</h1>
              <p className="text-lg text-muted-foreground">{job.industry}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 uppercase tracking-wide font-semibold">
                <Briefcase size={16} />
                Type
              </div>
              <p className="font-semibold text-foreground text-sm">{job.employment_type}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 uppercase tracking-wide font-semibold">
                <TrendingUp size={16} />
                Level
              </div>
              <p className="font-semibold text-foreground text-sm">{job.required_experience}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 uppercase tracking-wide font-semibold">
                <Globe size={16} />
                Remote
              </div>
              <p className="font-semibold text-foreground text-sm">{job.telecommuting ? "Yes" : "No"}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 uppercase tracking-wide font-semibold">
                <Target size={16} />
                Dept
              </div>
              <p className="font-semibold text-foreground text-sm">{job.function}</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            {/* About Company */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Building2 size={24} className="text-primary" />
                <h2 className="text-2xl font-bold text-foreground">About the Company</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">{job.company_profile}</p>
            </section>

            {/* Job Description */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Award size={24} className="text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Job Description</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">{job.description}</p>
            </section>

            {/* Requirements */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Target size={24} className="text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Requirements</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">{job.requirements}</p>
            </section>

            {/* Benefits */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp size={24} className="text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Benefits</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">{job.benefits}</p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-foreground mb-6">Quick Info</h3>
              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-2">
                    <Users size={14} />
                    Education
                  </div>
                  <p className="text-foreground font-medium">{job.required_education}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-2">
                    <TrendingUp size={14} />
                    Experience
                  </div>
                  <p className="text-foreground font-medium">{job.required_experience}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-2">
                    <Target size={14} />
                    Department
                  </div>
                  <p className="text-foreground font-medium">{job.function}</p>
                </div>
              </div>
              <Button
                onClick={onApply}
                className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
