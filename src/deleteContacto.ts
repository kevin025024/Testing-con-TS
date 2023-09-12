import { Contacto, contactos} from "../src/contactos";

const deleteContacto= (first_name: string): Contacto[]=>
{
    
    
    const contacto_a_borrar = contactos.filter((contacto)=> contacto.first_name = first_name 
    )
    return contactos.filter((contacto1) => contacto1 !== contacto_a_borrar);
    
    
}
export{deleteContacto};