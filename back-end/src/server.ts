import express from "express";
import { productRoute } from "./product.routes";
import swaggerUi from "swagger-ui-express";
// import swaggerJsdoc from "swagger-jsdoc";
import cors from "cors";
// import { swaggerOptions } from "./swagger";
import swaggerFile from "./swagger.json";

const app = express();

const allowedOrigins = ["http://localhost:5173"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(cors(options));

app.use(express.json());

app.use("/products", productRoute);

app.listen(3333, () => console.log("Server is running on port 3333"));
