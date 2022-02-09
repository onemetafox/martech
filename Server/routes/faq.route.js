import express from 'express';
// import passport from 'passport';
// import validate from 'express-validation';
// import authCtrl from '../controllers/auth.controller';
// import authorization from '../services/authorization.service';
// import auth from '../services/Permissions/index';
import faqCtrl from '../controllers/faqsController';

const router = express.Router();

router.route('/addFaq')
  // .post(validate(paramValidation.login), passport.authenticate('local', { session: false }), budgetCtrl.getM2dDataByMonth);
  .post(faqCtrl.addFaq);

router.route('/getAll')
  .post(faqCtrl.getAll);
  
router.route('/delFaq')
  .post(faqCtrl.delFaq);
  
export default router;