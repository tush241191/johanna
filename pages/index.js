import Countdown from 'react-countdown';
import Snowfall from 'react-snowfall'

import Img from '../public/1.jpg'
export default function Home() {

  const dateStr1 = '2022-12-05';
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return( 
        <div className='text-center relative text-white'>
          <div className='mt-2 flex flex-col md:grid md:grid-cols-4 gap-2'>
            <div className='w-40 flex flex-col p-2 border-4 border-sky-500 border-double'>
              <h1 className='text-4xl md:text-8xl'>{days}</h1>
              <span className='mt-2 text-blue-400'>Days</span>
            </div>
            <div className='w-40 flex flex-col p-2 border-4 border-sky-500 border-double'>
              <h1 className='text-4xl md:text-8xl'>{hours}</h1>
              <span className='mt-2 text-blue-400'>Hours</span>
            </div>
            <div className='w-40 flex flex-col p-2 border-4 border-sky-500 border-double'>
              <h1 className='text-4xl md:text-8xl'>{minutes}</h1>
              <span className='mt-2 text-blue-400'>Minutes</span>
            </div>
            <div className='w-40 flex flex-col p-2 border-4 border-sky-500 border-double'>
              <h1 className='text-4xl md:text-8xl'>{seconds}</h1>
              <span className='mt-2 text-blue-400'>Seconds</span>
            </div>
          </div>
        </div>
      )
    }
  };
  return (
    <div className={`w-full h-screen bg-black`}>
      <div className="relative h-full w-full">
      <Snowfall/>
        <div className="flex h-full w-full">
          <div className="relative overflow-hidden h-full w-full">
            <div className="absolute inset-0 h-full w-full">
              <div className="absolute inset-0 bg-indigo-100 mix-blend-multiply"></div>
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex items-center justify-center h-full">
              <Countdown date="2022-12-05" renderer={renderer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
