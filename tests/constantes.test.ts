import { sorpresa } from "../src/constantes";

test('Deberia existir una constante la palabra "Sorpresa"', () => {
  expect(sorpresa).toBe("Sorpresa");
});
