import express from "express"
import {getSwitchsPoa, getSwitchsIdPoa, addSwitchsPoa, updateSwitchPoa, deleteSwitchsPoa} from '../controllers/switchspoa.js'
const router = express.Router()


router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});


router.get("/", getSwitchsPoa)

router.get("/:id", getSwitchsIdPoa)

router.post("/", addSwitchsPoa)

router.put("/:id",updateSwitchPoa)

router.delete("/:id", deleteSwitchsPoa)

export default router