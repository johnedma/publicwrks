const express = require('express');
const asyncHandler = require('express-async-handler');
const { authenticated } = require('./security-utils');
const router = express.Router();

router.get('/', authenticated, asyncHandler(async function (_req, res) {
    const orders = await OrderRepository.list();
    res.json(orders);
}));

router.post('/', asyncHandler(async function (req, res, next) {
    console.log("via 0rders post route")
    console.log(req.body)
    // const order = await OrderRepository.create(req.body);
    // return res.json(order);
    res.status(200).send("SUCCESSFUL POST!")
}));
module.exports = router;
