import express from 'express';
// import passport from 'passport';
// import validate from 'express-validation';
// import authCtrl from '../controllers/auth.controller';
// import authorization from '../services/authorization.service';
// import auth from '../services/Permissions/index';
import callCtrl from '../controllers/callsController';

const router = express.Router();

router.route('/addcall')
  // .post(validate(paramValidation.login), passport.authenticate('local', { session: false }), budgetCtrl.getM2dDataByMonth);
  .post(callCtrl.addCall);

router.route('/getAll')
  .post(callCtrl.getAll);
  
router.route('/delcall')
  .post(callCtrl.delCall);
  
export default router;