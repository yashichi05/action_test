<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>{{ abc }}</p>
    <p>
      {{ obj }}
    </p>
    <p>
      {{ sl }}
    </p>
  </div>
</template>

<script>
import { reactive, ref, toRef,toRefs } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  setup() {
    const sl = ref(7898);
    const abc = ref({ assc: 4777, tt: { text: 789 } });
    const obj = reactive({ text: 7777, tt: { msg: 789 } });
    // const ste = shallowRef(456)
    let test = toRef(abc.value, "assc");
const {text,tt} =  toRefs(obj)
setTimeout(() => {
    // obj.tt.msg = 999999
    console.log(text,tt)
    // test2.tt.value.msg = 545555555555
  
}, 2000);

    // setInterval(() => {
    //   test.value ++
    //   // abc.value.assc += 5;
    //   obj.text++;
    //   sl.value++;
    // }, 1000);
    return { abc, obj, sl, test };
    // console.log(internalInstance)
  },
  created() {
    // console.log(this);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
