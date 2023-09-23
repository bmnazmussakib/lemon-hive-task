import React from 'react'
import './sponsore.scss'

export default function Sponsor() {
  return (
    <div className='sponsor'>
      <div className="container">
        <h2 className='section-title'>Our Sponsor</h2>
        <div className="single-sponsore">
          <h6 className="sponsor-title">🥇 Gold Sponsor</h6>
          <ul className='sponsor-list'>
            <li>
              <a href="">
                <img src="/img/layers.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/img/sisyphus.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="single-sponsore">
          <h6 className="sponsor-title">🥈 Silver Sponsors</h6>
          <ul className='sponsor-list'>
            <li>
              <a href="">
                <img src="/img/circooles.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/img/catalog.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/img/gofore.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="single-sponsore">
          <h6 className="sponsor-title">🥉 Bronze Sponsors</h6>
          <ul className='sponsor-list'>
            <li>
              <a href="">
                <img src="/img/sisyphus.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/img/quotient.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/img/layers.png" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="/img/circooles2.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
