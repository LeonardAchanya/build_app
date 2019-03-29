const express = require("express");
const router = express.Router();

const JobController = require("../../controllers/jobs");

router.get("/",JobController.getJobs);
router.post("/",JobController.postJob);
router.delete("/:id",JobController.deleteJob);

module.exports = router;
