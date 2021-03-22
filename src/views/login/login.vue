<template>
  <div>
    <div class="container">
      <article class="login">
        <header class="login_logo">
          <img src="../../assets/logo.png" alt="BASS CLEF">
        </header> 
        
        <form class="login_form">
          <div id="kakao-login-btn" style="cursor: pointer; display: none;">
            <button id="login-gtm-kakao" type="button" class="kakaoBtn">
              <div class="kakao-logo"></div> 
              <span>카카오로 3초만에 시작하기</span>
            </button> 
            <div class="dv_line"><span>OR</span></div>
          </div> 
            
          <div class="text">
            <input type="text" name="email" placeholder="이메일 입력" class="form-text"> 
            <input type="password" name="password" placeholder="비밀번호 입력" required="required" class="form-text">
          </div> 
              
          <nav>
            <button type="button" title="" class="loginBtn" id="login-gtm-normal">로그인</button>
          </nav>
        </form> 
        
        <nav class="find_pw">
          <div class="find">
            <a href="/user/find-id" class="">아이디 찾기</a> 
            <a href="/user/find-pw" class="">비밀번호 찾기</a>
          </div> 
          <div class="join">
            <a href="/user/signup" class="">회원가입</a>
          </div>
        </nav>
      </article>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.login{padding:80px 16px 50px;box-sizing:border-box;min-height:550px}
.login_logo{padding:0 0 64px;text-align:center}
.login_logo img{display:block;width:250px;margin:0 auto}
.login_form>div :nth-child(n+2){margin-top:8px}
.login_form>p{margin:0}
.login_form>p>label{display:flex;align-items:center;margin:16px 0 12px;padding:0;box-sizing:border-box}
.login_form>p>label>*{display:block}
.login_form>p>label>span{display:inline-block;font-size:14px;color:#98999b;font-weight:300}
.login_form>nav{margin:5px 0 0}
.find_pw{width:60%;margin:15px auto;justify-content:space-between}
.find_pw div:first-child{display:flex}
.find_pw div:first-child a:first-child:after{content:"";width:1px;height:15px;margin-right:8px;margin-left:8px;background:#e4ece8}
.find_pw a{display:flex;align-items:center;box-sizing:border-box;text-align:center;font-size:14px;color:#6f7174;font-weight:300;text-decoration:none}


.dv_line{border-top:1px solid #ddd;width:100%;text-align:center;margin:56px 0 32px;position:relative}
.dv_line span{position:absolute;top:-7px;left:50%;transform:translateX(-20px);display:inline-block;color:#ddd;font-size:12px;line-height:14px;background-color:#fff;width:40px}
.kakaoBtn{align-items:center;background:#f9df33;border:1px solid transparent;border-radius:2px;box-sizing:border-box;color:#333;cursor:pointer;display:flex;font-size:16px;font-weight:500;height:48px;justify-content:center;outline:none;width:100%;position:relative}
.kakaoBtn div{background-image:url(/assets/kakao.png);background-position:0 1px;background-size:cover;height:16px;width:15px;margin-right:4px}

.form-text{
  display:block;padding:0 15px;width:60%;height:38px;box-sizing:border-box;border:1px solid #e7e7e7;border-radius:0;box-shadow:0 0 0;background:#fff;font-size:15px;line-height:normal;font-weight:300;color:#3d3d3d;margin:0 auto;-webkit-tap-highlight-color:transparent;transition:box-shadow .24s ease-out;-webkit-appearance:none;-moz-appearance:none
}
.form-text::-webkit-input-placeholder{color:#999}
.form-text:-moz-read-only{background:#f5f5f5}
.form-text:read-only{background:#f5f5f5}
.form-text:disabled{opacity:.6;cursor:not-allowed}
.form-text:focus{box-shadow:0 0 0 1px #2AF598;border-color:transparent;outline:0}
.form-text--textarea{height:auto;min-height:120px;line-height:1.8;padding-top:15px;padding-bottom:15px;resize:none;border-radius:2px;border-color:#bbb}
.form-text--error{border-color:#ff0322}
.form-text--inline{display:inline-block;width:auto}
.form-text--size-small{height:26px;font-size:13px}
.form-text--size-large{height:50px}
.login .form-text,.password .form-text,.register .form-text,.update .form-text,.user-password .form-text{border-radius:2px;height:44px;border-color:#ddd;font-size:13px}
.loginBtn{width: 60%;display: block;margin: 50px auto;background-color: #08AEEA;background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);border: none;border-radius: 3px;color: #ffffff;font-size: 2vw;letter-spacing: 2px;padding: 8px;}
.find{float:left;}
.join{float:right;}
</style>
