<template>
<table>
  <tbody>
    <tr v-for="item in items" :key="item">
      <td>{{item.name}}</td>
      <td>${{item.price}}</td>
    </tr>
  </tbody>
</table>
</template>
<script>
export default {
    name : "adicionales",
    data() {
        return{
            items : [
                {
                    name : "Queso",
                    price : 1,
                },
                {
                    name : "Huevo",
                    price : 1,
                }
            ]
        }
    }
}
</script>