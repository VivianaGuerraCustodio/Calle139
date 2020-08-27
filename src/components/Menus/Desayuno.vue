<template>
  <div>
    <div class="menus" v-for="item in items" :key="item">
      <input @click="selectProduct(item)" type="button" value="+" />
      <p>{{item.name}} => ${{item.price}}</p>
      <input @click="remover(item)" type="button" value="-" />
    </div>
   <!-- <tr v-for="producto in seleccion_producto" :key="producto">
      <td>{{ producto }}</td>
    </tr> -->
  </div>
</template>
<script>
export default {
  name: "desayuno",
  data() {
    return {
     // seleccion_producto: [],
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
  props: ['selectProduct', 'remover'],
}
</script>
<style scope>
.menus {
  display: flex;
}
.menus input[type="button"] {
  padding: 0em 0em 0em 0em;
  margin: 1em 1em 1em 0em;
}
</style>