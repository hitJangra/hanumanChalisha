"use client";

import React from 'react';
import { BookOpen, ScrollText } from 'lucide-react';

interface HeaderProps {
  viewMode: 'book' | 'scroll';
  setViewMode: (mode: 'book' | 'scroll') => void;
}

export default function Header({ viewMode, setViewMode }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FFF5E1]/90 border-b border-[#D4AF37] shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl text-[#B8860B] font-bold tracking-wider">
          Shree Hanuman Chalisa
        </h1>
        
        <div className="flex items-center space-x-2 bg-[#FDF1D6] p-1 rounded-lg border border-[#D4AF37]">
          <button
            onClick={() => setViewMode('book')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-md transition-all duration-300 ${
              viewMode === 'book'
                ? 'bg-[#D4AF37] text-[#4A2511] shadow-[0_0_8px_rgba(212,175,55,0.4)]'
                : 'text-[#7B5E46] hover:text-[#B8860B]'
            }`}
            aria-label="Book View"
          >
            <BookOpen size={18} />
            <span className="hidden sm:inline text-sm font-medium">Book</span>
          </button>
          
          <button
            onClick={() => setViewMode('scroll')}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-md transition-all duration-300 ${
              viewMode === 'scroll'
                ? 'bg-[#D4AF37] text-[#4A2511] shadow-[0_0_8px_rgba(212,175,55,0.4)]'
                : 'text-[#7B5E46] hover:text-[#B8860B]'
            }`}
            aria-label="Scroll View"
          >
            <ScrollText size={18} />
            <span className="hidden sm:inline text-sm font-medium">Scroll</span>
          </button>
        </div>
      </div>
    </header>
  );
}