import express from 'express';
const router = express.Router();

// import authRoutes from './auth.route'
import eventRoutes from './event.route';
import contactRoutes from './contact.route';
import callRoutes from './call.route';
import ec2countRoutes from './ec2count.route';
import ec2instanceRoutes from './ec2instance.route';
import m2dRoutes from './m2d.route';
import y2dRoutes from './y2date.route';
import serviceRoutes from './service.route';
import faqRoutes from './faq.route';
import ticketRoutes from './ticket.route';
import edpdatasetsRoutes from './edpdatasets.route';

// router.use('/auth', authRoutes);

router.use('/y2data', y2dRoutes);
router.use('/m2data', m2dRoutes);
router.use('/service', serviceRoutes);


router.use('/ec2count', ec2countRoutes);
router.use('/ec2instance', ec2instanceRoutes);


router.use('/event', eventRoutes);

router.use('/contact', contactRoutes);

router.use('/call', callRoutes);

router.use('/faq', faqRoutes);

router.use('/ticket', ticketRoutes);

router.use('/edpdataset', edpdatasetsRoutes);
export default router;