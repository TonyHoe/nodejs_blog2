class SiteController {
  // [GET] -> /
  home(req, res) {
    res.render("home");
    //   console.log(req.query.q); //get
  }

  // [GET] -> /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
