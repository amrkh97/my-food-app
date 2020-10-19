export class foodObject{
    name: string;
    price: number;
    description: string;
    imgPath: string;

    constructor(name:string,price:number, desc: string, img: string){
        this.name = name;
        this.price = price;
        this.description = desc;
        this.imgPath = img;
    }

}