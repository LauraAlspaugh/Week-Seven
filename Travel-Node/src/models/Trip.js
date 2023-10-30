import { Schema } from "mongoose";

export const TripSchema = new Schema({

    name: { type: String, required: true, maxLength: 50 },
    description: { type: String, required: true, maxLength: 200 },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
},
    { timestamps: true, toJSON: { virtuals: true } }
)