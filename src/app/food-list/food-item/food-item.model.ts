export class foodObject{
    name: string;
    price: string;
    description: string;
    imgPath: string;

    constructor(name:string,price:string, desc: string, img: string){
        this.name = name;
        this.price = price;
        this.description = desc;
        this.imgPath = img;
    }

}