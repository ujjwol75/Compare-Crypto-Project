import React,{useState} from 'react';
import usePostHook from '../customeHooks/usePostHook'; 
import {APIs} from '../../pages/api/hello';

const Newsletter = () => {
  const {
    mutate: createMutate,
    isPostError: errorMessage,
    isPostSuccess: successMessage,
    postData: postData,
  } = usePostHook({
    queryKey: 'suscribeToNewsLetter',
  });

  const handleNewsLetterClick = (email) => {
   
    const url = APIs.newsLetter;
    const formData = {
      email: email,
    };
    console.log('data: ' , formData)
    try {
      createMutate({ url, formData });
      
    } catch (e) {
      console.log(e);
    }
    if(successMessage){
      console.log('success: ' , successMessage)
    }
  };

  const [formValue, setFormValue] = useState("");
    
  const handleClick = (e) => {
      e.preventDefault();
      handleNewsLetterClick(formValue);
      setFormValue("");
  };
  return (
    <>
      <div className="newsletter-wrapper">
        <div className="newsletter-left">
          <h3>Sign Up for Our Newsletter!</h3>
          <p>for update and exclusive offers enter your email.</p>
        </div>
        <div className="newsletter-right">
          <form  onSubmit={handleClick}>
            <input className="textinput"  type="email"  placeholder="Email address..."
             value={formValue}
             onChange={(e)=>setFormValue(e.target.value)}
            />
            <input type="submit" className="btn" onClick={handleClick}/>
            <input type="checkbox"  className="checkboxinput"/>
            <p>I consent to my submitted data being collected and store.</p>
           </form>  
        </div>
      </div>
    </>
  );
}

export default Newsletter