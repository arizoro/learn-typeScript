export interface Seller {
    id : number,
    name : string,
    description? : string,
    readonly nip : string,
    readonly npwp : string
}