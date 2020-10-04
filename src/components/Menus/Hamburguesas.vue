<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              Menú desayuno
              <button class="modal-default-button" @click="$emit('close')">
                <img src="@/assets/images/x.png" alt="close" />
              </button>
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <table>
                <tbody>
                  <tr class="menus" v-for="(item, index) in items" :key="index">
                    <td>
                      <input
                        @click="selectProduct(item)"
                        type="button"
                        value="+"
                      />
                    </td>

                    <td>{{ item.name }}</td>
                    <td>${{ item.price }}</td>
                    <td>
                      <input @click="remover(item)" type="button" value="-" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
          qtt: ""
        },
        {
          name: "Doble",
          price: 15,
          qtt: ""
        },
        {
          name: "Papas fritas",
          price: 5,
          qtt: ""
        },
        {
          name: "Aros de cebolla",
          price: 5,
          qtt: ""
        }
      ]
    };
  },
  props: ["selectProduct", "remover"]
};
</script>