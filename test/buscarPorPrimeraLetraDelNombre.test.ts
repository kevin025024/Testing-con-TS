import { Contacto } from "../src/contactos";
import { buscarPorPrimerLetraDelNombre } from "../src/buscarPorPrimerLetraDelNombre";

describe("buscarPorPrimerLetraDelNombre", () => {
  test("deberia encontrar 3 contactos que empiecen con la letra M", () => {
    const contactos: Contacto[] = buscarPorPrimerLetraDelNombre("M");
    expect(contactos).toHaveLength(3);
  });
});
