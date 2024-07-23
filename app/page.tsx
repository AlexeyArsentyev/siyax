import Image from 'next/image';
import './globals.css';
import { CanvasRevealEffectDemo } from '../components/card-reveal';

export default function Home() {
  return (
    <>
      <nav>
        <p className="logo">Siya</p>
        <div className="nav-right">
          <p>About us</p>
          <p>Advantages</p>
          <p>Contact</p>
        </div>
      </nav>
      <main>
        <CanvasRevealEffectDemo />
      </main>
    </>
  );
}
