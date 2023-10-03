import {Contacto, contactos } from "./contactos";

const updateFirstName = (new_first_name: string, id: number)=>
{
//encontrar por id
//crear la funcion de update
    
    const contactoAActualizar = contactos.find((contacto)=> contacto.id === id);

    if (contactoAActualizar)
    {
        contactoAActualizar.first_name = new_first_name
    }
    return contactoAActualizar
};

const updateSurname = (new_last_name: string, id: number)=>
{

    let contactoAActualizar = contactos.find((contacto)=> contacto.id === id);

    if (contactoAActualizar)
    {
        contactoAActualizar.last_name = new_last_name
    }
    return contactoAActualizar
};

export{updateFirstName};
export{updateSurname};

