require("dotenv").config();
import { AppDataSource } from "./utils/data-source";
import { DataSourceInitializer } from "./appDataSourceInitializer";
import { AppDataSource2 } from "./utils/data-source-compB";
import { AppDataSource3 } from "./utils/data-source-compC";
import { AppDataSource4 } from "./utils/data-source-compD";
import { AppDataSource1 } from "./utils/data-source-compA";

DataSourceInitializer({ appDataSource: AppDataSource, applicationPort: 8055 });
DataSourceInitializer({ appDataSource: AppDataSource1, applicationPort: 8056 });
DataSourceInitializer({ appDataSource: AppDataSource2, applicationPort: 8057 });
DataSourceInitializer({ appDataSource: AppDataSource3, applicationPort: 8058 });
DataSourceInitializer({ appDataSource: AppDataSource4, applicationPort: 8059 });
