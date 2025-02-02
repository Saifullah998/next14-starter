import Links from "./links/links"
import styles from  "./navbar.module.css"
import Link from "next/link";


const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>logo</Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
