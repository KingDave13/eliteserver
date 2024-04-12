import bcrypt from 'bcrypt';
import Admin from '../models/admin.js';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {

    // USED TO REGISTER THE ADMIN

	// try {
	// 	const { email, password } = req.body;

	// 	// Check if an admin with the same email already exists
	// 	const existingAdmin = await Admin.findOne({ email });
	// 	if (existingAdmin) {
	// 		return res.status(400).json({ error: "An admin with this email already exists" });
	// 	}

	// 	const salt = await bcrypt.genSalt();
	// 	const passwordHash = await bcrypt.hash(password, salt);

	// 	const newAdmin = new Admin({
	// 		email,
	// 		password: passwordHash,
	// 	});

	// 	const savedAdmin = await newAdmin.save();
	// 	res.status(201).json(savedAdmin);
	// } catch (err) {
	// 	res.status(500).json({ error: err.message });
	// }
    try {
		const { email, password } = req.body;
		const user = await Admin.findOne({ email: email });
		if (!user) return res.status(400).json({ msg: "User does not exist. "});

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ msg: "Invalid password. "});

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
		delete user.password;
		res.status(200).json({ token, user });

	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};