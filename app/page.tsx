'use client';

import Image from 'next/image';
import './globals.css';

import Navbar from '@/components/nav-bar';

import { Hero } from '@/components/dots';

import { Evervault } from '@/components/evervault';

import { GenericCard } from '@/components/generic-card';
import { Form } from '@/components/form';
import { CardRevealBenefits } from '@/components/card-reveal-benefits';

import moderation from '../public/icons/moderation.png';
import publishing from '../public/icons/publishing.png';
import gamejam from '../public/icons/gamejam.png';

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
            recommendation system, we ensure indie gems don&apos;t go unnoticed, giving creators the
            visibility they deserve. At Siya, we&apos;re committed to cultivating a vibrant indie
            game ecosystem where developers thrive and players discover exciting new worlds.
          </p>
          <hr />

          <h2 id="advantages" className="mt-20">
            What are <b>your</b> benefits?
          </h2>

          <CardRevealBenefits />

          {/* SPECIAL */}

          <h2 id="advantages" className="mt-20">
            What makes us special?
          </h2>

          <div className="special-cards">
            <div className="special-text">
              <h3>Extensive moderation</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium, error
                accusantium nesciunt adipisci facere voluptates magnam iste? Placeat, aliquid
                aperiam! Deleniti quo sunt eum asperiores? Enim veniam porro mollitia inventore at
                maxime repellendus non facilis distinctio debitis suscipit nobis impedit, quisquam
                asperiores molestias velit, magni, quasi consectetur provident obcaecati ex nisi
                laborum! Et aspernatur sequi vitae incidunt accusamus unde.
              </p>
            </div>
            <Image src={moderation} width={150} alt="icon"></Image>
          </div>
          <div className="special-cards reverse">
            <div className="special-text">
              <h3>Gamejams</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium, error
                accusantium nesciunt adipisci facere voluptates magnam iste? Placeat, aliquid
                aperiam! Deleniti quo sunt eum asperiores? Enim veniam porro mollitia inventore at
                maxime repellendus non facilis distinctio debitis suscipit nobis impedit, quisquam
                asperiores molestias velit, magni, quasi consectetur provident obcaecati ex nisi
                laborum! Et aspernatur sequi vitae incidunt accusamus unde.
              </p>
            </div>
            <Image src={gamejam} width={150} alt="icon"></Image>
          </div>
          <div className="special-cards">
            <div className="special-text">
              <h3>Siya as a publisher</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium, error
                accusantium nesciunt adipisci facere voluptates magnam iste? Placeat, aliquid
                aperiam! Deleniti quo sunt eum asperiores? Enim veniam porro mollitia inventore at
                maxime repellendus non facilis distinctio debitis suscipit nobis impedit, quisquam
                asperiores molestias velit, magni, quasi consectetur provident obcaecati ex nisi
                laborum! Et aspernatur sequi vitae incidunt accusamus unde.
              </p>
            </div>
            <Image src={publishing} width={150} alt="icon"></Image>
          </div>

          {/* LOOKING FOR */}

          <div className="people-cards">
            <div>
              <h2 className="mb-0">Who we are looking for?</h2>
              <ul>
                <li>-Motivated beginners (gamejam + tutuorials = progress)</li>
                <li>-Those with big ideas who dont know how to start</li>
                <li>-Experienced developers and studious</li>
              </ul>
            </div>

            <Evervault />
          </div>
          <Form />
        </main>
      </div>
    </>
  );
}
