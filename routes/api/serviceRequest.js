const express = require("express");
const router = express.Router();
const config = require("../../config/keys");
const db = require("../../service/database-connection");

// router.get("/", (req, res) => {
//   db.executeQuery(config.serviceRequestDbConfig, "select * from storagetype")
//     .then(records => {
//       res.json(records);
//     })
//     .catch(err => {
//       res.statusCode = 401;
//       res.send(err);
//     });
// });

router.get("/GetServiceRequestWeekly", (req, res) => {
  db.executeStoreProcedure(
    config.reportingServerDbConfig,
    "GetServiceRequestWeekly",
    []
  )
    .then(records => {
      res.json(records);
    })
    .catch(err => {
      res.statusCode = 401;
      res.send(err);
    });  
});

router.get("/GetServiceRequestDefaultWeek", (req, res) => {
  db.executeStoreProcedure(
    config.reportingServerDbConfig,
    "GetServiceRequestDefaultWeek",
    []
  )
    .then(records => {
      res.json(records);
    })
    .catch(err => {
      res.statusCode = 401;
      res.send(err);
    });  
});

router.get("/ScheduleReportGroupByCompany/:weekly", (req, res) => {
    db.executeStoreProcedure(
      config.reportingServerDbConfig,
      "SR_ScheduleReportGroupByCompany",
      [
        {
          name: "Weekly",
          value: req.params.weekly
        }
      ]
    )
      .then(records => {
        res.json(records);
      })
      .catch(err => {
        res.statusCode = 401;
        res.send(err);
      });  
});

router.get("/ScheduleReportByGtinSharedDataSet/:weekly", (req, res) => {
  db.executeStoreProcedure(
    config.reportingServerDbConfig,
    "SR_ScheduleReportByGtinSharedDataSet",
    [
      {
        name: "Weekly",
        value: req.params.weekly
      }
    ]
  )
    .then(records => {
      res.json(records);
    })
    .catch(err => {
      res.statusCode = 401;
      res.send(err);
    });
});

router.get(
  "/ScheduleReportBySingleRequestSharedDataSet/:weekly",
  (req, res) => {
    db.executeStoreProcedure(
      config.reportingServerDbConfig,
      "SR_ScheduleReportBySingleRequestSharedDataSet",
      [
        {
          name: "Weekly",
          value: req.params.weekly
        }
      ]
    )
      .then(records => {
        res.json(records);
      })
      .catch(err => {
        res.statusCode = 401;
        res.send(err);
      });
  }
);

module.exports = router;
