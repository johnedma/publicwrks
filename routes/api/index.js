const router = require('express').Router();

const routes = ['users', 'session', 'art', 'orders'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
