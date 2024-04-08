import { Router } from 'express';
import { increaseCount, getCount } from '../controllers/count.controller.js'
const router = Router()

router.route("/").get(
    getCount
)

export default router