const express = require('express')
const nodemon = require('nodemon')
const { getData } = require('../controller/controller')
const controller = require('../controller/controller')
const { sql, poolPromise } = require('../banco/db')

const router = express.Router()
router.get('/', controller.getData)

router.get('/:n_identificador', async (req, res) => {
    try {
        const identificador = req.params
        const n = Object.values(identificador)
        const pool = await poolPromise
        const result = await pool.request()
            .query(`SELECT *
            FROM  [SecullumClubeNet].[dbo].[pessoas] 
            WHERE [n_identificador] = ${n}`)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
})

router.put('/updateData', controller.updateData)


module.exports = router