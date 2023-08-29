import { Contacto, contactos } from "../src/contactos";

const findByEmail = (email: string): Contacto[] => {
    if (email === "") {
        return contactos;
    }

    return contactos.filter((contacto)=>contacto.email.includes(email));
    
};

export{findByEmail};