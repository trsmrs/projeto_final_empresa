import express from "express"
import {getSwitchs, getSwitchsId, addSwitchs, updateSwitch, deleteSwitchs} from '../controllers/switchs.js'
const router = express.Router()


router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

router.get("/", getSwitchs)

router.get("/:id", getSwitchsId)

router.post("/", addSwitchs)

router.put("/:id", updateSwitch)

router.delete("/:id", deleteSwitchs)

export default router