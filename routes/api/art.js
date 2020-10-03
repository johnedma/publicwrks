const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
// const { types } = require('../../db/models/pokemonTypes');

// const { authenticated } = require('./security-utils');
// const PokemonRepository = require('../../db/pokemon-repository');
const ArtistRepository = require('../../db/artist-repository');

const router = express.Router();

// const attack = check('attack').notEmpty().isInt({ min: 0, max: 100 }).toInt();
// const defense = check('defense').notEmpty().isInt({ min: 0, max: 100 }).toInt();
// const imageUrl = check('imageUrl').notEmpty().isURL({ require_protocol: false, require_host: false });
// const name = check('name').notEmpty();
// const type = check('type').notEmpty().isIn(types);
// const moves = check('moves').isArray();

// router.get('/', authenticated, asyncHandler(async function (_req, res) {
//     const pokemon = await PokemonRepository.list();
//     res.json(pokemon);
// }));

// const errorFormatter = ({ msg, param }) => {
//     return `${param}: ${msg}`;
// };

// router.post('/', [
//     ...authenticated,
//     attack,
//     defense,
//     imageUrl,
//     name,
//     type,
//     moves,
// ], asyncHandler(async function (req, res, next) {
//     const errors = validationResult(req).formatWith(errorFormatter);
//     if (!errors.isEmpty()) {
//         return next({ status: 422, errors: errors.array() });
//     }

//     const id = await PokemonRepository.create(req.body, req.player);
//     return res.json({ id });
// }));

// router.get('/types', authenticated, asyncHandler(async function (_req, res) {
//     res.json(types);
// }));

// router.get('/:pokemon', asyncHandler(async function (req, res) {
//     const pokemon = await PokemonRepository.one(req.params.pokemon);
//     res.json(pokemon);
// }));
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
