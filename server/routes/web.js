const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const tasksController = require('../controllers/TasksController');

router.get('/tasks', tasksController.all);
router.post('/tasks', tasksController.store);
router.post('/deleteTask', tasksController.delete);
router.put('/tasks', tasksController.markAsDone)

module.exports = router;