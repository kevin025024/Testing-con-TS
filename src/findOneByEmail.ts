import { Contacto, contactos } from "../src/contactos";

const findOneByEmail = ( emailBuscado:string): Contacto=> {
    
    function checkEmail(contacto: Contacto){
        if (contacto.email === emailBuscado)
        {
            return contacto.first_name
        }
    }
    const encontrado = contactos.filter(checkEmail)
    return encontrado[0]
};
export {findOneByEmail};

