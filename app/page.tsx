import Image from 'next/image';
import './globals.css';

import Navbar from '@/components/nav-bar';

import { Hero } from '@/components/dots';

import { Evervault } from '@/components/evervault';

import { GenericCard } from '@/components/generic-card';
import { Form } from '@/components/form';
import { CardReveal } from '@/components/card-reveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="main-wrapper">
        <main>
          <h2 id="aboutUs">Who we are?</h2>
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
          {/* <StickyScrollReveal /> */}
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
            <GenericCard />
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
            <Evervault />
          </div>

          <h2 id="advantages" className="mt-20">
            What are <b>your</b> benefits?
          </h2>

          <CardReveal />
          <h2 id="contact" className="mb-2 mt-14">
            Contact us
          </h2>
          <Form />
          {/* <SignupForm /> */}
        </main>
      </div>
    </>
  );
}
