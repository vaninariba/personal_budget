const express = require('express')
const router =express.Router()
const {getBudget, getIncome, getExpense, addBudget, updateBudget, deleteBudget, getBalance } = require('../controllers/index.controller');

router.get('/budget', getBudget)
router.get('/income', getIncome)
router.get('/expense', getExpense)
router.post('/budget', addBudget)
router.put('/budget/:id', updateBudget)
router.delete('/budget/:id',deleteBudget)
router.get('/budget/balance',getBalance)



module.exports = router