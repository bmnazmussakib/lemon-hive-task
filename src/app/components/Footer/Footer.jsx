import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.logo}>
            <img src="/img/logo-white.png" alt="" />
          </div>

          <ul>
            <li>
              <a href="">
                <img src="/img/twitter.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/img/twitter.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/img/twitter.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/img/twitter.png" alt="" />
              </a>
            </li>
          </ul>

          <p>© 2023 Lemonhive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
