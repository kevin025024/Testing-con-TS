import {Contacto, contactos} from "../src/contactos";

let newList: Contacto[] 

const deleteContacto = (first_name: string): Contacto[]=>
{
//Primero debo filtrar por nombre
//Segundo debo eliminar a ese contacto
    newList = contactos.filter(contacto => contacto.first_name !== first_name);
    return newList

}
export{deleteContacto};
