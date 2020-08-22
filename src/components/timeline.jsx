import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate Teaching Assistant for Deep Learning and Machine Learning at NYU<span>June 2020 - present</span></h2>
                        <p>As a teaching assistant I am actively involved in preparing content, homework 
                          and labs for the class. I have mentored over 15 students on their final project 
                          and 40 students per week on course content. I conducted python study group sessions 
                          for beginners, hold office hours and grade exams.    </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Justworks, New York <span>June 2020 - August 2020</span></h2>
                        <p>As an intern at Justworks, I worked with the Payments and Tax Unit department to 
                          develop new features for the platform using Ruby on Rails framework. I worked on 
                          developing a tool in Ruby for validating ACH transaction files for Justworks. These 
                          transaction files are critical to the business and there was no system currently in 
                          place for validating them. My solution saved Justworks the trouble of rejection of 
                          transaction file from banks and reduced delays in payment by 80%.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Masters in Computer Science at New York University<span>September 2019 - present</span></h2>
                        <p>I took a break from my career as a software developer at HSBC and decided to pursue a Masters degree 
                          because I felt a passion towards Machine Learning and Data Science and wanted to explore it
                          in the academic setting to obtain a formal instruction in this discipline. 
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at HSBC, India<span>2017-2019</span></h2>
                        <p>Recruited as one of the acer graduates at HSBC, I worked on several projects involving technologies 
                          like Machine Learning, Spring Boot and Micro-services and Cloud. I have had the opportunity to 
                          interact with the business time and again and to understand their issues and to ideate and 
                          implement new age technological solutions for them. I also had the privilege to attend 
                          Grace Hopper Celebrations India 2018 as a delegate representing HSBC.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>BE in Computer Science at University of Pune, India <span>2013-2017</span></h2>
                        <p>I published a paper on Internet of Things Authors: Prajwala Srivatsa, Amit Pandhare, 
                          “Indoor Air Quality Control: IoT Solution”, NCPCI – 2016, Pune, India.
                        </p> 
                        <a href="https://www.academia.edu/34973025/Indoor_Air_Quality_IoT_Solution" target="_blank" rel="noopener noreferrer">Read it here </a>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
