import { Contacto} from "../src/contactos";
import { updateFirstName} from "../src/updateFirstAndLastName";
import { updateSurname } from "../src/updateFirstAndLastName";

describe("update firt and last name", ()=>{
    test("Deberia cambiar el nombre a dixon", ()=>{
        const contacto: Contacto = updateFirstName("Dixon", 2);  
        expect(contacto.first_name).toBe("Dixon"); 
    });
    test("deberia cambiar el apellido a Martinez", ()=>{
        const contacto2: Contacto = updateSurname("Martinez", 2);
        expect(contacto2.last_name).toBe("Martinez");
    });
});