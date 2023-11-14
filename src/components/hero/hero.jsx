import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Content is the key to building an audience</h1>
      <p>
        Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a
        volute ligula and aliquet tortor
      </p>
      <button>Get started for free</button>
      <p>✔ No credit card needed,for free 14-day trail</p>
      <img src="./img/hero-person.png" alt="Hero person" />
    </div>
  );
}
