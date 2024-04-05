import { Seller } from "../src/seller";

describe('Interface', () => {
  it('should support interface', () => {
    const seller :Seller = {
        id : 1,
        name : "Toko buah",
        nip : "123932922",
        npwp : "123904395"
    }

    seller.name = "Toko HP"
    // seller.nip = "2342351"
    console.info(seller)
  });

  it('should support functions interface', () => {
    interface AddFunctions {
      (value1 : number, value2: number):number
    }

    const add :AddFunctions = (value1, value2) => {
      return value1 + value2
    }

    expect(add(2, 3)).toBe(5)
  });
  it('should support indexable array', () => {
    interface StringArray {
      [index : number] : string
    }

    const person :StringArray = ["Ari", "windu", "joko", "fadil"]
    console.info(person)
    console.info(person[2])
  });

  it('should support stringDictionary indexable', () => {
    interface StringDictionary{
      [index :string]:string
    }

    const dictionary :StringDictionary = {
      "name" : "ari",
      "addres" : "medan"
    }

    expect(dictionary["name"]).toBe("ari")
    expect(dictionary["addres"]).toBe("medan")
  });

  it('should support function in interface', () => {
    interface Person {
      name :string,
      sayhello(name :string) :string
    }

    const person :Person = {
      name : "Ari",
      sayhello : function(name :string) :string {
        return `hallo ${name} nama saya ${this.name}`
      }
    }
    
    console.info(person.sayhello("Budi"))
  });

  it('should support intersection types', () => {
    interface HasName {
      name :string
    }

    interface HasId {
      id :string
    }

    type Domain = HasName & HasId

    const person :Domain ={
      id : "1",
      name : "Ari"
    }
    console.info(person)

  });
})


