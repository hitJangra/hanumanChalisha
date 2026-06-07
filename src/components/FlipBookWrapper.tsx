"use client";

import React, { forwardRef, useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { chalisa } from '../data/chalisa';
import Image from 'next/image';

const PageFrame = ({ isRightPage }: { isRightPage: boolean }) => {
  return (
    <div className="absolute inset-3 md:inset-4 pointer-events-none z-10">
      <div className="absolute top-0 left-0 w-full h-[140px] md:h-[200px] z-10">
        {isRightPage ? (
          <svg className="w-full h-full drop-shadow-md" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="gold-grad-right" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#FDF1D6" />
                <stop offset="100%" stopColor="#B8860B" />
              </linearGradient>
              <filter id="shadow-right">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#4A2511" floodOpacity="0.2"/>
              </filter>
            </defs>
            <path d="M0,0 L0,5 C15,5 25,15 30,30 C40,20 50,25 60,45 C70,35 85,45 95,70 C98,80 99,90 99,100 L100,100 L100,0 Z" fill="url(#gold-grad-right)" fillOpacity="0.25" />
            <path d="M0,5 C15,5 25,15 30,30 C40,20 50,25 60,45 C70,35 85,45 95,70 C98,80 99,90 99,100" fill="none" stroke="url(#gold-grad-right)" strokeWidth="3" filter="url(#shadow-right)" />
            <path d="M0,15 C15,15 25,25 30,40 C40,30 50,35 60,55 C70,45 85,55 95,80 C98,90 97.5,95 97.5,100" fill="none" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.8" />
          </svg>
        ) : (
          <svg className="w-full h-full drop-shadow-md" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="gold-grad-left" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#FDF1D6" />
                <stop offset="100%" stopColor="#B8860B" />
              </linearGradient>
              <filter id="shadow-left">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#4A2511" floodOpacity="0.2"/>
              </filter>
            </defs>
            <path d="M100,0 L100,5 C85,5 75,15 70,30 C60,20 50,25 40,45 C30,35 15,45 5,70 C2,80 1,90 1,100 L0,100 L0,0 Z" fill="url(#gold-grad-left)" fillOpacity="0.25" />
            <path d="M100,5 C85,5 75,15 70,30 C60,20 50,25 40,45 C30,35 15,45 5,70 C2,80 1,90 1,100" fill="none" stroke="url(#gold-grad-left)" strokeWidth="3" filter="url(#shadow-left)" />
            <path d="M100,15 C85,15 75,25 70,40 C60,30 50,35 40,55 C30,45 15,55 5,80 C2,90 2.5,95 2.5,100" fill="none" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.8" />
          </svg>
        )}
      </div>
      <div className={`absolute inset-0 border-[#D4AF37] border-[3px] z-20 ${isRightPage ? 'rounded-r-lg' : 'rounded-l-lg'} shadow-[0_2px_8px_rgba(0,0,0,0.1)]`}>
        <div className={`absolute inset-[2px] border-[#D4AF37]/60 border ${isRightPage ? 'rounded-r-md' : 'rounded-l-md'}`}></div>
      </div>
    </div>
  );
};

const CoverPage = forwardRef<HTMLDivElement, { imageUrl: string; pageNum: number }>(({ imageUrl, pageNum }, ref) => {
  const isRightPage = pageNum % 2 === 0;
  const pageClass = isRightPage ? 'mandir-half-right' : 'mandir-half-left';
  
  return (
    <div className={`page ${pageClass} overflow-hidden relative bg-[#FDF1D6]`} ref={ref}>
      <PageFrame isRightPage={isRightPage} />
      <div className="absolute inset-4 z-0 overflow-hidden rounded-sm">
        <Image src={imageUrl} alt="Cover" fill className="object-cover opacity-85" sizes="(max-width: 600px) 100vw, 500px" />
      </div>
      <div className="absolute bottom-16 left-4 right-4 z-20 text-center bg-[#4A2511]/90 backdrop-blur-md py-5 border-y-2 border-[#D4AF37] shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
        <h2 className="text-swarn-hindi text-3xl md:text-4xl font-bold tracking-wider font-tiro">
          श्री हनुमान चालीसा
        </h2>
      </div>
    </div>
  );
});
CoverPage.displayName = 'CoverPage';

const BlankPage = forwardRef<HTMLDivElement, { pageNum: number }>(({ pageNum }, ref) => {
  const isRightPage = pageNum % 2 === 0;
  const pageClass = isRightPage ? 'mandir-half-right' : 'mandir-half-left';
  
  return (
    <div className={`page ${pageClass} flex items-center justify-center relative bg-[#FDF1D6]`} ref={ref}>
      <PageFrame isRightPage={isRightPage} />
    </div>
  );
});
BlankPage.displayName = 'BlankPage';

const MantraPage = forwardRef<HTMLDivElement, { pageNum: number }>(({ pageNum }, ref) => {
  const isRightPage = pageNum % 2 === 0;
  const pageClass = isRightPage ? 'mandir-half-right' : 'mandir-half-left';
  
  return (
    <div className={`page ${pageClass} overflow-hidden relative bg-[#FDF1D6] flex flex-col`} ref={ref}>
      <PageFrame isRightPage={isRightPage} />
      
      <div className="flex flex-col items-center justify-center text-center w-full h-full relative z-30 pt-[140px] md:pt-[180px] px-8 pb-12">
        <div className="space-y-6">
          <p className="text-swarn-hindi text-xl md:text-3xl font-tiro leading-relaxed font-bold">
            मंगल भवन अमंगल हारी ।<br />
            द्रवहु सुदसरथ अजिर बिहारी ॥
          </p>
          <div className="w-16 h-px bg-[#D4AF37]/50 mx-auto"></div>
          <p className="text-swarn-english text-sm md:text-base font-merienda">
            Mangal Bhavan Amangal Haari,<br />
            Dravahu Sudasarath Ajir Bihaari.
          </p>
        </div>

        <div className="absolute bottom-8 right-8 flex items-center gap-2 text-[#4A2511]/70 animate-pulse cursor-pointer pointer-events-none">
          <span className="text-xs md:text-sm font-merienda font-bold">Turn Page</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
});
MantraPage.displayName = 'MantraPage';

const BackCoverPage = forwardRef<HTMLDivElement, { pageNum: number }>(({ pageNum }, ref) => {
  const isRightPage = pageNum % 2 === 0;
  const pageClass = isRightPage ? 'mandir-half-right' : 'mandir-half-left';
  
  return (
    <div className={`page ${pageClass} overflow-hidden relative bg-[#FDF1D6]`} ref={ref}>
      <PageFrame isRightPage={isRightPage} />
      <div className="absolute inset-4 z-0 bg-[#4A2511] rounded-sm flex flex-col items-center justify-center pt-[120px]">
         <h2 className="text-[#D4AF37] text-2xl md:text-3xl font-bold tracking-wider font-tiro text-center mb-6 drop-shadow-lg">
           सियावर रामचन्द्र की जय
         </h2>
         <div className="w-32 h-px bg-[#D4AF37]/60 mx-auto my-6"></div>
         <h2 className="text-[#D4AF37] text-2xl md:text-3xl font-bold tracking-wider font-tiro text-center mt-6 drop-shadow-lg">
           पवनसुत हनुमान की जय
         </h2>
      </div>
    </div>
  );
});
BackCoverPage.displayName = 'BackCoverPage';

const ImagePage = forwardRef<HTMLDivElement, { verse: any; pageNum: number }>(({ verse, pageNum }, ref) => {
  const isRightPage = pageNum % 2 === 0;
  const pageClass = isRightPage ? 'mandir-half-right' : 'mandir-half-left';
  const bgImage = verse.imageUrl || "/ram-darbar.jpg";

  return (
    <div className={`page ${pageClass} overflow-hidden relative bg-[#FDF1D6] flex flex-col`} ref={ref}>
      <PageFrame isRightPage={isRightPage} />
      <div className="absolute inset-4 z-0 overflow-hidden rounded-sm">
        <Image src={bgImage} alt={`Scene ${verse.number || 'Doha'}`} fill className="object-cover opacity-90" sizes="(max-width: 600px) 100vw, 500px" />
      </div>
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <div className="bg-[#4A2511]/85 backdrop-blur-sm px-6 py-2 border border-[#D4AF37] rounded-full shadow-lg">
          <span className="text-[#D4AF37] text-xs md:text-sm font-bold tracking-widest uppercase font-tiro">
            {verse.type === 'doha' ? 'Doha Scene' : `Chaupai ${verse.number} Scene`}
          </span>
        </div>
      </div>
    </div>
  );
});
ImagePage.displayName = 'ImagePage';

const TextPage = forwardRef<HTMLDivElement, { verse: any; index: number; pageNum: number }>(({ verse, index, pageNum }, ref) => {
  const isRightPage = pageNum % 2 === 0;
  const pageClass = isRightPage ? 'mandir-half-right' : 'mandir-half-left';
  
  return (
    <div className={`page ${pageClass} overflow-hidden relative bg-[#FDF1D6] flex flex-col`} ref={ref}>
      <PageFrame isRightPage={isRightPage} />
      <div className="flex flex-col items-center justify-center text-center w-full h-full relative z-30 pt-[140px] md:pt-[180px] px-8 pb-12">
        {verse.number && (
          <div className="text-[#4A2511] text-xs md:text-sm font-bold tracking-widest mb-4 uppercase drop-shadow-sm">
            Chaupai {verse.number}
          </div>
        )}
        {verse.type === 'doha' && !verse.number && (
          <div className="text-[#4A2511] text-xs md:text-sm font-bold tracking-widest mb-4 uppercase drop-shadow-sm">
            Doha
          </div>
        )}
        <div className="space-y-4 w-full">
          <div className="space-y-2">
            {verse.hindiText.map((line: string, i: number) => (
              <p key={`hindi-${i}`} className="text-swarn-hindi text-lg md:text-2xl font-tiro leading-tight font-bold px-2">
                {line}
              </p>
            ))}
          </div>
          <div className="w-12 h-px bg-[#D4AF37]/50 mx-auto my-2"></div>
          <div className="space-y-1">
            {verse.englishText.map((line: string, i: number) => (
              <p key={`eng-${i}`} className="text-swarn-english text-xs md:text-sm font-merienda leading-relaxed px-2">
                {line}
              </p>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-center text-[#4A2511]/60 text-xs font-merienda font-bold">
          Page {index + 1}
        </div>
      </div>
    </div>
  );
});
TextPage.displayName = 'TextPage';

export default function FlipBookWrapper() {
  const [dimensions, setDimensions] = useState({ width: 400, height: 550 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setDimensions({ width: 300, height: 450 });
      } else if (window.innerWidth < 900) {
        setDimensions({ width: 350, height: 500 });
      } else {
        setDimensions({ width: 450, height: 600 });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center w-full my-8">
      {/* @ts-ignore */}
      <HTMLFlipBook 
        key={`${dimensions.width}-${dimensions.height}`}
        width={dimensions.width} 
        height={dimensions.height}
        size="stretch"
        minWidth={300}
        maxWidth={500}
        minHeight={400}
        maxHeight={700}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        className="flip-book-container mx-auto drop-shadow-2xl"
      >
        <CoverPage pageNum={0} imageUrl="/ram-darbar.jpg" />
        <BlankPage pageNum={1} /> 
        <MantraPage pageNum={2} />
        
        {chalisa.flatMap((verse, index) => [
          <ImagePage key={`img-${verse.id}`} verse={verse} pageNum={3 + (index * 2)} />,
          <TextPage key={`txt-${verse.id}`} verse={verse} index={index} pageNum={4 + (index * 2)} />
        ])}
        
        <BlankPage pageNum={chalisa.length * 2 + 3} />
        <BlankPage pageNum={chalisa.length * 2 + 4} />
        <BackCoverPage pageNum={chalisa.length * 2 + 5} />
      </HTMLFlipBook>
    </div>
  );
}