import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Countdown from 'react-countdown';

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
        <div className='text-center'>
          <div>Countdown started 😊</div>
          <span className='text-blue-400'>{days}:{hours}:{minutes}:{seconds}</span>
        </div>
      )
    }
  };
  return (
    <div className='w-full h-screen'>
      <div className='w-full h-full flex items-center justify-center'>
        <div>
          <h1 className="text-3xl font-bold">
            <Countdown date="2022-12-05" renderer={renderer} />
          </h1>
        </div>
      </div>
    </div>
  )
}
