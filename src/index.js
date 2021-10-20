import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose from 'mongoose';
import { typeDefs } from './typedefs.js';
import { resolvers } from './resolvers.js';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 4000;

const connectToMongo = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI).then(() => {
            console.log('Connection successful!');
        });
    } catch (err) {
        console.log(err);
    }
};

const startServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers });
    const app = express();
    await server.start();
    await connectToMongo();
    server.applyMiddleware({ app });

    app.get('/', (req, res) => {
        res.redirect('/graphql');
    });
    app.listen({ port }, async () => {
        console.log(`Now browse to ${server.graphqlPath}`);
    });
};
startServer();
