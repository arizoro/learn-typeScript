describe('Functions', () => {
  it('should support function in ts', () => {
    const sayHello = (name :string) :string => {
        return `Hello ${name}`
    }

    const printSayHello = (name :string) :void => {
        console.info(sayHello(name))
    }

    printSayHello("Ari")
  });

  it('should support default value', () => {
    const sayHello = (name :string="Guest") :string => {
        return `Hello ${name}`
    }

    expect(sayHello()).toBe("Hello Guest")
    expect(sayHello("Ari")).toBe("Hello Ari")
  });

  it('should support rest parameters', () => {
    function sum(...values :number[]){
        let total = 0;
        for(const value of values){
            total += value
        }
        return total
    }
    expect(sum(1,2,3,4,5)).toBe(15)
  });

  it('should support functions parameter', () => {
    const fullname = (first_name :string, last_name? :string) :string => {
        if(last_name){
            return `Hello ${first_name} ${last_name}`
        }else{
            return `Hello ${first_name}`
        }
    }

    expect(fullname("Ari")).toBe("Hello Ari")
    expect(fullname("Ari", "Purnama")).toBe("Hello Ari Purnama")
  });

  it('should function is a parameter', () => {
    const sayHello = (name :string, filter :(name :string) => string) :string=> {
        return `Hello ${filter(name)}`
    }

    function toUpper(name :string) :string{
        return name.toUpperCase()
    }

    expect(sayHello("Ari", toUpper)).toBe("Hello ARI")
    expect(sayHello("Ari", function(name :string) :string{
        return name.toUpperCase()
    })).toBe("Hello ARI")
    expect(sayHello("Ari", (name :string) :string => {
        return name.toUpperCase()
    })).toBe("Hello ARI")
    
  });
})
