import * as yup from "yup";

const createExampleSchema = yup.object().shape({
  name: yup
    .string()
    .required("The 'name' cannot be empty")
    .min(1, "The 'name' cannot be empty")
    .max(255, "The 'name' must be less than 255 characters"),
  description: yup
    .string()
    .max(1024, "The 'description' must be less than 1024 characters"),
});

export default createExampleSchema;
