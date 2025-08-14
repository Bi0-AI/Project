

// Alada vhabe use  client korlam....abong ayta Header import kore dibo ...........
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Use-Client.module.css"

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={styles.DropdownParent}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a className={styles.dropdownToggle}>
        Commercial products <br></br> and solutions
      </a>

      {open && (
        <ul className={styles.dropdownList}>
          <li>
            <Link href="/all-page/commercial-products/agriculture"> Agri-Culture Application </Link>
          </li>

          <li>
            <Link href="/all-page/commercial-products/industry">Industry Application </Link>
          </li>
          <li>
            <Link href="/all-page/commercial-products/transportation">Transportation Application </Link>
      
           
          </li>
        </ul>
      )}
    </li>
  );
}
