import React from 'react'
import './Skills.css'
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import {Link} from 'react-scroll';
export default function Skills() {
  return (
    <div>
      <section className="skills" id='skill'>
        <span className="abtskills">About my skills</span>
        <span className="desc">I have knowledge of Python, Java, and C programming languages, along with web development experience using React.js.</span>
        <div className="skillBars">
            <div className="skillbar">
            <img src={img1} alt="" className="skillbarimg" />
                <div className="skillbartext">
                    <h1>python</h1>
                </div>
            </div>
            <div className="skillbar">
                <img src={img2} alt="" className="skillbarimg" />
                <div className="skillbartext">
                    <h1>Java</h1>
                </div>
            </div>
            <div className="skillbar">
                <img src={img3} alt="" className="skillbarimg" />
                <div className="skillbartext">
                    <h1>C programming</h1>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
