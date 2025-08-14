import Styles from "./Aerial.module.css";
import Image from "next/image";

import Link from "next/link";
export default function AerialPage() {
  return (
    <div className={Styles.aerial}>
      <h1>Aerial Photography Drones</h1>

      <div className={Styles.imageWrapper}>
        <p>
          Three camera flashing magic Drone.&nbsp;
          <Link href="/all-page/aerial-photography/learn-more">
            <button className={Styles.seeMore}>Learn more...</button>
          </Link>
        </p>

        <h2> DJI MAVIC 4PRO</h2>
        <div className={Styles.button}>
          ¥3599
          <Link  href="/all-page/aerial-photography/product-sale">
            <button>Buy it now</button>
          </Link>
        </div>

        <Image style={{backgroundColor:"hsla(202, 44%, 95%, 0.90)"}}
          className={Styles.Image1}
          src="/AerialDrons/areal8.png"
          alt="Drone 1"
          width={700}
          height={350}
        />
      </div>



      <div className={Styles.aerialControl}>
        <div className={Styles.imageWrapper2}>
          <p>
            All-round blog Drone.&nbsp;
            <Link href="/all-page/aerial-photography/learn-more">
              <button className={Styles.seeMore}>Learn more...</button>
            </Link>
          </p>
          <h2> DJI MINI 4 PRO</h2>

          <div className={Styles.button}>
            ¥4999
            <Link href="/all-page/aerial-photography/product-sale">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image
            src="/AerialDrons/areial1.png"
            alt="Drone 2"
            width={500}
            height={350}
            quality={100}
          />
        </div>




        <div className={Styles.imageWrapper2}>
          <p>
            Pocket blog Drone.&nbsp;
            <Link href="/all-page/aerial-photography/learn-more">
              <button className={Styles.seeMore}>Learn more...</button>
            </Link>
          </p>
          <h2> DJI AIR 3s</h2>

          <div className={Styles.button}>
            ¥2900
            <Link href="/all-page/aerial-photography/product-sale">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image 
            src="/AerialDrons/areial6.jpg"
            alt="Drone 3"
            width={500}
            height={350}
            quality={100}
          />
        </div>







        <div className={Styles.imageWrapper2}>
          <p>
            All-round blog drone with omnidirection obstracle avoidance.&nbsp;
            <Link href="/all-page/aerial-photography/learn-more">
              <button className={Styles.seeMore}>Learn more...</button>
            </Link>
          </p>
          <h2> DJI FLIP</h2>
          <div className={Styles.button}>
            ¥3095
            <Link href="/all-page/aerial-photography/product-sale">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image
            src="/AerialDrons/areial3.png"
            alt="Drone 4"
            width={500}
            height={350}
            quality={100}
          />
        </div>









        <div className={Styles.imageWrapper2}>
          <p>
            Pocket Vlog Drone.&nbsp;
            <Link href="/all-page/aerial-photography/learn-more">
              <button className={Styles.seeMore}>Learn more...</button>
            </Link>
          </p>
          <h2> DJI NEO</h2>
          <div className={Styles.button}>
            ¥2945
            <Link href="/all-page/aerial-photography/product-sale">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image
            src="/AerialDrons/areial5.png"
            alt="Drone 5"
            width={500}
            height={350}
            quality={100}
          />
        </div>







        <div className={Styles.imageWrapper2}>
          <p>
            First-person drone glight experience.&nbsp;
            <Link href="/all-page/aerial-photography/learn-more">
              <button className={Styles.seeMore}>Learn more...</button>
            </Link>
          </p>
          <h2> DJI AVATA 2</h2>
          <div className={Styles.button}>
            ¥4096
            <Link href="/all-page/aerial-photography/product-sale">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image
            src="/AerialDrons/areial7.png"
            alt="Drone 6"
            width={500}
            height={350}
            quality={100}
          />
        </div>




        <div className={Styles.imageWrapper2}>
          <p>
            light flashing and combo planning to sky.&nbsp;
            <Link href="/all-page/aerial-photography/learn-more">
              <button className={Styles.seeMore}>Learnmore...</button>
            </Link>
          </p>
          <h2> DJI COMBO 3d</h2>
          <div className={Styles.button}>
            ¥3904
            <Link href="/all-page/aerial-photography/product-sale">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image
            src="/AerialDrons/areial4.jpg"
            alt="drone 6"
            width={500}
            height={350}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
