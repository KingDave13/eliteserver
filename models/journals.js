import mongoose from 'mongoose';

const JournalSchema = new mongoose.Schema(
    {   
        title: {
            type: string,
        },
        desc: {
			type: String,
		},
		icon: {
			type: String,
			default:""
		},
        route: {
            type: String,
        }
    },

    { timestamps: true }
);

const Journals = mongoose.model("Journals", JournalSchema);

export default Journals;