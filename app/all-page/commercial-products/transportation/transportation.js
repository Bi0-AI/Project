import styles from "./transportation.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Transportation() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Transportation Drones</h1>
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
          <h1> Emergency transportation</h1>
          <p>
            Respond quickly and assist in the <br></br>
            transportation of emergency relief supplies. &nbsp;
            <Link href="/all-page/commercial-products/transportation/learn-more">
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
            src="/CommercialProducts/transfortation/transport1.jpg"
            alt="drone"
            width={700}
            height={350}
          />
        </div>

        <div className={styles.headding}>
          <h1>Firefighting transport</h1>
          <p>
            Efficient deployment ensures flexible <br></br>transportation of
            firefighting materials. &nbsp;&nbsp;{" "}
            <Link href="/all-page/commercial-products/transportation/learn-more">
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
            src="/CommercialProducts/transfortation/transport2.jpg"
            alt="drone"
            width={700}
            height={350}
          />
        </div>

        <div className={styles.headding}>
          <h1>Engineering Transportation </h1>
          <p>
            Break through terrain restrictions and ensure <br></br> safe and
            efficient construction of the project.&nbsp;&nbsp;{" "}
            <Link href="/all-page/commercial-products/transportation/learn-more">
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
            src="/CommercialProducts/transfortation/transport4.jpg"
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
            <Link href="/all-page/commercial-products/transportation/learn-more">
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
            src="/CommercialProducts/transfortation/transport6.webp"
            alt="drone"
            width={700}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
