const express = require('express')
const { sql, poolPromise } = require('../banco/db')
const fs = require('fs')
const rawdata = fs.readFileSync('./query/queries.json')
const queries = JSON.parse(rawdata)


class ControllerMain {
    async getData(req, res) {
        try {
            const pool = await poolPromise
            const result = await pool.request()
                .query(queries.getData)
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
    async updateData(req, res) {
        try {
            if (req.body.password != null && req.body.name != null) {
                const pool = await poolPromise
                const result = await pool.request()
                    .input('newPassword', sql.VarChar, req.body.password)
                    .input('userName', sql.VarChar, req.body.name)
                    .query(queries.updateData)
                res.json(result)
            } else {
                res.send('All fields are required!')
            }
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
}
const controller = new ControllerMain()
module.exports = controller