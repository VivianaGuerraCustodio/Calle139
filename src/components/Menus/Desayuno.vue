<template>
<table>
  <tbody>
    <tr v-for="item in items" :key="item">
      <input type="button" value="+">
      <td>{{item.name}}</td>
      <td>${{item.price}}</td>
      <input type="button" value="-">
    </tr>
  </tbody>
</table>
</template>
<script>
export default {
  name: "desayuno",
  data() {
    return {
      items: [
        {
          name: "Café americano",
          price: 5,
        },
        {
          name: "Sándwich",
          price: 10,
        },
        {
          name: "Café con leche",
          price: 7,
        },
        {
          name: "Jugo de frutas",
          price: 7,
        },
      ],
    };
  },
  props: ["item"],
};
</script>
<style scope>

</style>