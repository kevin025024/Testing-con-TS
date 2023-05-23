import { sorpresa } from "../src/constantes";

test('Deberia existir una constante con la palabra "Sorpresa"', () => {
  expect(sorpresa).toBe("Sorpresa");
});
