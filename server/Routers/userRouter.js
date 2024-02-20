import express from "express";
import { deleteUser, getUser, unFollow, update, userFollow } from "../Controller/userCtrl.js";
const router=express.Router();

router.get('/:id',getUser)
router.put('/:id',update)
router.delete('/:id',deleteUser)
router.put('/:id/follow',userFollow)
router.put('/:id/unfollow',unFollow)

export default router;