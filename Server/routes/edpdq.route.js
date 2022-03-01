import express from 'express';
// import passport from 'passport';
// import validate from 'express-validation';
// import authCtrl from '../controllers/auth.controller';
// import authorization from '../services/authorization.service';
// import auth from '../services/Permissions/index';
import edpdqCtrl from '../controllers/edpdqController';

const router = express.Router();

router.route('/addEdpdq')
  // .post(validate(paramValidation.login), passport.authenticate('local', { session: false }), budgetCtrl.getM2dDataByMonth);
  .post(edpdqCtrl.addEdpdq);

router.route('/getAll')
  .post(edpdqCtrl.getAll);
  
router.route('/delEdpdq')
  .post(edpdqCtrl.delEdpdq);
  
export default router;