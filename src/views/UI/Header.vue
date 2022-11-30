<template>
  <nav class="flex items-center justify-between flex-wrap bg-darkblue p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <router-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#eff6ff"
          class="w-7 h-7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
      </router-link>
    </div>
    <div class="block lg:hidden">
      <button
        class="
          flex
          items-center
          px-3
          py-2
          border
          rounded
          text-blue-200
          border-blue-100
          hover:text-white hover:border-white
        "
        @click="showMenu()"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#eff6ff"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      class="
        w-full
        block
        flex-grow
        lg:flex lg:items-center lg:w-auto
        text-center
      "
    >
      <div v-show="menu">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-blue-100
              hover:text-white
              mr-4
            "
          >
            <router-link to="/floors"> Plantas</router-link>
          </a>
          <a
            href="#responsive-header"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-blue-100
              hover:text-white
              mr-4
            "
          >
            <router-link to="/api"> Api Floors</router-link>
          </a>
          <a
            href="#responsive-header"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-blue-100
              hover:text-white
              mr-4
            "
          >
            <router-link to="/view"> Documentación</router-link>
          </a>
          <a
            href="#responsive-header"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-blue-100
              hover:text-white
            "
          >
            <router-link to="/view"> Contacto</router-link>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      menu: true,
    };
  },

  methods: {
    showMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style>
</style>