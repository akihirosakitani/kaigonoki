import React from 'react';
import { Section, Button, Card, SectionHeading } from '../components/UI';
import { Heart, BookOpen, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroIllustration } from '../components/HeroIllustration';

const DUMMY_ARTICLES = [
  {
    id: '1',
    title: '施設見学で見るべきポイント10選',
    category: '施設探し',
    date: '2024.05.20',
    url: 'https://note.com/kaigo_no_ki'
  },
  {
    id: '2',
    title: '特養・老健・有料老人ホームの違いをやさしく比較',
    category: '基本のキ',
    date: '2024.05.15',
    url: 'https://note.com/kaigo_no_ki'
  },
  {
    id: '3',
    title: '介護職の職場選びで後悔しないためのチェックリスト',
    category: '働き方',
    date: '2024.05.10',
    url: 'https://note.com/kaigo_no_ki'
  }
];

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-orange-50 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
        {/* Abstract shapes for visual interest */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-100 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-100 opacity-50 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-white px-4 py-2 rounded-full border border-orange-100 shadow-sm">
                <span className="text-orange-700 font-medium text-sm">介護の「キ」へようこそ</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                気持ちと基本で、<br />
                <span className="text-orange-500">介護をつなぐ。</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                介護職に就く人・働く人、施設を探す本人や家族へ。<br />
                わかりやすい情報と誠実な姿勢で、不安やミスマッチを減らす架け橋になります。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="https://note.com/kaigo_no_ki" isExternal size="lg">noteを読む</Button>
                <Button href="/contact" variant="secondary" size="lg">お問い合わせ</Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-100 flex items-center justify-center p-4">
                 <HeroIllustration />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-teal-50 hidden md:block max-w-xs">
                <p className="font-bold text-orange-800 mb-2">あなたに寄り添う情報</p>
                <div className="flex items-center text-sm text-slate-500">
                   <CheckCircle2 className="w-4 h-4 text-teal-400 mr-2" />
                   現場のリアルな声
                </div>
                <div className="flex items-center text-sm text-slate-500 mt-1">
                   <CheckCircle2 className="w-4 h-4 text-teal-400 mr-2" />
                   中立でわかりやすい解説
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section (3 Ki) */}
      <Section id="concept">
        <SectionHeading title="介護の「キ」とは" subtitle="CONCEPT" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:-translate-y-1 transition-transform duration-300 border-t-4 border-t-orange-300">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">気（気持ち）</h3>
            <p className="text-slate-600 leading-relaxed">
              不安、迷い、しんどさ、そしてやさしさや誇り。<br/>
              介護に関わるすべての人の「気持ち」に寄り添います。
            </p>
          </Card>
          <Card className="text-center hover:-translate-y-1 transition-transform duration-300 border-t-4 border-t-blue-500">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">基（基本）</h3>
            <p className="text-slate-600 leading-relaxed">
              施設の種類、費用、制度、働き方。<br/>
              判断の土台となる「基本」をわかりやすく解説します。
            </p>
          </Card>
          <Card className="text-center hover:-translate-y-1 transition-transform duration-300 border-t-4 border-t-green-600">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">木（つながり）</h3>
            <p className="text-slate-600 leading-relaxed">
              人と人の想いが注がれて育つ大きな「木」のように。<br/>
              支え合う社会への架け橋を目指します。
            </p>
          </Card>
        </div>
      </Section>

      {/* Target Audience */}
      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">For Workers</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">介護職を目指す人・働く人へ</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              就職や転職、日々の働き方についての悩みを解消します。現場のリアルな声や、キャリアの選択肢を広げるための情報を提供し、あなたらしい働き方をサポートします。
            </p>
            <ul className="space-y-3">
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" /> 就職・転職のポイント</li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" /> 職場選びのチェックリスト</li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" /> 現場インタビュー</li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold">For Families</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">施設を探す本人・家族へ</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              「何から始めればいいかわからない」という不安を解消します。施設の種類や費用の仕組み、見学時のポイントなど、後悔しない選択をするための情報を届けます。
            </p>
            <ul className="space-y-3">
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" /> 施設の種類と違い</li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" /> 見学・比較のコツ</li>
              <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0 mt-0.5" /> 相談先の案内</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Recent Articles */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="block text-orange-500 font-bold tracking-wide text-sm uppercase mb-2">ARTICLES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">最新の情報を読む</h2>
          </div>
          <Button href="https://note.com/kaigo_no_ki" isExternal variant="outline" className="mt-4 md:mt-0">
            Noteですべて見る
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DUMMY_ARTICLES.map((article) => (
            <a 
              key={article.id} 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block"
            >
              <Card className="h-full border border-slate-200 group-hover:border-orange-300 group-hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
                    {article.category}
                  </span>
                  <span className="text-slate-400 text-sm">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-orange-700 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center text-orange-500 font-medium text-sm mt-auto">
                  記事を読む <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="brand">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            お問い合わせ・ご相談はこちら
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            取材のご依頼、提携のご相談、講演・執筆のご依頼など、<br/>
            お気軽にお問い合わせください。
          </p>
          <Button href="/contact" size="lg" className="px-12">
            お問い合わせフォームへ
          </Button>
        </div>
      </Section>
    </>
  );
};