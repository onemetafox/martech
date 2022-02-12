import express from 'express';
// import passport from 'passport';
// import validate from 'express-validation';
// import authCtrl from '../controllers/auth.controller';
// import authorization from '../services/authorization.service';
// import auth from '../services/Permissions/index';
import ticketCtrl from '../controllers/ticketsController';

const router = express.Router();

router.route('/addticket')
  // .post(validate(paramValidation.login), passport.authenticate('local', { session: false }), budgetCtrl.getM2dDataByMonth);
  .post(ticketCtrl.addTicket);

router.route('/getAll')
  .post(ticketCtrl.getAll);
  
router.route('/delticket')
  .post(ticketCtrl.delTicket);
  
router.route('/getStatistic')
  .post(ticketCtrl.getStatistic);
export default router;