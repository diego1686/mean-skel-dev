var _ = require('lodash');

var newError = function(err, detail, keys) {
    if(!keys)
        keys = [];
    if(!detail)
        detail = {};
    
    var errors = detail && !_.isEmpty(detail.errors) ? _.keys(detail.errors) : [];
    errors = _.union(errors, keys); //Create an array of uniq values
    return {
        code: err.code,
        message: err.message,
        detail : detail,
        errors : errors
    };
};

var errorsEnum = {
    //Post user
    CantCreateUser: {code: 1000000, message: "Can't create new user."},
    UserEmailAlreadyUsed: {code: 1000001, message: "A user with that email already exists."},
    
    //Login
    LoginInvalidCredentials: {code: 1000100, message: "Invalid credentials."},
    CantAuthenticateUser: {code: 1000101, message: "There was a problem on authenticate user."},
    AccountNotActive: {code: 1000102, message: "Please activate your account."},
    
    //Put user
    CantEditUser: {code: 1000200, message: "Can't edit user."},
    CantEditPassword: {code: 1000201, message: "Current password is invalid."},
    
    //Activate Account
    CantActivateAccount: {code: 1000300, message: "There was a problem at activate account."},
    InvalidToken: {code: 1000301, message: "Invalid token."},
    
    //Permission
    AuthToken:  {code: 1000400, message: "Can't authenticate token."},
    NoTokenProvided: {code: 1000401, message: "No token provided."},

    //Post Event
    CantCreateEvent: {code: 1000500, message: "Can't create new event."},   

    //Get Users
    CantGetUser: {code: 1000600, message: "Can't get users."}, 

    //Get Events
    CantGetEvent: {code: 1000700, message: "Can't get events."},    


    //Update Events
    CantUpdateEvent: {code: 1000800, message: "Can't update event."},

    //Cancel Event
    CantCancelEvent: {code: 1001000, message: "Can't cancel event."},

    //Accept Event
    CantAcceptEvent: {code: 1002000, message: "Can't accept event."},

    //Reject Event
    CantRejectEvent: {code: 1003000, message: "Can't reject event."},

    //Send Mail
    CantSendMail: {code: 1004000, message: "Can't send mail."}

};

exports.errorsEnum = errorsEnum;
exports.newError = newError;