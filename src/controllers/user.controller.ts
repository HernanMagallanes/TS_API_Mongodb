import { Request, Response } from "express";

import User, { IUser } from "../models/user";

export const signUp = async (
	req: Request,
	res: Response
): Promise<Response> => {
	// console.log(req.body);

	if (!req.body.email || !req.body.password) {
		return res
			.status(400)
			.json({ msg: "please send your email and password" });
	}

	const user = await User.findOne({ email: req.body.email });
	if (user) {
		return res.status(400).json({ msg: "The user exists" });
	}

	const newUser = new User(req.body);
	await newUser.save();
	return res.status(201).json(newUser);
};

export const signIn = (req: Request, res: Response) => {
	res.send("sign in").json();
};
