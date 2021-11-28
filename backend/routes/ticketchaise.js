const express = require('express')
const router  = express.Router()

const TicketchaiseController = require('../controllers/TicketchaiseController')

router.get('/',TicketchaiseController.index)
router.post('/show',TicketchaiseController.show)
router.get('/',TicketchaiseController.index)
router.post('/store',TicketchaiseController.store)
router.post('/update',TicketchaiseController.update)
router.post('/delete',TicketchaiseController.destory)

module.exports=router