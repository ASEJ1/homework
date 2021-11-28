const express = require('express')
const router  = express.Router()

const MaterielController = require('../controllers/MaterielController')

router.get('/',MaterielController.index)
router.post('/show',MaterielController.show)
router.get('/',MaterielController.index)
router.post('/store',MaterielController.store)
router.post('/update',MaterielController.update)
router.post('/delete',MaterielController.destory)

module.exports=router