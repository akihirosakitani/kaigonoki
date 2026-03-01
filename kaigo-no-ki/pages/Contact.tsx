import React, { useState } from 'react';
import { Section, SectionHeading, Card, Button } from '../components/UI';
import { ContactType } from '../types';
import { Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: ContactType.INTERVIEW,
    message: '',
    agreement: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreement: e.target.checked }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-orange-50 px-4">
        <Card className="max-w-lg w-full text-center py-16">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-orange-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">送信完了</h2>
          <p className="text-slate-600 mb-8">
            お問い合わせありがとうございます。<br/>
            内容を確認の上、担当者よりご連絡させていただきます。
          </p>
          <Button href="/" variant="outline">ホームに戻る</Button>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">お問い合わせ</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            取材依頼、提携のご相談などお気軽にご連絡ください。<br/>
            通常3営業日以内にご返信いたします。
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-2xl mx-auto">
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Type */}
              <div>
                <label htmlFor="type" className="block text-sm font-bold text-slate-700 mb-2">
                  ご用件 <span className="text-red-500">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  {Object.values(ContactType).map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="具体的な内容をご記入ください。"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Agreement */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreement"
                    name="agreement"
                    type="checkbox"
                    required
                    checked={formData.agreement}
                    onChange={handleCheckbox}
                    className="w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreement" className="font-medium text-slate-700">
                    <a href="/#/privacy" className="text-orange-600 hover:underline">プライバシーポリシー</a>に同意します
                    <span className="text-red-500"> *</span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !formData.agreement} 
                  className="w-full flex items-center justify-center gap-2"
                  size="lg"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                  {!isSubmitting && <Send size={18} />}
                </Button>
              </div>

            </form>
          </Card>
        </div>
      </Section>
    </>
  );
};