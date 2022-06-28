import React from 'react'

const Newsletter = () => {
  return (
    <>
      <div className="newsletter-wrapper">
        <div className="newsletter">
          <h4>
            <b>Sign Up for Our Newsletter!</b>
          </h4>
          <p>for update and exclusive offers enter your email.</p>
        </div>
        <div className="newsletter-inner">
          <div>
            <input className="input" placeholder="Email address..." />
            <button className="btn">
              <b>Sign up</b>
            </button>
          </div>
          <div className='newsletter-inner2'>
            <input type="checkbox" />
            <p>I consent to my submitted data being collected and store.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter