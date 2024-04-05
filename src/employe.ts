export interface Employe {
    id :string,
    name :string,
    division :string
}

export interface Manager extends Employe{
    numberOfEmployes :number
}