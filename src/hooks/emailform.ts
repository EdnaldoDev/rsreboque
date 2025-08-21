import React, { useRef } from "react";
import { toast } from "./use-toast";

export const sendEmail = async (form) => {
  try {
    const formData = new FormData(form.current);
    formData.append("access_key", "ae141300-ea9d-44e4-a9ac-d6d40f262c4a"); // substitua pela sua chave do Web3Forms

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
