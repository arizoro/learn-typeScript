export enum CustomersType {
    REGULLAR = "REGULLAR",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM"
}

export type Customers = {
    id : string,
    name : string,
    type : CustomersType
}