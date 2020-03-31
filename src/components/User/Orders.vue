<template>
    <v-container>
        <h1 class="text--secondary">Заказы</h1>
        <v-row :justify="'center'">
            <v-col md="6">

                <v-list subheader two-line flat>
                    <v-list-item
                        avatar
                        v-for="(order, i) in orders"
                        :key="i"
                    >
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

                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        active: '',
        toggle: true,
        settings: '',
        orders: [
          {
            id: '123',
            name: 'Mikle',
            phone: '+7 912 455 64 87',
            adId: '7897879',
            done: false
          }
        ]
      }
    },

    methods: {
      markDone (order) {
        order.done = true
        console.log(order)
      }
    }
  }
</script>
