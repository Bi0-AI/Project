import Link from "next/link";
import styles from "./Footer.module.css"; // তোর CSS ফাইল

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* Quick Link */}
      <div className={styles.quickLink}>
        <h1> Quick know</h1>
        <Link href="/components/Footer/About" className={styles.link}>About Us</Link>
        <Link href="/components/Footer/all-products" className={styles.link}>Products</Link>
        <Link href="/all-page/service-support" className={styles.link}>Service</Link>
      </div>
<hr></hr>
      {/* Social Media Icons */}
      <div className={styles.socialMedia}>
        <h1>Social  Medias</h1>
        <Link href="https://www.facebook.com/" className={styles.link}>Facebook</Link>
        <Link href="https://www.youtube.com/" className={styles.link}>YouTube</Link>
        <Link href="https://www.instagram.com/" className={styles.link}>Instagram</Link>
        
      </div>
    <hr></hr>
      {/* Privacy Policy */}
      <div className={styles.privacy}>
        <h1> Privacy & Policy</h1>
        <Link href="/components/Footer/Privacy" className={styles.link}>Privacy Policy</Link>
        <Link href="/components/Footer/terms" className={styles.link}>Terms & Conditions</Link>
      </div>



    <div className={styles.copyRight}>
    <p> 
        &copy; 2025 DroneWorld. All rights reserved.</p>
    </div>

    </footer>

);
}
