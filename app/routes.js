const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post("/juggling-balls-answer", function(req,res){

  var jugglingBalls = req.session.data['juggling-balls']

  if (jugglingBalls == "Three or more"){
    res.redirect("/juggling-trick")
  } else {
    res.redirect("/ineligible")
  }

})

module.exports = router
