'use client';

import { motion } from 'framer-motion';
import { skillEdges, skillTree } from '@/data/lore';

export default function AbilitiesPage() {
  const byId = Object.fromEntries(skillTree.map((node) => [node.id, node]));

  return (
    <main className="glass rounded-3xl p-6">
      <h2 className="mb-2 text-3xl text-white">能力系统 · Skill Tree</h2>
      <p className="mb-6 text-sm text-white/60">每个节点代表一段契约演化分支，悬停可感受脉冲反馈。</p>

      <div className="relative h-[580px] overflow-hidden rounded-2xl border border-white/10 bg-haze/60">
        <svg className="absolute inset-0 h-full w-full">
          {skillEdges.map(([a, b]) => {
            const from = byId[a];
            const to = byId[b];
            return (
              <line
                key={`${a}-${b}`}
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke="rgba(168,167,201,0.25)"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {skillTree.map((node, idx) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.07 }}
            whileHover={{ scale: 1.08, boxShadow: '0 0 40px rgba(138,123,255,0.45)' }}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet/40 bg-violet/10 px-4 py-2 text-sm text-white"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {node.name}
          </motion.div>
        ))}
      </div>
    </main>
  );
}
