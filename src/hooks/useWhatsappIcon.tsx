// WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=5517996139290&text=ola gostaria de saber, mais sobre os trailers&type=phone_number&app_absent=0" // Substitua pelo seu número com DDI + DDD
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        padding: '15px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
        fontSize: '40px',
      }}
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
