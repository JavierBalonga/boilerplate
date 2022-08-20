import dotnev from "dotenv";
import * as yup from "yup";

dotnev.config();

const envSchema = yup.object().shape({
  NODE_ENV: yup
    .mixed<"development" | "production">()
    .oneOf(["development", "production"])
    .default("development"),
  PORT: yup.number().default(3001),
  DATABASE_URL: yup.string().required(),
  DATABASE_LOGS: yup.bool().default(false),
});

const env = envSchema.validateSync(process.env);

export default env;
