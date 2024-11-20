import { config } from "dotenv";

import { ZodError, z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.string().default("development"),
});

config();

try {
  EnvSchema.parse(import.meta.env);
} catch (error) {
  if (error instanceof ZodError) {
    let message = "Missing required values in .env:\n";
    error.issues.forEach((issue) => {
      message += issue.path[0] + "\n";
    });
    const e = new Error(message);
    e.stack = "";
    throw e;
  } else {
    console.error(error);
  }
}

export default EnvSchema.parse(import.meta.env);
