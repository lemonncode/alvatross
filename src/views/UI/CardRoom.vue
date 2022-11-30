<template>
  <div>
    <div class="py-5 px-3 rounded-3xl shadow-lg bg-white max-w-md">
      <div class="bg-lightblue p-3 shadow-lg border-l-4 border-darkblue">
        <h5
          class="
            text-gray-900 text-lg
            leading-tight
            font-medium
            mb-2
            font-roboto
            pl-2
            underline
          "
        >
          {{ room.name }}
        </h5>
        <p class="text-gray-700 text-base mb-4">
          <input
            v-model="room.max_capacity"
            :disabled="disabled"
            class="border h-6 w-40 font-roboto text-slate-700 pl-2 rounded-xl"
          />
        </p>
        <p class="text-gray-700 text-base mb-4">
          <input
            v-model="room.occupation"
            :disabled="disabled"
            class="border h-6 w-40 font-roboto text-slate-700 pl-2 rounded-xl"
          />
          %
        </p>
        <div class="flex justify-end gap-3 mr-2">
          <button
            type="button"
            class="
              inline-block
              px-4
              py-2
              bg-darkblue
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-sky-600 hover:shadow-lg
              focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-sky-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
            "
            @click="edit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <button
            type="button"
            class="
              inline-block
              px-4
              py-2
              bg-darkblue
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-cyan-600 hover:shadow-lg
              focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-cyan-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
            "
            @click="save"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
              />
            </svg>
          </button>
          <!-- <button @click="deleteRoom">eliminar</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["room"],
  data() {
    return {
      disabled: true,
    };
  },

  methods: {
    edit() {
      this.disabled = false;
    },
    save() {
      this.disabled = true;
    },
    deleteRoom() {
      this.$emit("deleteRoom");
    },
  },
};
</script>

<style>
</style>