import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '烬契四重奏 | 研究档案',
  description: '《烬契四重奏》角色设定与能力体系综合研究报告【增补版】可视化站点。'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-8">
          <header className="mb-8 border-b border-white/10 pb-4">
            <h1 className="text-lg font-light tracking-[0.3em] text-white/90">烬契四重奏 · 增补版主页面</h1>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
