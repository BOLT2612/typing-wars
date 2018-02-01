// router

const twController = require('../controllers/typing_wars_controller');
module.exports = (app) => {

  app.get('/', twController.simple);

}