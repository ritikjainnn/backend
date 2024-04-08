import Data from "../models/data.js"
import { increaseCount } from "../controllers/count.controller.js"
import { ApiResponse } from '../utils/ApiResponse.js'

const updateData = async (req, res) => {

    console.log("Here Update!!")

    const { id, data } = req.body;
    console.log(id);
    console.log(data);
    console.log(req.body);


    if (
        [id, data].some((field) => field?.trim() === "")
    ) {
        return res.status(400).json(
            new ApiResponse(400, "", "Data cannot be Empty!!!")
        )
    }

    const updatedData = await Data.findByIdAndUpdate(id, {
        data: data
    })
    if (!updatedData) {
        return res.status(200).json(
            new ApiResponse(406, "", "Id not found in database!!!")
        )
    }
    if (updatedData.data !== data) {
        return res.status(200).json(
            new ApiResponse(500, "", "Something went wrong while updating data!!!")
        )
    }
    increaseCount()
    return res.status(200).json(
        new ApiResponse(200, data, "Data Updated Successfully!!!")
    )

}
export {updateData}