"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the FlipBookWrapper with SSR disabled
const FlipBookWrapper = dynamic(() => import('./FlipBookWrapper'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center min-h-[500px]">
      {/* Changed the green spinner to the Metallic Gold */}
      <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
      {/* Changed the green text to Deep Warm Brown */}
      <p className="mt-4 text-[#4A2511] font-merienda animate-pulse">Opening sacred pages...</p>
    </div>
  ),
});

export default function BookView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-8 px-4 w-full overflow-hidden">
      <FlipBookWrapper />
      {/* Changed the hardcoded dark hex to the new Deep Warm Brown with 70% opacity */}
      <div className="mt-8 text-center text-[#4A2511]/70 font-merienda text-sm">
        Drag the corners of the page to turn it naturally
      </div>
    </div>
  );
}