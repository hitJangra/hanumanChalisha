import React from 'react';
import VerseCard from './VerseCard';
import { chalisa } from '../data/chalisa';

export default function ScrollView() {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      {chalisa.map((verse) => (
        <VerseCard key={verse.id} verse={verse} />
      ))}
    </div>
  );
}
