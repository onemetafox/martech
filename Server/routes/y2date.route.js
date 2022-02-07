import express from 'express';
// import passport from 'passport';
// import validate from 'express-validation';
// import authCtrl from '../controllers/auth.controller';
// import authorization from '../services/authorization.service';
// import auth from '../services/Permissions/index';
import y2dCtrl from '../controllers/y2dataController'

const router = express.Router();

router.route('/getY2mGetData')
  // .post(validate(paramValidation.login), passport.authenticate('local', { session: false }), budgetCtrl.getM2dDataByMonth);
  .post(y2dCtrl.getY2mGetData);
  
export default router;