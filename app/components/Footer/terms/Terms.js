import styles from "./Terms.module.css";

export default function TermsConditions() {
  return (
    <section className={styles.termsSection}>
      <h2>Terms & Conditions</h2>
      <p>
        By accessing and using this website, you accept and agree to be bound by the terms and conditions set forth herein. Please read them carefully.
      </p>
      <p>
        You agree not to misuse our services or engage in any activity that may harm the website, its users, or violate any laws.
      </p>
      <p>
        We reserve the right to modify or terminate the service for any reason without prior notice.
      </p>
      <p>
        All content provided is for informational purposes only and is subject to change without notice.
      </p>
      <p>
        If you have any questions about these terms, please contact us.
      </p>
    </section>
  );
}
