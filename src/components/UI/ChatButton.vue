<script setup lang="ts">
    import { ref } from "vue";

    const show = ref<boolean>(false)
    const showResponse = ref<boolean>(false)

    const message = ref<string>('')
    const options = ref(['Horarios de atención', '¿Dónde nos encontramos?', '¿Qué servicios ofrecemos?', '¿Cómo contactarnos?'])

    const sendMessge = (message: string) => {
      console.log(message)
      showResponse.value = true
    }

    const hiddenChat = () => {
      show.value = false
      showResponse.value = false
    }
</script>

<template>
    <div v-if="show"
        class="w-20rem h-auto mb-1 absolute right-0 m-3 position border-round shadow-2 px-3 py-4 z-5 bg-white"
        :class="[show ? 'fadein animation-duration-1000' : 'fadeout animation-duration-1000']"
    >

      <div class="flex justify-content-between align-items-center">
        <h5 class="text-800 text-base flex align-items-center">
          Hola soy DonnyBot 🤖
          <Tag value="En línea" severity="success" rounded class="ml-2" />
        </h5>
        <i class="pi pi-times cursor-pointer text-600 font-semibold" style="font-size: 1rem" @click="hiddenChat" />
      </div>

      <h4 class="text-xs text-600 mt-1">
        {{ showResponse ? 'Espero que te ayude esto:' : 'Te puedo ayudar con lo siguiente:' }}
      </h4>

      <div class="w-full mt-3 mb-4" v-if="!showResponse">
        <div v-for="(option, index) in options" :key="index"
          class="text-sm mb-2 bg-primary-reverse cursor-pointer"
        >
          <div @click="sendMessge(option)" class="hover:bg-primary w-max border-2 p-2 border-round scalein animation-duration-1000 transition-ease-in">
            {{ option }}
          </div>
        </div>
      </div>

      <div class="w-full mt-3" v-if="showResponse">
        <div class="text-sm mb-2 bg-primary-reverse cursor-pointer">
          Respuesta
        </div>
        <div class="w-full" @click="showResponse = false">
          Otra pregunta?
        </div>
      </div>

    </div>
    <div class="absolute bottom-0 right-0 m-3">
        <Button
            rounded
            severity="primary"
            icon="pi pi-prime"
            label="Chat"
            @click="show = !show"
        />
    </div>
</template>

<style scoped>
.position {
  bottom: 70px;
}

.rebote {
    animation: bounce 1.5s infinite backwards;
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-8px);
    }
}

</style>