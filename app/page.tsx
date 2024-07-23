import Image from 'next/image';
import './globals.css';
import { CanvasRevealEffectDemo } from '../components/card-reveal';
import Navbar from '@/components/nav-bar';
import { BackgroundBoxesDemo } from '@/components/background-boxes';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <BackgroundBoxesDemo />
        <CanvasRevealEffectDemo />
      </main>
    </>
  );
}
