export class Product {

    constructor(
        public sku:string,
        public name:string,
        public description:string,
        public price:number,
        public imageUrl:string,
        public active:boolean,
        public inventory:number,
        public dateCreated:Date,
        public lastUpdated:Date
    ){}
}
