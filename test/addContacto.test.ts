import { Contacto, contactos } from "../src/contactos";
import { addContacto } from "../src/addContacto";

describe("Agrega un nuevo contacto", ()=>{
    test("Deberia cambiar el email del contacto Clevey"), ()=>{
        const contacto: Contacto[] = addContacto(contacto);  
        expect(contactos).toHaveLength(10); 
    };
    test("deberia actualizar el email del contacto Hendrika"), ()=>{
        const contacto: Contacto[] = addContacto(contacto);
        expect(contactos).toHaveLength(11);
    }
});