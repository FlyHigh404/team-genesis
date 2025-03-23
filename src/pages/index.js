'use server'

import Navbar from '@/components/shared/Navbar'
import Section1 from '@/components/home/Section1'
import Section2 from '@/components/home/Section2'
import Section3 from '@/components/home/Section3'
import Section4 from '@/components/home/Section4'
import Section5 from '@/components/home/Section5'
import Section6 from '@/components/home/Section6'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Toaster position="bottom-center" reverseOrder={false} />
      </main>
    </>
  )
}
