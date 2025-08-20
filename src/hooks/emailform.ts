import React, { useRef } from "react";
import { toast } from "./use-toast";

export const sendEmail = async (form) => {
  try {
    const formData = new FormData(form.current);
    formData.append("access_key", "3faf241f-63de-40a8-8cc3-2f9adb0249ed"); // substitua pela sua chave do Web3Forms

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title:"Email enviado",
        description:"Seu email foi enviado, entraremos em contato em até 24h"
      })
    } else {
      toast({
        title:"Email não enviado",
        description:"Seu email não  foi enviado, verifique suas infomrações ou entre em contato pelo whatsapp"
      })
    }
  } catch (error) {
    console.error("ERROR...", error);
  }
};
