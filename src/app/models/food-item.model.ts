export class foodObject{
    id: number;
    name: string;
    price: number;
    description: string;
    imgPath: string;

    constructor(id: number = 0,name:string,price:number, desc: string, img: string){
        
        this.id= id;
        this.name = name;
        this.price = price;
        this.description = desc;
        this.imgPath = img;
    }

}