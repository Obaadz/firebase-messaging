"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messaging = exports.PAGE_SIZE = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const index_1 = __importDefault(require("./routes/v1/index"));
const app_1 = require("firebase-admin/app");
const messaging_1 = require("firebase-admin/messaging");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const credential_json_1 = __importDefault(require("../credential.json"));
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    projectId: "notify-a1bee",
    serviceAccountId: "firebase-adminsdk-knd3m@notify-a1bee.iam.gserviceaccount.com",
    credential: firebase_admin_1.default.credential.cert(credential_json_1.default),
};
const firebaseApp = (0, app_1.initializeApp)(firebaseConfig), messaging = (0, messaging_1.getMessaging)(firebaseApp);
exports.messaging = messaging;
(0, dotenv_1.config)({ path: ".env.local" });
const PORT = process.env.PORT || 5000, DB_URI = process.env.DB_URI || "", PAGE_SIZE = Number(process.env.PAGE_SIZE) || 10;
exports.PAGE_SIZE = PAGE_SIZE;
const app = (0, express_1.default)();
const bodyParser = {
    urlencoded: express_1.default.urlencoded({ limit: "5mb", extended: true }),
    json: express_1.default.json({ limit: "5mb" }),
};
app.use(bodyParser.urlencoded);
app.use(bodyParser.json);
app.use((0, cors_1.default)({
    origin: "*",
    credentials: true,
}));
app.use(index_1.default);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Listening on port: ${PORT}`);
}));
