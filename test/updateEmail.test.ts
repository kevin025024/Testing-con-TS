import { Contacto} from "../src/contactos";
import { updateEmail } from "../src/updateEmail";

describe("Actualiza el email de un contacto", ()=>{
    test("Deberia cambiar el email del contacto Clevey", ()=>{
        const contacto: Contacto = updateEmail("k025@hotmail.com", "Clevey" );  
        expect(contacto.email).toBe("k025@hotmail.com"); 
    });
    test("deberia actualizar el email del contacto Hendrika", ()=>{
        const contacto: Contacto = updateEmail("etec@gmail.com", "Hendrika");
        expect(contacto.email).toBe("etec@gmail.com");
    });
});