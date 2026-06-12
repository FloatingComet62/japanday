"use client";

import { Glass } from "@/components/glass";
import { motion } from "motion/react";

const events = [
  {
    year: "1 Oct 2026",
    title: "Checkpoint 1",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    year: "2 Oct 2026",
    title: "Checkpoint 2",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    year: "3 Oct 2026",
    title: "Checkpoint 3",
    description: "Lorem ipsum dolor sit amet.",
  },
];

export function Timeline() {
  return (
    <div id="timeline" className="py-24 flex flex-col items-center gap-4">
    <div className="text-6xl font-bold">Timeline</div>
      {events.map((event, index) => (
        <Glass id={event.title} variant="frost" className="p-4 w-[50vw]">
          <motion.div
            key={event.year}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            className="relative flex flex-col"
          >
            <p className="text-sm text-zinc-400">
              {event.year}
            </p>

            <h3 className="mt-1 text-2xl font-semibold">
              {event.title}
            </h3>

            <p className="mt-2 text-zinc-500">
              {event.description}
            </p>
          </motion.div>
        </Glass>
      ))}
    </div>
  );
}
