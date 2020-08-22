import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/sprajwala/H1B-Visa-Grant-Predictor" target="_blank" rel="noopener noreferrer">H1B Visa Grant Predictor</a></h3>
											<span>Python | PySpark | MLlib</span>
											<p className="icon">
											A H1B Visa Grant Predictor based on several factors like employer, wage, state etc.
											 Worked on H1B and green card cycles dataset from 2014-18 consisting of 600,000 rows,
											  53 columns of data. Performed ETL, visualized, big data analysis and modelled the 
											  data using matplotlib and MLlib respectively.
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
											<p className="icon">
											<span><a href="https://github.com/sprajwala/H1B-Visa-Grant-Predictor" target="_blank" rel="noopener noreferrer">See Project Here</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/sprajwala/Machine-Learning-Concepts" target="_blank" rel="noopener noreferrer">Machine Learning Concepts</a></h3>
											<span>Python | sklearn | matplotlib</span>
											<p className="icon">
											Here is a collection of all the things I tried out hands-on in Python to 
											understand and learn the concepts of machine learning. I have practiacally explored concepts from 
											Linear Regression, Supervised Learning, Unsupervised Learning, Perceptrons and Transfer Learning to name a few.	
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
											<p className="icon">
											<span><a href="https://github.com/sprajwala/Machine-Learning-Concepts" target="_blank" rel="noopener noreferrer">See Project Here</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/sprajwala/Analysing-Text-Data-using-Unsupervised-Machine-Learning-" target="_blank" rel="noopener noreferrer">Analysing Text Data using Unsupervised Machine Learning-</a></h3>
											<span>Explored a text dataset using unsupervised learning techniques to find any hidden 
												patterns in the data. Applied FastText word embedding and performed PCA on the data.</span>
											<p className="icon">
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
											<p className="icon">
											<span><a href="https://github.com/sprajwala/Analysing-Text-Data-using-Unsupervised-Machine-Learning-" target="_blank" rel="noopener noreferrer">See Project Here</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/sprajwala/Analysis-and-Prediction-on-Singapore-Housing-Dataset" target="_blank" rel="noopener noreferrer">Analysis and Prediction on Singapore Housing Dataset</a></h3>
											<span>Analysed Singapore housing dataset from the year 1990 to 2014. 
												Tested several machine learning models to predict the housing prices.
												 Performed feature selection using techniques like PCA.</span>
											<p className="icon">
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
											<p className="icon">
											<span><a href="https://github.com/sprajwala/Analysis-and-Prediction-on-Singapore-Housing-Dataset" target="_blank" rel="noopener noreferrer">See Project Here</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
