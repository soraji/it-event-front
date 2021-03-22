import {ko} from 'vuejs-datepicker/dist/locale'
const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>'
};
var formVar = { 
  data: function () { 
    return { 
      disabledDates: {
        // https://github.com/charliekassel/vuejs-datepicker README
        customPredictor: function(date) {
          // disables the date if it is a of 5
          if(date.getDate() > new Date(2020, 1, 15)){
            return true
          }
        }
      },
      date1 : new Date(new Date().getFullYear(), new Date().getMonth(),  new Date().getDate()),
      date2 : new Date(new Date().getFullYear(), new Date().getMonth(),  new Date().getDate()),
      ko:ko,
      loading:false, 
      customLabels,
      color:'#008844',
    } 
  },
  computed:{
    cf_name:{
      get(){
        return this.$store.state.cf_name
      },
      set(val){
        this.$store.state.cf_name = val;
      }
    },
    cf_cate:{
      get(){
        return this.$store.state.cf_cate
      },
      set(val){
        this.$store.state.cf_cate = val;
      }
    },
    cf_onlineYN:{
      get(){
        return this.$store.state.cf_onlineYN
      },
      set(val){
        this.$store.state.cf_onlineYN = val;
      }
    },
    cf_host:{
      get(){
        return this.$store.state.cf_host
      },
      set(val){
        this.$store.state.cf_host = val;
      }
    },
    hs_hp1:{
      get(){
        return this.$store.state.hs_hp1
      },
      set(val){
        this.$store.state.hs_hp1 = val;
      }
    },
    hs_hp2:{
      get(){
        return this.$store.state.hs_hp2
      },
      set(val){
        this.$store.state.hs_hp2 = val;
      }
    },
    hs_hp3:{
      get(){
        return this.$store.state.hs_hp3
      },
      set(val){
        this.$store.state.hs_hp3 = val;
      }
    },
    hs_email1:{
      get(){
        return this.$store.state.hs_email1
      },
      set(val){
        this.$store.state.hs_email1 = val;
      }
    },
    hs_email2:{
      get(){
        return this.$store.state.hs_email2
      },
      set(val){
        this.$store.state.hs_email2 = val;
      }
    },
    loca:{
      get(){
        return this.$store.state.loca
      },
      set(val){
        this.$store.state.loca = val;
      }
    },
    pplNum:{
      get(){
        return this.$store.state.pplNum
      },
      set(val){
        this.$store.state.pplNum = val;
      }
    },
    cf_content:{
      get(){
        return this.$store.state.cf_content
      },
      set(val){
        this.$store.state.cf_content = val;
      }
    },
  }
}
export default formVar;