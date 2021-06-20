
import app from './app'

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.info(`Server running on ${port}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.error(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});

