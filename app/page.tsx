"use client"

import { useState } from "react"
import JobListing from "@/components/job-listing"
import JobDetail from "@/components/job-detail"
import ApplicationForm from "@/components/application-form"

export default function Home() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [showApplication, setShowApplication] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      {!selectedJob ? (
        <JobListing onSelectJob={setSelectedJob} />
      ) : showApplication ? (
        <ApplicationForm
          jobId={selectedJob}
          onBack={() => {
            setShowApplication(false)
            setSelectedJob(null)
          }}
          onSubmit={() => {
            setShowApplication(false)
            setSelectedJob(null)
          }}
        />
      ) : (
        <JobDetail jobId={selectedJob} onBack={() => setSelectedJob(null)} onApply={() => setShowApplication(true)} />
      )}
    </main>
  )
}
