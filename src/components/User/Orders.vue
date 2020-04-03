<template>
    <v-container>
        <v-layout v-if="loading">
            <div style="height: 80vh" class="d-flex justify-center align-center">
                <v-progress-circular
                    indeterminate
                    :size="90"
                    :width="3"
                    color="purple"
                ></v-progress-circular>
            </div>
        </v-layout>
        <v-layout v-else-if="!loading && orders.length !== 0">
            <h1 class="text--secondary">Заказы</h1>
            <v-row :justify="'center'">
                <v-col md="6">
                    <v-card subheader two-line text
                        v-for="(order, i) in orders"
                        :key="i">
                        <v-list-item class="mb-3">
                            <v-list-item-action>
                                <v-checkbox
                                    :input-value="order.done"
                                    color="success"
                                    @change="markDone(order)"
                                ></v-checkbox>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>{{ order.name }}</v-list-item-title>
                                <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn
                                    :to="'/ad/' + order.adId"
                                    class="primary">Открыть</v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-layout>
        <v-layout v-else>
            <p>У вас нет активных заказов!</p>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      orders () {
        return this.$store.getters.orders
      }
    },

    methods: {
      markDone (order) {
        this.$store.dispatch('markOrderDone', order.id)
          .then(() => {
            order.done = true
          })
          .then(() => {})

        console.log(order, 'order - markDone')
      }
    },

    created () {
      this.$store.dispatch('fetchOrders')
    }
  }
</script>
