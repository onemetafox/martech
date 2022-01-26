import express from 'express';
const router = express.Router();

// import authRoutes from './auth.route'
import budgetRoutes from './budget.route';
import ec2Routes from './ec2.route'
import eventRoutes from './event.route'

// router.use('/auth', authRoutes);

router.use('/budget', budgetRoutes);

router.use('/ec2', ec2Routes);

router.use('/event', eventRoutes);

export default router;