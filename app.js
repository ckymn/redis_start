import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => {
  console.log("Redis Client Error", err);
});

client.connect();

// set
client.set("user_name", "ciwan", (error, message) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Message SET : ", message);
  }
});

//get
client.get("user_name", (error, message) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Message GET :", message);
  }
});

//exist
client.exists("user_name", (error, message) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Exists :", message);
  }
});

//pub
client.on("message", (channel, message) => {
  console.log(`${channel} isimli kanala ${message} geldi...`);
});

//sub
client.subscribe("gods", (message) => {
  console.log("channel message :", message);
});
