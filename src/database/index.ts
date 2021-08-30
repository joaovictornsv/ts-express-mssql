import { createConnection } from 'typeorm';

const connectToDatabase = async () => {
  createConnection()
    .then(() => {
      console.log('Connected to database!');
    })
    .catch((err) => {
      console.log('error::');
      console.log(err);
    });
};

export { connectToDatabase };
