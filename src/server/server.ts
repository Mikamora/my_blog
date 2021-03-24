import * as express from 'express';
import * as morgan from "morgan"; //tells me in the console get requests, etc nice middleware
import apiRouter from './routes';
import * as path from "path";

const app = express();

app.use(express.static('public'));
app.use(morgan("dev")); //this is a good middleware to see your code
app.use(express.json()); //parses
app.use("/api", apiRouter); //this is where you put the api initial route
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html"))) //this starts from the server in dist not this one; this makes it so that if it is not a /api then it lets react router dom handle the switches
//you only need this when working with a fullstack application all in the same file. if it is in seperate file folders then this is most likely not needed^^^

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
