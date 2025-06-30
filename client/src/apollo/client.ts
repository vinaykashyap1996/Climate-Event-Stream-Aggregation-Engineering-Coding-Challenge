import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import config from "../config/config";
console.log("🚀 ~ config:", config)

// Add authentication headers here if needed
export const client = new ApolloClient({
    link: new HttpLink({
        uri: config.apiUrl,
        // headers: { Authorization: "Bearer <token>" } // <-- Place for Authorization headers if needed
    }),
    cache: new InMemoryCache(),
});