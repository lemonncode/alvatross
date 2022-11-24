<template>
  <div>
    <input
      type="text"
      placeholder="search..."
      v-model="query"
      @keypress="fetchIngredients"
      class="
          bg-gray-50
          border border-gray-300
          text-gray-900 text-sm
          rounded-lg
          block
          w-80
          my-3
          p-2.5
          mb-6
        "
    />
   
    <div v-for="ingredient in ingredients" :key="ingredient.id">
      <h1 class="font-mono text-base font-medium tracking-wider h-12 ml-6">

      {{ ingredient.name }} 
      </h1>
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      api_key: "9bae60ea77114364ba3f8f4369a5d41f",
      url_base: "https://api.spoonacular.com/food/ingredients/search",
      query: "",
      ingredients: {},
    };
  },

  methods: {
    async fetchIngredients(e) {
      if (e.key == "Enter") {
        await fetch(
          `${this.url_base}?query=${this.query}&apiKey=${this.api_key}`
        )
          .then((response) => response.json())

          // .then((data) => console.log(data.results))
          .then((data) => (this.ingredients = data.results))
          .catch((error) => console.log(error));
      }
    },
  },
};
</script>
