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
        },
        {
          name: "Doble",
          price: 15,
        },
        {
          name: "Papas fritas",
          price: 5,
        },
        {
          name: "Aros de cebolla",
          price: 5,
        },
      ],
    };
  },
  props: ["selectProduct", "remover"],
};
</script>