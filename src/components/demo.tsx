export default defineComponent({
  setup() {
    const demo = ref("demo page")
    const test=ref('test')
    return () => <div>{demo.value}
    <div>{test.value}</div>
    </div>
  }
})
