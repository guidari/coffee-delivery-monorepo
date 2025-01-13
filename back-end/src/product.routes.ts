import { Router } from "express";
import { ProductsRepository } from "./repository/ProductsRepository";
import { PrismaClient } from "@prisma/client";

const productRoute = Router();
const productsRepository = new ProductsRepository();
const prisma = new PrismaClient();

// Define interfaces for product data
interface Product {
  name: string;
  description: string;
  quantity: number;
  price: number;
  tags: string[];
  image: string;
}

productRoute.post("/", (request: any, response: any) => {
  const { name, description, quantity, price, tags, image }: Product =
    request.body;

  const productAlreadyExists = productsRepository.findByName({ name });

  if (productAlreadyExists) {
    return response.status(404).json({ error: "Product already exists" });
  }

  productsRepository.create({
    name,
    description,
    quantity,
    price,
    tags,
    image,
  });

  return response.status(201).send();
});

productRoute.get("/", async (request: any, response: any) => {
  const allProducts = await prisma.product.findMany();
  return response.status(200).json(allProducts);
});

productRoute.delete("/:id", (request: any, response: any) => {
  const { id } = request.params;

  productsRepository.delete({ id });

  return response.status(204).send();
});

productRoute.patch("/:id", (request: any, response: any) => {
  const { id } = request.params;
  const { quantity } = request.body; // Assuming quantity is in the body

  // if (typeof quantity !== "number") {
  //   return response.status(400).json({ error: "Invalid quantity provided" });
  // }

  // const product = productsRepository.findById({ id });

  // if (!product) {
  //   return response.status(404).json({ error: "Product not found" });
  // }

  const updatedProduct = productsRepository.updateQuantity({ id, quantity });

  return response.status(200).json(updatedProduct);
});

export { productRoute };
