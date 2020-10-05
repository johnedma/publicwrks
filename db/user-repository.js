const { User } = require('./models');

async function findByEmail(email) {
    const user = await User.findOne({ where: { email } });
    return user;
}

async function findByTokenId(tokenId) {
    const user = await User.findOne({ where: { tokenId } });
    return user;
}

module.exports = {
    //   create,
    findByEmail,
    findByTokenId,
};
