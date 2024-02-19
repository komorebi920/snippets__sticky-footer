<template>
  <div class="root">
    <div class="content">
      <!-- div.content-inside 的高度可以随意设置，亦可根据内容高度自适应 -->
      <div class="content-inside">Content 1</div>
      <div class="content-inside">Content 2</div>
      <div class="content-inside">Content 3</div>
    </div>
    <!-- div.footer 始终位于页面底部，无论页面内容高度能否填满页面 -->
    <div class="footer">Sticky Footer</div>
  </div>
</template>

<script>
export default {
  name: "Calc",
  data() {
    return {};
  },
  mounted() {
    console.log("Calc mounted");
  },
};
</script>

<style lang="scss" scoped>
.root {
  text-align: center;

  .content {
    min-height: calc(100vh - 50px); /* 使用 calc() 减去 .footer 高度 */
  }

  .content-inside {
    height: 100px; /* .content-inside 的高度可以随意设置，亦可根据内容高度自适应 */
    line-height: 100px; /* 实现文字垂直居中 */
  }

  .footer {
    height: 50px;
    line-height: 50px; /* 实现文字垂直居中 */
  }
}
</style>
