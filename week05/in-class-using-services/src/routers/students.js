const { Router } = require('express');

const studentController = require('../controllers/students');
const validateStudent = require('../middleware/validateStudent');

const router = Router();

router.use((_req, _res, next) => {
  console.log('this only applies to the student router');
  next();
});

router.post('/', validateStudent(true), studentController.create);
router.get('/', studentController.getAll);
router.get('/:id', studentController.getById);
router.put('/:id', validateStudent(true), studentController.replace);
router.patch('/:id', validateStudent(false), studentController.update);
router.delete('/:id', studentController.deleteOne);

module.exports = router;
