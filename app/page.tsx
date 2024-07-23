import Image from 'next/image';
import './globals.css';
import { CanvasRevealEffectDemo } from '../components/card-reveal';
import Navbar from '@/components/nav-bar';
import { BackgroundBoxesDemo } from '@/components/background-boxes';
import { HeroHighlightDemo } from '@/components/dots';
import { SignupFormDemo } from '@/components/contact';

import { StickyScrollRevealDemo } from '@/components/scroll';
import { EvervaultCardDemo } from '@/components/evervault';
import { InputField } from '@/components/input-field';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroHighlightDemo />
      <div className="main-wrapper">
        <main>
          <h2>Who we are?</h2>
          <p>
            Siya: Your gateway to gaming&apos;s hidden gems. We scour the indie scene to bring you a
            meticulously curated collection of standout titles. Our compact but diverse lineup
            showcases games that push boundaries and challenge conventions. While we operate on
            razor-thin margins, our mission is to connect discerning gamers with exceptional indie
            experiences. Every purchase supports both our store and the passionate developers behind
            these unique creations.
          </p>
          <hr />
          <h2 className="mb-0">Who we are looking for?</h2>
          {/* <StickyScrollRevealDemo /> */}
          <div className="evervault-cards">
            <div className="evervault-text">
              <h3>Somebody somebody</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium, error
                accusantium nesciunt adipisci facere voluptates magnam iste? Placeat, aliquid
                aperiam! Deleniti quo sunt eum asperiores? Enim veniam porro mollitia inventore at
                maxime repellendus non facilis distinctio debitis suscipit nobis impedit, quisquam
                asperiores molestias velit, magni, quasi consectetur provident obcaecati ex nisi
                laborum! Et aspernatur sequi vitae incidunt accusamus unde.
              </p>
            </div>
            <EvervaultCardDemo />
          </div>
          <div className="evervault-cards reverse">
            <div className="evervault-text">
              <h3>Somebody somebody</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium, error
                accusantium nesciunt adipisci facere voluptates magnam iste? Placeat, aliquid
                aperiam! Deleniti quo sunt eum asperiores? Enim veniam porro mollitia inventore at
                maxime repellendus non facilis distinctio debitis suscipit nobis impedit, quisquam
                asperiores molestias velit, magni, quasi consectetur provident obcaecati ex nisi
                laborum! Et aspernatur sequi vitae incidunt accusamus unde.
              </p>
            </div>
            <EvervaultCardDemo />
          </div>

          <h2 className="mt-20">
            What are <b>your</b> benefits?
          </h2>

          <CanvasRevealEffectDemo />
          <SignupFormDemo />

          {/* <div className="form">
            <InputField />
          </div> */}
        </main>
      </div>
    </>
  );
}
