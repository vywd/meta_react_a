import React from 'react';
import {useState} from "react";
import './ContactForm.css'

export  const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [enquiry, setEnquiry] = useState('enquiry');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert("Account created!"); 
    clearForm(); 
   }; 
  
   const clearForm = () => {
    setName('');
    setEmail('');
    setEnquiry('');
    setMsg('');
   }

   const getIsFormValid = () => { 
    return ( 
      name && 
      validateEmail(email) && 
      msg.length >= 8 && 
      enquiry !== "enquiry"
    );
   }; 

   function validateEmail(mail) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email)
   }

  return (
    <form onSubmit={handleSubmit} className='form_container'>
          <div className="Field"> 
           <label> 
             Name
           </label> 
           <input 
             value={name} 
             onChange={(e) => { 
               setName(e.target.value); 
             }} 
             placeholder="" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email address
           </label> 
           <input 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="" 
           /> 
         </div> 
          <div className="Field"> 
           <label> 
             Type of enquiry
           </label> 
           <select value={enquiry} onChange={(e) => setEnquiry(e.target.value)}> 
             <option value="Freelance project proposal">Freelance project proposal</option> 
             <option value="Remote job">Remote job</option> 
             <option value="Office job">Office job</option> 
           </select> 
         </div> 
         <div className="Field"> 
          <label> 
             Your message 
           </label> 
           <textarea
             value={msg} 
             onChange={(e) => { 
               setMsg(e.target.value); 
             }} 
             placeholder="" 
           /> 
          </div> 
         <button type="submit" disabled={!getIsFormValid()}> 
         {/* <button type="submit" disabled={!getIsFormValid()}>  */}
           Submit 
         </button> 
    </form>
  )
}
