import { Product } from "../model/Product";
import { PrismaClient } from "@prisma/client";

interface CreateProductDTO {
  name: string;
  description: string;
  quantity: number;
  price: number;
  tags: string[];
  image: string;
}

interface DeleteProductDTO {
  id: string;
}

interface UpdateQuantityDTO {
  id: string;
  quantity: number;
}

interface FindByNameDTO {
  name: string;
}

interface FindByIdDTO {
  id: string;
}

const prisma = new PrismaClient();

class ProductsRepository {
  private products: Product[] = [];

  // create
  async create({
    name,
    description,
    quantity,
    price,
    tags,
    image,
  }: CreateProductDTO): Promise<void> {
    // const product = new Product();

    // Object.assign(product, {
    //   name,
    //   description,
    //   quantity,
    //   price,
    //   tags,
    //   image,
    //   // created_at: new Date(),
    // });

    await prisma.product.create({
      data: {
        name,
        description,
        quantity,
        price,
        tags,
        image,
      },
    });

    // this.products.push(product);
  }

  // delete
  async delete({ id }: DeleteProductDTO): Promise<void> {
    // const productIndex = this.products.findIndex(
    //   (product) => product.id === id
    // );
    console.log({ id });
    await prisma.product.delete({
      where: {
        id,
      },
    });
    // if (productIndex !== -1) {
    //   this.products.splice(productIndex, 1);
    // }
  }

  // updateQuantity
  async updateQuantity({
    id,
    quantity,
  }: UpdateQuantityDTO): Promise<Product | undefined> {
    // const product = this.products.find((product) => product.id === id);

    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        quantity,
      },
    });

    // if (!product) {
    //   return undefined;
    // }

    // product.quantity = quantity;
    // product.updated_at = new Date();

    // const productIndex = this.products.findIndex(
    //   (productIndex) => productIndex === product
    // );

    // Object.assign(this.products[productIndex], product);

    return product;
  }

  // findByName
  findByName({ name }: FindByNameDTO): Product | undefined {
    return this.products.find((product) => product.name === name);
  }

  // findById
  findById({ id }: FindByIdDTO): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  // list
  // async list(): Promise<Product[]> {
  //   const allProducts = await prisma.product.findMany();
  //   return allProducts;
  // }
}

export { ProductsRepository };
