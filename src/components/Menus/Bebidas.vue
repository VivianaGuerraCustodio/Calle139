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
    name : "bebidas",
    data() {
        return{
            items : [
                {
                    name : "Agua 500ml",
                    price : 5,
                },
                {
                    name : "Agua 750ml",
                    price : 7,
                },
                {
                    name : "Bebida/gaseosa 500ml",
                    price : 7,
                },
                {
                    name : "Bebida/gaseosa 750ml",
                    price : 10,
                }
            ]
        }
    },
    props: ["selectProduct", "remover"],
}
</script>