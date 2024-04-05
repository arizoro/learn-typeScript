import { Customers, CustomersType } from "../src/enum";

describe('Enum', () => {
  it('should support enum', () => {
        const customers :Customers = {
            id : "2",
            name :"Ari",
            type : CustomersType.PLATINUM
        }

        console.info(customers)
  });
})
