<template>
  <div>
    <div class="list">
      <div v-for="(list,i) in lists" :key="list.id" class="list_area">
        <router-link :to="'detail?id='+list.id">
          <div class="list_box"></div>
          <div class="list_date">{{list.eventStartDate}}   <span>・ {{list.online == false ? '오프라인' : '온라인'}}</span></div>
          <div class="list_title">{{list.title}}</div>
        </router-link>
      </div>
    </div>
    <div class="floating">
      <button type="button" v-scroll-to="'#scrollTop'"><font-awesome-icon :icon="faChevronUp" style="margin:2px 0 1px 0px;"/></button>
      <button type="button" v-scroll-to="'#scrollBottom'"><font-awesome-icon :icon="faChevronDown" style="margin:2px 0 1px 0px;"/></button>
    </div>
  </div>
</template>

<script>
import style from '../lib/style.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
export default {
  data(){
    return{
      faChevronUp,faChevronDown,
      lists:[
        // {
        //   'title':'Flutter Engage Extended Korea',
        //   'date':'2021/04/01',
        //   'cate':'온라인'
        // },
        // {
        //   'title':'NVIDIA JETSON DEVELOPER MEETUP',
        //   'date':'2021/04/03',
        //   'cate':'오프라인'
        // },
        // {
        //   'title':'Live온라인:도커 / k8s / 클라우드(AWS) 네트워크 완전 정복',
        //   'date':'2021/04/10',
        //   'cate':'오프라인'
        // },
        // {
        //   'title':'🐰엘리스 스쿨🐰 화상강의 코딩 선생님 모집엘리스 스쿨 화상강의 코딩 선생님 모집',
        //   'date':'2021/05/01',
        //   'cate':'온라인'
        // },
        // {
        //   'title':'3test webinar',
        //   'date':'2021/04/30',
        //   'cate':'오프라인'
        // },
        // {
        //   'title':'4test webinar',
        //   'date':'2021/05/02',
        //   'cate':'온라인'
        // },
        // {
        //   'title':'5test webinar',
        //   'date':'2021/04/28',
        //   'cate':'오프라인'
        // },
        // {
        //   'title':'6test webinar',
        //   'date':'2021/04/15',
        //   'cate':'온라인'
        // },
        // {
        //   'title':'7test webinar',
        //   'date':'2021/04/01',
        //   'cate':'온라인'
        // },
      ],
      eventStartDate:''
    }
  },
  mounted(){
    this.callList();
  },
  methods:{
    async callList(){
      try{
        const res = await axios.get('https://it-event-back.herokuapp.com/events')
        console.log(res.data.data.events);
        this.lists = res.data.data.events;
      }catch(e){
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>
.list{
  text-align: left;
}
.list_box{
  height:236px;
  width:236px;
  border:1px solid #dae1e6;
  border-radius: 4px;
  margin:0 40px;
  cursor:pointer;
}
.list_area{
  margin:50px auto 0 auto;
  display: inline-block;
}
.list_title{
  width:236px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin:0 40px;
  cursor:pointer;
}
.list_date{
  width:236px;
  text-align: left;
  margin:10px 40px 0 40px;
  cursor:pointer;
}
.list_date span{
  margin-left:5px;
}
</style>
