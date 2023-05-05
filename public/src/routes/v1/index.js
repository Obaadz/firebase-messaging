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
const express_1 = __importDefault(require("express"));
const index_1 = require("../../index");
const v1Routes = express_1.default.Router();
const msg = {
    token: "dgHHFgufRf-L0SllY18yUs:APA91bG6OpCvn3kln4sbYq7_wooRPE329E2bVMHZeWgIzGvLzoYYvNRIKsHu7dDjSgLR7uvgoP5W7IWjj8s9_Va13KVt7xXCyiWftr2OWTtwHoFl4zwjqct6vDpOmj-w4dF9qnlXeRjf",
    android: {
        notification: {
            title: "al back gronud",
            body: "T",
            visibility: "public",
            channelId: "ziad",
        },
        data: { test: "zero zozo" },
    },
};
v1Routes.get("/v1", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield index_1.messaging.send(msg);
        console.log("SUCCESS");
    }
    catch (err) {
        console.log(err.message);
    }
    res.status(200).send("DONE");
}));
exports.default = v1Routes;
