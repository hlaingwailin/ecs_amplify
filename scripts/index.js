var data ={};
data.UserPoolId = COGNITO.USERPOOL_ID;
data.ClientId = COGNITO.CLIENT_ID;
var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
var cognitoUser = userPool.getCurrentUser(); console.log("Current User :"); console.log(cognitoUser);


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
                if(result){
                    setCookie("username", result[2].getValue(), 1);
                }
             });
        });
    } else {
        console.log("No user signed in yet.");
    }
}