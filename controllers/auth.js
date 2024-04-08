import bcrypt from 'bcrypt';
import Admin from '../models/admin.js';

export const login = async (req, res) => {
	try {
        const {
			email,
			password,
		} = req.body;

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