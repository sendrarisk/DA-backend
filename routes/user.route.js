const { authJwt } = require("../middleware");
const controller = require("../controllers/v1/user.controller");
var router = require('express').Router();

router.get("/all", controller.allAccess);
router.get("/user", [authJwt.verifyToken], controller.userBoard);
router.get("/mod", [authJwt.verifyToken, authJwt.isModerator], controller.moderatorBoard);
router.get("/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

module.exports = router;