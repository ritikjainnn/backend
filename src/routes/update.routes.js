import { Router } from 'express';
import { updateData } from '../controllers/update.controller.js'
const router = Router()

router.route("/").put(
    updateData
)
export default router