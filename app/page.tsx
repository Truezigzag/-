import { HomeHero } from '@/components/home-hero';

export default function HomePage() {
  return (
    <main className="space-y-8">
      <HomeHero />
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          ['创伤后成长模型', '能力树与角色创伤经历深度耦合，行为轨迹可追溯。'],
          ['跨物种共生关系', '东方龙、狼兽人与古老共生体在同一家庭结构中协作。'],
          ['日常物的异常化', '茶杯、账本、票根等普通物件在里世界语境下呈现异变。']
        ].map(([title, copy]) => (
          <article key={title} className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-violet/60 hover:shadow-glow">
            <h3 className="mb-2 text-white">{title}</h3>
            <p className="text-sm text-white/60">{copy}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
