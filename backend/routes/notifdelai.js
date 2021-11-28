const express = require('express')
const router  = express.Router()

const NotifdelaiController = require('../controllers/NotifdelaiController')

router.get('/',NotifdelaiController.index)
router.post('/show',NotifdelaiController.show)
router.get('/',NotifdelaiController.index)
router.post('/store',NotifdelaiController.store)
router.post('/update',NotifdelaiController.update)
router.post('/delete',NotifdelaiController.destory)

module.exports=router