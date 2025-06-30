import express from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./apis/graphql/schema";
import { WSClientService } from "./apis/ws/ws-client";
// import { authMiddleware } from "./api/middleware/auth.middleware.js"; // Uncomment when implemented

export async function startApp() {
    const app = express();
    // app.use(authMiddleware); // Place for AuthN/AuthZ middleware
    const server = new ApolloServer({
        schema,
        context: ({ req }) => {
            // Parse user from req (set by authMiddleware)
            // return { user: req.user };xw
            return {};
        },
    });

    await server.start();
    //@ts-ignore
    server.applyMiddleware({ app, path: "/graphql" });

    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
    });

    WSClientService.start();
}