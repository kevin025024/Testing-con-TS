import { filterByFirstLetterInFullName } from "../src/filter";

describe("filterByFirstLetterInFullName", () => {
  test("deberia devolver 158 contactos que empiezan con la letra M", () => {
    const contacts = filterByFirstLetterInFullName("M");
    expect(contacts).toHaveLength(158);
  });
});
