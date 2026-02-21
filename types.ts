import React from 'react';

export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  url: string;
  imageUrl?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum ContactType {
  INTERVIEW = "取材依頼",
  PARTNERSHIP = "提携相談",
  SPEAKING = "講演・執筆依頼",
  ADVERTISING = "広告・協賛相談",
  OTHER = "その他"
}