
export default defineComponent({
    setup(){
        const demo=ref('demo page')
        return ()=><div>{demo.value}
        </div>
    }
})