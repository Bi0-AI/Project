import styles from "./industry.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Transportation() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Industrial Helping</h1>
      {/* <div className={styles.baImage}>
        <Image
          src="/CommercialProducts/transfortation/transport3.jpg"
          alt="background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div> */}

      {/* Contron alll image: to set side by side */}
      <div className={styles.controlImage}>
        {/* For write h1, p */}
        <div className={styles.headding}>
          <h1>DJI Matrice 300 RTK</h1>
          <p>
            Performs industrial inspections and mapping with high accuracy.
            &nbsp;
            <Link href="/all-page/commercial-products/industry/learn-more">
              {" "}
              <button className={styles.seeMore}>Learn more...</button>{" "}
            </Link>{" "}
          </p>

          {/* For set button */}
          <div className={styles.button}>
            ¥4999
            <Link href="/">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image
            src="/CommercialProducts/industrey/industry2.png"
            alt="drone"
            width={700}
            height={350}
          />
        </div>

        <div className={styles.headding}>
          <h1>DJI Mavic 3 Enterprise</h1>
          <p>
            Captures detailed images for industrial site inspections
            &nbsp;&nbsp;{" "}
            <Link href="/all-page/commercial-products/industry/learn-more">
              {" "}
              <button className={styles.seeMore}>Learn more...</button>{" "}
            </Link>{" "}
          </p>

          <div className={styles.button}>
            ¥3999
            <Link href="/">
              <button>Buy it now</button>
            </Link>
          </div>
          <Image
            src="/CommercialProducts/industrey/industry3.png"
            alt="drone"
            width={700}
            height={350}
          />
        </div>

        <div className={styles.headding}>
          <h1>Flyability Elios 3 </h1>
          <p>
            Operates safely indoors for confined space inspections.&nbsp;&nbsp;{" "}
            <Link href="/all-page/commercial-products/industry/learn-more">
              {" "}
              <button className={styles.seeMore}>Learn more...</button>{" "}
            </Link>
          </p>
          <div className={styles.button}>
            ¥5899
            <Link href="/">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image
            src="/CommercialProducts/industrey/industry4.jpg"
            alt="drone"
            width={700}
            height={350}
          />
        </div>

        <div className={styles.headding}>
          <h1>Yuneec H520E </h1>
          <p>
            Designed for surveying, inspection, and public safety
            operations..&nbsp;&nbsp;{" "}
            <Link href="/all-page/commercial-products/industry/learn-more">
              {" "}
              <button className={styles.seeMore}>Learn more...</button>{" "}
            </Link>
          </p>
          <div className={styles.button}>
            ¥6590
            <Link href="/">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image
            src="/CommercialProducts/industrey/industry5.jpg"
            alt="drone"
            width={700}
            height={350}
          />
        </div>

        <div className={styles.headding}>
          <h1>Skydio X2 </h1>
          <p>
            Autonomous navigation for inspection and security tasks.&nbsp;&nbsp;{" "}
            <Link href="/all-page/commercial-products/industry/learn-more">
              {" "}
              <button className={styles.seeMore}>Learn more...</button>{" "}
            </Link>
          </p>
          <div className={styles.button}>
            ¥7590
            <Link href="/">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image
            src="/CommercialProducts/industrey/industry6.jpg"
            alt="drone"
            width={700}
            height={350}
          />
        </div>

        <div className={styles.headding}>
          <h1>Water transport </h1>
          <p>
            Reduce supply transportation costs and <br></br>
            ensure water transportation efficiency.&nbsp;&nbsp;{" "}
            <Link href="/all-page/commercial-products/industry/learn-more">
              {" "}
              <button className={styles.seeMore}>Learn more...</button>{" "}
            </Link>
          </p>
          <div className={styles.button}>
            ¥4590
            <Link href="/">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image
            src="/CommercialProducts/industrey/industry7.jpg"
            alt="drone"
            width={700}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
