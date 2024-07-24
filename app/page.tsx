'use client';

import Image from 'next/image';
import './globals.css';

import Navbar from '@/components/nav-bar';

import { Hero } from '@/components/dots';

import { Evervault } from '@/components/evervault';

import { GenericCard } from '@/components/generic-card';
import { Form } from '@/components/form';
import { CardRevealBenefits } from '@/components/card-reveal-benefits';
import { CardRevealFeatures } from '@/components/card-reveal-feaures';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="main-wrapper">
        <main>
          <h2 id="aboutUs" className="mb-2">
            Who we are?
          </h2>
          <p>
            Siya is a developer-focused indie game store dedicated to nurturing creative talent and
            connecting players with unique experiences. We stand out by offering exceptionally low
            margins, allowing developers to keep more of their hard-earned revenue. Our fair
            moderation approach maintains quality while encouraging innovation. With our intelligent
            recommendation system, we ensure indie gems don't go unnoticed, giving creators the
            visibility they deserve. At Siya, we're committed to cultivating a vibrant indie game
            ecosystem where developers thrive and players discover exciting new worlds.
          </p>
          <hr />

          <h2 id="advantages" className="mt-20">
            What are <b>your</b> benefits?
          </h2>

          <CardRevealBenefits />

          <h2 id="advantages" className="mt-20">
            What makes us special?
          </h2>
          {/* 
          <CardRevealFeatures /> */}

          {/* <h2 className="mb-0">Who we are looking for?</h2> */}

          <div className="evervault-cards reverse">
            <div className="evervault-text">
              <h3>Passionate developers</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium, error
                accusantium nesciunt adipisci facere voluptates magnam iste? Placeat, aliquid
                aperiam! Deleniti quo sunt eum asperiores? Enim veniam porro mollitia inventore at
                maxime repellendus non facilis distinctio debitis suscipit nobis impedit, quisquam
                asperiores molestias velit, magni, quasi consectetur provident obcaecati ex nisi
                laborum! Et aspernatur sequi vitae incidunt accusamus unde.
              </p>
            </div>
            <div className="h-80 w-72 bg-slate-600"></div>
          </div>
          <div className="evervault-cards">
            <div className="evervault-text">
              <h3>Aspiring game designers</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium, error
                accusantium nesciunt adipisci facere voluptates magnam iste? Placeat, aliquid
                aperiam! Deleniti quo sunt eum asperiores? Enim veniam porro mollitia inventore at
                maxime repellendus non facilis distinctio debitis suscipit nobis impedit, quisquam
                asperiores molestias velit, magni, quasi consectetur provident obcaecati ex nisi
                laborum! Et aspernatur sequi vitae incidunt accusamus unde.
              </p>
            </div>
            <div className="h-80 w-72 bg-slate-600"></div>
          </div>
          <div className="evervault-cards reverse">
            <div className="evervault-text">
              <h3>Passionate developers</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium, error
                accusantium nesciunt adipisci facere voluptates magnam iste? Placeat, aliquid
                aperiam! Deleniti quo sunt eum asperiores? Enim veniam porro mollitia inventore at
                maxime repellendus non facilis distinctio debitis suscipit nobis impedit, quisquam
                asperiores molestias velit, magni, quasi consectetur provident obcaecati ex nisi
                laborum! Et aspernatur sequi vitae incidunt accusamus unde.
              </p>
            </div>
            <div className="h-80 w-72 bg-slate-600"></div>
          </div>

          <Form />
          {/* <SignupForm /> */}
        </main>
      </div>
    </>
  );
}
