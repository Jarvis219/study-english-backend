import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { prefixDefaultApi } from "./constants";
import { connectDB } from "./database";
import { AuthGroupApi, CategoryGroupApi } from "./routers";

connectDB();

const app = new Elysia();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    maxAge: 86400,
  })
);

app.group(prefixDefaultApi, (api) =>
  api.use(AuthGroupApi).use(CategoryGroupApi)
);

app.listen(process.env.PORT || 3000, () =>
  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${process.env.PORT}`
  )
);
