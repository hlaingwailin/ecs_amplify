;console.log("Cookie"); console.log(document.cookie);
function cognitoSignIn(){
    var authenticationData = {
        Username : document.getElementById("username").value,
        Password : document.getElementById("password").value
    };
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    
    var poolData ={};
    poolData.UserPoolId = COGNITO.USERPOOL_ID;
    poolData.ClientId = COGNITO.CLIENT_ID;
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
   
    var userData = {};
    userData.Username = document.getElementById("username").value;
    userData.Pool = userPool;
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess : function (result){
            console.log(result);
            var accessToken = result.getAccessToken().getJwtToken();
        },

        onFailure: function(err){
            alert(err);
        }
    });
}