<template>
  <div class="enrollForm">
    <div class="title">Yay! 새로운 이벤트를 만들어 볼까요?</div>
    <div class="sub_title">그러기 위해서는 몇개의 정보가 필요해요! <br>아래의 양식을 작성해 주세요 </div>
    <div>
      <table class="tableClass">
        <tr>
          <th>행사명</th>
          <td><input type="text" name="cf_name" id="cf_name" v-model="cf_name"></td>
        </tr>
        <tr>
          <th>행사종류</th>
          <td>
            <select name="cf_cate" id="cf_cate" v-model="cf_cate" class="selectpicker selectDropDown show-tick">
              <option value="seminar">컨퍼런스(세미나)</option>
              <option value="class">클래스</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>온오프라인</th>
          <td>
            <input type="radio" name="cf_onlineYN" id="cf_onlineYN" value="online" v-model="cf_onlineYN">
            <label for="online"><span></span>온라인</label>&nbsp;
            <input type="radio" name="cf_onlineYN" id="cf_onlineYN" value="offline" v-model="cf_onlineYN">
            <label for="online"><span></span>오프라인</label>
          </td>
        </tr>
        <tr>
          <th>호스트명</th>
          <td><input type="text" name="cf_host" id="cf_host" v-model="cf_host"></td>
        </tr>
        <tr>
          <th>호스트 전화번호</th>
          <td>
            <input type="text" name="hs_hp1" id="hs_hp1" v-model="hs_hp1" onKeyup="this.value=this.value.replace(/[^0-9]/g,'');"> -
            <input type="text" name="hs_hp2" id="hs_hp2" v-model="hs_hp2" onKeyup="this.value=this.value.replace(/[^0-9]/g,'');"> -
            <input type="text" name="hs_hp3" id="hs_hp3" v-model="hs_hp3" onKeyup="this.value=this.value.replace(/[^0-9]/g,'');">
          </td>
        </tr>
        <tr>
          <th>호스트 이메일</th>
          <td>
            <input type="text" name="hs_email1" id="hs_email1" v-model="hs_email1">@
            <input type="text" name="hs_email2" id="hs_email2" v-model="hs_email2">
          </td>
        </tr>
        <tr>
          <th>행사시작일</th>
          <td>
            <datepicker :disabled-dates="disabledDates" :language="ko" :format="customFormatter" class="date" :value="date1" v-model="date1"></datepicker>
          </td>
        </tr>
        <tr>
          <th>행사종료일</th>
          <td>
            <datepicker :disabled-dates="disabledDates" :language="ko" :format="customFormatter" class="date" :value="date2" v-model="date2"></datepicker>
          </td>
        </tr>
        <tr>
          <th>장소</th>
          <td><input type="text" name="loca" id="loca" v-model="loca"></td>
        </tr>
        <tr>
          <td>장소 api들어갈곳</td>
        </tr>
        <tr>
          <th>참여인원</th>
          <td><input type="text" name="pplNum" id="pplNum" v-model="pplNum"></td>
        </tr>
        <tr>
          <th>대표이미지 등록</th>
          <td><input type="file" name="thumbnail" id="thumbnail"></td>
        </tr>
        <tr>
          <th>행사내용</th>
          <td><textarea name="cf_content" cols="40" rows="5" v-model="cf_content"></textarea></td>
        </tr>
      </table>
      <button type="button" class="submitBtn" @click="checkform()">등록하기</button>
    </div>
    <div class="floating">
      <button type="button" v-scroll-to="'#scrollTop'"><font-awesome-icon :icon="faChevronUp" style="margin:2px 0 1px 0px;"/></button>
      <button type="button" v-scroll-to="'#scrollBottom'"><font-awesome-icon :icon="faChevronDown" style="margin:2px 0 1px 0px;"/></button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
var moment = require('moment');
moment().format();
import $ from 'jquery'
import style from '../../lib/style.css'
import Datepicker from 'vuejs-datepicker';
import bootstrap from '../../lib/bootstrap.css'
import bootstrapselect from '../../lib/bootstrap-select.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import formVar from './form.js';
export default {
  name:'enrollForm',
  mixins: [formVar],
  components:{
    Datepicker,
    FontAwesomeIcon,
  },
  mounted() { //업종 mounted와 updated안하면 dom에서 bootstrap-select로 바인딩이 안됨
    // const $selectpicker = $(this.$el).find('.selectpicker');
    // $selectpicker.selectpicker();
  },
  updated() {
    // $(this.$el).find('.selectpicker').selectpicker('refresh');
  },
  methods:{
    customFormatter(date) {   //datepicker 기본포맷
      return moment(date).format('YYYY/MM/DD');
    },
    async checkform(){
      const date1 = this.getFormatDate(this.date1).split('-')[0]+'-'+this.getFormatDate(this.date1).split('-')[1]+'-'+this.getFormatDate(this.date1).split('-')[2];
      const date2 = this.getFormatDate(this.date2).split('-')[0]+'-'+this.getFormatDate(this.date2).split('-')[1]+'-'+this.getFormatDate(this.date2).split('-')[2];
      console.log(date1);

      console.log({
          "eventCreateType":"INNER",
          "hostEmail":this.hs_email1+"@"+this.hs_email2,
          "hostPhone":this.hs_hp1+this.hs_hp2+this.hs_hp3,
          "title":this.cf_name,
          "eventStartDate":date1,
          "eventLastDate":date2,
          "eventConceptType":this.cf_cate,
          "emailSendingMessage":"",
          "location":this.loca,
          "detailLocation":"위치 지도 정보 내용",
          "locationDescription":"위치 상세 내용입니다.",
          "image":null,
          "contents":"행사 내용 필수 입력 입니다.",
          "onlinePlatformInfo":null,
          "onlineEnrollInfo":null,
          "online":this.cf_onlineYN,
          "emailReserveSending":false
        });
        
      const res = await axios.post('https://it-event-back.herokuapp.com/events',
        // {
        //   "eventCreateType":"INNER",
        //   "hostEmail":this.hs_email1+"@"+this.hs_email2,
        //   "hostPhone":this.hs_hp1+this.hs_hp2+this.hs_hp3,
        //   "title":this.cf_name,
        //   "eventStartDate":date1,
        //   "eventLastDate":date2,
        //   "eventConceptType":this.cf_cate,
        //   "emailSendingMessage":"",
        //   "location":this.loca,
        //   "detailLocation":"위치 지도 정보 내용",
        //   "locationDescription":"위치 상세 내용입니다.",
        //   "image":null,
        //   "contents":"행사 내용 필수 입력 입니다.",
        //   "onlinePlatformInfo":null,
        //   "onlineEnrollInfo":null,
        //   "online":this.cf_onlineYN,
        //   "emailReserveSending":false
        // }
        {
          "eventCreateType":"INNER",
          "hostEmail":"uzini_@naver.com",
          "hostPhone":null,
          "title":"정상 타이틀 4",
          "eventStartDate":"2021-03-30 00:00:00",
          "eventLastDate":"2021-03-30 00:00:00",
          "eventConceptType":"CLASS",
          "emailSendingMessage":"예약 발송 메시지 테스트 예약 발송 메시지 테스트 예약 발송 메시지 테스트",
          "location":"위치 정보",
          "detailLocation":"위치 지도 정보 내용",
          "locationDescription":"위치 상세 내용입니다.",
          "image":null,
          "contents":"행사 내용 필수 입력 입니다.",
          "onlinePlatformInfo":null,
          "onlineEnrollInfo":null,
          "online":false,
          "emailReserveSending":false
        }
      )
      console.log(res);
    },
    getFormatDate(date){
      var year = date.getFullYear();              //yyyy
      var month = (1 + date.getMonth());          //M
      month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
      var day = date.getDate();                   //d
      day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
      return  year + '-' + month + '-' + day;
    },
  }
}
</script>

<style scoped>
*:focus{
  outline:none;
}
.date{
  width:210px;
  border-bottom:1px solid #006175;
  font-size:1.5vw;
  cursor: pointer;
}
input[type="text"]{
  border-bottom:1px solid #006175;
}
textarea{
  border:1px solid #006175;
}
.enrollForm{
  padding:100px;
  height:100%;
  width:900px;
}
.tableClass{
  margin-top:90px;
  width:85%;
  margin:0 auto;
  table-layout: fixed;
}
.tableClass th{
  width:150px;
  text-align: left;
  height:40px;
}
.tableClass tr td{
  text-align:left;
}
.title{
  font-size:2.2vw;
  height:40px;
}
.sub_title{
  font-size:1.8vw;
  margin-bottom:30px;
}
.submitBtn{
  border:none;
  border-radius: 25px;
  height:32px;
  width:150px;
  margin:0 auto;
  padding:0 10px;
  margin-top:50px;
  color:#ffffff;
  background-color: #08AEEA;
  background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
}
select[name="cf_cate"]{
  width:210px;
}
input[name="hs_hp1"],
input[name="hs_hp2"],
input[name="hs_hp3"]{
  width: 50px;
}
input[name="hs_email1"]{
  width:119px;
}
input[readonly]{
  width:206px;
}
[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 20px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
    top:2px;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 14px;
    height: 14px;
    border: 1px solid #006175;
    border-radius: 100%;
    background: #fff;
  
  border: 1px #919191 solid;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 8px;
    height: 8px;
    background: #006175;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}
</style>