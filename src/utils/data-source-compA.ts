require("dotenv").config();
import "reflect-metadata";
import { DataSource } from "typeorm";
import config from "config";

const postgresConfig = config.get<{
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}>("postgresConfig");

export const AppDataSource1 = new DataSource({
  ...postgresConfig,
  port: 6501,
  type: "postgres",
  synchronize: false,
  logging: true,
  entities: ["./src/entities/**/*.ts"],
  migrations: ["./src/migrations/**/*.ts"],
  subscribers: ["./src/subscribers/**/*.ts"],
});
