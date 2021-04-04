<template>
  <div class="joinSection">
    <div><router-link :to="'/joinStep2'"><button type="button" class="emailBtn">이메일 가입하기</button></router-link></div>
    <div><button type="button" class="kakaoBtn">카카오톡 간편 가입하기</button></div>
    <div><button type="button" class="naverBtn">네이버 간편 가입하기</button></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.joinSection{
  width:400px;max-width: 400px;
  margin:100px auto;
  height:100%;
}
.emailBtn{
  background-color: #08AEEA;background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);border:none;
  height:44px;width:100%;margin-top:10px;color:#ffffff;border-radius: 2px;
}
.kakaoBtn{
  background-color:#f9df33;border:none; height:44px;width:100%;margin-top:10px;border-radius: 2px;

}
.naverBtn{
  border:none;height:44px;width:100%;margin-top:10px;background-color:#1ec800;color:#ffffff;border-radius: 2px;
}
</style>
