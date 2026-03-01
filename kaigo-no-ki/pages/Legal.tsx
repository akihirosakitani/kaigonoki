import React from 'react';
import { Section, Card } from '../components/UI';

export const Privacy: React.FC = () => {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">プライバシーポリシー</h1>
        <Card className="prose prose-slate max-w-none">
          <p>
            介護の「キ」（以下、「当サイト」と言います。）は、お客様の個人情報の保護を重要視し、以下のとおりプライバシーポリシーを定めます。
          </p>
          
          <h3 className="font-bold text-lg mt-6 mb-2">1. 個人情報の収集</h3>
          <p>
            当サイトは、お問い合わせフォームなどを通じて、お名前、メールアドレス等の個人情報をご提供いただく場合があります。
          </p>

          <h3 className="font-bold text-lg mt-6 mb-2">2. 個人情報の利用目的</h3>
          <p>
            収集した個人情報は、以下の目的のために利用します。
          </p>
          <ul className="list-disc pl-5 my-2 space-y-1">
            <li>お問い合わせに対する回答</li>
            <li>取材・サービス提供に関するご連絡</li>
            <li>当サイトの改善のための分析</li>
          </ul>

          <h3 className="font-bold text-lg mt-6 mb-2">3. 個人情報の第三者への開示</h3>
          <p>
            当サイトは、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
          </p>

          <h3 className="font-bold text-lg mt-6 mb-2">4. お問い合わせ</h3>
          <p>
            本ポリシーに関するお問い合わせは、当サイトのお問い合わせフォームよりお願いいたします。
          </p>
        </Card>
      </div>
    </Section>
  );
};

export const Disclaimer: React.FC = () => {
  return (
    <Section>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">免責事項</h1>
        <Card className="prose prose-slate max-w-none">
          <h3 className="font-bold text-lg mb-2">情報の正確性について</h3>
          <p>
            当サイトのコンテンツや情報において、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなったりすることもあります。必ずしも正確性を保証するものではありません。
          </p>

          <h3 className="font-bold text-lg mt-6 mb-2">損害等の責任について</h3>
          <p>
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
          <p>
            また、当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
          </p>

          <h3 className="font-bold text-lg mt-6 mb-2">医療・介護判断について</h3>
          <p>
            当サイトの情報は一般的な解説であり、個別の状況に対する専門的なアドバイス（医療行為・法的助言等）ではありません。具体的な判断が必要な場合は、専門家や自治体窓口、各施設へ直接ご相談ください。
          </p>
        </Card>
      </div>
    </Section>
  );
};