const { User } = require('./models');

async function findByEmail(email) {
    const user = await User.findOne({ where: { email } });
    return user;
}


// class NullPlayer {
//   isValid() { return false; }
//   setPassword() {}
//   isValidPassword() { return false; }
//   toSafeObject() { return {}; }
// }

// async function create(details) {
//   const player = await Player.build(details);
//   player.setPassword(details.password);
//   return await player.save();
// }

// async function findByEmail(email) {
//   const user = await User.findOne({ where: { email } });
//   return user || new NullPlayer();
// }

async function findByTokenId(tokenId) {
    const user = await User.findOne({ where: { tokenId } });
    return user;
}

module.exports = {
    //   create,
    findByEmail,
    findByTokenId,
};
