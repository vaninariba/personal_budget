const { Pool } = require ('pg')
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Vanu1988',
    database: 'budget_db',
    port: 5432
})

const getBudget = async (req, res) => {
    const response = await pool.query('Select id,concept, amount, date, type from budget order by (id) desc limit 10');
    res.status(200).json(response.rows)
};
const getIncome = async (req, res) => {
    const response = await pool.query("Select id,concept, amount, date from budget where type = 'income' ");
    res.status(200).json(response.rows)
};
const getExpense = async (req, res) => {
    const response = await pool.query("Select id,concept, amount, date from budget where type = 'expense' ");
    res.status(200).json(response.rows)
};
const addBudget = async (req, res) => {
    const { concept, amount, date,type } = req.body;
    const response = await pool.query('INSERT INTO budget (concept, amount, date,type) VALUES ($1, $2, $3,$4)', [concept, amount, date,type]);
    res.json({
        message: 'Record Added successfully',
        body: {
            budget: {concept, amount, date,type}
        }
    })
};

const updateBudget = async (req, res) => {
    const response =await pool.query('UPDATE budget SET concept = $1, amount = $2, date=$3 WHERE id = $4', [
        concept,
        amount,
        date,
        id
    ]);
    res.json('Record Updated Successfully');
};

const deleteBudget = async (req, res, next) => {
    const  id  = parseInt(req.params.id)
    await pool.query('DELETE FROM budget WHERE id = $1', [id]);
    res.json(`Record ${id} deleted Successfully`);
};
const getBalance = async (req, res) => {
    const response = await pool.query("SELECT SUM(AMOUNT* CASE type WHEN 'expense' THEN -1 ELSE 1 END)from budget");
    res.status(200).json(response.rows)
};

module.exports = {
    getBudget,
    getIncome,
    getExpense,
    addBudget,
    updateBudget,
    deleteBudget,
    getBalance
};