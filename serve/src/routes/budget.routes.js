const express = require('express')
const router =express.Router()
const { getBudget, createBudget, updateBudget, deleteBudget, getBalance } = require('../controllers/index.controller');


router.get('/budget', getBudget)
router.post('/budget', createBudget)
router.put('/budget/:id', updateBudget)
router.delete('/budget/:id',deleteBudget)
router.get('/budget/balance',getBalance)



module.exports = router