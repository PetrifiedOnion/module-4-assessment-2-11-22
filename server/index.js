const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "You are a good citizen!",
    "You're so obedient!",
    "Baah! I speak sheep too.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});
let fortunes = [
  "If you want to keep a secret, you must hide it from yourself.",
  "If you want a picture of the future, imagine a boot stamping on a human face —for ever.",
  "Until they become conscious they will never rebel, and until after they have rebelled they cannot become conscious.",
  "In the face of pain there are no heroes.",
  "Power is in tearing human minds to pieces and putting them together again in new shapes of your choosing.",
  "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.",
  "The choice for mankind lies between freedom and happiness and for the great bulk of mankind, happiness is better.",
  "For, after all, how do we know that two and two make four? Or that the force of gravity works? Or that the past is unchangeable? If both the past and the external world exist only in the mind, and if the mind itself is controllable — what then?",
  "Can you not understand that liberty is worth more than just ribbons?",
  "If liberty means anything at all it means the right to tell people what they do not want to hear.",
];

app.get("/api/fortune", (req, res) => {
  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
});
app.delete("/api/delete", (req, res) => {
  fortunes = ["Sorry, Montag, all the fortunes are deleted."];
});

app.post("/api/fortune", (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body.fortune);
});
const port = 4000;

app.listen(port, () => console.log(`Server running on ${port}`));
