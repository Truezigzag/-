import { notFound } from 'next/navigation';
import { characters } from '@/data/lore';

export default function CharacterDetailPage({ params }: { params: { slug: string } }) {
  const character = characters.find((entry) => entry.slug === params.slug);
  if (!character) return notFound();

  return (
    <main className="glass rounded-3xl p-7">
      <p className="text-xs tracking-[0.3em] text-violet/70">CHARACTER RECORD</p>
      <h2 className="mt-2 text-3xl text-white">{character.name}</h2>
      <p className="mt-2 text-white/60">{character.title}</p>

      {character.profile && (
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {character.profile.map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2">
              <p className="text-xs text-white/40">{item.label}</p>
              <p className="text-sm text-white/85">{item.value}</p>
            </div>
          ))}
        </div>
      )}

      <dl className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-sm text-white/40">Appearance</dt>
          <dd className="mt-1 text-white/80">{character.appearance}</dd>
        </div>
        <div>
          <dt className="text-sm text-white/40">Personality</dt>
          <dd className="mt-1 text-white/80">{character.personality}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-sm text-white/40">Lineage</dt>
          <dd className="mt-1 text-white/80">{character.lineage}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <h3 className="text-sm text-white/40">Abilities</h3>
        <ul className="mt-2 flex flex-wrap gap-2">
          {character.abilities.map((ability) => (
            <li key={ability} className="rounded-full border border-ember/30 bg-ember/10 px-3 py-1 text-sm text-ember">
              {ability}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
