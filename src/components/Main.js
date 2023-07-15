import React, {useEffect, useState} from 'react'
import './main.css'
import avatar from './icons_avatars/avatar.png'
import {projects} from './icons_avatars/FutureworksDB'
import { ProjectCard } from './ProjectCard'
import { useScroll } from './ScrollContext'
import { ContactForm } from './ContactForm'



export const Main = () => {

  const scrollY = useScroll();

  const [isMounted, setisMounted] = useState(false)

  // function handlerload() {
  //   if (!isLoaded) setLoaded(!isLoaded)
  // }

  useEffect(() => {

    // const avatar = document.getElementsByClassName('greetingsImg');
    // avatar.classList.add('avatarCentred');
    //const element = ref.current;
    //element.classList.add('avatarCentred')
    //console.log(element.classList);

    setisMounted(true)

    // window.addEventListener('load', handlerload);
    //         return () => window.removeEventListener('load', handlerload);

  }, []);

  const projectsRender = projects.map(element => {
    return <ProjectCard key={element.id} props={element}/>
  })

  return (
    <main className='main'>
        <section className='greetings' style={{background: `rgb(111,111,${scrollY%225})`}}>
            <div className='greetingssection'>
                <img src={avatar} alt="" className={'greetingsImg' + (isMounted ? ' avatarCentred' : ' ')} />
                <div className='greetingsTxt'>Hi, i am Vladyslav</div>
                <div className='greetingsBio'>A React/React Native developer</div>
            </div>
        </section>
        <section className='projects'  id='proj' style={{background: `rgb(111,${scrollY%225},111)`}}>
          <div className='projectstext'>My future projects</div>
            <div className='grids'>
              {projectsRender}
            </div>
        </section>
        <section className='contscts'  id='cont' style={{background: `rgb(${scrollY%225},111,111)`}}>
         <ContactForm />
        </section>
    </main>
  )
}
