'use client';

import { motion } from 'framer-motion';
import { archiveEntries } from '@/data/lore';
import { useMemo, useState } from 'react';

export default function ArchivePage() {
  const [activeId, setActiveId] = useState(archiveEntries[0].id);
  const active = useMemo(() => archiveEntries.find((entry) => entry.id === activeId) ?? archiveEntries[0], [activeId]);

  return (
    <main className="grid min-h-[72vh] gap-4 md:grid-cols-[260px_1fr]">
      <aside className="glass rounded-2xl p-3">
        <p className="mb-3 px-2 text-xs tracking-[0.2em] text-white/40">RESEARCH CHAPTERS</p>
        <ul className="space-y-1">
          {archiveEntries.map((entry) => (
            <li key={entry.id}>
              <button
                onClick={() => setActiveId(entry.id)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                  active.id === entry.id ? 'bg-violet/20 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                {entry.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <section className="glass rounded-2xl p-6">
        <motion.div key={active.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <p className="text-xs uppercase tracking-[0.35em] text-ember/70">增补档案</p>
          <h2 className="mt-3 text-2xl text-white">{active.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75">{active.summary}</p>

          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {active.bullets.map((bullet) => (
              <li key={bullet} className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2">
                {bullet}
              </li>
            ))}
          </ul>

          {active.table && (
            <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
              {active.table.map((row) => (
                <div key={row.key} className="grid grid-cols-[140px_1fr] border-b border-white/10 px-3 py-2 text-sm last:border-b-0">
                  <span className="text-white/45">{row.key}</span>
                  <span className="text-white/80">{row.value}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </section>
    </main>
  );
}
