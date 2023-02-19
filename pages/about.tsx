//import styles from '@/styles/Home.module.css'
import Link from 'next/link'
//import MainLayout from '@/components/layouts/MainLayout'

import { DarkLayout } from '../components/layouts/DarkLayout'
import MainLayout from '../components/layouts/MainLayout'

export default function About() {
  return (
    <>
          <h1 >
              Ir a <Link href='/'>Index</Link>
          </h1>
     </>
  )
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (<MainLayout>
            <DarkLayout>
            {page}
            </DarkLayout>
          </MainLayout>)
}