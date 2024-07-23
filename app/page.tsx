import Image from 'next/image';
import './globals.css';
import { CanvasRevealEffectDemo } from '../components/card-reveal';
import Navbar from '@/components/nav-bar';
import { BackgroundBoxesDemo } from '@/components/background-boxes';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div className="hero">
        <h1>Siya - your only indie game store</h1>
      </div> */}
      <div className="main-wrapper">
        <main>
          <BackgroundBoxesDemo />
          <CanvasRevealEffectDemo />
        </main>
      </div>
    </>
  );
}
