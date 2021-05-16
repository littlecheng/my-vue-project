<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-html="msg"> ggg</p>
    <p v-text="msg"> msg </p>
    <p>msg</p>
    <p v-bind:class="ha">哈哈</p>
    <p v-bind:title="ts">我是</p>
    <ul>
      <li>
        <router-link to="day01/middle/洗衣机">跳转至HelloVue</router-link>
      </li>
      <li>
        <router-link to="day01/displayData">跳转至displayData</router-link>
      </li>
      <li>
        <router-link to="day01/container">跳转至container</router-link>
      </li>
      <li>
        <router-link to="day01/baseLayout">跳转到baselayout页面</router-link>
      </li>
      <li>
        <router-link to="day02/containerLayout">跳转到containerLayout页面</router-link>
      </li>
      <li>
        <router-link to="day02/icon">跳转到icon页面</router-link>
      </li>
      <li>
        <router-link to="day02/link">跳转到link页面</router-link>
      </li>
      <li>
        <router-link to="day03/form">跳转到表單</router-link>
      </li>
      <li>
        <router-link to="day03/table">跳转到表格</router-link>
      </li>
      <li>
        <router-link to="day03/tree">跳转到tree</router-link>
      </li>
      <li>
        <router-link to="day03/header">跳转到menu</router-link>
      </li>
      <li>
        <router-link to="login/login">跳转到login</router-link>
      </li>
    </ul>
    <ul>
      <li>
        <el-button type="primary" @click='test()'>get请求</el-button>
        {{data}}
      </li>
      <li>
        <el-button type="primary" @click='getData()'>get请求带有参数</el-button>
        {{data}}
      </li>
      <li>
        <el-button type="primary" @click='postdata()'>post请求</el-button>
        {{data}}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'main',
    data() {
      return {
        msg: 'HELLO WORLD',
        ha: 'red',
        ts: '提示',
        data: ''
      }
    },
    methods: {

      test() {

        this.axios.get('http://localhost:8086/jquery/greeting').then((response) => {
          console.info(response.data)
          this.data = response.data
        }).catch((error) => {
          console.log(error)
        })
      },
      getData() {
        this.axios.get('http://localhost:8086/jquery/greeting?name=你大爷').then((response) => {
          console.info(response.data)
          this.data = response.data
        }).catch((error) => {
          console.log(error)
        })
      },
      postdata() {
        this.axios.post('http://localhost:8086/index/user/save', {
          'userName': '钟馗',
          'passWord': '123',
          'realName': '钟馗'
        })
          .then((response) => {
            console.info(response.data)
            this.data = response.data
          }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

  .red {
    color: red;
  }
</style>
