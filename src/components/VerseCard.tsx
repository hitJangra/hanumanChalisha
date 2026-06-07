import React from 'react';
import Image from 'next/image';
import { Verse } from '../data/chalisa';

interface VerseCardProps {
  verse: Verse;
}

export default function VerseCard({ verse }: VerseCardProps) {
  const isLongVerse = verse.hindiText.length > 2;

  return (
    <div className="w-full max-w-5xl mx-auto my-12 flex flex-col md:flex-row items-center justify-center gap-8 p-4">
      
      {/* इमेज वाला हिस्सा (बाईं तरफ) */}
      {verse.imageUrl && (
        <div className="w-full max-w-[400px] h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#D4AF37]/40">
          <Image
            src={verse.imageUrl}
            alt={verse.type === 'doha' ? 'Doha Scene' : `Chaupai ${verse.number}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      )}

      {/* मंदिर स्टाइल टेक्स्ट कार्ड (दाईं तरफ) */}
      <div className="w-full max-w-[450px] aspect-square mandir-arch-scroll flex flex-col justify-center items-center p-8 text-center">
        
        {verse.number && (
          <div className="text-[#4A2511] text-sm font-bold tracking-widest mb-4 uppercase">
            Chaupai {verse.number}
          </div>
        )}
        {verse.type === 'doha' && !verse.number && (
          <div className="text-[#4A2511] text-sm font-bold tracking-widest mb-4 uppercase">
            Doha
          </div>
        )}
        
        <div className={`w-full px-2 ${isLongVerse ? 'space-y-3' : 'space-y-6'}`}>
          {/* हिंदी पाठ */}
          <div className={isLongVerse ? 'space-y-1' : 'space-y-2'}>
            {verse.hindiText.map((line, index) => (
              <p 
                key={`hindi-${index}`} 
                className={`${
                  isLongVerse ? 'text-base md:text-lg' : 'text-xl md:text-2xl'
                } text-swarn-hindi font-tiro leading-tight font-bold`}
              >
                {line}
              </p>
            ))}
          </div>

          {/* सेपरेटर लाइन */}
          <div className="w-16 h-px bg-[#D4AF37]/50 mx-auto"></div>

          {/* अंग्रेजी पाठ */}
          <div className="space-y-1">
            {verse.englishText.map((line, index) => (
              <p 
                key={`eng-${index}`} 
                className={`${
                  isLongVerse ? 'text-xs md:text-sm' : 'text-sm md:text-base'
                } text-swarn-english font-merienda leading-relaxed`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}