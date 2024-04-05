import { Employe, Manager } from "../src/employe";

describe('Extends interface', () => {
  it('should support extends interface', () => {
    const employe :Employe = {
        id : "1",
        name : "Ari",
        division : "humas"
    }
    console.info(employe)

    const manager :Manager = {
        id : "2",
        name : "Purnama",
        division : "Manager",
        numberOfEmployes : 10
    }
    
    console.info(manager)
  });
})
