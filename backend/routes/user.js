const express = require('express')
const router  = express.Router()

const UserController = require('../controllers/UserController')
const upload         = require('../middleware/upload')

router.get('/',UserController.index)
router.post('/show',UserController.show)
router.post('/store',upload.single('image'), UserController.store)
router.post('/update',UserController.update)
router.post('/delete',UserController.destory)

module.exports=router