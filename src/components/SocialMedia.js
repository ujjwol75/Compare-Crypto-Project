import React from 'react'
import {FiFacebook} from 'react-icons/fi'
import { BsTwitter } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <>
     <div className=''>
        <FiFacebook className='socialmedia'/>
        <BsTwitter className='socialmedia'/>
        <FaLinkedinIn className='socialmedia'/>
        <FaTelegramPlane className='socialmedia'/>
     </div>
    </>
  )
}

export default SocialMedia