export class IProduct{
    productName:string;
    imageSrc:string;
    price:string;
    productId :string;
    productQty:number;

    constructor( productName:string,imageSrc:string,price:string,productId:string,productQty:number){
            this.productName = productName;
            this.imageSrc = imageSrc;
            this.price = price;
            this.productId = productId;
            this.productQty = productQty;
    }
}