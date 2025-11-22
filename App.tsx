import React, { useState, useEffect } from 'react';
import { BookCover } from './components/BookCover';
import { ChapterView } from './components/ChapterView';
import { BOOK_CONTENT, Icons } from './constants';
import { ViewState } from './types';

function App() {
  const [viewState, setViewState] = useState<ViewState>(ViewState.COVER);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNext = () => {
    if (currentChapterIndex < BOOK_CONTENT.length - 1) {
      setCurrentChapterIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Go back to cover
        setViewState(ViewState.COVER);
    }
  };

  const handleChapterSelect = (index: number) => {
      setCurrentChapterIndex(index);
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Close menu on resize if switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (viewState === ViewState.COVER) {
    return <BookCover onOpen={() => setViewState(ViewState.READING)} />;
  }

  const activeChapter = BOOK_CONTENT[currentChapterIndex];

  return (
    <div className="flex h-screen overflow-hidden bg-stone-900 text-stone-100 font-sans">
      
      {/* Sidebar Navigation (Desktop) */}
      <aside className="hidden lg:flex w-80 flex-col border-r border-stone-800 bg-[#1a1614] shadow-2xl z-20">
        <div className="p-8 border-b border-stone-800 flex items-center gap-3">
           <div className="text-gold">{Icons.Book}</div>
           <h1 className="text-xl font-serif font-bold text-stone-200 tracking-wide">Índice</h1>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {BOOK_CONTENT.map((chapter, idx) => (
            <button
              key={chapter.id}
              onClick={() => handleChapterSelect(idx)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 group text-left ${
                idx === currentChapterIndex 
                  ? 'bg-stone-800 text-gold shadow-md border-l-2 border-gold' 
                  : 'text-stone-400 hover:bg-stone-800/50 hover:text-stone-200'
              }`}
            >
              <span className={`transition-colors ${idx === currentChapterIndex ? 'text-gold' : 'text-stone-600 group-hover:text-stone-400'}`}>
                {chapter.icon}
              </span>
              <div>
                <div className="font-medium text-sm">{chapter.title}</div>
                <div className="text-[10px] opacity-60 uppercase tracking-wider mt-0.5">Capítulo {idx + 1}</div>
              </div>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-stone-800 text-center">
           <button 
             onClick={() => setViewState(ViewState.COVER)}
             className="text-xs text-stone-500 hover:text-gold transition-colors font-serif italic"
           >
             Cerrar Libro
           </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 w-full z-50 bg-[#1a1614] border-b border-stone-800 px-4 py-3 flex justify-between items-center shadow-md">
          <span className="font-serif font-bold text-gold">Codex</span>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-stone-300 hover:bg-stone-800 rounded"
          >
            {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/90 lg:hidden pt-16 animate-fadeIn">
              <nav className="p-4 space-y-2">
                {BOOK_CONTENT.map((chapter, idx) => (
                    <button
                    key={chapter.id}
                    onClick={() => handleChapterSelect(idx)}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-lg text-left border-b border-stone-800 ${
                        idx === currentChapterIndex 
                        ? 'text-gold' 
                        : 'text-stone-400'
                    }`}
                    >
                    <span className="scale-75">{chapter.icon}</span>
                    <span className="font-serif text-lg">{chapter.title}</span>
                    </button>
                ))}
                <button 
                    onClick={() => setViewState(ViewState.COVER)}
                    className="w-full py-6 text-center text-stone-500 font-serif italic"
                >
                    Volver a la Portada
                </button>
              </nav>
          </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-y-auto bg-stone-200/50 scroll-smooth pt-16 lg:pt-0">
        
        {/* Content Container */}
        <div className="min-h-full flex flex-col">
            <div className="flex-1 p-4 md:p-8 lg:p-12 flex justify-center">
                <ChapterView chapter={activeChapter} pageNumber={currentChapterIndex + 1} />
            </div>

            {/* Navigation Controls (Sticky Bottom) */}
            <div className="sticky bottom-0 w-full bg-paper/90 backdrop-blur-sm border-t border-stone-300 p-4 md:p-6 flex justify-between items-center max-w-4xl mx-auto shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
                <button
                    onClick={handlePrev}
                    className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-stone-200 text-stone-600 transition-colors text-sm font-medium group"
                >
                    <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    {currentChapterIndex === 0 ? 'Portada' : 'Anterior'}
                </button>

                {/* Progress Dots */}
                <div className="hidden md:flex gap-2">
                    {BOOK_CONTENT.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx === currentChapterIndex ? 'bg-gold w-4' : 'bg-stone-300'
                            }`}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    disabled={currentChapterIndex === BOOK_CONTENT.length - 1}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all text-sm font-medium shadow-sm group ${
                        currentChapterIndex === BOOK_CONTENT.length - 1
                        ? 'bg-stone-100 text-stone-300 cursor-not-allowed'
                        : 'bg-stone-800 text-white hover:bg-stone-700 hover:shadow-md'
                    }`}
                >
                    Siguiente
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>
        </div>
      </main>
    </div>
  );
}

export default App;