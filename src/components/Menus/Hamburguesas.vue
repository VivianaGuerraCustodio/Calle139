<template>
  <table>
    <tbody>
      <tr v-for="item in items" :key="item">
        <td>
          <input @click="selectProduct(item)" type="button" value="+" />
        </td>
        <td>{{item.name}}</td>
        <td>${{item.price}}</td>
        <td>
          <input @click="remover(item)" type="button" value="-" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "hamburguesas",
  data() {
    return {
      items: [
        {
          name: "Simple",
          price: 10,
          qtt: ""
        },
        {
          name: "Doble",
          price: 15,
          qtt: ""
        },
        {
          name: "Papas fritas",
          price: 5,
          qtt: ""
        },
        {
          name: "Aros de cebolla",
          price: 5,
          qtt: ""
        },
      ],
    };
  },
  props: ["selectProduct", "remover"],
};
</script>