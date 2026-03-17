'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-noise p-8 shadow-glow sm:p-12">
      <div className="noise absolute inset-0" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10"
      >
        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-violet/80">Supplementary Research Edition</p>
        <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
          《烬契四重奏》
          <span className="text-ember">角色与能力</span>
          增补档案
        </h2>
        <p className="mt-6 max-w-2xl text-white/70">
          站点基于“破罐咖啡馆”综合研究报告重构：包含实验室编号、创伤后成长路径、
          随身空间与共生体系，呈现一个梦核感与轻惊悚并存的互动档案馆。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="rounded-full bg-violet px-5 py-2 text-sm text-white transition hover:shadow-glow" href="/archive">
            打开研究章节
          </Link>
          <Link className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/80 transition hover:border-ember/70 hover:text-white" href="/characters">
            浏览角色系统
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
