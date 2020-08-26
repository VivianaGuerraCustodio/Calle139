<template>
  <div class="contenedor_general">
    <navegador />
    <div class="pedido_total">
      <section class="contenedor_pedido">
        <div class="resumen_pedido">
          <p>Cliente : {{nombre}}</p>
          <p>Mesa : {{mesa}}</p>
          <p>
            <strong>
              Nota:
              <br />
            </strong>
            {{nota_adicional}}
          </p>
          <div v-for="info in infohijo" :key="info.elem">
            {{info.elem}}
            <div>
              <img @click="delete_item" id="buton_trash" src="../assets/images/trash.png" alt />
            </div>
          </div>
        </div>
        <hr />
        <div class="menús">
          <input v-model="nombre" placeholder="Nombre del cliente" />
          <br />
          <input v-model="mesa" type="number" placeholder="Nº de mesa" />
          <p>
            <strong>Menús</strong>
          </p>
          <div>
            <button @click="mostrar_desayuno =! mostrar_desayuno" class="change-view">Desayuno</button>
            <div v-show="mostrar_desayuno">
              <desayuno :item="datos_desayuno" />
            </div>
            <br />
          </div>
          <button @click="mostrar_durante=! mostrar_durante" class="change-view">Durante el día</button>
          <div v-if="mostrar_durante">
            <hamburguesas @getValues="setValues" />
          </div>
          <br />
          <button @click="mostrar_bebidas=!mostrar_bebidas" class="change-view">Bebidas</button>
          <div v-if="mostrar_bebidas">
            <bebidas />
          </div>
          <br />
          <button
            @click="mostrar_adicionales=!mostrar_adicionales"
            id="adicionales"
            class="change-view"
          >Adicionales</button>
          <div v-if="mostrar_adicionales">
            <adicionales />
          </div>
          <br />
          <p>¿Desea añadir una nota?</p>
          <textarea v-model="nota_adicional" type="text" />
          <br />
        </div>
      </section>
      <div class="envio_cocina">
        <p>Total a pagar :{{total}}</p>
        <button @click.prevent="enviar_cocina" class="change-view">Enviar a cocina</button>
      </div>
      <br />
      <p v-if="enviar_cocina" class="avisoCorrecto margen">{{aviso}}</p>
      <p v-else class="avisoIncorrecto margen">{{aviso}}</p>
    </div>
  </div>
</template>

<script>
import Navegador from "./Navegador.vue";
import Desayuno from "./Menus/Desayuno.vue";
import Adicionales from "./Menus/Adicionales.vue";
import Bebidas from "./Menus/Bebidas.vue";
import Hamburguesas from "./Menus/Hamburguesas.vue";
import firebase from "firebase";

export default {
  name: "Salon",
  data() {
    return {
      nombre: "",
      mesa: "",
      nota_adicional: "",
      aviso: "",
      mostrar_desayuno: false,
      mostrar_durante: false,
      mostrar_bebidas: false,
      mostrar_adicionales: false,
      infohijo: "",
      total : 0,
    };
  },
  components: {
    Navegador,
    Desayuno,
    Adicionales,
    Bebidas,
    Hamburguesas,
  },
  methods: {
    enviar_cocina() {
      const db = firebase.firestore();
      db.collection("pedidos")
        .add({
          colaborador: localStorage.getItem("usuario"),
          cliente: this.nombre,
          mesa: this.mesa,
          status: "pendiente",
          nota: this.nota_adicional,
          hora_pedido: firebase.firestore.FieldValue.serverTimestamp(),
          hora_envio_salon: "",
        })
        .then(() => {
          this.aviso = "Se envió el pedido a cocina";
        })
        .catch(() => {
          this.aviso = "Hubo un error, toma el pedido de nuevo :)";
        });
    },
    getItem(obj){
      this.total = obj.total;
    },
    datos_desayuno(obj) {
      this.infohijo = obj;
    },
    delete_item(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>
<style scoped>
.change-view {
  background-color: rgba(85, 75, 75, 0.39);
  border-radius: 0.2em;
  border-style: none;
  outline: none;
  font-size: 2em;
}
.pedido_total {
  background-image: url("~@/assets/images/yellowpaper.jpg");
  opacity: 0.85;
  background-size: cover;
  box-shadow: 0 2px 10px #141414, 0 0 29px #bf974d inset;
  margin: 0em 2em 0em 3em;
}
.contenedor_pedido {
  display: flex;
  flex-direction: row;
  margin: auto;
}
.resumen_pedido {
  display: block;
  width: 40%;
  height: 50%;
  margin: 10px;
  padding: 3% 8%;
}
.menús {
  margin: 3% 6% 3% 3%;
  padding: 25px;
}
.contenedor_pedido .envio_cocina {
  display: grid;
}
.salir {
  width: 3em;
  height: 3em;
}
.margen {
  padding: 1em;
  margin: 0em 20em 0em 20em;
  border-radius: 2em;
}
.avisoCorrecto {
  background-color: rgba(97, 202, 97, 0.692);
}
.avisoIncorrecto {
  background-color: rgba(202, 97, 97, 0.692);
}
#buton_trash {
  width: 1.4em;
}
</style>