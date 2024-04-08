import { Router } from 'express';
import { addData } from '../controllers/add.controller.js'
const router = Router()

router.route("/").post(
    addData
)
export default router