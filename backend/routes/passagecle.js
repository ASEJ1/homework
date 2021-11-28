const express = require('express')
const router  = express.Router()

const PassagecleController = require('../controllers/PassagecleController')

router.get('/',PassagecleController.index)
router.post('/show',PassagecleController.show)
router.get('/',PassagecleController.index)
router.post('/store',PassagecleController.store)
router.post('/update',PassagecleController.update)
router.post('/delete',PassagecleController.destory)

module.exports=router