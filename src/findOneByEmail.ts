import { Contacto, contactos } from "../src/contactos";

const findOneByEmail = ( emailBuscado:string): Contacto=> {
    
    function checkMail(contacto: Contacto){
        return contacto.email === emailBuscado
    }
    const encontrado = contactos.filter(checkMail)
    return encontrado[0]
};
export {findOneByEmail};