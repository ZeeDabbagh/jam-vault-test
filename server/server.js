const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const fileUpload = require('express-fileupload');
// const searchRouter = require('./routes/searchRoute');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use('/api', searchRouter)
app.use(fileUpload());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.post('/uploads', (req, res) => {
  if(req.files === null) {
      return res.status(400).json({message: 'no file was uploaded'})
  }

  const file =req.files.media

  file.mv(`${__dirname}/../client/public/uploads/${file.name}`, err => {
      if(err) {
          console.error(err)
          return res.status(500).send(err)
      }

      res.json({ fileName: file.name, filePath: `/uploads/${file.name}`})
  })
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer();
