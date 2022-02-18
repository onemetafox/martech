import express from 'express';
// import passport from 'passport';
// import validate from 'express-validation';
// import authCtrl from '../controllers/auth.controller';
// import authorization from '../services/authorization.service';
// import auth from '../services/Permissions/index';
import edpdatasetsCtrl from '../controllers/edpdatasetsController';

const router = express.Router();

router.route('/addEdpdataset')
  // .post(validate(paramValidation.login), passport.authenticate('local', { session: false }), budgetCtrl.getM2dDataByMonth);
  .post(edpdatasetsCtrl.addEdpdataset);

router.route('/getAll')
  .post(edpdatasetsCtrl.getAll);
  
router.route('/delEdpdataset')
  .post(edpdatasetsCtrl.delEdpdataset);
  
export default router;