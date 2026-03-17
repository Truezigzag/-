'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const chapters = [
  {
    title: '摘要',
    abstract:
      '报告围绕“破罐咖啡馆”核心成员展开，结论是能力体系与创伤经历深度耦合，“破罐精神”是关系纽带。',
    points: ['方法：档案调取、深度访谈、行为观察、能力实测、交叉验证。', '限制：邪神难标准化测试；六只小龙能力仍在发育。']
  },
  {
    title: '李松瑞 · 随身空间增补',
    abstract: '随身空间由10立方米扩容至50立方米，温控-20℃至100℃，意念瞬时存取。',
    points: ['内容占比：KFC45%、零食30%、饮品15%、应急5%、金币/钱3%、其他2%。', '能力体系：望闻问切、临床处方、隔离区、不灭之火·双生形态、随身空间。']
  },
  {
    title: '岚步 · 鞋类偏好修正',
    abstract: '偏好从军靴单一演变为当前“老北京布鞋优先”，并衍生品鉴服务。',
    points: ['能力体系：危险派对、危险感知、气味印记、狼群呼唤、月夜狂暴、邪神共生。', '品鉴服务：50元/次，含讲解。']
  }
];

const characters = [
  { name: '李松瑞', role: '破罐医师·东方龙 / 大老板', scope: '第二章 2.1~2.4' },
  { name: '岚步', role: '邪神共生·狼兽人 / 二老板', scope: '第三章 3.1~3.3' },
  { name: '六只小龙（蓝蓝/灰灰/金金/暗暗/亮亮/黑金）', role: '关联角色', scope: '第二章 2.2.8' }
];

const abilityNodes = ['创伤后成长', '望闻问切', '临床处方', '随身空间', '气味印记', '邪神共生', '烬契四重奏'];

const items = [
  { name: 'KFC全家桶', detail: '统计47个，构成“炸鸡山”。' },
  { name: '可乐', detail: '记录35升，形成“可乐河”。' },
  { name: '备用军靴', detail: '在“其他2%”条目中出现。' },
  { name: '老北京布鞋', detail: '当前偏好对象，收藏30双。' }
];

export default function HomePage() {
  const [open, setOpen] = useState<string | null>(items[0].name);

  return (
    <main className="space-y-8">
      <section className="glass rounded-3xl p-8 shadow-glow">
        <p className="text-xs uppercase tracking-[0.35em] text-violet/80">Main Page Only</p>
        <h2 className="mt-3 text-4xl font-semibold text-white">《烬契四重奏》角色设定与能力体系综合研究报告【增补版】</h2>
        <p className="mt-4 text-white/70">已按你的要求：内容全部集中在主页面，不再拆分到其他页面/文件夹。</p>
      </section>

      <section className="glass rounded-3xl p-6">
        <h3 className="text-2xl text-white">档案章节</h3>
        <div className="mt-4 grid gap-3">
          {chapters.map((chapter, idx) => (
            <motion.article
              key={chapter.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
            >
              <h4 className="text-white">{chapter.title}</h4>
              <p className="mt-1 text-sm text-white/70">{chapter.abstract}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/60">
                {chapter.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-6">
        <h3 className="text-2xl text-white">角色系统</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {characters.map((c) => (
            <article key={c.name} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs text-white/40">{c.scope}</p>
              <h4 className="mt-2 text-white">{c.name}</h4>
              <p className="mt-1 text-sm text-white/70">{c.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-6">
        <h3 className="text-2xl text-white">能力系统</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {abilityNodes.map((node) => (
            <motion.span
              key={node}
              whileHover={{ scale: 1.07 }}
              className="rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-sm text-white"
            >
              {node}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="glass rounded-3xl p-6">
        <h3 className="text-2xl text-white">物件条目</h3>
        <div className="mt-4 space-y-2">
          {items.map((item) => {
            const expanded = open === item.name;
            return (
              <article key={item.name} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
                <button onClick={() => setOpen(expanded ? null : item.name)} className="flex w-full items-center justify-between px-4 py-3 text-left">
                  <span className="text-white">{item.name}</span>
                  <span className="text-white/60">{expanded ? '−' : '+'}</span>
                </button>
                {expanded && <p className="border-t border-white/10 px-4 py-3 text-sm text-white/70">{item.detail}</p>}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
