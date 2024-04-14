import Journals from "../models/journals.js";

export const getJournals = async (req, res) => {
	try {
		const journals = await Journals.find();

		res.status(200).json(journals);

	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};