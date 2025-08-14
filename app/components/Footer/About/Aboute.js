
import Link from "next/link";
import styles from "./About.module.css"
export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h2>About Me</h2>
      <p>
        DroneWorld is a leading provider of drone sales and services based at Yunnan University, China. We offer advanced drones and accessories for various applications including photography, videography, agriculture, surveillance, and industrial uses.
      </p>
      <p>
        Our mission is to deliver high-quality products and reliable services that enable our customers to fully harness the potential of drone technology. We stay updated with the latest innovations and prioritize customer satisfaction above all.
      </p>




  <div className={styles.contact}>
  <h1>Contact me</h1>

  <h2>
    Location: 
    <span className={styles.value}>
      <Link href="http://english.ynu.edu.cn/">Yunnan University, China</Link>
    </span>
  </h2>  

  <h2>
    Number: 
    <span className={styles.value}>+86 13170637850</span>
  </h2>      

  <h2>
    WeChat ID: 
    <span className={styles.value}>LOVE-AI_2024</span>
  </h2>   
</div>




    </section>
  );
}
