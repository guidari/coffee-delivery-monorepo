import { v4 as uuidv4 } from "uuid";

class Product {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  tags: string[];
  image: string;
  // created_at: string;
  // updated_at: string;

  constructor() {
    this.id = uuidv4();
    this.name = "";
    this.description = "";
    this.quantity = 0;
    this.price = 0;
    this.tags = [];
    this.image = "";
    // this.created_at = "";
    // this.updated_at = "";
  }
}

export { Product };
