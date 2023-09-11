
import { Contacto } from "../src/contactos";

const updateIPAddress = (contactos: Contacto[]) =>
{
    
    return contactos.map(contacto => {
        return {
            ...contacto,
            ip_address: contacto.ip_address + "." + contacto.id
        };
    }); 
};

export{updateIPAddress};