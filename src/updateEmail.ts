import { Contacto, contactos } from "./contactos";
const updateEmail = (newEmail: string, name: string):Contacto=>
{
//primero hay que encontrar el contacto
//segundo hay que cambiarle el email
function updateMail(contacto: Contacto){
    if (contacto.first_name === name)
    {
        contacto.email = newEmail
        return contacto.email
    }
}
const encontrado = contactos.filter(updateMail)
return encontrado[0]
    

};

export{updateEmail};