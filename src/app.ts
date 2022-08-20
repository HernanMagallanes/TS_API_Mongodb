import express from "express";
import morgan from "morgan";
import cors from "cors";

import passport from "passport";
import passportMiddileware from "./middlerwares/passport";

import authRoutes from "./routes/auth.routes";
import specialRoutes from "./routes/special.routes";

// initializations
const app = express();

//  settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());
passport.use(passportMiddileware);

// routes
app.get("/", (req, res) => {
	res.send(`The API is at port ${app.get("port")}`);
});

app.use(authRoutes);
app.use(specialRoutes);

export default app;
