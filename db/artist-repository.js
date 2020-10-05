const { Art } = require('./models');


async function fullyLoaded() {
    const art = await Art.findAll();
    console.log(art[0])
    return art
}

async function byCollection(artistId) {
    const artist = await
        Art.findAll({
            where: {
                artistId
            }
        });
    return artist
}

module.exports = {

    byCollection,
    fullyLoaded
};
