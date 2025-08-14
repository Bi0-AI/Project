import Image from "next/image";

import Styles from "./Header.module.css";
import Link from "next/link";
import DropdownMenu from "./Use-Client";
export default function Header() {
  return (
    <nav className={Styles.nav}>
      <ul className={Styles.ul}>


        {/* Image a click korle Home jabe.. */}
        <li>
          <Link href="/">
            <Image src="/Dji-HomePage/logo.svg"alt="home-page" width={100} height={45} />
          </Link>
        </li>

        <li>
          <Link href="/all-page/aerial-photography">
            Aerial <br></br> photography <br></br> drones
          </Link>
        </li>

        <li>
          <Link href="/all-page/handheld-photography">
            Handheld photography <br></br> equipment
          </Link>
        </li>

        <li>
          <Link href="/all-page/outdoor-power">
            Outdoor <br></br> Power Supply{" "}
          </Link>
        </li>

        {/*  Commercial Products import korlam:   use client Niye ashlamm, Use Client  theke */}
        <DropdownMenu />
        <li>
          <Link href="/all-page/service-support">
            Service & <br></br> Support{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
