"use client"

import { Search, Zap } from "lucide-react"
import JobCard from "./job-card"
import { jobsData } from "@/lib/jobs-data"
import { useState } from "react"

interface JobListingProps {
  onSelectJob: (jobId: number) => void
}

export default function JobListing({ onSelectJob }: JobListingProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredJobs = jobsData
    .map((job, originalIndex) => ({ job, originalIndex }))
    .filter(
      ({ job }) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company_profile.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.industry.toLowerCase().includes(searchTerm.toLowerCase()),
    )

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Zap size={28} className="text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Job Opportunities</h1>
          </div>
          <p className="text-muted-foreground text-sm">Explore positions that match your skills and interests</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              type="text"
              placeholder="Search by title, company, or industry..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(({ job, originalIndex }) => (
              <JobCard key={originalIndex} job={job} onSelect={() => onSelectJob(originalIndex)} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-muted-foreground text-lg">No jobs found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
