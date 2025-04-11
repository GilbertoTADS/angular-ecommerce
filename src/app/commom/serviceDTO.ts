export class ServiceDTO<T>{
    constructor(
        public readonly _embedded:T
    ){}
}