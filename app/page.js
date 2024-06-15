import * as React from 'react';
import SimpleBottomNavigation from './ui/bottom-navigation';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <div className='p-6'>Hello</div>
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </main>
  );
}
