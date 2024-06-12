import express from "express";
import cors from "cors";
import { config } from "dotenv";
import v1Routes from "./routes/v1/index";
import { AppOptions, initializeApp } from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import admin from "firebase-admin";
import credential from "../credential.json";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig: AppOptions = {
  projectId: "test-app-9e997",
  serviceAccountId: "firebase-adminsdk-lzr26@test-app-9e997.iam.gserviceaccount.com",
  credential: admin.credential.cert(credential as any),
};

const firebaseApp = initializeApp(firebaseConfig),
  messaging = getMessaging(firebaseApp);

config({ path: ".env.local" });

const PORT = process.env.PORT || 5000,
  PAGE_SIZE = Number(process.env.PAGE_SIZE) || 10;

const app = express();
const bodyParser = {
  urlencoded: express.urlencoded({ limit: "5mb", extended: true }),
  json: express.json({ limit: "5mb" }),
};

app.use(bodyParser.urlencoded);
app.use(bodyParser.json);
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(v1Routes);

app.listen(PORT, async () => {
  console.log(`Listening on port: ${PORT}`);
});

export { PAGE_SIZE, messaging };
