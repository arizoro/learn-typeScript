import { seyHello, sum } from "../src/sey-hello";

describe('SeyHello', () => {
    it('should function seyHello', () => {
        expect(seyHello('ari')).toBe("Hello ari")
    });
})

describe('Sum', () => {
  it('should sum functions', () => {
    expect(sum(10, 5)).toBe(15)
  });
})


