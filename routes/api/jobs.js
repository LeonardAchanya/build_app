/*
    Job Router
    All routes related to jobs are stored here.
    The main purpose of the router here is to call the 
    corresponding controller based on the path requested.
*/

const express = require("express");
const router = express.Router();

const JobController = require("../../controllers/jobs");

router.get("/",JobController.getJobs);
router.post("/",JobController.postJob);
router.delete("/:id",JobController.deleteJob);

module.exports = router;
