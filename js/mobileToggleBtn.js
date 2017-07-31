//  會員註冊/登錄
  var registerBtn = document.querySelector("#register");

  var loginBtn = document.querySelector('#login');
  var loginBtn2 = document.querySelector('#login2');

  function register(){

    // 關閉會員登入
    document.body.removeChild(document.body.childNodes[0]);
    document.body.style.overflow = 'visible';
    var bodyHiddenScroll = document.body.style.overflow = 'hidden';

   //會員註冊
    var registerCoDiv = document.createElement('div');
    var registerBgDiv = document.createElement('div');
    registerBgDiv.className = "registerBg";
    // console.log(registerDiv);
  
    var registerBoxDiv = document.createElement('div');
    registerBoxDiv.className = "registerBox";
    var innerContent =  "<span onclick='this.parentNode.style.display = 'none';' class='closebtn'>&times;</span>"+
              "<form class='regiForm' method='post' action='' autocomplete>"+
              "<h2>會員註冊</h2><br>"+
              "帳號：<input type='text' class='idName' required><br><br>"+
              "密碼：<input type='text' class='psNum' required><br><br>"+
              "姓名：<input type='text' class='regiName' required><br><br>"+
              "信箱：<input type='email' class='regiEmail' required ><br><br>"+
              "<input type='submit' class='registerSendBtn' value='送出'>";
    registerBoxDiv.innerHTML = innerContent;

    document.body.prepend(registerCoDiv);//prepend on the first Child
    registerCoDiv.appendChild(registerBgDiv);
    registerCoDiv.prepend(registerBoxDiv);

    //close
    var registerBg = document.querySelector('.registerBg');
    var closeBtn =  document.querySelector('.closebtn');
    closeBtn.addEventListener("click",close,false);
    registerBg.addEventListener("click",close,false);
    
  };


  function login(){
    var bodyHiddenScroll = document.body.style.overflow = 'hidden';
    var loginCoDiv = document.createElement('div');
    var loginBgDiv = document.createElement('div');
    loginBgDiv.className = "loginBg";
    // console.log(loginDiv);
  
    var loginBoxDiv = document.createElement('div');
    loginBoxDiv.className = "loginBox";
    var innerContent =  "<span onclick='this.parentNode.style.display = 'none';' class='closebtn'>&times;</span>"+
              "<form class='loginForm' method='post' action='' autocomplete>"+
              "<h2>會員登錄</h2><br>"+
              "帳號：<input type='text' class='idName' required><br><br>"+
              "密碼：<input type='text' class='psNum' required><br><br>"+
              "<input type='submit' class='loginSendBtn' value='送出'>"+
              "<a href='#' id='registerLink'>註冊新帳號</a><br><br>";
    loginBoxDiv.innerHTML = innerContent;

    document.body.prepend(loginCoDiv);//prepend on the first Child
    loginCoDiv.appendChild(loginBgDiv);
    loginCoDiv.prepend(loginBoxDiv);

    //close
    var loginBg = document.querySelector('.loginBg');
    var closeBtn =  document.querySelector('.closebtn');
    closeBtn.addEventListener("click",close,false);
    loginBg.addEventListener("click",close,false);

    var registerLink = document.querySelector('#registerLink');
    registerLink.addEventListener("click",register);  

  };


  function close(){
    // e.stopPropagation();
    document.body.removeChild(document.body.childNodes[0]);
    document.body.style.overflow = 'visible';
    
  }


  registerBtn.addEventListener("click",register);
  loginBtn.addEventListener("click",login);
  loginBtn2.addEventListener("click",login);


// 手機版漢堡打開的背景鎖定
  var mobileToggleBtn = document.querySelector('.toggle-btn');
  mobileToggleBtn.addEventListener("click",function () {
    var body = document.body;
    var bodyStyle = window.getComputedStyle(body);
    var bodyStyleValue = bodyStyle.getPropertyValue('overflow');
    console.log(bodyStyleValue);
    if(bodyStyleValue == 'visible'){
      document.body.style.overflow = 'hidden';
    }
    else{
      document.body.style.overflow = 'visible';
    }
        
  });