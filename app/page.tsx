import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Founder from '@/components/Founder'
import Gallary from '@/components/Gallary'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Packages from '@/components/Packages'
import Review from '@/components/Review'
import Services from '@/components/Services'
import Image from 'next/image'

export default function Home() {
  return (
   <>
    <Header />
    <Hero />
    <Packages />
    <Services />
    <Gallary />
    <Review />
    <Founder />
    <Contact />
    <Footer />    
   </>
  )
}
