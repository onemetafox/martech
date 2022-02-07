import express from 'express';
// import passport from 'passport';
// import validate from 'express-validation';
// import authCtrl from '../controllers/auth.controller';
// import authorization from '../services/authorization.service';
// import auth from '../services/Permissions/index';
import ec2countCtrl from '../controllers/ec2countController'

const router = express.Router();

router.route('/getAllEc2Count')
  // .post(validate(paramValidation.login), passport.authenticate('local', { session: false }), budgetCtrl.getM2dDataByMonth);
  .post(ec2countCtrl.getAllEc2Count);

export default router;