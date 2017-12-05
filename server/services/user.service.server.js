module.exports = function (app, model) {
    // passport
    var auth = authorized;
    var adminAuth = adminAuthorized;

    function authorized(req, res, next) {
        if (!req.isAuthenticated()) {
            res.send(401);
        } else {
            next();
        }
    };

    function adminAuthorized(req, res, next) {
        if (!req.isAuthenticated() || req.user.role != "admin") {
            res.send(401);
        } else {
            next();
        }
    };
    //
    // var facebookConfig = {
    //     clientID: process.env.FACEBOOK_CLIENT_ID,
    //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    //     callbackURL: process.env.FACEBOOK_CALLBACK_URL
    // };

    // var googleConfig = {
    //     clientID: process.env.GOOGLE_CLIENT_ID,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //     callbackURL: process.env.GOOGLE_CALLBACK_URL
    // };
    var googleConfig = {
        clientID: '714176533811-k9elca9kiu3hsr0qgo7qd5iofk53f2hh.apps.googleusercontent.com',
        clientSecret: '3USgEmqTcFRC7S8fmyLogutb',
        callbackURL: 'https://mingchao-wu-web.herokuapp.com/google/oauth/callback'
         //callbackURL: 'http://localhost:3000/google/oauth/callback'
        // callbackURL: 'http://127.0.0.1/google/callback'
    };
    // var goodreadsConfig = {
    //     consumerKey: process.env.GOODREADS_KEY,
    //     consumerSecret: process.env.GOODREADS_CLIENT_SECRET,
    //     callbackURL: process.env.GOODREADS_CALLBACK_URL
    // };

    console.log(googleConfig);

    var bcrypt = require("bcrypt-nodejs");
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
    //var FacebookStrategy = require('passport-facebook').Strategy;


    passport.use(new LocalStrategy(localStrategy));
    //passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
    passport.use(new GoogleStrategy(googleConfig, googleStrategy));


    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    app.get('/aw/api/loggedin', loggedin);
    app.post('/aw/api/logout', logout);
    app.post("/aw/api/register", register);
    app.get("/aw/api/isadmin", isadmin);
    app.get("/aw/api/iswriter", iswriter);

    app.post('/aw/api/login', passport.authenticate('local'), login);
    app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}), function (req, res) {
        console.log(req.user);
        res.send(req.user);
    });

    app.get('/google/oauth/callback',
        passport.authenticate('google', {
            successRedirect: '/project/',
            failureRedirect: '/project/index.html#/login'
        }));
        // , function (req, res) {
        //     console.log(req.user);
        //     res.send(req.user);
        // });



    // app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));
    // app.get('/auth/facebook/callback',
    //     passport.authenticate('facebook',
    //         {
    //             successRedirect: '/home',
    //             failureRedirect: '/login'
    //         }));

    app.post("/aw/api/user", createUser);
    // app.get("/aw/api/user?username=username", findUserByUsername);
    app.get("/aw/api/user", findUser);
    app.get("/aw/api/user/:userId", findUserByUserId);
    app.put("/aw/api/user/:userId", auth, updateUser);
    app.delete("/aw/api/user/:userId", auth, deleteUser);
    // app.get("/aw/api/allusers", adminAuth, findAllUsers);
    app.get("/aw/api/allusers", findAllUsers);
    app.put("/aw/api/user/:userId/addToShelf/:bookId", addToBookshelf);
    app.get("/aw/api/user", findUser);

    function googleStrategy(token, refreshToken, profile, done) {
        model.UserModel
            .findUserByGoogleId(profile.id)
            .then(function (user) {
                if (user) {
                    done(null, user);
                } else {
                    console.log("creating a new user");
                    var user = {
                        username: profile.emails[0].value,
                        photo: profile.photos[0].value,
                        firstName: profile.name.givenName,
                        lastName: profile.name.familyName,
                        email: profile.emails[0].value,
                        google: {
                            id: profile.id
                        }
                    };
                    return model.UserModel.createUser(user);
                }
            }, function (err) {
                done(err, null);
            })
            .then(function (user) {
                done(null, user);
                // return user;
            }, function (err) {
                done(err, null);
            });
    }


    function localStrategy(username, password, done) {
        model.UserModel
            .findUserByUsername(username)
            .then(
                function (user) {
                    if (user && bcrypt.compareSync(password, user.password)) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                },
                function (err) {
                    if (err) {
                        return done(err);
                    }
                }
            );
    }

    function facebookStrategy(token, refreshToken, profile, done) {
        model.UserModel
            .findUserByFacebookId(profile.id) // TODO: Use the ID to look up the user in the database.
            .then(
                function (user) {
                    console.log("facebook login successful");
                    // TODO: user is there, log them in
                },
                function (err) {
                    console.log("facebook login failed");
                    // TODO: user is not there store as a new user
                }
            );
    }

    function register(req, res) {
        var user = req.body;
        user.password = bcrypt.hashSync(user.password);
        console.log("user: " + user.username + ", password hash: " + user.password);

        model.UserModel
            .createUser(user)
            .then(
                function (user) {
                    if (user) {
                        req.login(user, function (err) {
                            if (err) {
                                res.status(400).send(err);
                            } else {
                                res.json(user);
                            }
                        });
                    }
                }
            );
    }

    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function isadmin(req, res) {
        if (req.isAuthenticated() && req.user.role === "admin") {
            res.send(req.user);
        } else {
            res.send('0');
        }
    }

    function iswriter(req, res) {
        if (req.isAuthenticated() && req.user.role === "writer") {
            res.send(req.user);
        } else {
            res.send('0');
        }
    }

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function logout(req, res) {
        req.logOut(); // nullify the cookie
        res.sendStatus(200);
    }

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        model.UserModel
            .findUserById(user._id)
            .then(
                function (user) {
                    done(null, user);
                },
                function (err) {
                    done(err, null);
                }
            );
    }

    function createUser(req, res) {
        var newUser = req.body;
        model.UserModel
            .createUser(newUser)
            .then(function (user) {
                res.json(user);
            }, function (error) {
                res.sendStatus(500).send(error);
            });
    }

    function findUserByUserId(req, res) {
        var userId = req.params.userId;

        model.UserModel
            .findUserById(userId)
            .then(
                function (response) {
                    res.send(response);
                })
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function findUser(req, res) {
        var username = req.query['username'];
        var password = req.query['password'];
        if (username && password) {
            findUserByCredentials(req, res);
        } else if (username) {
            findUserByUsername(req, res);
        }
    }

    function findUserByUsername(req, res) {
        var username = req.query['username'];

        model.UserModel
            .findUserByUsername(username)
            .then(
                function (response) {
                    res.send(response);
                }
            )
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function findUserByCredentials(req, res) {
        var username = req.query['username'];
        var password = req.query['password'];

        model.UserModel
            .findUserByCredentials(username, password)
            .then(
                function (user) {
                    res.json(user);
                }
            );
    }

    function findAllUsers(req, res) {
        model.UserModel
            .findAllUsers()
            .then(
                function (users) {
                    res.send(users);
                }
            );
    }

    function updateUser(req, res) {
        var userId = req.params.userId;
        var newUser = req.body;

        model.UserModel
            .updateUser(userId, newUser)
            .then(
                function (status) {
                    res.sendStatus(200);
                }
            )
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function addToBookshelf(req, res) {
        var userId = req.params.userId;
        var bookId = req.params.bookId;

        model.UserModel
            .addToBookshelf(userId, bookId)
            .then(
                function (result) {
                    res.sendStatus(200);
                }
            )
            .catch(function (err) {
                res.status(500).send(err);
            });
    }

    function deleteUser(req, res) {
        var userId = req.params.userId;
        var userId = req.params.userId;

        model.UserModel
            .deleteUser(userId)
            .then(
                function (status) {
                    res.sendStatus(200);
                }
            )
            .catch(
                function (err) {
                    res.status(500).send(err);
                }
            );
    }
};