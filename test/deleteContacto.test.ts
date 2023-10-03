import { Contacto, contactos } from "../src/contactos";
import { deleteContacto} from "../src/deleteContacto";

describe("elimina a un contacto", ()=>{
    test("Deberia eleiminar a Kirsti", () => {
        const contactos: Contacto[] = deleteContacto("Kirsti");  
        expect(contactos).toHaveLength(9); 
    });
    test("deberia eliminar el contaco muhammad", ()=>{
        const contactos: Contacto[] = deleteContacto("Marwin");
        expect(contactos).toHaveLength(9);
    })
});