describe('Union type', () => {
  it('should data union', () => {
    let sample :string |number |boolean = "Ari"
    console.info(sample)
    
    sample = 10
    console.info(sample)

    sample = true
    console.info(sample)
  });

  it('should support type operator', () => {
    const procces = (value :string | number | boolean) => {
        if(typeof value === "string"){
            return value.toUpperCase()
        }else if(typeof value === "number"){
            return value + 10
        }else{
            return !value
        }
    }
    expect(procces("ari")).toBe("ARI");
    expect(procces(2)).toBe(12);
    expect(procces(true)).toBe(false);
  });
})
