import { Router } from 'express';
import { getData } from '../controllers/get.controller.js'
const router = Router()

router.route("/").get(
    getData
)

export default router