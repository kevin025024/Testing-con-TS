import { Contacto, contactos } from "./contactos";
const addContact = (contacto: Contacto) => {
  contactos.push(contacto);
  return contactos;
};
export { addContact };
