import { Contacto, contactos } from "../src/contactos";
import { selectContacto } from "../src/selectContacto";

describe("Seleccionar contactos", ()=>{
    test("Deberia seleccionar 2 contactos en una lista"), ()=>{
        const contacto: Contacto[] = selectContacto(contacto);  
        expect(contactos).toHaveLength(2); 
    };
    test("deberia seleccionar 3 contactos en una lista"), ()=>{
        const contacto: Contacto[] = selectContacto(contacto);
        expect(contactos).toHaveLength(3);
    }
});