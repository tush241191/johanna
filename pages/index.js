import Head from 'next/head';
import Image from 'next/image';
import Countdown from 'react-countdown';
import Snowfall from 'react-snowfall'
import { Fireworks } from 'fireworks/lib/react'

import Img from '../public/1.jpg'
import { useEffect, useState } from 'react';
export default function Home() {
  
  const Completionist = () => {
    const [show,setShow] = useState(false)
    useEffect(() => {
      setTimeout(()=>{
        setShow(true)
      },5000)
    },[])
    let fxProps = {
      count: 3,
      interval: 200,
      colors: ['#C539B4', '#852999', '#FB2576'],
      calc: (props, i) => ({
        ...props,
        x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
        y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
      })
    }

    return (
      <div className='h-screen w-full bg-black relative'>
        <div className='w-full h-full'>
          {show &&
            <Fireworks {...fxProps} />
          }
          <Image src="/snow3.jpg" width={100} height={100} className="w-full h-full fixed" />
          <div className='w-full h-full flex items-start sm:items-center justify-center fixed'>
            <video autoplay muted loop id="myVideo" className='w-auto h-screen opacity-60 sm:opacity-75'>
              <source src="/v.mp4" type="video/mp4"/>
            </video>
          </div>
          <div className='w-full h-full absolute flex justify-center items-end sm:items-center bg-black/80'>
            <Snowfall/>
            <div>
              <div className='block sm:flex text-4xl sm:text-8xl text-center space-y-8 sm:space-y-0 sm:space-x-2 py-4'>
                <div className='animate-pulse hidden sm:block animate-spin'>🥳</div>
                <h1 className='text-white opacity-90 animate-ping'> Happy Birthday! </h1>
                <div className='animate-pulse animate-spin'>🥳</div>
              </div>
              <div className='mt-4 max-w-md mx-auto text-red-400 text-center text-2xl italic pb-4 px-4'>
                <p>
                A very happy birthday to you today!
                <br/>
                <br/>
                May you celebrate your birthday with overflowing happiness and joy, my dear, and I hope that this year ahead blesses you with all the wonderful things you’ve been wishing for!
                </p>
              </div>
            </div>
          </div>
          </div>
      </div>
    )
  }
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return( 
        <div className={`w-full h-screen bg-black`}>
          <div className="relative h-full w-full">
          <Snowfall/>
          <Image src="/snow3.jpg" width={100} height={100} className="w-full h-full fixed opacity-30" />
            <div className="absolute flex h-full w-full">
              <div className="relative overflow-hidden h-full w-full">
                <div className="absolute inset-0 h-full w-full">
                  <div className="absolute inset-0 bg-indigo-100 mix-blend-multiply"></div>
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex items-center justify-center h-full">
                  <div className='text-center relative text-white'>
                    <div className='mt-2 flex flex-col md:grid md:grid-cols-4 gap-2'>
                      <div className='w-40 flex flex-col p-2 border-4 border-sky-500 border-double '>
                        <h4 className='text-4xl md:text-8xl'>{days}</h4>
                        <span className='mt-2 text-blue-400'>Days</span>
                      </div>
                      <div className='w-40 flex flex-col p-2 border-4 border-sky-500 border-double'>
                        <h4 className='text-4xl md:text-8xl'>{hours}</h4>
                        <span className='mt-2 text-blue-400'>Hours</span>
                      </div>
                      <div className='w-40 flex flex-col p-2 border-4 border-sky-500 border-double'>
                        <h4 className='text-4xl md:text-8xl'>{minutes}</h4>
                        <span className='mt-2 text-blue-400'>Minutes</span>
                      </div>
                      <div className='w-40 flex flex-col p-2 border-4 border-sky-500 border-double animate-ping'>
                        <h4 className='text-4xl md:text-8xl'>{seconds}</h4>
                        <span className='mt-2 text-blue-400'>Seconds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };
  return (
    <>
      <Head>
        <title>Its my birthday</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>    
      </Head>
      <Countdown date="2022-12-04" renderer={renderer} />
    </>
  )
}
