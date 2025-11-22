import React from 'react';

interface BookCoverProps {
  onOpen: () => void;
}

export const BookCover: React.FC<BookCoverProps> = ({ onOpen }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-stone-900 perspective-1000">
      <div 
        onClick={onOpen}
        className="relative w-[350px] h-[500px] md:w-[450px] md:h-[600px] bg-leather rounded-r-2xl shadow-[20px_20px_60px_rgba(0,0,0,0.5)] cursor-pointer transform transition-transform duration-500 hover:-rotate-y-12 hover:shadow-[30px_30px_70px_rgba(0,0,0,0.6)] border-l-8 border-stone-800 flex flex-col items-center justify-between py-20 px-8"
        style={{
            background: 'linear-gradient(135deg, #2c1810 0%, #1a0f0a 100%)',
            boxShadow: 'inset -5px 0 15px rgba(0,0,0,0.5), 10px 10px 30px rgba(0,0,0,0.5)'
        }}
      >
        {/* Decorative Corners */}
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold opacity-60 rounded-tr-lg"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold opacity-60 rounded-br-lg"></div>
        
        {/* Title Area */}
        <div className="text-center space-y-4">
          <div className="text-gold/80 text-sm tracking-[0.3em] uppercase font-serif">Analisis Técnico</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold via-[#fcf6ba] to-gold-dim drop-shadow-md">
            CODEX
            <br />
            DE BÚSQUEDA
          </h1>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full opacity-70"></div>
        </div>

        {/* Center Icon */}
        <div className="text-gold opacity-40 transform scale-150">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
            </svg>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gold/60 text-xs tracking-widest uppercase">Volumen I: Arquitectura NestJS</p>
          <p className="text-white/20 text-[10px] mt-2 animate-pulse">Click para abrir</p>
        </div>
      </div>
    </div>
  );
};