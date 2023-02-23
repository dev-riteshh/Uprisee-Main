const express = require('express')
const router = express.Router();
const {getAllStatups, signupStartup,loginStartup, verifyToken, getUser, UpdateStartup} = require('../controllers/startup-controllers')
const {getAllContacts,getSingleJob,createNewJob,updateSingleJob,deleteSingleJob} = require('../controllers/job-controllers')

//============job==============
// get all jobs, create new job
router.route('/api/job').get(getAllContacts).post(createNewJob)

// get single job , update single job, delete single job
router.route('/api/job/:id').get(getSingleJob).put(updateSingleJob).delete(deleteSingleJob)

//======startup============
router.route('/api/startup').get(getAllStatups)
router.route('/api/startup/:id').put(UpdateStartup)
router.route('/api/startup/signup').post(signupStartup)
router.route('/api/startup/login').post(loginStartup)
router.route('/api/startup/user').get(verifyToken,getUser)






module.exports = router