export default {
  name: 'Home',
  data () {
    return {
      collapse: false,
      menus: [],
      iconArr: ['icon-icon-test', 'icon-charutupian', 'icon-bianjisekuai', 'icon-fabu', 'icon-fangkuai-']
    }
  },
  mounted () {
    // 获取菜单数据
    this.getData()
  },
  methods: {
    toggleMenu () {
      this.collapse = !this.collapse
    },
    async getData () {
      // 获取数据
      // this.$http.get('menus').then(res => console.log(res.data))
      const {data: {data, meta}} = await this.$http.get('menus')
      // 判断是否成功  添加操作成功为201
      if (meta.status !== 200) return this.$message.error('获取菜单失败')
      // 已经成功获取
      this.menus = data
      // 更新视图 去视图修改模板 渲染出来
    },
    logout () {
      // 清除token 就是退出 跳转到登录页
      sessionStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
