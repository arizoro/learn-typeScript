export type ID = number | string

export type Category = {
    id : ID,
    name : string,
    descriptions? :string
}

export type Product = {
    id : ID,
    name : string,
    price : number,
    category : Category,
    descriptions? : string
}