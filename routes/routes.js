// router

const twController = require('../controllers/typing_wars_controller');
module.exports = (app) => {

  //app.get('/', twController.simple);

  app.get('/', twController.landing);

  app.get('/about', twController.landing);

  app.get('/background', twController.landing);
  
  app.get('/contact', twController.landing);

}