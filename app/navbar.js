import Image from 'next/image';
import Link from 'next/link';
import vwlogo from '../public/images/vwlogo.png';
import style from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.logoContainer}>
        <Link href="/">
          <Image src={vwlogo} alt="Logo" width={250} height={250} />
        </Link>
      </div>

      <ul className={style.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/valuebets">Value Bets</Link>
        </li>
        <li>
          <Link href="/nbavalue">NBA Player Props</Link>
        </li>
      </ul>
      <ul className={`${style.navLinks} ${style.registerLogin}`}>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
