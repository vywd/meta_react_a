import React from 'react'
import './projectcard.css'

export const ProjectCard = ({props}) => {
  return (
    <div className={'pcard' + ' div'+props.id + ' scaledclass'}>
        <img src={props.image} alt="" className='pcard_image' />
        <div className='pcard_name'>{props.name}</div>
        <div className='pcard_discr'>{props.discr}</div>
        <a href="#proj" className='pcard_link'>See more</a>
    </div>
  )
}
