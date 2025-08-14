import Styles from "./Handheld-Camera.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HandheldlePage() {
  return (
    <div className={Styles.handheld}>
      <h1>Hanheld Photography</h1>

      <div className={Styles.handheldCam}>
        <p>8k ultra-quality panaromic camera.&nbsp;
          <Link href="/all-page/handheld-photography/learn-more">
            <button className={Styles.seeMore}>Learn more...</button>
          </Link></p>
        <h2>OSMO 369</h2>
        <div className={Styles.button}>
          {" "}
          ¥5863
          <Link href="/all-page/handheld-photography/sell-product">
            <button> Buy it Now</button>
          </Link>
        </div>

        <Image
          className={Styles.Image2}
          src="/HandheldDrons/handheld5.png"
          alt="Drone 2"
          width={600}
          height={350}
          quality={100}
        />
      </div>





      <div className={Styles.handheldControl}>
        <div className={Styles.handheldCam}>
          <p>Ligthweight self-media camera stsbilizer.&nbsp;
          <Link href="/all-page/handheld-photography/learn-more">
            <button className={Styles.seeMore}>Learn more...</button>
          </Link></p>
          <h2>DJI RS 4 MINI</h2>
          <div className={Styles.button}>
            ¥6777
            <Link href="/all-page/handheld-photography/sell-product">
              <button> Buy it Now</button>
            </Link>
          </div>
          <Image
            src="/HandheldDrons/handheld7.jpg"
            alt="Drone 2"
            width={500}
            height={350}
            quality={100}
          />
        </div>




        <div className={Styles.handheldCam}>
          <p>Lightweight commercial photography stabilizer.&nbsp;
          <Link href="/all-page/handheld-photography/learn-more">
            <button className={Styles.seeMore}>Learn more...</button>
          </Link></p>
          <h2>DJI RS 4</h2>
          <div className={Styles.button}>
            ¥5452
            <Link href="/all-page/handheld-photography/sell-product">
              <button> Buy it Now</button>
            </Link>
          </div>

          <Image
            src="/HandheldDrons/handheld1.png"
            alt="Drone 2"
            width={500}
            height={350}
            quality={100}
          />
        </div>





        <div className={Styles.handheldCam}>
          <p>Flashing-quality action camera.&nbsp;
          <Link href="/all-page/handheld-photography/learn-more">
            <button className={Styles.seeMore}>Learn more...</button>
          </Link></p>
          <h2>OSMO ACTION 4</h2>
          <div className={Styles.button}>
            ¥5733
            <Link href="/all-page/handheld-photography/sell-product">
              <button> Buy it Now</button>
            </Link>
          </div>
          <Image
            src="/HandheldDrons/handheld2.jpg"
            alt="Drone 2"
            width={500}
            height={350}
            quality={100}
          />
        </div>




        <div className={Styles.handheldCam}>
          <p>8k ultra-quality panaromic camera..&nbsp;
          <Link href="/all-page/handheld-photography/learn-more">
            <button className={Styles.seeMore}>Learn more...</button>
          </Link></p>
          <h2>DJI RONIN 4D</h2>
          <div className={Styles.button}>
            ¥3644
            <Link href="/all-page/handheld-photography/sell-product">
              <button> Buy it Now</button>
            </Link>
          </div>

          <Image
            src="/HandheldDrons/handheld4.jpg"
            alt="Drone 2"
            width={500}
            height={350}
            quality={100}
          />
        </div>
        




        <div className={Styles.handheldCam}>
          <p>Ultra-flashing quality sports camera.&nbsp;
          <Link href="/all-page/handheld-photography/learn-more">
            <button className={Styles.seeMore}>Learn more...</button>
          </Link></p>
          <h2>OSMO ACTION 5 PRO</h2>
          <div className={Styles.button}>
            ¥4004
            <Link href="/all-page/handheld-photography/sell-product">
              <button> Buy it Now</button>
            </Link>
          </div>
          <Image
            src="/HandheldDrons/handheld6.jpg"
            alt="Drone 2"
            width={500}
            height={350}
            quality={100}
          />
        </div>







        <div className={Styles.handheldCam}>
          <p>8k ultra-quality panaromic camera.&nbsp;
          <Link href="/all-page/handheld-photography/learn-more">
            <button className={Styles.seeMore}>See more...</button>
          </Link></p>
          <h2>OSMO ACTION 4</h2>
          <div className={Styles.button}>
            ¥5034
            <Link href="/all-page/handheld-photography/sell-product">
              <button> Buy it Now</button>
            </Link>
          </div>
          <Image
            src="/HandheldDrons/handheld3.png"
            alt="Drone 2"
            width={500}
            height={350}
            quality={100}
          />
        </div>




        <div className={Styles.handheldCam}>
          <p>One-inc pocket gimbal camera.&nbsp;
          <Link href="/all-page/handheld-photography/learn-more">
            <button className={Styles.seeMore}>Learn more...</button>
          </Link></p>
          <h2>OSMO POCKET 3</h2>
          <div className={Styles.button}>
            ¥2803
            <Link href="/all-page/handheld-photography/sell-product">
              <button> Buy it Now</button>
            </Link>
          </div>
          <Image
            src="/HandheldDrons/handheld8.jpg"
            alt="Drone 2"
            width={500}
            height={350}
            quality={100}
          />
        </div>




        <div className={Styles.handheldCam}>
          <p>8k ultra-quality panaromic camera.&nbsp;
          <Link href="/all-page/handheld-photography/learn-more">
            <button className={Styles.seeMore}>Learn more...</button>
          </Link></p>
          <h2>OSMO MEGA 360 PRO</h2>
          <div className={Styles.button}>
            ¥2598
            <Link href="/all-page/handheld-photography/sell-product">
              <button> Buy it Now</button>
            </Link>
          </div>
          <Image 
            src="/HandheldDrons/handheld11.jpeg"
            alt="Drone 2"
            width={500}
            height={350}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
