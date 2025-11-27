"use client"

import { useParams, useRouter } from "next/navigation"
import ApplicationForm from "@/components/application-form"

export default function ApplyPageClient() {
  const params = useParams()
  const router = useRouter()
  const raw = params?.id
  const id = raw ? parseInt(String(raw), 10) : NaN

  if (Number.isNaN(id)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Invalid job</h2>
          <p className="text-muted-foreground mt-2">No job specified for application.</p>
        </div>
      </div>
    )
  }

  return (
    <ApplicationForm
      jobId={id}
      onBack={() => router.back()}
      onSubmit={() => router.push(`/jobs/${id}`)}
    />
  )
}
