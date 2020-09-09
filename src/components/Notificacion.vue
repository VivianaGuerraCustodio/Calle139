<template>
  <div>
    <div class="contenedor_general">
      <label class="listado-pendientes">
        <ol v-for="pedido in pendientes" :key="pedido.id">
          <li>
            {{pedido.cliente}}
            <input
              @click="()=>guardar_pedidos(pedido)"
              type="button"
              value="✌Entregados 💾"
            />
          </li>
        </ol>
      </label>
    </div>
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
<style scoped>
.contenedor_general {
  align-content: center;
  margin: 0em 15em 1em 15em;
  padding: 1em 0em 1em 4em;
  background-color: #e6b7615d;
  box-shadow: 0 2px 10px #141414, 0 0 29px #bf974d inset;
}
.listado-pendientes {
  border-radius: 0.1em;
  list-style-image: url("~@/assets/images/servir.png");
  font-size: 1.3em;
  display: flex;
  flex-direction: column;
  text-align: left;
}
input[type="button"] {
  font-size: larger;
  color: #030303;
  outline: none;
}
.check {
  display: inline-flex;
  flex-direction: column;
  flex-flow: column;
}
</style>>
