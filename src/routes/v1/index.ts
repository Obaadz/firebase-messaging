import express from "express";
import { Message } from "firebase-admin/messaging";
import { messaging } from "../../index";

const v1Routes = express.Router();

const msg: Message = {
  token:
    "cESpDwxCRfeiRHvKPrE2JF:APA91bEjdzVFT-p-XcL-oAK-P4UIo7reKJLx5v9G0aKBkRIknEpFM2FFkrxTHrx4qjnNamWZEm4sYlcAfRnoqNb507eCCpCUTMIrea8wCadoyf72sZ9r3DMT6jiAMnIwo0BO9IXNi-xJ",
  android: {
    notification: {
      title: "Title body",
      body: "body Title",
      visibility: "public",
      channelId: 'basic_channel',
      sound: "alarm",
      color: "#000000"
    },
    data: { test: "zero zozo" },
  },
};

v1Routes.get("/v1", async (req, res) => {
  try {
    await messaging.send(msg);

    console.log("SUCCESS");
  } catch (err: any) {
    console.log(err.message);
  }
  res.status(200).send("DONE");
});

export default v1Routes;
