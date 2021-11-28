const express = require('express')
const router  = express.Router()

const ReservationmaterielController = require('../controllers/ReservationmaterielController')

router.get('/',ReservationmaterielController.index)
router.post('/show',ReservationmaterielController.show)
router.get('/',ReservationmaterielController.index)
router.post('/store',ReservationmaterielController.store)
router.post('/update',ReservationmaterielController.update)
router.post('/delete',ReservationmaterielController.destory)

module.exports=router