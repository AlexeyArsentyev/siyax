import Image from 'next/image';
import './globals.css';
import { CanvasRevealEffectDemo } from '../components/card-reveal';
import Navbar from '@/components/nav-bar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <CanvasRevealEffectDemo />
      </main>
    </>
  );
}
