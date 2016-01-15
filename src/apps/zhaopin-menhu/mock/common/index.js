module.exports = function(app) {
  app.get('/zhaopin-menhu/common', function(req, res) {
    res.json(require('./common.json'));
  });
};
