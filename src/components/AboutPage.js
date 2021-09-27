import React from 'react'


export default function AboutPage(props) {

    return (
        <>
        <div className='aboutPageContainer mx-1'>
        <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        What is &nbsp; <b> Convertext</b>?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
      <b>Convertext</b>&nbsp; is a text utility which will help you in correcting alphabet case errors and unnecessary spaces between words and sentences.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Uses of &nbsp; <b>Convertext</b>.
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
       <p><b>1.</b> You can convert your text and some part of your text to upper case and lower case. </p>
       <p><b>2.</b> You can capitalise words and sentences which you want.</p>
       <p><b>3.</b> You can remove extra spaces between words and sentences.</p>
       <p><b>4.</b> Also you can download your final corrected text as .txt file.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
       Who made this?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
     This is made by <b>Prateek Sharma Deohra</b>. He is sophomore at IIT Roorkee doing B.Tech in Electronics and Communication Engineering.
      </div>
    </div>
  </div>

        </div>
        <div className='my-5 mx-5'>
        <a  className={`text-${props.mode==='light'?'dark':'light'}`} href="https://docs.google.com/forms/d/e/1FAIpQLSfmchAlbg1s7Sofcdqn9r6J9Z8N5hLzH-XQOaCVAznYJcftng/viewform?usp=sf_link">Submit any complaint/suggestion here.</a> <span className={`text-${props.mode==='light'?'dark':'light'}`}>It will help me in improving this web application.</span>
        </div>
        </div>
        </>
    )
}
