const express = require('express')
const router = express.Router();
const {getAllContacts,getSingleJob,createNewJob,updateSingleJob,deleteSingleJob} = require('../controllers/job-controllers')

// get all jobs, create new job
router.route('/api/job').get(getAllContacts).post(createNewJob)

// get single job , update single job, delete single job
router.route('/api/job/:id').get(getSingleJob).put(updateSingleJob).delete(deleteSingleJob)


module.exports = router