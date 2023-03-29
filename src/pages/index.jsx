import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { MdCancel, MdClear, MdMenu } from "react-icons/md";
import { useState } from "react";

export default function Home() {
  const [isHeaderMobOpen, setIsHeaderMobOpen] = useState(false);
  return (
    <>
      <Head>
        <title>AeroRaceShoes</title>
        <meta
          name="description"
          content="The world’s most advanced RaceShoe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.aeroraceshoes}>
        {isHeaderMobOpen ? (
          <div className={styles.headerMob}>
            <div className="box">
              <div className={styles.headerMobContent}>
                <div className={styles.headerMobHead}>
                  <p>
                    <span>Aero</span>RaceShoes<i>®</i>
                  </p>
                  <div
                    onClick={() => {
                      setIsHeaderMobOpen(false);
                    }}
                  >
                    <MdClear />
                  </div>
                </div>
                <div className={styles.headerMobBody}>
                  <a href="#">PRODUCT</a>
                  <a href="#">PARTNERS</a>
                  <a href="#">PERFORMANCE</a>
                  <a href="#">SCIENCE</a>
                  <a href="#">CONTACT</a>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <header className={styles.header}>
          <div className="box">
            <div className={styles.headerContent}>
              <div className={styles.headerLeft}>
                <p>
                  <span>Aero</span>RaceShoes<i>®</i>
                </p>
              </div>
              <div className={styles.headerRight}>
                <a href="#">PRODUCT</a>
                <a href="#">PARTNERS</a>
                <a href="#">PERFORMANCE</a>
                <a href="#">SCIENCE</a>
                <a href="#">CONTACT</a>

                <div
                  onClick={() => {
                    setIsHeaderMobOpen(true);
                  }}
                >
                  <MdMenu />
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className={styles.heroSection}>
          <div className="box">
            <div className={styles.heroContent}>
              <img src="/assets/hero-img.jpg" alt="hero-img" />
              <h1>
                The world’s <br /> most advanced <br /> RaceShoe.
              </h1>
              <div className={styles.quality1}>
                <h6>ULTRA LIGHTWEIGHT</h6>
                <p>
                  Scalmalloy® delivers <br /> outstanding weight <br />{" "}
                  reduction - Down to 72g{" "}
                </p>
              </div>
              <div className={styles.quality2}>
                <h6>HI-TENSILE STRENGTH</h6>
                <p>
                  Scalmalloy® delivers high tensile
                  <br /> strength 520 MPa <br /> Vickers Hardness HVO,3 180
                </p>
              </div>
              <div className={styles.quality3}>
                <h6>CUSTOM FIT</h6>
                <p>
                  Unique personalised fitting
                  <br /> for perfect fit delivering <br /> outstanding results.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.partnersSection}>
          <div className="box">
            <div className={styles.partnersGrid}>
              <div className={styles.partnersGridLeft}>
                <img src="/assets/partners-bg.jpg" alt="shoe" />
                <h2>
                  SCALMALLOY<span>®</span>
                </h2>
              </div>
              <div className={styles.partnersGridRight}>
                <h2>
                  <span>
                    Aerospace <br /> Technology.
                  </span>{" "}
                  <br /> Groundbreaking <br /> Performance.
                </h2>
                <div className={styles.partnersImgBox}>
                  <img src="/assets/apworks-logo.png" alt="apworks-logo" />
                  <div></div>
                  <img src="/assets/airbus-logo.png" alt="airbus-logo" />
                </div>
                <p>
                  Developed in Munich by Apworks, an AIRBUS subsidiary company,
                  SCALMALLOY - the proprietary alloy used to create these
                  remarkable raceshoes - is stronger, lighter and harder than
                  traditional shoes. Backed by a full range of world-class
                  research and manufacturing facilities, the AeroRaceShoe can
                  enhance the race performance of any horse. They are also easy
                  to fit, durable, cost-effective, and positively impact equine
                  well-being.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.performanceSection}>
          <div className="box">
            <div className={styles.performanceGrid}>
              <img src="/assets/performance-img-2.jpg" alt="performance-img" />
              <div className={styles.performanceDetails}>
                <h2>“An ounce off the hoof is a pound off the back”</h2>
                <h6>Bart Cummings, 12 X Melbourne Cup Winner</h6>
                <div className={styles.progBox}>
                  <h5>TYPICAL WEIGHT COMPARISONS</h5>
                  <div className="metal-box steel">
                    <p>
                      <b>STEEL</b> 200g X 4
                    </p>
                    <h4>800g</h4>
                  </div>
                  <div className="metal-box aluminum">
                    <p>
                      <b>ALUMINUM</b> 127g X 4
                    </p>
                    <h4>508g</h4>
                  </div>
                  <div className="metal-box aero">
                    <p>
                      <b>AERO</b> 72g X 4
                    </p>
                    <h4>288g</h4>
                  </div>
                  <p>
                    The lighter AeroShoe offers low hoof friction, high
                    wear-and-tear resistance and breaking strength, better hoof
                    cushioning, better elasticity and fewer injuries. And
                    ultimately, better performance.
                  </p>
                </div>
              </div>
              <p className={styles.AwainHiP}>AeroRaceShoes</p>
            </div>
          </div>
        </section>
        <section className={styles.scienceSection}>
          <div className="box">
            <div className={styles.scienceContentBox}>
              <div className={styles.scienceContent}>
                <img src="/assets/science-img.jpg" alt="science-img" />
                <div className={styles.scienceDetails}>
                  <h3>
                    “A superior performance raceshoe, utilising scientific
                    principles and created with technological superiority.”
                  </h3>
                  <p>
                    As a scientist, I have spent my life working in aerospace
                    and other highperformance areas where simultaneously
                    reducing weight and increasing strength are pivotal in
                    creating a competitive edge. These new shoes encourage and
                    enable a horse to run faster, because they maintain tensile
                    strength while reducing weight in the crucial hoof area.
                    This is only made possible with our progressive additive
                    manufacturing process and our worldpatented Scalmalloy
                    material.
                  </p>
                  <div className={styles.profileBox}>
                    <h6>
                      Dr. Philip Parkes <br />
                      APWORKS GmBh
                    </h6>
                    <img src="/assets/avatar-img.jpeg" alt="avatar" />
                  </div>
                </div>
                <p className={styles.AwainHiP}>AeroRaceShoes</p>
              </div>
            </div>
            <div className={styles.rocketScience}>
              <h3>
                It’s not rocket science. <br />
                <span>Well in this case it is.</span>
              </h3>
              <div className={styles.rocketScienceGrid}>
                <p>
                  <b>Improved speed:</b> The lighter the shoes, the less weight
                  the horse has to carry, which can lead to improved speed.
                  Horses that are able to move their legs more quickly and
                  efficiently may be able to run faster and more effectively
                  with lighter shoes.
                </p>
                <p>
                  <b>Reduced stress on joints:</b> A horse's legs and joints are
                  put under a lot of stress during a race. Using lighter shoes
                  can reduce the amount of impact and stress on the joints,
                  potentially reducing the risk of injury.
                </p>
                <p>
                  <b>Greater agility:</b> Lighter shoes can also allow horses to
                  move more quickly and easily around turns and corners, which
                  can be especially important in races that involve a lot of
                  turns.
                </p>
                <p>
                  <b>Improved recovery:</b> After a race, horses need time to
                  recover from the physical exertion. Using lighter shoes can
                  reduce the amount of fatigue and stress on the horse's legs,
                  which may help with recovery and allow the horse to race again
                  sooner.
                </p>
              </div>
            </div>
            <div className={styles.farrierSection}>
              <h3>The farrier says.</h3>
              <p>
                “As a farrier I know the qualities of these shoes are
                outstanding. Fitting is easy, whilst the lightness and
                high-tensile strength are astonishing. These are game-changers.”
              </p>
              <div>
                <h4>Julian Holland</h4>
                <h5>Professional Farrier for 25 years.</h5>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.contactSection}>
          <div className="box">
            <div className={styles.contactGridBox}>
              <div className={styles.contactGrid}>
                <img src="/assets/contact-img.jpg" alt="contact-img" />
                <div className={styles.contactDetails}>
                  <h2>
                    For more about the AeroRaceShoes story, just talk to us.
                  </h2>
                  <div className={styles.contactOrangeBox}>
                    <h5>
                      <span>
                        Aerospace <br /> Technology.
                      </span>{" "}
                      <br /> Groundbreaking <br /> Performance.
                    </h5>
                    <div className={styles.contactPartnersImgBox}>
                      <img src="/assets/apworks-logo.png" alt="apworks-logo" />
                      <div></div>
                      <img src="/assets/airbus-logo.png" alt="airbus-logo" />
                    </div>
                  </div>
                </div>
                <div className={styles.callEmail}>
                  <p>CALL +61 03 9276 3158</p>
                  <p>EMAIL: info@aeroraceshoes.com</p>
                </div>
              </div>
            </div>

            <div className={styles.footer}>
              <p>
                AeroRaceShoes © 2023 All rights reserved. Legal. Ethics.
                Privacy. Cookies. Accessibility Statement.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
