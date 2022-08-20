import Express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import routes from "./routes";

const app = Express();

app.use(morgan("dev"));
app.use(json());
app.use(cors({ origin: "*", credentials: true }));

app.use("/", routes);

app.use(errorHandler);

export default app;
