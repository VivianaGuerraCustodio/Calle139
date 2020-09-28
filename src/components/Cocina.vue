<template>
  <div>
    <navegador />
    <div class="contenedor_de_pedidos">
      <h3 class="subtitulo">Pedidos por hacer</h3>
      <div class="flex-pedido">
        <div v-for="(pedido, index) in info_pedido" :key="index">
          <div class="cuadro_pedido">
            <p>Cliente : {{ pedido.cliente }}</p>
            <p>
              Hora de pedido :{{
                new Date((pedido.hora_pedido*1000)).toLocaleString()
              }}
            </p>
            <ol>
              Resumen de pedido :
              {{
                pedido.resumen_de_pedido
              }}
            </ol>
            <input
              @click="() => enviar_salon(pedido)"
              type="button"
              class="change-view"
              value="Enviar a Salón"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="contenedor_de_pedidos">
      <h3 class="subtitulo">Pedidos terminados</h3>
      <div class="flex-pedido">
        <div
          class="cuadro_pedido"
          v-for="(pedido, index) in pedidos_terminados"
          :key="index"
        >
          <p>{{ pedido.cliente }}</p>
          <p>{{ new Date(pedido.hora_envio_salon * 1000) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navegador from "./Navegador";
import { db } from "../../firebaseConfig/index.js";
import firebase from "../../firebaseConfig/index.js";
export default {
  name: "Cocina",
  components: {
    Navegador
  },
  data() {
    return {
      info_pedido: "",
      pedidos_terminados: "",
      options: {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    };
  },
  mounted() {
    db.collection("pedidos")
      .where("status", "==", "pendiente")
      .onSnapshot(querySnapshot => {
        const pending = [];
        querySnapshot.forEach(function(doc) {
          pending.push({
            id: doc.id,
            ...doc.data()
          });
        });
        this.info_pedido = pending;
      });
    //const db = firebase.firestore();
    db.collection("pedidos")
      .where("status", "==", "entregado")
      .onSnapshot(querySnapshot => {
        const orders = [];
        querySnapshot.forEach(function(doc) {
          orders.push({
            id: doc.id,
            ...doc.data()
          });
        });
        this.pedidos_terminados = orders;
      });
  },
  methods: {
    enviar_salon(pedido) {
      console.log(pedido);
      db.collection("pedidos")
        .doc(pedido.id)
        .update({
          hora_envio_salon: firebase.firestore.FieldValue.serverTimestamp(),
          status: "terminado",
          tiempo: this.hora_pedido - this.hora_envio_salon
        });
    }
  }
};
</script>
<style scoped>
.contenedor_de_pedidos {
  display: flex;
  background-color: #bf9b4db4;
  box-shadow: 0 2px 10px #141414, 0 0 29px #bf974d inset;
  text-align: center;
  flex-direction: column;
  margin: 1em 4em 1em 4em;
  padding: 1em 2em 1em 2em;
}
.pedidos_hechos {
  display: flex;
  flex-direction: row;
  border-radius: 0.1em;
  background-color: #a56f1db4;
  box-shadow: 0 2px 10px #141414, 0 0 29px #ac8236 inset;
  margin: 1em 4em 1em 4em;
  padding: 1em 2em 1em 2em;
}
.subtitulo {
  text-align: left;
  font-size: 1.4em;
  color: rgb(50, 53, 56);
}
.pedidos {
  flex: auto;
}
.cuadro_pedido {
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  background-color: #fce84f8c;
  padding: 10px;
  margin: 5px;
  border-radius: 0.5em;
  width: 210px;
}
.change-view {
  background-color: rgba(85, 75, 75, 0.39);
  border-radius: 0.2em;
  border-style: none;
  outline: none;
}
.flex-pedido {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>