const express = require('express')
const router  = express.Router()

const TicketmaterielController = require('../controllers/TicketmaterielController')

router.get('/',TicketmaterielController.index)
router.post('/show',TicketmaterielController.show)
router.get('/',TicketmaterielController.index)
router.post('/store',TicketmaterielController.store)
router.post('/update',TicketmaterielController.update)
router.post('/delete',TicketmaterielController.destory)

module.exports=router