import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema(
    {   
        userId: {
            type: mongoose.Schema.Types.ObjectId,
        },
        email: {
			type: String,
			required: true,
			max: 50,
			unique: true
		},
		password: {
			type: String,
			required: true,
			min: 5
		},
    },

    { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;