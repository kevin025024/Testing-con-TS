import { Contacto, contactos } from "../src/contactos";
import { updateEmailOfContacto } from "../src/deleteContacto";

describe("Actualiza el email de un contacto", ()=>{
    test("Deberia cambiar el email del contacto Clevey"), ()=>{
        const contacto: Contacto[] = updateEmail(contacto);  
        expect(contactos.email).toBe("k025@hotmail.com"); 
    };
    test("deberia actualizar el email del contacto Hendrika"), ()=>{
        const contacto: Contacto[] = updateEmail(contacto);
        expect(contactos.email).toBe("hendrika@gmail.com");
    }
});