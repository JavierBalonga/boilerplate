import * as yup from "yup";

const getExamplesQuerySchema = yup.object().shape({
  page: yup
    .number()
    .integer("The 'page' must be an integer")
    .min(0, "The 'page' must be a positive number")
    .default(0),
  pageSize: yup
    .number()
    .integer("The 'pageSize' must be an integer")
    .min(1, "The 'pageSize' must be a positive number")
    .default(10),
  search: yup.string(),
  orderBy: yup
    .mixed<"id" | "name" | "description">()
    .oneOf(["id", "name", "description"])
    .default("id"),
  orderDirection: yup
    .mixed<"asc" | "desc">()
    .oneOf(["asc", "desc"])
    .default("asc"),
});

export default getExamplesQuerySchema;
