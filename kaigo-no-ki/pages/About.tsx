import React from 'react';
import { Section, SectionHeading, Card } from '../components/UI';
import { ShieldCheck, Scale, Search } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <>
      <div className="bg-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">私たちについて</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            介護の「キ」が大切にしている価値観と、<br/>
            情報発信における編集方針をご紹介します。
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="ミッション" subtitle="MISSION" />
          <p className="text-lg leading-relaxed text-slate-700 mb-8">
            私たちは、介護職に就く人・働く人と、介護施設を探している本人や家族の双方に向けて情報を発信し、ミスマッチを減らす架け橋になることを目指しています。
          </p>
          <p className="text-lg leading-relaxed text-slate-700 mb-16">
            介護の現場には、言葉にされない「想い」がたくさんあります。そして、制度や仕組みといった知っておくべき「基本」があります。これらを丁寧に紡ぎ合わせ、双方が納得して選択できる社会づくりに貢献します。
          </p>

          <SectionHeading title="編集方針" subtitle="POLICY" />
          <div className="space-y-6">
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                 <Search size={24} />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-slate-800 mb-2">一次情報の重視</h3>
                 <p className="text-slate-600">
                   厚生労働省や自治体、各施設の公式資料など、信頼できる一次情報を優先して参照します。不確かな情報は掲載しません。
                 </p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                 <Scale size={24} />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-slate-800 mb-2">中立な視点</h3>
                 <p className="text-slate-600">
                   特定の施設や企業への不当な誘導は行いません。あくまで利用者が自分に合った選択をするための「判断材料」を提供します。
                 </p>
               </div>
             </div>
             <div className="flex gap-4">
               <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                 <ShieldCheck size={24} />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-slate-800 mb-2">体験談の取り扱い</h3>
                 <p className="text-slate-600">
                   個人の体験談を掲載する場合は、それが「個人の感想」であることを明示し、過度に一般化して誤解を招くことがないよう配慮します。
                 </p>
               </div>
             </div>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="運営者情報" subtitle="OPERATOR" />
          <Card>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border-b sm:border-b-0 sm:border-r border-slate-100 pb-4 sm:pb-0">
                <dt className="text-sm text-slate-400 font-bold mb-1">運営名</dt>
                <dd className="text-slate-800 font-medium">介護の「キ」編集部</dd>
              </div>
              <div className="border-b sm:border-b-0 sm:border-r border-slate-100 pb-4 sm:pb-0">
                <dt className="text-sm text-slate-400 font-bold mb-1">代表</dt>
                <dd className="text-slate-800 font-medium">（代表者名または非公開）</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-400 font-bold mb-1">お問い合わせ</dt>
                <dd className="text-slate-800 font-medium">フォームよりご連絡ください</dd>
              </div>
            </dl>
          </Card>
        </div>
      </Section>
    </>
  );
};