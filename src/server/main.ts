import express, { Request, Response } from "express";
import ViteExpress from "vite-express";

const app = express();
app.use(express.json());

let fortunes: string[] = [
  "You will soon be confronted with limitless choices in the yogurt aisle.",
  "Beware of squirrels; they know more than they say.",
  "If you can’t convince them, confuse them with your dance moves.",
  "You will discover a hidden talent for folding laundry.",
  "Your left shoe will lead a more interesting life than your right.",
  "Tomorrow, you may accidentally use shampoo as conditioner.",
  "Your lucky number is not 7. Not today, at least.",
  "The cookie you just ate wasn't calorie-free, but don't worry, it had a great time.",
  "A mysterious stranger will offer you a mysterious mystery.",
  "You will invent a new dance move called 'The Awkward Turtle.'",
  "You will soon change your password... after forgetting the current one.",
];

app.get("/api/fortune", (req: Request, res: Response) => {
  try {
    let selectedFortune: string =
      fortunes[Math.floor(Math.random() * fortunes.length)];
    res.status(200).send(selectedFortune);
  } catch (err) {
    res.status(400).send(err);
  }
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
