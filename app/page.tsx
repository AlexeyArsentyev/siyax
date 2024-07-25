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
            Who we are
          </h2>
          <p>
            Siya is more than just a game store — it&apos;s a launchpad for indie creativity.
            We&apos;ve reimagined the digital marketplace to put developers first. Our unbeatable
            revenue share lets creators keep more of their earnings with industry-leading low
            margins. Our smart discovery engine ensures hidden gems get the spotlight they deserve,
            while our fair moderation maintains quality standards while embracing innovation and
            fresh ideas.
          </p>
          <hr />

          <h2 id="advantages" className="mt-20">
            What are <b>your</b> benefits?
          </h2>

          <CardRevealBenefits />

          {/* SPECIAL */}

          <h2 id="advantages" className="special-header ">
            What makes us special?
          </h2>

          <div className="special-cards">
            <div className="special-text">
              <h3>We have standards</h3>
              <p>
                Our store has extensive quality insurance. However, games, created with genuine
                effort easily be accepted. Our curation process filters out only low-level
                submissions. This approach ensures a diverse, exceptional catalog while giving the
                developers a fair platform to showcase their work.
              </p>
            </div>
            <Image className="special-img" src={moderation} width={200} alt="icon"></Image>
          </div>

          <div className="special-cards reverse">
            <div className="special-text">
              <h3>Siya can be your publisher</h3>
              <p>
                We can publish your games, providing marketing, promotion and financial support.
                This option is ideal for new, ambitious game studios. Thus you can concentrate on
                making your dream game, while we handle all the management related problems.
              </p>
            </div>
            <Image className="special-img" src={publishing} width={200} alt="icon"></Image>
          </div>

          <div className="special-cards ">
            <div className="special-text">
              <h3>Gamejams</h3>
              <p>
                We host game jams every 3 months! This is an excellent opportunity for everyone to
                gain experience and receive feedback. Prize winners will receive a cash reward.
                Moreover, if they want to continue developing their game, we offer unique publishing
                contracts.
              </p>
            </div>
            <Image className="special-img" src={gamejam} width={200} alt="icon"></Image>
          </div>

          {/* LOOKING FOR */}

          <hr />

          <div className="people-cards">
            <div>
              <h2 className="my-0">Who we are looking for?</h2>
              <ul>
                <li>Motivated beginners</li>
                <li>People with great ideas who dont know where to start</li>
                <li>Experienced developers and studious</li>
                <li>Those who require help with publishing </li>
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
