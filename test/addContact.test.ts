import { Contacto, contactos } from "../src/contactos";
import { addContact } from "../src/addContact";

describe("Agrega un nuevo contacto", () => {
  test("Deberia cambiar el email del contacto Clevey", () => {
    const contacto: Contacto = {
      id: 11,
      first_name: "Juan",
      last_name: "Perez",
      email: "jperez@gmail.com",
      ip_address: "123.434.434.4",
      gender: "Male",
    };
    const contactos: Contacto[] = addContact(contacto);
    expect(contactos).toHaveLength(11);
  });
});
