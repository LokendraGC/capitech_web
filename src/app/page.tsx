import Image from 'next/image'
import Hero from './hero/page'
import { DictionaryProvider } from '@/context/dictionaryContext'

export default function Home() {
  return (
    <main className="">
     <Hero/>
    </main>
  )
}
