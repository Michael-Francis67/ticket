import "dotenv/config";
import app from "./app";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT} in ${process.env.NODE_ENV} mode.`,
  );
});
