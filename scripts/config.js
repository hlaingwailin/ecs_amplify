var API = {};
API.HTTP_VERB = {};
API.ENDPOINT = {};

API.HTTP_VERB.GET = "GET";
API.HTTP_VERB.ADD = "POST";
API.HTTP_VERB.UPDATE = "PATCH";
API.HTTP_VERB.DELETE = "DELETE";

API.ENDPOINT.PROTOCOL = "http";
//Local setting
//API.ENDPOINT.HOST = API.ENDPOINT.PROTOCOL + "://" + "localhost";
//API.ENDPOINT.PORT = "8080";

//AWS setting
API.ENDPOINT.HOST = API.ENDPOINT.PROTOCOL + "://" + "ecsconsumerservice-env.eba-thmnbnif.ap-southeast-1.elasticbeanstalk.com";
API.ENDPOINT.PORT = "";

API.ENDPOINT.VERSION = "v1";
API.ENDPOINT.BASE_URL = API.ENDPOINT.HOST + ":" + API.ENDPOINT.PORT + "/api/" + API.ENDPOINT.VERSION;
API.ENDPOINT.GET_ALL_USERS = API.ENDPOINT.BASE_URL + "/users";
API.ENDPOINT.GET_USER = API.ENDPOINT.BASE_URL + "/users/{0}";
API.ENDPOINT.GET_USER_BY_USERNAME = API.ENDPOINT.BASE_URL + "/users/uname/{0}";


//Authentication
var COGNITO = {};
COGNITO.DOMAIN = "https://ecs-team5.auth.ap-southeast-1.amazoncognito.com";
COGNITO.USERPOOL_ID = "ap-southeast-1_hlUM5ynGW";
COGNITO.CLIENT_ID = "4cd8mfn8mevrm63km02j42vqvc";
COGNITO.RESPONSE_TYPE = "token";
COGNITO.REDIRECT_URL = "https://main.d3ot7wt5d7jwab.amplifyapp.com/";
COGNITO.LOGIN_URL = COGNITO.DOMAIN + "/login?response_type=" + COGNITO.RESPONSE_TYPE + "&client_id=" + COGNITO.CLIENT_ID + "&redirect_uri=" + COGNITO.REDIRECT_URL;
COGNITO.SIGNUP_URL = COGNITO.DOMAIN + "/signup?response_type=" + COGNITO.RESPONSE_TYPE + "&client_id=" + COGNITO.CLIENT_ID + "&redirect_uri=" + COGNITO.REDIRECT_URL;
COGNITO.LOGGED_IN = true;
COGNITO.LOGGEDIN_USERID = 0;

