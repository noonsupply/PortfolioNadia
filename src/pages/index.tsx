import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import About from './about'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
    <Header>

<div>Ceci est mon header</div>
<div>Je dois l'enlever ?</div>

    </Header>
    <About></About>
 </>
  )
}
