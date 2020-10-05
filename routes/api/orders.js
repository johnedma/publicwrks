const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/', authenticated, asyncHandler(async function (_req, res) {
    const orders = await OrderRepository.list();
    res.json(orders);
}));

router.post('/', asyncHandler(async function (req, res, next) {


    const id = await OrderRepository.create(req.body, req.player);
    return res.json({ id });
}));
