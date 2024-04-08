import bcrypt from 'bcrypt';
import Admin from '../models/admin.js';

export const login = async (req, res) => {
	try {
		const newAdminData = {
            email: "admin@epjournals.com",
            password: "admin@epjournals_24",
        };

        const newAdmin = new Admin(newAdminData);
        await newAdmin.save();

        return new Response(JSON.stringify(newAdmin), {
            status: 201,
        });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};