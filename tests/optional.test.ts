describe('Optional operator', () => {
  it('should support opperator undifiend', () => {
    const sayHello = (name? : string | null) => {
        if(name){
            console.info(`Hello ${name}`)
        }else{
            console.info('Hello')
        }
    }
    sayHello('Ari')
    const name :string | undefined = undefined
    sayHello(name)
    sayHello(null)
  });
})
