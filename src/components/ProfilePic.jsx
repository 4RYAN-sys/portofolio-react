import React from 'react'
import pp from '../assets/images/pp.jpeg'
import '../styles/ProfilePic.css'

export default function ProfilePic({size='120px'}){
  return (
    <div className="pp-wrap">
      <img src={pp} alt="profile" style={{width:size, height:size}} />
    </div>
  )
}
