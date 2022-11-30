<template>
  <div class="grid grid-cols-1">
    <div>
      <div class="ml-2json filtrar">
        <label
          class="
            my-4
            text-sm
            font-medium
            text-gray-900
            dark:text-white
            block
            mx-6
          "
          >Seleccione una Planta</label
        >
        <select
          v-model="selected"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-xl
            focus:ring-blue-500 focus:border-blue-500
            block
            w-80
            h-8
            m-4
            p-4
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
        >
          <option v-for="floor in floors" :key="floor.id" :value="floor">
            {{ floor.floor_number }}
          </option>
        </select>

        <h1
          v-show="selected != 'Planta'"
          class="text-gray-900 text-lg leading-tight font-medium m-4 p-4"
        >
          {{ selected.floor_number }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 inline"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
          Salas
        </h1>
        <div
          class="text-gray-900 text-sm ml-10 font-mono font-medium"
          v-if="loading"
        >
          loading...
        </div>
      </div>
      <div
        v-show="selected != 'Planta'"
        class="
          flex flex-col-reverse
          md:grid md:grid-cols-3
          gap-3
          border-2 border-neutral-200
          m-4
          p-4
          rounded-lg
        "
      >
        <div class="md:col-span-2 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <ul v-for="room in selected.rooms" :key="room.name">
            <card-room :room="room"></card-room>
          </ul>
        </div>
        <div class="grid grid-cols-1">
          <div class="">
            <div class="md:ml-24 ml-2">
              <button
                @click="showCard"
                class="
                  bg-darkblue
                  text-neutral-100
                  hover:bg-slate-600
                  py-2
                  px-4
                  border border-neutral-500
                  rounded
                  shadow
                "
              >
                <h1
                  class="
                    place-self-center
                    m-auto
                    font-mono
                    text-sm
                    font-medium
                    tracking-widest
                  "
                >
                  Agregar Sala
                </h1>
              </button>
            </div>
            <div
              v-show="addCard"
              class="p-6 mt-3 bg-lightblue w-52 mx-auto rounded-lg shadow-lg"
            >
              <input
                class="
                  border
                  h-6
                  w-40
                  text-sm
                  hover:border-2 hover:border-neutral-500
                  font-mono
                  text-slate-700
                  pl-3
                "
                v-model="selected.floor_number"
                readonly
              />
              <div class="mx-auto mt-4">
                <h1
                  class="
                    place-self-center
                    m-auto
                    font-mono
                    text-sm
                    font-medium
                    tracking-widest
                    text-slate-700
                    decoration-pink-500/30
                  "
                >
                  nombre de sala:
                </h1>
              </div>
              <input
                class="
                  border
                  h-6
                  w-40
                  text-sm
                  hover:border-2 hover:border-neutral-500
                  font-mono
                  text-slate-700
                "
                type="text"
                v-model="newName"
                required
              />
              <div class="mx-auto mt-4">
                <h1
                  class="
                    place-self-center
                    m-auto
                    font-mono
                    text-sm
                    font-medium
                    tracking-widest
                    text-slate-700
                    decoration-pink-500/30
                  "
                >
                  max. capacidad:
                </h1>
              </div>
              <input
                v-model="newMax"
                type="number"
                required="required"
                class="
                  text-sm
                  border
                  h-6
                  w-40
                  hover:border-2 hover:border-neutral-500
                  font-mono
                  text-slate-700
                "
              />
              <div class="mx-auto mt-4">
                <h1
                  class="
                    place-self-center
                    m-auto
                    font-mono
                    text-sm
                    font-medium
                    tracking-widest
                    text-slate-700
                    decoration-pink-500/30
                  "
                >
                  ocupación:
                </h1>
              </div>
              <input
                v-model="newOccupation"
                type="number"
                required="required"
                class="
                  text-sm
                  border
                  h-6
                  w-40
                  hover:border-2 hover:border-neutral-500
                  font-mono
                  text-slate-700
                "
              />
              <div class="mx-auto mt-4">
                <button
                  @click="handleSubmit"
                  class="
                    bg-darkblue
                    text-neutral-100
                    hover:bg-slate-600
                    py-2
                    px-4
                    border border-neutral-500
                    rounded
                    shadow
                  "
                >
                  <h1 class="font-mono text-sm font-medium">submit</h1>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardRoom from "./UI/CardRoom.vue";
import axios from "axios";

export default {
  components: { CardRoom },
  data() {
    return {
      selected: "Planta",
      floors: [],
      newName: "",
      newMax: "",
      newOccupation: "",
      addCard: false,
      occupation: "",
      loading: false,
    };
  },

  async created() {
    this.loading = true;
    try {
      await axios

        .get("https://apimocha.com/myfloors/floors")

        .then((result) => (this.floors = result.data));
      console.log(this.floors);
    } catch (err) {
      console.log(err);
    }
    this.loading = false;
  },
  methods: {
    handleSubmit() {
      let room = {
        name: this.newName,
        max_capacity: this.newMax,
        occupation: this.newOccupation,
      };
      (this.newName = ""), (this.newMax = ""), (this.newOccupation = "");

      let list = {};
      list = this.selected.rooms;
      if (
        (room.name != "") &
        (room.max_capacity != "") &
        (room.newOccupation != "")
      ) {
        list.unshift(room);
      }

      console.log(list);
    },

    showCard() {
      console.log("show");
      this.addCard = !this.addCard;
    },
  },
};
</script>

<style>
</style>