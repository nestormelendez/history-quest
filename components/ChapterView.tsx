import React from 'react';
import { Chapter } from '../types';

interface ChapterViewProps {
  chapter: Chapter;
  pageNumber: number;
}

export const ChapterView: React.FC<ChapterViewProps> = ({ chapter, pageNumber }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-paper min-h-full p-8 md:p-16 shadow-sm relative animate-fadeIn">
      {/* Header */}
      <header className="mb-12 border-b-2 border-stone-300 pb-6 text-center">
        <div className="flex items-center justify-center mb-4 text-stone-400">
          {React.cloneElement(chapter.icon as React.ReactElement, { width: 32, height: 32 })}
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-2">{chapter.title}</h2>
        {chapter.subtitle && (
          <h3 className="text-lg font-serif italic text-stone-500">{chapter.subtitle}</h3>
        )}
      </header>

      {/* Content */}
      <div className="space-y-10">
        {chapter.sections.map((section, idx) => (
          <section key={idx} className="prose prose-stone max-w-none">
            {section.title && (
              <h4 className="text-xl font-bold font-serif text-stone-700 mb-3 flex items-center">
                <span className="text-gold mr-2">§</span> {section.title}
              </h4>
            )}
            
            {section.content.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-stone-700 leading-relaxed font-serif mb-4 text-lg text-justify">
                {paragraph}
              </p>
            ))}

            {section.listItems && (
              <ul className="list-none space-y-2 ml-4 mb-6 border-l-2 border-gold/30 pl-4">
                {section.listItems.map((item, iIdx) => (
                  <li key={iIdx} className="font-serif text-stone-600 italic flex items-start">
                    <span className="mr-2 text-xs mt-2 text-gold">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.code && (
              <div className="my-6 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-stone-200 to-stone-300 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                <div className="relative bg-stone-800 rounded-lg p-4 overflow-x-auto border border-stone-700 shadow-inner">
                  <div className="flex justify-between items-center mb-2 border-b border-stone-700 pb-2">
                     <span className="text-xs text-stone-400 font-mono uppercase">{section.code.language}</span>
                     <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500 opacity-50"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-50"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500 opacity-50"></div>
                     </div>
                  </div>
                  <pre className="font-mono text-sm text-stone-300 whitespace-pre-wrap">
                    <code>{section.code.code}</code>
                  </pre>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Footer / Page Number */}
      <div className="mt-16 pt-8 border-t border-stone-200 flex justify-between items-center text-stone-400 font-serif text-sm">
        <span>Codex de Búsqueda</span>
        <span>Página {pageNumber}</span>
      </div>
    </div>
  );
};