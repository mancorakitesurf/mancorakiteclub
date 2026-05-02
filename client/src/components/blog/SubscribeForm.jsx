import { useState } from "react"
import MotionReveal from "./MotionReveal.jsx"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    setSuccess("")

    if (!email.trim()) {
      setError("Email is required.")
      return
    }

    if (!EMAIL_REGEX.test(email)) {
      setError("Please enter a valid email address.")
      return
    }

    setError("")
    setSuccess("You are in. We will send the next Peru wind and wave briefing soon.")
    setEmail("")
  }

  return (
    <MotionReveal className="rounded-[2rem] border border-cyan-300/[0.15] bg-[linear-gradient(135deg,rgba(8,145,178,0.14),rgba(15,23,42,0.92))] p-6 shadow-[0_22px_64px_rgba(6,182,212,0.12)] sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/70">
            Subscription
          </p>
          <h2 className="mt-3 font-display text-2xl text-white sm:text-3xl">
            Get the Peru wind and wave notes before everyone else
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-200/[0.82] sm:text-base sm:leading-8">
            Join the editorial list for timing notes, route ideas, and spot breakdowns that make planning easier and keep the final step pointed toward Mancora.
          </p>
        </div>

        <form className="w-full max-w-xl" noValidate onSubmit={handleSubmit}>
          <label htmlFor="blog-subscribe-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="blog-subscribe-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (error) {
                  setError("")
                }
              }}
              placeholder="Enter your email"
              className={`min-h-14 flex-1 rounded-full border bg-slate-950/[0.55] px-5 text-white outline-none transition placeholder:text-slate-500 ${
                error ? "border-rose-400/70" : "border-white/[0.12] focus:border-cyan-300/[0.45]"
              }`}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "blog-subscribe-feedback" : undefined}
            />
            <button
              type="submit"
              className="min-h-14 w-full rounded-full bg-cyan-300 px-6 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:bg-cyan-200 sm:w-auto"
            >
              Subscribe
            </button>
          </div>
          <div className="mt-3 min-h-6 text-sm" id="blog-subscribe-feedback">
            {error ? <p className="text-rose-300">{error}</p> : null}
            {success ? <p className="text-emerald-300">{success}</p> : null}
          </div>
        </form>
      </div>
    </MotionReveal>
  )
}

export default SubscribeForm
