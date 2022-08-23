const authRouter = require("./routes.auth")
const permissionRouter = require("./routes.permission");
const userRoleRouter = require("./routes.user_role")
const usersRouter = require("./routes.user");
const candidateRouter = require("./routes.candidates");
const positionRouter = require("./routes.position");
const voteRouter = require("./routes.votes");

module.exports = (app) => {
    app.use("/auth", authRouter);
    app.use("/permission", permissionRouter);
    app.use("/user-role", userRoleRouter);
    app.use("/users", usersRouter);
    app.use("/position", positionRouter);
    app.use("/candidate", candidateRouter);
    app.use("/vote", voteRouter)
}