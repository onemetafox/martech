import express from 'express';
// import passport from 'passport';
// import validate from 'express-validation';
// import authCtrl from '../controllers/auth.controller';
// import authorization from '../services/authorization.service';
// import auth from '../services/Permissions/index';
import eventCtrl from '../controllers/eventsController';

const router = express.Router();

router.route('/addEvent')
  // .post(validate(paramValidation.login), passport.authenticate('local', { session: false }), budgetCtrl.getM2dDataByMonth);
  .post(eventCtrl.addEvent);

router.route('/getAll')
  .post(eventCtrl.getAll);
  
router.route('/delEvent')
  .post(eventCtrl.delEvent);
  
export default router;