<template>
  <table>
    <tbody>
      <tr class="menus" v-for="item in items" :key="item">
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
  name: "desayuno",
  data() {
    return {
      items: [
        {
          name: "Café americano",
          price: 5,
          qtt: ""
        },
        {
          name: "Sándwich",
          price: 10,
          qtt: ""
        },
        {
          name: "Café con leche",
          price: 7,
          qtt: ""
        },
        {
          name: "Jugo de frutas",
          price: 7,
          qtt: ""
        }
      ]
    };
  },
  props: ["selectProduct", "remover"]
};
</script>