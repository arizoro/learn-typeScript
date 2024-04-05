describe('Any', () => {
  it('should data any', () => {
    const data :any = {
        id: 1,
        name : "Ari",
        man : true
    }
    data.id = 'dua';
    data.name = 20
    console.info(data)
  });

})
