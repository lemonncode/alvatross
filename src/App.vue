<template>
  <!-- Header -->
  <div class="max-w-screen-sm border-2 border-zinc-700 mx-auto  h-screen">
      <Header></Header>
    
    <div class="flex flex-row">


      <div class="mx-auto mt-4">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>

import Header from "./views/UI/Header.vue";
export default {
  name: "App",

  components: {  Header },
};
</script>
