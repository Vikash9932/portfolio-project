import React from 'react'
import { AiOutlineHome, AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { MdWorkOutline, MdOutlineWeb } from 'react-icons/md'
import { BsCloudDownload } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import me from '../assets/IMG_20200215_221259~3.jpg'
import cv from '../assets/Vikash_Kumar_VisualCV_010522.pdf'

const Mine = () => {
    return (
        <div className='mine'>
            <div className='mine__image'>
                <img src={me} alt="Personal Profile Pic" />
            </div>
            <div className='mine__options'>
                <div className='mine__options__myinfo'>
                    <div className='mine__options__myinfo__name'>Vikash Kumar</div>
                    <div className='mine__options__myinfo__social'>
                        <a href="https://github.com/vikash9932" target="_blank" rel="noreferrer"><AiOutlineGithub size="40" /></a>
                        <a href="https://www.linkedin.com/in/vikash-kumar-729702103" target="_blank" rel="noreferrer"><AiOutlineLinkedin size="40" /></a>
                        <a href={cv} download  ><BsCloudDownload size="30" />CV</a>
                    </div>
                </div>
                <div className='mine__options__designation'>Front End Developer with React</div>
                <div className='mine__options__nav'>
                    <Link to="/"><AiOutlineHome size="50" />Home</Link>
                    <Link to="/work"><MdWorkOutline size="50" />Work</Link>
                    <Link to="/projects"><MdOutlineWeb size="50" />Projects</Link>
                    <Link to="/contact"><AiOutlineMail size="50" />Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Mine
