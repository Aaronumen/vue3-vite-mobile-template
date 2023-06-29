import styles from "./demo.module.less"
import { useTestStore } from "@/store"
export default defineComponent({
  setup() {
    const demo = ref("demo page")
    const test = ref("test")
    const { num, total } = storeToRefs(useTestStore())
    return () => (
      <div class="text-wrap">
        {demo.value}
        {`num:${num.value},total:${total.value}`}
        <div class={styles.test}>{test.value}</div>
      </div>
    )
  }
})
