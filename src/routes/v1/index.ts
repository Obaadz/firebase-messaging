import express from "express";
import { Message } from "firebase-admin/messaging";
import { messaging } from "../../index";

const v1Routes = express.Router();

const msg: Message = {
  token:
    "dgHHFgufRf-L0SllY18yUs:APA91bG6OpCvn3kln4sbYq7_wooRPE329E2bVMHZeWgIzGvLzoYYvNRIKsHu7dDjSgLR7uvgoP5W7IWjj8s9_Va13KVt7xXCyiWftr2OWTtwHoFl4zwjqct6vDpOmj-w4dF9qnlXeRjf",
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
