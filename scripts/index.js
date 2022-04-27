var data ={};
data.UserPoolId = COGNITO.USERPOOL_ID;
data.ClientId = COGNITO.CLIENT_ID;
console.log(data);
var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);console.log(userPool);
var cognitoUser = userPool.getCurrentUser(); console.log(cognitoUser);

// var authData = {
// 	ClientId : COGNITO.CLIENT_ID, // Your client id here
// 	AppWebDomain : COGNITO.DOMAIN,
// 	TokenScopesArray : ['phone', 'email', 'profile','openid', 'aws.cognito.signin.user.admin'], // e.g.['phone', 'email', 'profile','openid', 'aws.cognito.signin.user.admin'],
// 	RedirectUriSignIn : COGNITO.REDIRECT_URL,
// 	RedirectUriSignOut : COGNITO.REDIRECT_URL,
// 	UserPoolId : COGNITO.USERPOOL_ID, // Your user pool id here
// 	AdvancedSecurityDataCollectionFlag : true // e.g. true
//     //    Storage: '<TODO the storage object>' // OPTIONAL e.g. new CookieStorage(), to use the specified storage provided
// };
// var auth = new AmazonCognitoIdentity.CognitoAuth(authData);
// console.log(auth.currentAuthenticatedUser());
// auth.userhandler = {
// 	onSuccess: function(result) {
// 		alert("Sign in success");
// 		console.log(result);
// 	},
// 	onFailure: function(err) {
// 		alert("Error!");
// 	}
// };


window.onload = function(){  console.log("Window on load..");
    if( cognitoUser != null){
        cognitoUser.getSession( function(err, session) {
             if(err){
                alert(err);
                return;
             }
             console.log("Session Validity :" + session.isValid());

             cognitoUser.getUserAttributes( function(err, result){
                if(err){
                    alert(err);
                    return;
                }
                console.log(result);
             });
        });
    } else {
        console.log("No user signed in yet.");
    }
}