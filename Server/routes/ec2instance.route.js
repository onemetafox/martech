import express from 'express';
// import passport from 'passport';
// import validate from 'express-validation';
// import authCtrl from '../controllers/auth.controller';
// import authorization from '../services/authorization.service';
// import auth from '../services/Permissions/index';
import ec2instanceCtrl from '../controllers/ec2instanceController'

const router = express.Router();

router.route('/getAllEc2Instance')
  // .post(validate(paramValidation.login), passport.authenticate('local', { session: false }), budgetCtrl.getM2dDataByMonth);
  .post(ec2instanceCtrl.getAllEc2Instance);

export default router;