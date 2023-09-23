import React from 'react'
import styles from './footer.module.scss';
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineDribbble } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.logo}>
            <Link href="/">
            <img src="/img/logo-white.png" alt="" />
            </Link>
          </div>

          <ul>
            <li>
              <Link href="">
                <AiOutlineTwitter />
              </Link>
            </li>
            <li>
              <Link href="">
                <AiFillLinkedin />
              </Link>
            </li>
            <li>
              <Link href="">
                <BsFacebook />
              </Link>
            </li>
            <li>
              <Link href="">
                <AiOutlineDribbble />
              </Link>
            </li>
          </ul>

          <p>© 2023 Lemonhive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
