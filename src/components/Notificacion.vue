<template>
  <div class="contenedor_general">
    <label class="listado-pendientes">
      <ol v-for="pedido in pendientes" :key="pedido.id" class="cada_item">
        <li>
          {{pedido.cliente}}
          <input @click="()=>guardar_pedidos(pedido)" type="button" value="💾" />
        </li>
      </ol>
    </label>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Notificacion",
  components: {},
  data() {
    return {
      pendientes: []
    };
  },
  mounted() {
    const db = firebase.firestore();
    db.collection("pedidos")
      .where("status", "==", "terminado")
      .onSnapshot(querySnapshot => {
        const orders = [];
        querySnapshot.forEach(function(doc) {
          orders.push({
            id: doc.id,
            ...doc.data()
          });
        });
        this.pendientes = orders;
      });
  },
  methods: {
    guardar_pedidos(pedido) {
      console.log(pedido);
      const db = firebase.firestore();
      //const pedidos = this.pendientes;
      db.collection("pedidos")
        .doc(pedido.id)
        .update({
          hora_entrega_cliente: firebase.firestore.FieldValue.serverTimestamp(),
          status: "entregado"
        });
    }
  }
};
</script>
<style lang="scss">
@import "../scss/main.scss";
.contenedor_general {
  padding: 1em 1em 1em 4em;
  display: inline-block;
  background-color: #e6b7615d;
  box-shadow: 0 2px 10px #141414, 0 0 29px #bf974d inset;
  .listado-pendientes {
    @include flex-orientation(flex, column);
    list-style-image: url("~@/assets/images/servir.png");
    .cada_item {
      li {
        text-align: left;
        input[type="button"] {
          text-align: flex-end;
          background-color: transparent;
          outline: none;
          border: none;
        }
      }
    }
  }
}
</style>>
