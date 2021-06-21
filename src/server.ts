import express from 'express';

const app = express();
const PORT = 3333;

app.get("/get", (request, response) => {
  return response.send("Hello NLW 6");
});


app.post("/post", (request, response) => {
  return response.send("Hello NLW 6 POST");
});

app.listen(PORT, () =>{
  console.log("Server is running...");
});