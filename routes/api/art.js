const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const ArtistRepository = require('../../db/artist-repository');

const router = express.Router();


router.get('/', asyncHandler(async function (req, res) {
    // try {
    const artFull = await ArtistRepository.fullyLoaded()
    // console.log(`ARTIST RES ${artFULL}`)
    await res.json(artFull);
    // }
    // catch { error }
}));
router.get('/:artist', asyncHandler(async function (req, res) {
    const artist = await ArtistRepository.byCollection(req.params.artist);
    console.log(`REQ PARAMS ARTIST: ${req.params.artist}`)
    console.log(`ARTIST RES ${artist}`)
    res.json(artist);
}));

module.exports = router;
