<template>
  <div class="root">
    <!-- div.content 需设置 margin-bottom，等于 div.footer 高度的相反数 -->
    <div class="content">
      <!-- div.content-inside 的高度可以随意设置，亦可根据内容高度自适应 -->
      <div class="content-inside">Content 1</div>
      <div class="content-inside">Content 2</div>
      <div class="content-inside">Content 3</div>
      <!-- div.push 是额外的占位元素，高度与 div.footer 一致 -->
      <div class="push"></div>
    </div>
    <!-- div.footer 始终位于页面底部，无论页面内容高度能否填满页面 -->
    <div class="footer">Sticky Footer</div>
  </div>
</template>

<script>
export default {
  name: "MarginBottom",
  data() {
    return {};
  },
  mounted() {
    console.log("MarginBottom mounted");
  },
};
</script>

<style lang="scss" scoped>
.root {
  text-align: center;

  .content {
    min-height: 100vh;
    margin-bottom: -50px; /* 等于 .footer 高度的相反数 */
  }

  .content-inside {
    height: 100px; /* .content-inside 的高度可以随意设置，亦可根据内容高度自适应 */
    line-height: 100px; /* 实现文字垂直居中 */
  }

  .push,
  .footer {
    height: 50px; /* .push 是额外的占位元素，高度与 .footer 一致 */
    line-height: 50px; /* 实现文字垂直居中 */
  }
}
</style>
