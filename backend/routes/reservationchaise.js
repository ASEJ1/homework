const express = require('express')
const router  = express.Router()

const ReservationchaiseController = require('../controllers/ReservationchaiseController')

router.get('/',ReservationchaiseController.index)
router.post('/show',ReservationchaiseController.show)
router.get('/',ReservationchaiseController.index)
router.post('/store',ReservationchaiseController.store)
router.post('/update',ReservationchaiseController.update)
router.post('/delete',ReservationchaiseController.destory)

module.exports=router