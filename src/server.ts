import 'dotenv/config';
import { app } from './app';
import { SERVER_PORT } from './constants/env';

app.listen(Number(SERVER_PORT), () => console.log(`Server is running on port ${SERVER_PORT}`));
