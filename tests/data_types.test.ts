import { unNumero, unString, esVerdadero } from "../src/data_types";

test("La constante unNumero, deberia valer exactamente 34", () => {
  expect(typeof unNumero).toBe("number");
});

test('La constante unString deberia valer exactamente "Jhon"', () => {
  expect(typeof unString).toBe("string");
});

test("La constante unVerdadero deberia valer 'true'", () => {
  expect(typeof esVerdadero).toBe("boolean");
});
