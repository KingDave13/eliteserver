import bcrypt from 'bcrypt';
import Admin from '../models/admin.js';

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Check if an admin with the same email already exists
		const existingAdmin = await Admin.findOne({ email });
		if (existingAdmin) {
			return res.status(400).json({ error: "An admin with this email already exists" });
		}

		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);

		const newAdmin = new Admin({
			email,
			password: passwordHash,
		});

		const savedAdmin = await newAdmin.save();
		res.status(201).json(savedAdmin);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};