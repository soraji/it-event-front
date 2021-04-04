<template>
  <div>
    <div class="main_txt">개발자를 위한 컨퍼런스 아카이빙 사이트
      <div class="searchBox">
        <div><input type="text" id="search" placeholder="컨퍼런스명 검색"></div>
        <div>
          <select name="onlineyn" id="onlineyn" v-model="onlineyn">
            <option value="00">전체</option>
            <option value="01">온라인</option>
            <option value="02">오프라인</option>
          </select>
        </div>
        <div>
          <select name="whom" id="whom" v-model="whom">
            <option value="00">전체</option>
            <option value="01">개발자</option>
            <option value="02">기획자</option>
            <option value="03">디자이너</option>
          </select>
        </div>
        <div><button type="button" class="searchBtn">FIND</button></div>
      </div>
    </div>
    <div class="list">
      <div v-for="(list,i) in lists" :key="list.i" class="listArea">
        <router-link :to="'detail?id='+list.id">
          <div>
            <div class="listBox"></div>
            <div class="listDate">{{list.eventStartDate}}   <span>・ {{list.online ? '온라인' : '오프라인'}}</span></div>
            <div class="listTitle">{{list.title}}</div>
          </div>
        </router-link> 
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      onlineyn:'00',
      whom:'00',
      lists:[]
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
*:focus{
  outline: none;
}
.main_txt{
  padding-top:100px;
  width:100%;
  height:100vh;
  max-height:300px;
  background-color:#000000;
  margin:0;
}
.searchBox{
  width:80%;
  /* border:1px solid #575757; */
  height:50px;
  border-radius:25px;
  margin:150px auto 30px auto;
}
#search{
  height:48px;
  width:35%;
  padding-left:50px;
  border-radius: 25px 0 0 25px;
  border:none;
  float:left;
}
#onlineyn, #whom{
  height:50px;
  width:20%;
  padding:0 20px;
  float:left;
  border:none;
  margin-left:1px;
}
.searchBtn{
  width:15%;
  height:50px;
  float:left;
  margin-left:1px;
  border:none;
  color:#ffffff;
  border-radius:0 25px 25px 0;
  background-color: #08AEEA;
background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
}
.list{
  text-align: left;
}
.listBox{
  height:236px;
  width:236px;
  border:1px solid #dae1e6;
  border-radius: 4px;
  margin:0 0 0 40px;
  cursor:pointer;
}
.listArea{
  margin:40px auto 0 auto;
  display: inline-block;
}
.listTitle{
  width:236px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin:0 0 0 40px;
  cursor:pointer;
  font-weight:bold;
}
.listDate{
  width:236px;
  text-align: left;
  margin:10px 0 0 40px;
  cursor:pointer;
}
.listDate span{
  margin-left:5px;
}
a{
  color:#000000;
  text-decoration: none;
}
</style>
