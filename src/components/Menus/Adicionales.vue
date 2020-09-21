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
  name: "adicionales",
  data() {
    return {
      items: [
        {
          name: "Queso",
          price: 1,
          qtt: ""
        },
        {
          name: "Huevo",
          price: 1,
          qtt: ""
        },
      ],
    };
  },
  props: ["selectProduct", "remover"],
};
</script>