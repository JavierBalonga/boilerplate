import * as yup from "yup";

const examplesIdSchema = yup
  .number()
  .integer("The 'id' must be an integer")
  .min(1, "The 'id' must be a positive number");

export default examplesIdSchema;
