<template>
  <div class="nav" id="scrollTop">
    <div class="headerLeft" >
      <router-link to="main" tag="li">
        <img src="../assets/blacklogo.png" alt="BASS CLEF">
      </router-link>
    </div>
    <div class="headerRight">
      <router-link tag="li" to="main"><li>홈</li></router-link>
      <router-link tag="li" to="online"><li>전체</li></router-link>
      <router-link tag="li" to="magam"><li>곧!마감</li></router-link>
      <router-link tag="li" to="enroll" class="enrollBtn"><span >이벤트 등록하기</span></router-link>
      <router-link tag="li" to="login"><li>로그인</li></router-link>
    </div>
  </div>
</template>

<script>
import mainPage from './main.vue';
import online from './online.vue';
import free from './free.vue';
import magam from './magam.vue';
import mogakco from './mogakco.vue';
export default {
  components: {
    mainPage,online,free,magam,mogakco
  }
}
</script>

<style scoped>
*:focus{
  outline:none;
}
.nav{
  width:100%;
  margin:0px auto;
  padding-top:15px;
  padding-bottom:15px;
  height:30px;
  color:#fff;
  background-color:#000000;
  border-bottom:1px solid #575757;
}
#app > div.nav > div.headerRight > li.enrollBtn{
  width:150px;
  text-align:right;
}
.headerLeft{
  color: #ffffff;
  float:left;
  padding: 5px 8px 0 5px;
  
}
.headerLeft img{
  margin-top:-18px;
  width:220px;
}
.headerLeft li{
  margin-right:3px;
  list-style: none;
  float:left;
  padding:3px;
  cursor: pointer;
}
.headerLeft a{
  color:#fff;
  text-decoration: none;
  padding-right:50px;
  cursor: pointer;
}
.headerRight{
  color: #ffffff;
  float:right;
  padding: 5px 20px 0 0px;
}
.headerRight .router-link-exact-active{
  color: #40E0D0;
  font-weight: bold;
}
.headerRight a{
  color:fff;
  text-decoration: none;
  cursor: pointer;
}
.headerRight li{
  width:70px;
  float:left;
  list-style: none;
  text-align: center;
  cursor: pointer;
}
.headerRight li:hover{
  color:#40E0D0;
}
.headerRight li .router-link-exact-active{
  color:#40E0D0;;
}
a:link{
  color:#fff;
}
a:visited{
  color:#fff;
}
.enrollBtn {
	background-image: linear-gradient(to right, #006175 0%, #00a950 100%);
	border-radius: 40px;
  box-sizing: border-box;
	color: #ffffff;
	display: block;
	height: 30px;
	margin: -4px auto 0 auto;
	padding: 4px;
	position: relative;
  text-decoration: none;
	text-transform: uppercase;
	z-index: 2;
  margin-left:30px;
}

.enrollBtn:hover {
	color: #fff;
}

.enrollBtn span {
	align-items: center;
	background: #000000;
	border-radius: 40px;
	display: flex;
	justify-content: center;
	height: 100%;
	transition: background .5s ease;
	width: 100%;
  font-weight: normal;
}

.enrollBtn:hover span {
	background: transparent;
  color:#ffffff;
}
</style>
