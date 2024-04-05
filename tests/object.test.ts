describe('object', () => {
  it('should object type', () => {
    const person :{id : string, name :string, hobby? :string[]} = {
        id : "2",
        name : "Ari"
    }
    console.info(person)

    person.id = "3"
    person.name = "Purnama"

    console.info(person)
  });
})
