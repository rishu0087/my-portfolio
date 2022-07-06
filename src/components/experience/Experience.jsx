import React from 'react'
import './experience.css'
import ProgressBar from "@ramonak/react-progress-bar";
import {FaJava} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {FaPython} from 'react-icons/fa'
import {DiMysql} from 'react-icons/di'
import {DiCss3} from 'react-icons/di'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {FiFigma} from 'react-icons/fi'
import {AiOutlineGithub} from 'react-icons/ai'
import {DiMongodb} from 'react-icons/di'
import {SiTensorflow} from 'react-icons/si'
import {SiScikitlearn} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiKeras} from 'react-icons/si'
import {SiCplusplus} from 'react-icons/si'
const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container exp_container">
            <div className='exp_frontend'>
                <h3>Languages</h3>
                <div className='exp_content'>
                <article className='exp_details'>
                        <SiCplusplus className='exp_details-icon'/>
                        <div>
                            <h4>C/C++</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <FaJava className='exp_details-icon'/>
                        <div>
                            <h4>Java</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <FaPython className='exp_details-icon'/>
                        <div>
                            <h4>Python</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <DiMysql className='exp_details-icon'/>
                        <div>
                            <h4>SQL</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <AiFillHtml5 className='exp_details-icon'/>
                        <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <DiCss3 className='exp_details-icon'/>
                        <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <BsFillBootstrapFill className='exp_details-icon'/>
                        <div>
                            <h4>BootStrap</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <IoLogoJavascript className='exp_details-icon'/>
                        <div>
                            <h4>Javascript</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <FaReact className='exp_details-icon'/>
                        <div>
                            <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className='exp_backend'>
            <h3>Frameworks &#38; Tools</h3>
                <div className='exp_content'>
                <article className='exp_details'>
                        <SiScikitlearn className='exp_details-icon'/>
                        <div>
                            <h4>Scikit</h4>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <SiTensorflow className='exp_details-icon'/>
                        <div>
                            <h4>TensorFlow</h4>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <SiKeras className='exp_details-icon'/>
                        <div>
                            <h4>Keras</h4>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <FaNodeJs className='exp_details-icon'/>
                        <div>
                            <h4>NodeJs</h4>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <DiMysql className='exp_details-icon'/>
                        <div>
                            <h4>MySQL</h4>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <DiMongodb className='exp_details-icon'/>
                        <div>
                            <h4>MongoDB</h4>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <AiOutlineGithub className='exp_details-icon'/>
                        <div>
                            <h4>GitHub</h4>
                        </div>
                    </article>

                    <article className='exp_details'>
                        <FiFigma className='exp_details-icon'/>
                        <div>
                            <h4>Figma</h4>
                        </div>
                    </article>
                </div>
                <div className='prog'>
                <span>App development</span>
                    <div>
                        <ProgressBar 
                        completed={40}
                        bgColor="#4db5ff"
                        baseBgColor="#FFFFFF"
                        labelColor="#e8090"
                        transitionDuration="10ms"
                        transitionTimingFunction="ease-in"
                        animateOnRender
                        dir="auto"
                        />
                    </div>
                    <span>Frontend</span>
                    <div>
                        <ProgressBar 
                        completed={70}
                        bgColor="#4db5ff"
                        baseBgColor="#FFFFFF"
                        labelColor="#e8090"
                        transitionDuration="10ms"
                        transitionTimingFunction="ease-in"
                        animateOnRender
                        dir="auto"
                        />
                    </div>
                    <span>Backend</span>
                    <div>
                        <ProgressBar 
                        completed={65}
                        bgColor="#4db5ff"
                        baseBgColor="#FFFFFF"
                        labelColor="#e8090"
                        transitionDuration="10ms"
                        transitionTimingFunction="ease-in"
                        animateOnRender
                        dir="auto"
                        />
                    </div>
                    <span>Machine Learning</span>
                    <div>
                        <ProgressBar 
                        completed={50}
                        bgColor="#4db5ff"
                        baseBgColor="#FFFFFF"
                        labelColor="#e8090"
                        transitionDuration="10ms"
                        transitionTimingFunction="ease-in"
                        animateOnRender
                        dir="auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience