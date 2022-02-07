import express from 'express';
// import passport from 'passport';
// import validate from 'express-validation';
// import authCtrl from '../controllers/auth.controller';
// import authorization from '../services/authorization.service';
// import auth from '../services/Permissions/index';
import m2dCtrl from '../controllers/m2dataController'

const router = express.Router();

router.route('/getM2dDataByMonth')
  // .post(validate(paramValidation.login), passport.authenticate('local', { session: false }), budgetCtrl.getM2dDataByMonth);
  .post(m2dCtrl.getM2dDataByMonth);
export default router;