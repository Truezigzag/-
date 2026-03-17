import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: '烬契四重奏 | Ember Pact Quartet',
  description: 'Dreamcore archive for the fictional liminal universe 烬契四重奏.'
};

const links = [
  ['Home', '/'],
  ['Archive', '/archive'],
  ['Characters', '/characters'],
  ['Abilities', '/abilities'],
  ['Items', '/items']
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-8">
          <header className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <h1 className="text-lg font-light tracking-[0.3em] text-white/90">烬契四重奏</h1>
            <nav className="flex gap-2 text-sm">
              {links.map(([label, href]) => (
                <Link key={href} href={href} className="rounded-full border border-white/10 px-3 py-1 transition hover:border-violet/70 hover:text-white">
                  {label}
                </Link>
              ))}
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
