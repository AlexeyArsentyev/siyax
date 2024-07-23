import Image from 'next/image';
import './globals.css';
import { CanvasRevealEffectDemo } from '../components/card-reveal';
import Navbar from '@/components/nav-bar';
import { BackgroundBoxesDemo } from '@/components/background-boxes';
import { HeroHighlightDemo } from '@/components/dots';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroHighlightDemo />
      <div className="main-wrapper">
        <main>
          {/* <h2 className="text-first-100">Who we are?</h2>
          <p>
            Siya: Your gateway to gaming&apos;s hidden gems. We scour the indie scene to bring you a
            meticulously curated collection of standout titles. Our compact but diverse lineup
            showcases games that push boundaries and challenge conventions. While we operate on
            razor-thin margins, our mission is to connect discerning gamers with exceptional indie
            experiences. Every purchase supports both our store and the passionate developers behind
            these unique creations.
          </p> */}
          <h3>
            What are <b>your</b> benefits?
          </h3>
          <CanvasRevealEffectDemo />
        </main>
      </div>
    </>
  );
}
