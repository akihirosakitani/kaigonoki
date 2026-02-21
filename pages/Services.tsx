import React from 'react';
import { Section, SectionHeading, Card, Button } from '../components/UI';
import { PenTool, Mic, FileText, Handshake } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <>
      <div className="bg-orange-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">取り組み</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            介護の「キ」が行っている活動や、<br/>
            ご提供できるサービスについて。
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Note */}
          <Card className="flex flex-col h-full hover:shadow-lg border-t-4 border-t-orange-600">
            <div className="mb-6 flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-700">
                <PenTool size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">情報発信 (Note)</h3>
            </div>
            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
              「Note」をメインプラットフォームとして、介護に関する記事を定期的に更新しています。専門的な内容を噛み砕いて解説する記事や、コラムなどを掲載しています。
            </p>
            <Button href="https://note.com/kaigo_no_ki" isExternal variant="outline" className="w-full justify-between">
              Noteを見る <span className="text-xl">→</span>
            </Button>
          </Card>

          {/* Interview */}
          <Card className="flex flex-col h-full hover:shadow-lg border-t-4 border-t-teal-400">
             <div className="mb-6 flex items-center gap-4">
              <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                <Mic size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">取材・インタビュー</h3>
            </div>
            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
              介護の現場で働く方へのインタビューを行っています。現場のリアルな声、やりがい、課題などを記事化し、これから働く人へのエールとして届けます。<br/>
              <span className="text-xs text-slate-400 mt-2 block">※匿名・顔出しなしでの取材も可能です。</span>
            </p>
            <Button href="/contact" variant="secondary" className="w-full justify-between">
              取材を依頼する <span className="text-xl">→</span>
            </Button>
          </Card>

           {/* Guides */}
           <Card className="flex flex-col h-full hover:shadow-lg border-t-4 border-t-blue-500 opacity-80">
             <div className="mb-6 flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <FileText size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">ガイド・チェックリスト</h3>
            </div>
            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
              「施設見学チェックシート」や「介護職の職場選びガイド」など、印刷して使える実用的な資料を制作・配布予定です。<br/>
              <span className="font-bold text-teal-500">（現在準備中）</span>
            </p>
             <div className="bg-slate-100 rounded-full py-2 px-4 text-center text-slate-500 text-sm font-medium">
               Comming Soon
             </div>
          </Card>

          {/* Partnership */}
          <Card className="flex flex-col h-full hover:shadow-lg border-t-4 border-t-green-600">
             <div className="mb-6 flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Handshake size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">連携・協賛</h3>
            </div>
            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
              介護施設、関連企業、自治体様との共同企画や記事監修の協力を承ります。ミッションに共感いただけるパートナー様からのお問い合わせをお待ちしております。
            </p>
            <Button href="/contact" variant="secondary" className="w-full justify-between">
              相談する <span className="text-xl">→</span>
            </Button>
          </Card>

        </div>
      </Section>
    </>
  );
};