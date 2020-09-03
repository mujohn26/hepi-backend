import { config } from 'dotenv';
import logger from './helpers/logger.helper';
import app from './app';


config(); // This enables dotenv configulations


const port = process.env.PORT || 8080;
const server = app.listen(port, () => console.log('info', `Server is running on http://localhost:${port}`));

export default app;
