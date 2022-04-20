const { Router } = require('express');
const controller = require('../controllers/controller')

const router = Router();

router.get('/', controller.home_get);
router.get('/student', controller.student_get);
router.get('/student/:user', controller.student1_get);
router.get('/form', controller.form);
router.post('/student/:user/:height', controller.height_update);
router.post('/studentw/:user/:weight', controller.weight_update);
router.post('/student/add', controller.add_student);
router.delete('/student/delete/:user', controller.delete_student);

module.exports = router;