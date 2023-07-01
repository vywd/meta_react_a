import React from 'react'
import './main.css'
import avatar from './icons_avatars/avatar.png'


export const Main = () => {
  return (
    <main className='main'>
        <section className='greetings'>
            <div className='greetingssection'>
                <img src={avatar} alt="" className='greetingsImg' />
                <div className='greetingsTxt'>Hi, i am Vladyslav</div>
                <div className='greetingsBio'>A React/React Native developer</div>
            </div>
        </section>
        <section className='projects'  id='proj'></section>
        <section className='contscts'  id='cont'></section>
    </main>
  )
}
