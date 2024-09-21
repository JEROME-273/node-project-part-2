const express = require ('express');
const router = express.Router();
const MainController = require('../controller/MainController');

router.get('/', MainController.index);
router.get('/details', MainController.details);
router.get('/portfolio', MainController.portfolio);
router.get('/getStart', MainController.getStart);
router.get('/about', MainController.about);
router.get('/pages2', MainController.page2);
router.get('/page2_about', MainController.page2_about);
router.get('/page2_treatment', MainController.page2_treatment);
router.get('/page2_doctors', MainController.page2_doctors);
router.get('/page2_testimonial', MainController.page2_testimonial);
router.get('/page2_contact_us', MainController.page2_contact_us);
module.exports = router;
