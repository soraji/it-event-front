<template>
  <div>
    <div class="top_container">
      <div class="event_img"><img src="../assets/thumnail.png"></div>
      <div class="event_detail">
        <div class="event_title">
          <span class="event_online_yn">[{{list.online == false ? '오프라인' : '온라인'}}]</span>
          <br>
          <span class="title_txt">{{list.title}}</span>
        </div>
        <div class="dv_line"></div>
        <div class="event_date">
          <span class="txt_bold">일시</span>
          <div class="event_date_txt">{{list.eventStartDate}} - {{list.eventLastDate}}</div>
        </div>
        <div class="event_host">
          <span class="txt_bold">주최자 정보</span>
          <div class="event_host_box">
            <span class="event_host_txt"><font-awesome-icon :icon="faAt"/>{{list.hostEmail}}</span>
            <span class="event_host_txt"><font-awesome-icon :icon="faPhone"/>{{list.hostPhone}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="middle_container">
      <div class="event_enroll">
        <button type="button" class="enroll_btn">이벤트 참석하기</button>
      </div>
    </div>


    <div class="bottom_container">
      <div class="event_detail_img"><img src="../assets/test.png"></div>
      <div class="event_content">{{list.contents}}</div>
      <div class="dv_line"></div>
      <div class="event_location">
        <span class="txt_bold">위치</span>
        <div class="event_location_txt">{{list.location}}</div>
        <div class="event_location_txt">{{list.detailLocation}}</div>
        <a href="https://place.map.kakao.com/1340926820"><div class="kakao_map_api"></div></a>
        <div class="event_location_txt">{{list.locationDescription}}</div>
      </div>
    </div>
    <div class="floating">
      <button type="button" v-scroll-to="'#scrollTop'"><font-awesome-icon :icon="faChevronUp" style="margin:2px 0 1px 0px;"/></button>
      <button type="button" v-scroll-to="'#scrollBottom'"><font-awesome-icon :icon="faChevronDown" style="margin:2px 0 1px 0px;"/></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import style from '../lib/style.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
export default {
  data(){
    return{
      list:[],
      id : this.$route.query.id,
      faAt,faPhone,faChevronUp,faChevronDown
    }
  },
  created(){
    this.callingDetail();
  },
  methods:{
    async callingDetail(){
      try{
        const res = await axios.get(`https://it-event-back.herokuapp.com/events/${this.id}`)
        this.list = res.data.data;
      }catch(e){
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>
.top_container{
  margin:100px auto;
  height:400px;
  width:85%;
}
.middle_container{
  width:90%;
  margin:0 auto;
}
.event_online_yn{
  font-size:20px;
  color:#7d7d7d;
}
.title_txt{
  display: inline-block;
  height:160px;
}
.event_img{
  float:left;
  text-align: center;
  max-width:550px;
  max-height:434px;
  overflow: hidden;
}
.event_detail{
  float:right;
  text-align: left;
}
.event_title{
  font-size:27px;
  margin-bottom:20px;
}
.event_date,.event_host{
  margin:40px 0;
}
.event_date_txt{
  margin:10px 0;
}

.event_host_box{
  background-color: #f1f1f1;
  font-size:14px;
  padding:0 12px;
  border-radius: 2px;
  height:50px;
  margin-top:12px;
  line-height: 25px;
}
.event_host_txt{
  display: block;
  height:22px;
}
svg{
  margin-right:8px;
  margin-bottom:-1px;
  color:#92969a;
  width:11px !important;
}
.event_enroll{
  height:50px;
  line-height: 48px;
  border-top:1px solid #dae1e6;
  border-bottom:1px solid #dae1e6;
  text-align: right;
}
.enroll_btn {background-image: linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%)}
.enroll_btn {
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  box-shadow: 0 0 20px #eee;
  border-radius: 5px;
  width:150px;
  height:36px;
  border:none;
}
.enroll_btn:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
.dv_line{
  border-bottom:1px solid #dae1e6;
  width:90%;
  margin:0 auto;
}
.event_detail_img{
  width:100%;
  margin:40px auto;
}
.event_content{
  width:85%;
  margin:50px auto;
  text-align: left;
}
.event_location{
  text-align: left;
  width:85%;
  margin:50px auto 0;
}
.event_location_txt{
  height:24px;
  margin:10px 0;
}
.kakao_map_api{
  width:500px;
  height:400px;
  border:1px solid #dae1e6;
}
.txt_bold{
  font-weight: bold;
}
</style>
