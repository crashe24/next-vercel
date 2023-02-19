import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <>
      <MainLayout>
            <h1 className={'titles'}>
                  Ir a <Link href='/about'>
                          About
                        </Link>
              </h1>
              <div className="titles">
                <p className={'titles'}>
                  Get started by  is editing&nbsp;
                  <code className={'titles'}>pages/index.js</code>
                </p>
              
              </div>
              <div className='grid'>
              </div>
      </MainLayout>
    </>
  )
}
