<template>
    <div class="hello">
        <div class="login">
            <input type="text" v-model.trim="mobile"><br>
            <input type="text" v-model.trim="password">
            <button @click="login">登录</button>
        </div>
        <div class="bg"></div>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            mobile: '13051248978',
            password: '123456'
        }
    },
    methods: {
        login () {
            this.$store.dispatch('addMyInfo',{'mobile': this.mobile, 'password': this.password});
            this.$store.dispatch('showLogin', false);
        }
    }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.login{
  width: 300px;
  height: 190px;
  position: fixed;
  z-index: 999;
  background-color: white;
  border-radius: 2px;
  padding-top:30px;
  left:50%;
  top:50%;
  margin-top: -85px;
  margin-left: -150px;
  text-align: center;
}

input{
  width: 200px;
  height:35px;
  border-radius: 2px;
  border:1px solid #8e8e8e;
  margin-top: 10px;
  padding-left: 5px;
}
button{
  width: 208px;
  height: 35px;
  background-color: #42b983;
  color:white;
  border-radius: 2px;
  border:0px;
  margin-top: 10px;
}
.bg{
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    position: fixed;
    top:0;
    left: 0;
}
</style>

