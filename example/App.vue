<template>
  <div class="container">
    <div class="app-header-wrapper">
      <div class="app-header-content">
        <div>
          <a href="https://github.com/gd4ark/vue-fa-modal"
             target="_blank"
             class="el-link el-link--primary"
             style="font-size: 20px;">
            <span class="el-link--inner">VUE-FA-MODAL</span>
          </a>
        </div>
        <div>
          <a href="https://github.com/gd4ark/vue-fa-modal"
             target="_blank"
             class="el-link el-link--primary is-underline">
            <span class="el-link--inner">GitHub</span>
          </a>
        </div>
      </div>
    </div>
    <div class="demo-box">
      <h2>基本使用</h2>
      <vue-fa-modal ref="fa-modal-1"
                    width="100%"
                    open-btn-text="点击我"
                    title="123"
                    @submit="submit"
                    @open="open">
        <div>
          内容
        </div>
      </vue-fa-modal>
    </div>
    <div class="demo-box">
      <h2>更复杂的使用</h2>
      <vue-fa-modal ref="fa-modal-2"
                    title="弹窗标题"
                    open-btn-text="点击我更新"
                    open-btn-icon="el-icon-edit"
                    open-btn-size="mini"
                    open-btn-type="primary"
                    other-btn-size="mini"
                    submit-btn-text="更新"
                    :need-drag="false"
                    :btn-loading="loading"
                    @submit="submit2">
        <div>
          内容
        </div>
      </vue-fa-modal>
    </div>
  </div>
</template>

<script>
import VueFaModal from 'vue-fa-modal/lib/index.js'
export default {
  components: {
    VueFaModal
  },
  data: () => ({
    loading: false
  }),
  methods: {
    open() {
      console.log('open')
    },
    submit() {
      this.$message({
        type: 'success',
        message: '提交成功'
      })
      this.$refs['fa-modal-1'].hidden()
    },
    submit2() {
      this.loading = true
      setTimeout(() => {
        this.$message({
          type: 'success',
          message: '提交成功'
        })
        this.$refs['fa-modal-2'].hidden()
        this.loading = false
      }, 1000)
    }
  }
}
</script>
<style lang="scss">
html,
body {
  height: 100%;
  overflow: hidden;
}
.el-dialog {
  max-width: 50%;
  margin: 0 auto;
}
</style>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
}
.app-header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.app-header-content {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px;
  background: #fff;
  height: 60px;
  line-height: 60px;
  width: 100%;
  border-bottom: 1px solid #eee;
}
.demo-box {
  margin-bottom: 20px;
}
</style>
