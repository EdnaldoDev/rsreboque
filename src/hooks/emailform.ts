import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 export  const sendEmail = (form) => {

    emailjs
      .sendForm('service_8svq6l3', 'template_d53h8rw',form, {
        publicKey: 'HDbCqFMqVW_0OXL5a',
      })
      .then(    
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };