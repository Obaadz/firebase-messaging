import express from "express";
import { Message } from "firebase-admin/messaging";
import { messaging } from "../../index";

const v1Routes = express.Router();

const msg: Message = {
  token:
    "d5tae-ugQhuDvJB0bx6Cmv:APA91bFOJSk2qxotBLC0m5kEqJfhNU-klo8mozzAfp_k8hTwsybjTUjQV3k8uxCiR_tMbx6-a93s_nThkaVZ5w5OAcSAp1NSXEFnZnnN61QonuDSb1VLHavn8307PS7_hyK3Ie92w1r0",
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
