import Count from "../models/count.js"
import { ApiResponse } from '../utils/ApiResponse.js'

const increaseCount = async (req, res) => {

    console.log("Here in Inc Count!!")

    const countResponse = await Count.find({
    })

    console.log(countResponse[0].count);

    const id = countResponse[0]._id;
    const count = countResponse[0].count;
    
    await Count.findByIdAndUpdate(id, { 
        count: count+1
    })
    console.log(countResponse[0].count);

    return new ApiResponse(200, count, "Count Increased Successfully!!!")

}

const getCount = async (req, res) => {

    console.log("Here in Get Count!!")

    const countResponse = await Count.find({
    })

    console.log(countResponse[0].count);

    return res.status(200).json(
        new ApiResponse(200, countResponse[0].count, "Count fetched Successfully!!!")
    )
}


export {increaseCount, getCount}