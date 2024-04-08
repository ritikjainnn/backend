import mongoose, {Schema} from "mongoose";

const countSchema = new Schema(
    {
        count: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)
const Count = mongoose.model("Count", countSchema);
export default Count