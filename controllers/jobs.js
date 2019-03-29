const Job = require("../models/jobs");
exports.getJobs = (req, res, next) => {
    Job.findAll()
        .then((jobs) => {
            res.json(jobs);
        })
        .catch(err => res.json({ success: false }));
}

exports.postJob = (req, res, next) => {
    const { title } = req.body;
    Job.create({
        title
    }).then((job => {
        res.json(job);
    }))
        .catch((err) => res.json({ message: "Failed", Error: err }));
}

exports.deleteJob = (req, res) => {
    const jobId = req.params.id;
    Job.findByPk(jobId)
        .then(job => {
            job.destroy()
                .then(() => {
                    res.json({ success: true })
                })
                .catch(err => res.json({ success: false }))
        })
        .catch(err => res.json({ success: false, message: "This Job doesnt exists" }))
}