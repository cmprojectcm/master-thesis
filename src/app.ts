require("dotenv").config();
import express, { Response } from "express";
import config from "config";
import validateEnv from "./utils/validateEnv";
import { AppDataSource } from "./utils/data-source";
import redisClient from "./utils/connectRedis";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import routes from "./routes/index";

const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Backend API Swagger Doc",
      version: "1.0.0",
    },
    schemes: ["http", "https"],
    servers: [{ url: "http://localhost:8055/" }],
  },
  apis: [`${__dirname}/routes/index.ts`, `build/src/routes/index.ts`],
};

const swaggerSpec = swaggerJSDoc(options);

AppDataSource.initialize()
  .then(async () => {
    // VALIDATE ENV
    validateEnv();

    const app = express();

    // MIDDLEWARE

    // 1. Body parser
    app.use(bodyParser.json());

    // 2. Logger

    // 3. Cookie Parser

    // 4. Cors
    app.use(cors());

    // 5. helmet
    app.use(helmet());

    // 6. Swagger
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // app.use(bodyParser.json());
    app.use(routes);
    // ROUTES

    // HEALTH CHECKER
    app.get("/api/healthchecker", async (_, res: Response) => {
      const message = await redisClient.get("try");
      res.status(200).json({
        status: "success",
        message,
      });
    });

    // UNHANDLED ROUTE

    // GLOBAL ERROR HANDLER

    const port = config.get<number>("port");
    app.listen(port);

    console.log(`Server started on port: ${port}`);
  })
  .catch((error) => console.log(error));
