/*
    Job Router
    All routes related to jobs are stored here.
    The main purpose of the router here is to call the 
    corresponding controller based on the path requested.
*/

const express = require("express");
const JobController = require("../../controllers/jobs");
const authenticate = require("../../middlewares/auth");

const router = express.Router();


router.get("/",JobController.getJobs);
router.post("/", authenticate, JobController.postJob);
router.delete("/:id", authenticate, JobController.deleteJob);

module.exports = router;
