


module.exports = {
    publicPermission(req, res){
        return res.send("Public Permission")
    },
    votingPermission(req, res){
        console.log(req.userId);
        return res.send(`Voting Permission ${req.userId}`);
    },
    adminPermission(req, res){

        return res.send("Admin permission");
    }
    
}