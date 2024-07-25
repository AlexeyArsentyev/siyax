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
              <h3>Extensive game moderation</h3>
              <p>
                Our store has an extensive quality ensurance. However, games, created with genuine
                effort easily meet our standards. Our curation process filters out only low-
                submissions. This approach ensures a diverse, exceptional catalog while giving the
                developers a fair platform to showcase their work.
              </p>
            </div>
            <Image src={moderation} width={150} alt="icon"></Image>
          </div>

          <div className="special-cards reverse">
            <div className="special-text">
              <h3>Siya as a publisher</h3>
              <p>
                We can also act as a publisher for new game studios, providing marketing, promotion
                and financial support for your game. This option is ideal for new, ambitious game
                studios.
              </p>
            </div>
            <Image src={publishing} width={150} alt="icon"></Image>
          </div>

          <div className="special-cards ">
            <div className="special-text">
              <h3>Gamejams</h3>
              <p>
                We are hosting gamejams every 3 months! Prize winners will receive a cash reward.
                Moreover they want to continue developing their game, we offer unique publishing
                contracts.
              </p>
            </div>
            <Image src={gamejam} width={150} alt="icon"></Image>
          </div>

          {/* LOOKING FOR */}

          <div className="people-cards">
            <div>
              <h2 className="my-0">Who we are looking for?</h2>
              <ul>
                <li>- Motivated beginners</li>
                <li>- People with big ideas who dont know where to start</li>
                <li>- Experienced developers and studious</li>
                <li>- Those who have a complete game and require help with publishing </li>
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
