import Data from "../models/data.js"
import { increaseCount } from "../controllers/count.controller.js"
import { ApiResponse } from '../utils/ApiResponse.js'

const addData = async (req, res) => {

    console.log("Here in Add!!")

    const { data } = req.body;
    console.log(data);

    if (data?.trim() === "") {
        return res.status(200).json(
            new ApiResponse(400, "", "Data cannot be Empty!!!")
        )
    }
    const insertedData = await Data.create({
        data
    })

    const createdData = await Data.findById(insertedData._id)
    if (!createdData) {
        return res.status(200).json(
            new ApiResponse(500, "", "Something went wrong while adding data!!!")
        )
    }

    increaseCount()
    return res.status(200).json(
        new ApiResponse(200, createdData.data, "Data Added Successfully!!!")
    )

}

export { addData }