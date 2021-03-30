import server from './server'

const port = process.env.PORT || 5555;

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
})