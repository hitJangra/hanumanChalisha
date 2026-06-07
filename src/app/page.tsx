"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import BookView from '@/components/BookView';
import ScrollView from '@/components/ScrollView';

export default function Home() {
  const [viewMode, setViewMode] = useState<'book' | 'scroll'>('book');

  return (
    // Removed the hardcoded background and text colors
    <main className="min-h-screen">
      <Header viewMode={viewMode} setViewMode={setViewMode} />
      <div className="pt-8 pb-24">
        {viewMode === 'book' ? <BookView /> : <ScrollView />}
      </div>
    </main>
  );
}