'use client'

import { motion } from 'motion/react'
import {
  BriefcaseIcon,
  ListChecksIcon,
  TerminalIcon,
  UserCheckIcon,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type Milestone = {
  phase: string
  title: string
  description: string
  date: string
  dateSub: string
  icon: LucideIcon
  side: 'card-left' | 'card-right'
  featured?: boolean
  tags?: string[]
}

const milestones: Milestone[] = [
  {
    phase: 'Phase 01',
    title: 'Company Onboarding',
    description:
      'Japanese industry partners come aboard, define their tracks, and submit the real-world problem statements that teams will tackle.',
    date: 'Jun 18 – Aug 10',
    dateSub: 'Partner Intake',
    icon: BriefcaseIcon,
    side: 'card-left',
  },
  {
    phase: 'Phase 02',
    title: 'Participant Team Registration',
    description:
      'Applications open to students. Form your team, pick your track, and lock in your place in the hackathon.',
    date: 'Aug 15 – Oct 5',
    dateSub: 'Applications Open',
    icon: UserCheckIcon,
    side: 'card-right',
  },
  {
    phase: 'Phase 03',
    title: 'Internal Shortlisting',
    description:
      'Submissions are reviewed and the most promising teams are shortlisted to advance to the main event.',
    date: 'Oct 15',
    dateSub: 'Selection Day',
    icon: ListChecksIcon,
    side: 'card-left',
  },
  {
    phase: 'Core Event',
    title: 'Hackathon',
    description:
      'Two days of intense building, mentorship, and final pitches to a panel of industry judges. Winners and internship offers announced.',
    date: 'Oct 24–25',
    dateSub: 'Grand Finale',
    icon: TerminalIcon,
    side: 'card-right',
    featured: true,
  },
]

function Card({ milestone }: { milestone: Milestone }) {
  return (
    <div
      className={cn(
        'bg-surface-container-lowest p-8 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 group',
        milestone.featured
          ? 'border border-primary/20 shadow-[0_10px_30px_rgba(188,0,45,0.08)] relative overflow-hidden'
          : 'border border-outline-variant/30'
      )}
    >
      {milestone.featured && (
        <div className="absolute top-0 right-0 w-1 h-full bg-primary-container" />
      )}
      <span
        className={cn(
          'font-label-caps text-label-caps mb-2 block',
          milestone.featured ? 'text-primary-container font-bold' : 'text-faint'
        )}
      >
        {milestone.phase}
      </span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary-container transition-colors">
        {milestone.title}
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
        {milestone.description}
      </p>
      {milestone.tags && (
        <div className="mt-4 flex gap-2">
          {milestone.tags.map((tag) => (
            <span
              key={tag}
              className="bg-surface-container-low text-on-surface px-3 py-1 rounded-sm font-label-caps text-label-caps border border-outline-variant/20"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function DateBlock({ milestone }: { milestone: Milestone }) {
  return (
    <>
      <div
        className={cn(
          'font-headline-md text-headline-md',
          milestone.featured ? 'text-on-surface' : 'text-primary-container'
        )}
      >
        {milestone.date}
      </div>
      <div className="font-body-md text-body-md text-faint mt-1">
        {milestone.dateSub}
      </div>
    </>
  )
}

function Node({ milestone }: { milestone: Milestone }) {
  const Icon = milestone.icon
  return (
    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
      <div
        className={cn(
          'rounded-full flex items-center justify-center border-4 border-surface',
          milestone.featured
            ? 'w-16 h-16 bg-on-surface shadow-lg animate-pulse'
            : 'w-12 h-12 bg-primary-container shadow-md'
        )}
      >
        <Icon
          className={cn(
            milestone.featured
              ? 'size-8 text-surface-container-lowest'
              : 'size-6 text-on-primary'
          )}
        />
      </div>
    </div>
  )
}

function MilestoneRow({
  milestone,
  last,
}: {
  milestone: Milestone
  last: boolean
}) {
  const cardLeft = milestone.side === 'card-left'

  const cardWrapper = cardLeft
    ? 'order-2 md:order-1 w-full md:w-[45%] md:text-right pr-0 md:pr-12 mt-6 md:mt-0'
    : 'order-2 md:order-3 w-full md:w-[45%] pl-0 md:pl-12 mt-6 md:mt-0'

  const dateWrapper = cardLeft
    ? 'order-3 w-full md:w-[45%] pl-20 md:pl-12 text-left mt-2 md:mt-0'
    : 'order-3 md:order-1 w-full md:w-[45%] pr-0 md:pr-12 mt-2 md:mt-0 pl-20 md:pl-0 text-left md:text-right'

  const cardBlock = (
    <div className={cardWrapper}>
      <Card milestone={milestone} />
    </div>
  )
  const dateBlock = (
    <div className={dateWrapper}>
      <DateBlock milestone={milestone} />
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative flex flex-col md:flex-row items-center justify-between w-full',
        last ? 'mb-12' : 'mb-24'
      )}
    >
      {cardLeft ? cardBlock : dateBlock}
      <Node milestone={milestone} />
      {cardLeft ? dateBlock : cardBlock}
    </motion.div>
  )
}

export default function TimelinePage() {
  return (
    <main className="flex-grow pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-[1280px] mx-auto w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 md:mb-32 max-w-3xl"
      >
        <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">
          Event Roadmap
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6">
          The Journey to <br />
          <span className="text-primary-container">Innovation.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Mark your calendars. A rigorous schedule designed to push boundaries,
          test ideas, and culminate in a premier showcase of talent.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative w-full max-w-5xl mx-auto py-12">
        <div className="timeline-line hidden md:block" />
        {milestones.map((milestone, index) => (
          <MilestoneRow
            key={milestone.title}
            milestone={milestone}
            last={index === milestones.length - 1}
          />
        ))}
        {/* Bottom cap for mobile line */}
        <div
          className="timeline-line md:hidden !bottom-auto !h-full"
          style={{ zIndex: -1 }}
        />
      </div>
    </main>
  )
}
