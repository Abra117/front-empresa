<template>
  <v-card flat elevation="0" width="800" color="#E5D9F2">
    <v-card-title>
      <p class="text-center" color="#A594F9" style="width: 100% !important;">
        Homer Bussines Register
      </p>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="usuario.apaterno"
            dense
            outlined
            label="apaterno"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="usuario.amaterno"
            dense
            outlined
            label="amaterno"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="usuario.nombre"
            dense
            outlined
            label="Nombre"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="usuario.direccion"
            dense
            outlined
            label="direccion"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="usuario.ciudad"
            dense
            outlined
            label="ciudad"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="usuario.estado"
            dense
            outlined
            label="estado"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="usuario.telefono"
            dense
            outlined
            label="telefono"
          />
        </v-col>
        <v-col cols="4">
          rol
          <v-combobox
            v-model="usuario.rol"
            :items="['Admin','Compras']"
            dense
            outlined
          />
        </v-col>
        <v-col cols="4">
          <v-file-input
            v-model="usuario.imagen"
            dense
            outlined
            label="imagen"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="usuario.usuario"
            dense
            outlined
            label="usuario"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="usuario.password"
            type="password"
            dense
            outlined
            label="password"
          />
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="confirmarPassword"
            type="password"
            dense
            outlined
            label="Confirmar Password"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row align="center" justify="center" class="ma-3">
        <v-btn color="#CD1FF" class="ml-3">
          <span style="text-transform: none; color: #6C48C5;">
            cancelar
          </span>
        </v-btn>
        <v-btn color="#CD1FF" class="ml-3" @click="registrarUsuario">
          <span style="text-transform: none; color: #6C48C5;">
            Registrar
          </span>
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {

  data () {
    return {
      usuario: {},
      confirmarPassword: ''
    }
  },
  methods: {
    async registrarUsuario () {
      if (this.usuario.password === this.confirmarPassword) {
        const formData = new FormData()
        for (const key in this.usuario) {
          if (key === 'imagen') {
            if (this.usuario.imagen) { formData.append(key, this.usuario.imagen) }
          } else {
            formData.append(key, this.usuario[key])
          }
        }
        const response = await this.$axios.post('/empleados/create', formData)
        console.log(response)

        if (response.data.success) {
          this.usuario = {}
          this.$router.push('/')
        }
      }
    },
    goToLogin () {
      this.$router.push('/')
    }
  }
}

</script>

<style scoped>

</style>
