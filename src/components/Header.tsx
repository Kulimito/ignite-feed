import styles from "./Header.module.scss";

import igniteLogo from "../assets/ignite-simbol.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo" />
    </header>
  );
}
