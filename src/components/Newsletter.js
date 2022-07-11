import React from 'react'

const Newsletter = () => {
  return (
    <>
      <div className="newsletter-wrapper">
        <div className="newsletter-left">
          <h4>
            <b>Sign Up for Our Newsletter!</b>
          </h4>
          <p>for update and exclusive offers enter your email.</p>
        </div>
        <div className="newsletter-right">
          <form>
            <input className="textinput"  type="text"  placeholder="Email address..."/>
            <input type="submit" className="btn" />
            <input type="checkbox"  className="checkboxinput"/>
            <p>I consent to my submitted data being collected and store.</p>
           </form>  
        </div>
      </div>
    </>
  );
}

export default Newsletter