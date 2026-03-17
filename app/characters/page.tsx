import Link from 'next/link';
import { characters } from '@/data/lore';

export default function CharactersPage() {
  return (
    <main>
      <h2 className="mb-2 text-3xl text-white">角色系统 · 破罐咖啡馆档案</h2>
      <p className="mb-6 text-sm text-white/60">核心成员与龙裔子代并列展示，卡片悬停可触发柔光反馈。</p>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {characters.map((character) => (
          <Link
            key={character.slug}
            href={`/characters/${character.slug}`}
            className="glass group rounded-2xl p-5 transition hover:-translate-y-1 hover:border-violet/60 hover:shadow-glow"
          >
            <p className="text-xs tracking-[0.2em] text-white/40">ARCHIVE SUBJECT</p>
            <h3 className="mt-2 text-xl text-white group-hover:text-violet">{character.name}</h3>
            <p className="mt-2 text-sm text-white/60">{character.title}</p>
            <p className="mt-4 text-sm text-white/70">{character.appearance}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
