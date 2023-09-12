import { Contacto, contactos } from "../src/contactos";
import { deleteContacto} from "../src/deleteContacto";

describe("elimina a un contacto", ()=>{
    test("Deberia eleiminar a Kirsti", () => {
        const contacto: Contacto[] = deleteContacto("Kirsti");  
        expect(contacto).toHaveLength(9); 
    });
    test("deberia eliminar el contaco muhammad", ()=>{
        const listaContacto: Contacto[] = deleteContacto( "Marwin");
        expect(listaContacto).toHaveLength(8);
    })
});