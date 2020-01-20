<template>
  <div class="hello">
    <el-input></el-input>
    <el-button type="primary">测试</el-button>
    <svg-icon icon-class="user" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
