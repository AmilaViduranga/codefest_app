var model = require('./model');

var Controller = function() {
    /*
     * register new user
     */
    this.add = function(user) {
        return new Promise((resolve, reject) => {
            model.create(user).then((respond) => {
                resolve({status: 200, data: respond, message: "Successfully add " + user.name});
            }).catch(err => {
                reject({status: 500, data: err, message: "Not Successfully Added"});
            })
        })
    }

    /*
     * update available user
     */
    this.update = function(user, id) {
        return new Promise((resolve, reject) => {
            model.find({
                where:{
                    id: id
                }
            }).then(dbUser => {
                dbUser.update({
                    name: user.name,
                    password: user.password
                }).then(respond => {
                    resolve({status: 200, data: respond, message: "Successfully update " + user.name});
                }).catch(err => {
                    reject({status: 505, data: err, message: "Not Successfully updated"});
                })
            }).catch(err => {
                reject({status: 404, data: err, message:"Not successfully updated"});
            })
        })
    }

    /*
     * search a user by id
     */
    this.getSingle = function(id) {
        return new Promise((resolve, reject) => {
            model.find({
                where: {
                    id: id
                }
            }).then(dbUser => {
                resolve({status: 200, data: dbUser, message: "Get the user"});
            }).catch(err => {
                reject({status: 404, data: err, message: "Not Found"});
            })
        })
    }

    /*
     * search user by name
     */
    this.getSingleByName = function(userName) {
        return new Promise((resolve, reject) => {
            model.find({
                where: {
                    name: userName
                }
            }).then(dbUser => {
                resolve({status: 200, data: dbUser, message: "Get the user"});
            }).catch(err => {
                reject({status: 404, data: err, message: "Not Found"});
            })
        })
    }

    /*
     * login to the system
     */
    this.login = function(authInfo) {
        return new Promise((resolve, reject) => {
            this.getSingleByName(authInfo.name).then(user => {
                if(user.password == authInfo.password) {
                    resolve({status: 200, message: "Login Success"});
                }
                reject({status: 403, message: "Invalid Attempt"});
            }).catch(err => {
                reject({status: 404, data: err.data, message: err.message});
            })
        })
    }
}

module.exports = new Controller();