import JobDetail from "@/components/job-detail"
import { jobsData } from "@/lib/jobs-data"

function slugify(text?: string | number) {
  if (text === undefined || text === null) return ""
  const s = String(text)
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export default async function JobPage({ params }: { params: any }) {
  const resolved = await params
  const raw = resolved?.id

  // try numeric index first
  const idx = Number.isNaN(Number(raw)) ? NaN : parseInt(raw, 10)

  if (!Number.isNaN(idx) && idx >= 0 && idx < jobsData.length) {
    return <JobDetail jobId={idx} />
  }

  // otherwise try to match by slug (generated from title)
  const slug = slugify(raw)
  const foundIndex = jobsData.findIndex((j) => slugify(j.title) === slug)

  if (foundIndex !== -1) {
    return <JobDetail jobId={foundIndex} />
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Job not found</h2>
        <p className="text-muted-foreground mt-2">The job you're looking for doesn't exist.</p>
      </div>
    </div>
  )
}
