export class Product {
    id: string="";
    name: string="";
    price: number = 0;
    quantity: number = 0;
    category: Category = new Category();
    like: number = 0;
}
export class Category {
    id: string = "";
    type: string = "";
}

