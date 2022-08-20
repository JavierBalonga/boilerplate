import env from "./env";
import app from "./server";

const { PORT = 3001 } = env;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
