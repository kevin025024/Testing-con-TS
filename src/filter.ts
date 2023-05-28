import { contacts } from "./contacts";

const filterByFirstLetterInFullName = (letter: string) => {
  return contacts.filter((contact) => {
    return contact.first_name[0] === letter || contact.last_name[0] === letter;
  });
};

export { filterByFirstLetterInFullName };
