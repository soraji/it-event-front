<template>
  <div>
    <div >
      <table class="join_email">
        <tr>
          <td class="smTitle">아이디입력</td>
        </tr>
        <tr>
          <td class="inputTd"><input type="text" name="cust_id" id="cust_id"></td>
        </tr>
        <tr>
          <td class="smTitle">비밀번호 입력</td>
        </tr>
        <tr>
          <td class="inputTd"><input type="text" name="cust_pw" id="cust_pw"></td>
        </tr>
        <tr>
          <td class="smTitle">비밀번호 재확인</td>
        </tr>
        <tr>
          <td class="inputTd"><input type="text" name="cust_pw_again" id="cust_pw_again"></td>
        </tr>
        <tr>
          <td class="smTitle">이름</td>
        </tr>
        <tr>
          <td class="inputTd"><input type="text" name="cust_pw_again" id="cust_pw_again"></td>
        </tr>
        <tr>
          <td class="smTitle">핸드폰</td>
        </tr>
        <tr>
          <td class="inputTd"><input type="text" name="cust_pw_again" id="cust_pw_again"></td>
        </tr>
        <tr>
          <td><button type="button" class="submitBtn" @click="checkform()">회원가입</button></td>
        </tr>
      </table>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
html{height:100%;}
*:focus{outline: none;}
.join_email{table-layout: fixed;width:500px;margin: 150px auto;height:100%;}
.smTitle{text-align: left;height:40px;color:#08AEEA;}
input[name="cust_id"],
input[name="cust_pw"],
input[name="cust_pw_again"]{
  border-bottom:1px solid #08AEEA;width:100%;margin-bottom:20px;height:28px;line-height: 28px;
}
.inputTd{text-align: left;}
.submitBtn{
  border:none;
  border-radius: 25px;
  height:32px;
  width:100%;
  margin:0 auto;
  padding:0 10px;
  margin-top:50px;
  color:#ffffff;
  background-color: #08AEEA;
  background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
}
</style>
