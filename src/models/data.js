import mongoose, {Schema} from "mongoose";
import { DB_NAME } from '../constants/constants.js'

mongoose.connect(process.env.MONGODB_URI + "/" + DB_NAME)
.then()
.catch()
const dataSchema = new Schema(
    {
        data: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

const Data = mongoose.model("Data", dataSchema)

export default Data