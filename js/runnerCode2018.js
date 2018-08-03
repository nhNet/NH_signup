// Nicholas Huaman 2018
// First load all Google's scripts so that the signIn actually works!
makeMeta("google-signin-scope", "profile email");
makeMeta("google-signin-client_id", "398993796104-lq9k21a411mnehe5p94brocp3rs72dr5.apps.googleusercontent.com");
loadScript("https://nhnet.github.io/management/private/Accounts/accounts.js");
loadScript("https://apis.google.com/js/platform.js");
loadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");

document.body.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.querySelector(".submit").click();
		document.querySelector(".check").click();
		document.querySelector(".submit1").click();
    }
});

// Code to modify the Google signup square in the middle
document.querySelector('.submit').onclick = function() {
      setTimeout(function(){document.querySelector('.title2').innerHTML='S';},0);
      setTimeout(function(){document.querySelector('.title2').innerHTML='St';},100);
      setTimeout(function(){document.querySelector('.title2').innerHTML='Ste';},200);
      setTimeout(function(){document.querySelector('.title2').innerHTML='Step';},300);
      setTimeout(function(){document.querySelector('.title2').innerHTML='Step ';},400);
      setTimeout(function(){document.querySelector('.title2').innerHTML='Step 1';},500);
      setTimeout(function(){document.querySelector('.title2').innerHTML='Step 1.';},600);
      document.querySelector('.loginBox').innerHTML='<br><br>'+
                                                        '<img width="20%" style="margin-top:4%;" src="https://nhnet.github.io/img/GoogleLogo.png">'+
                                                        '<div style="margin-left:20%;margin-top:-5.5%;font-size:15px">, &nbsp;in collaboration with <span style="font-weight:bolder;">🌐NH Net Browser</span></div>'+
                                                        '<br><br>'+
                                                        '<h1 class="title1" style="pointer-events: none;user-select:none;font-weight:100;color:#444444;font-size:40px">Signup</h1><br>'+
                                                        '<h1 class="title2" style="pointer-events: none;user-select:none;font-weight:100;color:#444444;font-size:25px">S</h1>'+
                                                        '<br><br>'+
                                                        '<h1 class="point1" style="pointer-events: none;user-select:none;font-weight:100;color:#444444;font-size:20px">'+
                                                           '<label for="inp" class="inp">'+
                                                           '<input style="pointer-events:auto; class="myInputEmail" type="text" id="inp" placeholder="&nbsp;">'+
                                                           '<span id="emailLabel" class="label">Type in your email address</span>'+
                                                           '</label><span class="dot">.</span>'+
                                                        '</h1>'+
                                                        '<br><br><button class="check">Check if I have an account!</button>'+
                                                        '<p class="4breaks"><br><br></p>'+
                                                        '<a href="https://nhnet.github.io/NH_login">'+
                                                        '    Got an account? Log in!'+
                                                        '</a>'+
                                                        '<br><br><br><br>'+
                                                        '<div class="Submit">'+
                                                        '    <button style="background:#1b335b;color:grey;" class="submit1">'+
                                                        '        Continue'+
                                                        '    </button>'+
                                                        '</div>'+

                                                     '</div>';
      document.querySelector('.check').onclick = function(){
             var inputEmail = document.querySelector('#inp').value;
             if (allAccounts.includes(inputEmail)===true){             //check if account actually exists
                   if(proAccounts.includes(inputEmail)===true){      //check if account is pro
                       document.querySelector('.check').innerHTML='You have a PRO Account!';
                       document.querySelector('.check').style.background='#FF5000';
                       document.querySelector('.check').style.fontSize='15px';
                       document.querySelector('.check').style.padding='10px 25px 10px 25px';
                       document.querySelector('.submit1').style.animation='unDisable 1s';
                       setTimeout(function(){document.querySelector('.submit1').style.background='#4285f4';document.querySelector('.submit1').style.color='white';},1000);
                       document.querySelector('.submit1').onclick = function(){
                           setTimeout(function(){document.querySelector('.title2').innerHTML='S';},0);
                           setTimeout(function(){document.querySelector('.title2').innerHTML='St';},100);
                           setTimeout(function(){document.querySelector('.title2').innerHTML='Ste';},200);
                           setTimeout(function(){document.querySelector('.title2').innerHTML='Step';},300);
                           setTimeout(function(){document.querySelector('.title2').innerHTML='Step ';},400);
                           setTimeout(function(){document.querySelector('.title2').innerHTML='Step 2';},500);
                           setTimeout(function(){document.querySelector('.title2').innerHTML='Step 2.';},600);
                           document.querySelector('.loginBox').innerHTML='<br><br>'+
                              '<img width="20%" style="margin-top:4%;" src="https://nhnet.github.io/img/GoogleLogo.png">'+
                              '<div style="margin-left:20%;margin-top:-5.5%;font-size:15px">, &nbsp;in collaboration with <span style="font-weight:bolder;">🌐NH Net Browser</span></div>'+
                              '<br><br>'+
                              '<h1 class="title1" style="pointer-events: none;user-select:none;font-weight:100;color:#444444;font-size:40px">Signup</h1><br>'+
                              '<h1 class="title2" style="pointer-events: none;user-select:none;font-weight:100;color:#444444;font-size:25px">S</h1>'+
                              '<br><br><br>'+
                              '<h1 class="point1" style="pointer-events: none;user-select:none;font-weight:100;color:#444444;font-size:20px">'+
                                 'Press the button below to complete the signup:<br>'+
                                 '<div class="g-signin2" data-onsuccess="verifyMyUser" data-onfailure="onFail"></div>'+
                              '</h1>'+
                           '</div>';
                       }

                   }else{
                       document.querySelector('.check').innerHTML='You have a Basic Account!';
                       document.querySelector('.check').style.background='#497fbc';
                       document.querySelector('.check').style.fontSize='15px';
                       document.querySelector('.check').style.padding='10px 25px 10px 25px';
                       document.querySelector('.submit1').style.animation='unDisable 1s';
                       setTimeout(function(){document.querySelector('.submit1').style.background='#4285f4';document.querySelector('.submit1').style.color='white';},1000);
                       document.querySelector('.submit1').onclick = function(){
					   		   setTimeout(function(){document.querySelector('.title2').innerHTML='S';},0);
							   setTimeout(function(){document.querySelector('.title2').innerHTML='St';},100);
							   setTimeout(function(){document.querySelector('.title2').innerHTML='Ste';},200);
							   setTimeout(function(){document.querySelector('.title2').innerHTML='Step';},300);
							   setTimeout(function(){document.querySelector('.title2').innerHTML='Step ';},400);
							   setTimeout(function(){document.querySelector('.title2').innerHTML='Step 2';},500);
							   setTimeout(function(){document.querySelector('.title2').innerHTML='Step 2.';},600);
							   document.querySelector('.loginBox').innerHTML='<br><br>'+
								  '<img width="20%" style="margin-top:4%;" src="https://nhnet.github.io/img/GoogleLogo.png">'+
								  '<div style="margin-left:20%;margin-top:-5.5%;font-size:15px">, &nbsp;in collaboration with <span style="font-weight:bolder;">🌐NH Net Browser</span></div>'+
								  '<br><br>'+
								  '<h1 class="title1" style="pointer-events: none;user-select:none;font-weight:100;color:#444444;font-size:40px">Signup</h1><br>'+
								  '<h1 class="title2" style="pointer-events: none;user-select:none;font-weight:100;color:#444444;font-size:25px">S</h1>'+
								  '<br><br><br>'+
								  '<h1 class="point1" style="pointer-events: none;user-select:none;font-weight:100;color:#444444;font-size:20px">'+
									 'Press the button below to complete the signup:<br>'+
									 '<div class="g-signin2" data-onsuccess="verifyMyUser" data-onfailure="onFail"></div>'+
								  '</h1>'+
							   '</div>';
					   }
                   }
             }else{
                 document.querySelector('.check').innerHTML='This email does not have an account saved for it!<br>Ask the creator of this browser<br>to add you to the list!';
                 document.querySelector('.check').style.fontSize='12px';
                 document.querySelector('.check').style.textAlign='center';
                 document.querySelector('.check').style.paddingLeft='52.5px';
                 document.querySelector('.check').style.paddingRight='52.5px';
                 document.querySelector('.check').style.background='#ef000b';
             }
             if(inputEmail==='' || inputEmail.includes('@')===false || inputEmail.includes('.')===false){
                 document.querySelector('.check').innerHTML="That's not a proper Email!";
                 document.querySelector('.check').style.fontSize='15px';
                 document.querySelector('.check').style.padding='10px 25px 10px 25px';
                 document.querySelector('.check').style.textAlign='center';
                 document.querySelector('.check').style.background='#4285f4';
             }
      };
}
setTimeout(
    function() {
        document.querySelector('.borderBox').style.opacity = 1;
    },
    4000
);
// Here is what happens when Google Signs u in correctly.
function verifyMyUser(googleUser) {
    // Refer to Google using this variable. This is the base for the useful variables for code users.
    var profile = googleUser.getBasicProfile();
    // Name  Google User Variables for future use!
    var profileImg = profile.getImageUrl();
    var profileFullName = profile.getName();
    var profileEmail = profile.getEmail();
    var names = profileFullName.split(" ");
    var firstName = names[0];
    // Name google Variables
    if (allAccounts.includes(profileEmail) === true) { //check if account actually exists in the array
        // If it is, execute this...
        setTimeout(function() {
            document.body.style.background = 'black';
            document.body.style.backgroundImage = 'none';
            document.body.style.color = 'white';
            document.body.style.paddingTop = '20%';
            document.body.innerHTML = '<img style="margin-top:-13%;margin-left:42%;border-radius:100%" height="200px" width="200px" src="' + profileImg + '">' +
                '<h1 style="font-size:100px;margin-top:-16%;margin-left:60%;">' + firstName + '</h1>' +
                '<img style="margin-left:46.6%;margin-top:-50px" width="80px" src="https://nhnet.github.io/NH_login/img/load.gif"><br><br>' +
                '<h1 style="margin-top:-20px;text-align:center">You have already signed up.<br><br>Loading NH Net Login Page...</h1>';
            setTimeout(function() {
                window.location = 'https://nhnet.github.io/NH_login';
            }, 8000);
        }, 2000);
    }
}
// This is unimportant.
// It is what loads everything at the top!
function loadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    script.async = "true";
    script.defer = "true";
    document.head.appendChild(script);
}
function makeStyle(styles) {
    var style = document.createElement("style");
    style.innerHTML = styles;
    document.head.appendChild(style);
}
function makeMeta(name, content) {
    var meta = document.createElement("meta");
    meta.name = name;
    meta.content = content;
    document.head.appendChild(meta);
}
// That's all folks!
// Thank you for looking at my code.
// It might even be of some use to you!
// Nicholas Huaman 2018
