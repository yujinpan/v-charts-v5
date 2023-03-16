<template>
  <!-- 测试属性
    events: Object
  -->
  <div>
    <ve-line :data="chartData" :events="events"></ve-line>
  </div>
</template>

<script>
import { LINE_DATA } from './data';
import { VeLine } from '@/index';

export default {
  data() {
    this.events = {
      click(v) {
        console.log('v', v);
      },
    };
    return {
      chartData: LINE_DATA,
    };
  },
  components: { VeLine },
};
</script>
