jQuery(
    function() { 
        checkLoggedInUser();
           
        let endpoint = API.ENDPOINT.GET_USER.format(COGNITO.LOGGEDIN_USERID.toString());

        $.ajax({
            type:'GET',
            url: endpoint,
            dataType: 'json',

            beforeSend: function(){
                
            },

            success: function(response){
                console.log(response);
                renderUserInfo(response.data);
                renderEduProfile(response.data);
                renderCareerProfile(response.data);
                renderPersonalityProfile(response.data);
            },

            error: function(response){
                alert("Error calling API."); console.log(response);
            }
        })
    }
)

function checkLoggedInUser(){
    if( !isUserLoggedIn() ){
       window.location.replace("index-3.html");
    }
}

function isUserLoggedIn(){
    if(COGNITO.LOGGEDIN_USERID){
        return true;
    }
    return false;
}

function renderUserInfo(data){
    let userInfoObj = data.user;
    let userInfoElement = getUserInfoUIElement();
    let displayElement = userInfoElement.
         replace('{{fullName}}', userInfoObj.fullName).
         replace('{{email}}', userInfoObj.email).
         replace('{{phone}}', userInfoObj.phone).
         replace('{{aboutme}}', "About me....");
    $("div#userInfoContainer").append(displayElement);
}

function renderEduProfile(data){
    let eduUiElement = getEduUIElement();
    data.user.eduProfileList.forEach(function(eduObj){        
        let displayElement = eduUiElement.
        replace('{{qualificationType}}', eduObj.qualificationType).
        replace('{{yearOfCompletion}}', eduObj.yearOfCompletion);

        $("ul#eduListContainer").append(displayElement);
   });
}

function renderCareerProfile(data){
    let careerUiElement = getCareerUIElement();
    data.user.careerProfileList.forEach(function(careerObj){        
         let displayElement = careerUiElement.
         replace('{{companyName}}', careerObj.companyName).
         replace('{{yearsOfService}}', careerObj.yearsOfService).
         replace('{{industry}}', careerObj.industry).
         replace('{{domain}}', careerObj.domain).
         replace('{{position}}', careerObj.position).
         replace('{{startDate}}', careerObj.startDate.slice(0,10)).
         replace('{{endDate}}', careerObj.endDate.slice(0,10));

         $("ul#careerListContainer").append(displayElement);
    });
}

function renderPersonalityProfile(data){
    let personalityUiElement = getPersonalityUIElement();
    data.user.personilityProfileList.forEach(function(personalityObj){        
         let displayElement = personalityUiElement.
         replace('{{personalityType}}', personalityObj.personalityType).
         replace('{{assessmentMethod}}', personalityObj.assessmentMethod).
         replace('{{description}}', personalityObj.description).
         replace('{{traits}}', personalityObj.traits);

         $("ul#personalityListContainer").append(displayElement);
    });
}

function getCareerUIElement(){
    let element = '<ul class="section-content">'+
    '<li class="course-item has-status course-item-lp_lesson">'+
        '<a class="section-item-link" href="#">'+
          '<span class="item-name"> '+
               'Company Name : {{companyName}} <br/>'+
               'Years Of Service : {{yearsOfService}} <br/>'+
               'Industry: {{industry}} <br/>'+
               'Domain : {{domain}} <br/>'+
               'Position : {{position}} <br/>'+
               'Start Date : {{startDate}} <br/>'+
               'End Date : {{endDate}} <br/>'+
          '</span>'+

          '<div class="course-item-meta">'+
            '<span class="item-meta duration">Edit</span>'+
            '<i class="item-meta course-item-status"></i>'+
          '</div>'+
        '</a>'+
    '</li>'+
'</ul>';

return element;
}

function getEduUIElement(){
    let element = '<ul class="section-content">'+
    '<li class="course-item has-status course-item-lp_lesson">'+
        '<a class="section-item-link" href="#">'+
          '<span class="item-name"> '+
               'Qualificaation Type : {{qualificationType}} <br/>'+
               'Year Of Completion : {{yearOfCompletion}} <br/>'+
          '</span>'+

          '<div class="course-item-meta">'+
            '<span class="item-meta duration">Edit</span>'+
            '<i class="item-meta course-item-status"></i>'+
          '</div>'+
        '</a>'+
    '</li>'+
'</ul>';

return element;
}

function getPersonalityUIElement(){
    let element = '<ul class="section-content">'+
    '<li class="course-item has-status course-item-lp_lesson">'+
        '<a class="section-item-link" href="#">'+
          '<span class="item-name"> '+
               'Personality Type : {{personalityType}} <br/>'+
               'Assessment Method : {{assessmentMethod}} <br/>'+
               'Description : {{description}} <br/>'+
               'Traits : {{traits}} <br/>'+
          '</span>'+

          '<div class="course-item-meta">'+
            '<span class="item-meta duration">Edit</span>'+
            '<i class="item-meta course-item-status"></i>'+
          '</div>'+
        '</a>'+
    '</li>'+
'</ul>';

return element;
}

function getUserInfoUIElement(){
    let element = '<h4><a href="#">{{fullName}}</a></h4>'+
    '<span class="sub-title"><p>{{email}}</p></span>'+    
    '<span class="sub-title"><p>{{phone}}</p></span>'+   
    '<p>{{aboutme}}</p>';

    return element;
}



