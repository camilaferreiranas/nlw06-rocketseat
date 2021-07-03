//Falta implementar exceptions personalizadas 
export interface IErrorEmail {
    name: string , 
    message: string,
    code: number
}

export interface IErrorEmailConstructor {
    new(message?: string): Error;
    (message?: string): Error;
    readonly prototype: Error;
}