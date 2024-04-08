import Data from "../models/data.js"
import { ApiResponse } from '../utils/ApiResponse.js'

const getData = async (req, res) => {

    console.log("Here in Get!!")

    const countResponse = await Data.find({
    })

    console.log(countResponse)

    return res.status(200).json(
        new ApiResponse(200, countResponse, "Data fetched Successfully!!!")
    )
}

export { getData }