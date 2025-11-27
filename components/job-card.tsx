"use client"

import type { Job } from "@/lib/jobs-data"
import { MapPin, Briefcase, Calendar } from "lucide-react"

interface JobCardProps {
  job: Job
  onSelect: () => void
}

export default function JobCard({ job, onSelect }: JobCardProps) {
  return (
    <button
      onClick={onSelect}
      className="w-full text-left group bg-card border border-border rounded-lg p-6 hover:shadow-md hover:border-primary transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {job.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{job.industry}</p>
        </div>
        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <Calendar size={20} className="text-primary" />
        </div>
      </div>

      <p className="text-foreground/75 text-sm mb-4 line-clamp-2">{job.description}</p>

      <div className="flex items-center gap-3 mb-4 text-xs flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
          <Briefcase size={13} />
          {job.employment_type}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium">
          <MapPin size={13} />
          {job.required_experience}
        </span>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border text-sm group-hover:text-primary transition-colors">
        <span className="text-xs text-muted-foreground">View details</span>
        <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
      </div>
    </button>
  )
}
