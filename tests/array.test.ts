describe('Array', () => {
  it('should must be same in js', () => {
    const names :string[] = ["rudi", "dian", "anto"];
    const values :number[] = [1, 2, 3]
    
    console.info(names)
    console.info(values)
  });

  it('should read only array ', () => {
    const hobbys :ReadonlyArray<string> = ["main game", "baca buku"]
    console.info(hobbys)
    console.info(hobbys[0])
    console.info(hobbys[1])

    // hobbys[0] = "menabung"
  });

  it('should readonly tuple', () => {
    const person :readonly[string, number, boolean] = ['ari', 10, true]
    console.info(person[0])
    console.info(person[1])
    console.info(person[2])

    // person[0] = 100
  });
})
