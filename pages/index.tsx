import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <div className='w-full h-full flex items-center justify-center'>
        <div>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        </div>
      </div>
    </div>
  )
}
