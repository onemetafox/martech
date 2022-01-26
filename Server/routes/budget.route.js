import express from 'express';
// import passport from 'passport';
// import validate from 'express-validation';
// import authCtrl from '../controllers/auth.controller';
// import authorization from '../services/authorization.service';
// import auth from '../services/Permissions/index';
import budgetCtrl from '../controllers/budgetController'

const router = express.Router();

router.route('/getM2dDataByMonth')
  // .post(validate(paramValidation.login), passport.authenticate('local', { session: false }), budgetCtrl.getM2dDataByMonth);
  .post(budgetCtrl.getM2dDataByMonth);

router.route('/getY2mGetData')
  // .post(validate(paramValidation.login), passport.authenticate('local', { session: false }), budgetCtrl.getM2dDataByMonth);
  .post(budgetCtrl.getY2mGetData);
  
router.route('/getLtsData')
  // .post(validate(paramValidation.login), passport.authenticate('local', { session: false }), budgetCtrl.getM2dDataByMonth);
  .post(budgetCtrl.getLtsData);

export default router;