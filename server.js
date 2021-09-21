import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema, root } from "./graphql.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.get('/greeting', function (req, res, next) {
    res.json("Satan");
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`\n\n ❤️ Server listening on port: ${port} ❤️ \n\n`));