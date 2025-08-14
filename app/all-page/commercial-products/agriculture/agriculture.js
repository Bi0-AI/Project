import styles from "./agreculture.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Agreculture() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Make agriculture easier and make life better</h1>

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
          <h1>DJI Agras T30</h1>
          <p>
            Sprays pesticides and fertilizers evenly over crops. &nbsp;
            <Link href="/all-page/commercial-products/agriculture/learn-more">
          
              <button className={styles.seeMore}>Learn more...</button>
            </Link>
          </p>

          {/* For set button */}
          <div className={styles.button}>
            ¥4999
            <Link href="/">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image
            src="/CommercialProducts/agricultue/agri7.jpg"
            alt="drone"
            width={700}
            height={350}
          />
        </div>

        <div className={styles.headding}>
          <h1> Hylio AG-122 </h1>
          <p>
            Covers large fields quickly with accurate spraying. &nbsp;&nbsp;{" "}
            <Link href="/all-page/commercial-products/agriculture/learn-more">
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
            src="/CommercialProducts/agricultue/agri6.jpg"
            alt="drone"
            width={700}
            height={350}
          />
        </div>

        <div className={styles.headding}>
          <h1>DJI Agras T20 </h1>
          <p>
            Provides precise crop spraying with high efficiency. &nbsp;&nbsp;{" "}
            <Link href="/all-page/commercial-products/agriculture/learn-more">
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
            src="/CommercialProducts/agricultue/agri3.jpg"
            alt="drone"
            width={700}
            height={350}
          />
        </div>

        <div className={styles.headding}>
          <h1>XAG P100 Agricultural Drone </h1>
          <p>
            Automates crop spraying and seeding. &nbsp;&nbsp;{" "}
            <Link href="/all-page/commercial-products/agriculture/learn-more">
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
            src="/CommercialProducts/agricultue/agri2.jpg"
            alt="drone"
            width={700}
            height={350}
          />
        </div>

        <div className={styles.headding}>
          <h1> Yamaha Fazer R G2 </h1>
          <p>
            Performs aerial spraying with precision control. &nbsp;&nbsp;{" "}
            <Link href="/all-page/commercial-products/agriculture/learn-more">
              {" "}
              <button className={styles.seeMore}>Learn more...</button>{" "}
            </Link>
          </p>
          <div className={styles.button}>
            ¥6899
            <Link href="/">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image
            src="/CommercialProducts/agricultue/agri1.jpg"
            alt="drone"
            width={700}
            height={350}
          />
        </div>

        <div className={styles.headding}>
          <h1>DJI Agras T40 </h1>
          <p>
            Delivers powerful spraying for large farmlands. &nbsp;&nbsp;{" "}
            <Link href="/all-page/commercial-products/agriculture/learn-more">
              {" "}
              <button className={styles.seeMore}>Learn more...</button>{" "}
            </Link>
          </p>
          <div className={styles.button}>
            ¥8899
            <Link href="/">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image
            src="/CommercialProducts/agricultue/agri8.jpg"
            alt="drone"
            width={700}
            height={350}
          />
        </div>

        <div className={styles.headding}>
          <h1>AgEagle RX60 </h1>
          <p>
            Performs precision agriculture spraying and surveying.&nbsp;&nbsp;{" "}
            <Link href="/all-page/commercial-products/agriculture/learn-more">
              {" "}
              <button  className={styles.seeMore}>Learn more...</button>{" "}
            </Link>
          </p>
          <div className={styles.button}>
            ¥7899
            <Link href="/">
              <button>Buy it now</button>
            </Link>
          </div>

          <Image
            src="/CommercialProducts/agricultue/agri9.jpg"
            alt="drone"
            width={700}
            height={350}
          />
        </div>

        <div className={styles.headding}>
          <h1>Agras MG-1P </h1>
          <p>
            Sprays pesticides with automated flight paths..&nbsp;&nbsp;{" "}
            <Link href="/all-page/commercial-products/agriculture/learn-more">
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
            src="/CommercialProducts/agricultue/agri10.jpg"
            alt="drone"
            width={700}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
