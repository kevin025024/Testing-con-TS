import { contactos } from "./contactos";

const buscarPorPrimerLetraDelNombre = (letra: string) => {
  return contactos.filter((contacto) => {
    return contacto.first_name[0] === letra || contacto.last_name[0] === letra;
  });
};

export { buscarPorPrimerLetraDelNombre };
