const express = require('express')
const router  = express.Router()

const ChaiseController = require('../controllers/ChaiseController')

router.get('/',ChaiseController.index)
router.post('/show',ChaiseController.show)
router.get('/',ChaiseController.index)
router.post('/store',ChaiseController.store)
router.post('/update',ChaiseController.update)
router.post('/delete',ChaiseController.destory)

module.exports=router