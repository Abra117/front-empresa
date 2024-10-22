<template>
  <v-app>
    <!--La pagina-->
    <v-main>
      <Nuxt /> <!--Renderizado de pagina-->
    </v-main>
    <!--Barra lateral-->
    <v-navigation-drawer
      permanent
      absolute
      right
    >
      <template prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider /> <!--Linea divisora-->
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon color="blue">
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Empleados',
          icon: 'mdi-account-group',
          path: '/dashboard/empleados'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
