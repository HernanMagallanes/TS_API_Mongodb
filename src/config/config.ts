export default {
	JWT_Secret: process.env.JWT_SECRET || "supersecrettokenforJWT",
	DB: {
		URI: process.env.MONGODB_URI || "mongodb://localhost/jwt_tutorial",
		USER: process.env.MONGODB_USER || "",
		PASSWORD: process.env.MONGODB_PASSWORD || "",
	},
};
