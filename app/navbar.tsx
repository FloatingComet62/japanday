"use client"

import { Glass } from "@/components/glass"

export function Navbar() {
  return (
    <Glass variant="frost" className="flex-row w-full items-center justify-between pl-4 pr-4 h-[5vh] !rounded-none text-xl">
      <div>LOGO</div>
      <div className="flex gap-8">
        <div onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: 'smooth'})}>Timeline</div>
        <div onClick={() => document.getElementById("problem_statements")?.scrollIntoView({ behavior: 'smooth'})}>Problem Statements</div>
        <div onClick={() => document.getElementById("organiser")?.scrollIntoView({ behavior: 'smooth'})}>Organiser</div>
        <div onClick={() => document.getElementById("partner")?.scrollIntoView({ behavior: 'smooth'})}>Partner</div>
        <div onClick={() => document.getElementById("content")?.scrollIntoView({ behavior: 'smooth'})}>Content</div>
      </div>
    </Glass>
  )
}
