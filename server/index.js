import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const mongoID = process.env.MONGO_USERNAME;
const mongoPW = process.env.MONGO_PASSWORD;
const CONNECTION_URL = `mongodb+srv://${mongoID}:${mongoPW}@cluster0.fduyn.mongodb.net/`;
console.log(CONNECTION_URL);
console.log(mongoID, process.env.MONGO_USERNAME);
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

// https://mongodb.com/cloud/atlas
