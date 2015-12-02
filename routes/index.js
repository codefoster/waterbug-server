var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // var sessions = req.db.get('sessions');
  // var firstSession = sessions[0];
  // res.render('index', { title: 'Express', name: firstSession.name  });

  var datapoints = req.db.get('datapoints');
  datapoints.find({},{},function(e,docs){
    res.render('index', { title: 'Express', name: docs[0].name  });
  });
});

module.exports = router;
