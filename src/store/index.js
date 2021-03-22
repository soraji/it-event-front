import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    date1 : new Date(new Date().getFullYear(), new Date().getMonth(),  new Date().getDate()),
    date2 : new Date(new Date().getFullYear(), new Date().getMonth()+3,  new Date().getDate()),
    cf_name: '',
    cf_cate: 'seminar',
    cf_onlineYN:'online',
    cf_host:'',
    hs_hp1:'',
    hs_hp2:'',
    hs_hp3:'',
    hs_email1:'',
    hs_email2:'',
    loca:'',
    pplNum:'',
    cf_content:''
  }
});