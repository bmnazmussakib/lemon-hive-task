import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Conference from './components/Conference/Conference'
import Sponsore from './components/Sponsore/Sponsore'

export default function Home() {
  return (
    <main>
        <Hero />
        <Conference />
        <Sponsore />
    </main>
  )
}
