import React from 'react';

export interface CodeSnippet {
  language: string;
  code: string;
}

export interface Section {
  title?: string;
  content: string[];
  code?: CodeSnippet;
  listItems?: string[];
}

export interface Chapter {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  sections: Section[];
}

export enum ViewState {
  COVER = 'COVER',
  READING = 'READING'
}