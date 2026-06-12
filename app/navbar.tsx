"use client"

export function Navbar() {
  return (
    <div className="flex w-full justify-between pl-6 pr-6 pt-2 h-[20vh]">
      <div>LOGO</div>
      <div className="flex gap-4">
        <div onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: 'smooth'})}>Timeline</div>
        <div onClick={() => document.getElementById("problem_statements")?.scrollIntoView({ behavior: 'smooth'})}>Problem Statements</div>
        <div onClick={() => document.getElementById("organiser")?.scrollIntoView({ behavior: 'smooth'})}>Organiser</div>
        <div onClick={() => document.getElementById("partner")?.scrollIntoView({ behavior: 'smooth'})}>Partner</div>
        <div onClick={() => document.getElementById("content")?.scrollIntoView({ behavior: 'smooth'})}>Content</div>
      </div>
    </div>
  )
}
