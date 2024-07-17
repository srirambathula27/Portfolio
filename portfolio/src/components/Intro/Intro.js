import React from 'react'
import './Intro.css'
import {Link} from 'react-scroll';
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.jpg'



export default function Intro() {
  return (
    <>
    <section className="introsec" id='intro'>
        <div className='introcontent'>
        <span className="hi">Hi ,</span>
      <span className="intro">I'm <span className="introname">Sriram <br/></span>website designer</span>
      <p className="intropara">I am skilled web designer using react js with an experience of 2-3 years</p>
      <Link><button className="btn"><img src={logo3} alt="logo3" className='btnimg' /></button></Link>

        </div>
      

    <div>
        <img src={logo4} alt="logo4" className="person" />
        

    </div>
    </section>
    </>
    

  )
}
