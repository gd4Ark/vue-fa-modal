<template>
  <div class="container">
    <h2>基本使用</h2>
    <vue-fa-modal ref="fa-modal-1"
                  width="100%"
                  open-btn-text="点击我"
                  title="123"
                  @submit="submit"
                  @open="open">

    </vue-fa-modal>
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
                  :submit-disabled="btnDisabled"
                  @submit="submit2">
      <div slot="body">
        内容
      </div>
    </vue-fa-modal>
  </div>
</template>

<script>
import VueFaModal from 'vue-fa-modal'
export default {
  components: {
    VueFaModal
  },
  data: () => ({
    btnDisabled: false
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
      this.btnDisabled = true
      setTimeout(() => {
        this.$message({
          type: 'success',
          message: '提交成功'
        })
        this.$refs['fa-modal-2'].hidden()
        this.btnDisabled = false
      }, 1000)
    }
  }
}
</script>
