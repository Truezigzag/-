'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { items } from '@/data/lore';
import { useState } from 'react';

export default function ItemsPage() {
  const [open, setOpen] = useState<string | null>(items[0].name);

  return (
    <main>
      <h2 className="mb-6 text-3xl text-white">物件档案 · Strange Items</h2>
      <div className="space-y-3">
        {items.map((item) => {
          const expanded = open === item.name;
          return (
            <article key={item.name} className="glass overflow-hidden rounded-2xl">
              <button
                onClick={() => setOpen(expanded ? null : item.name)}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-white/5"
              >
                <div>
                  <h3 className="text-white">{item.name}</h3>
                  <p className="text-xs tracking-[0.2em] text-white/40">{item.tag}</p>
                </div>
                <span className="text-white/50">{expanded ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/10"
                  >
                    <p className="px-5 py-4 text-sm text-white/70">{item.behavior}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </main>
  );
}
