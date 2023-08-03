<template>
  <ais-instant-search
    class="auto"
    :search-client="searchClient"
    index-name="sample-products"
  >
    <ais-configure
      :attributesToSnippet="['description']"
      :hits-per-page.camel="5"
    >
      <ais-autocomplete>
        <template v-slot="{ currentRefinement, indices, refine }">
          <!-- SEARCH INPUT FIELD START -->
          <span class="relative">
            <input
              type="search"
              :value="currentRefinement"
              placeholder="Search list..."
              class="rounded w-full pl-8"
              autofocus
              autocomplete="off"
              @input="refine($event.currentTarget.value)"
              @keypress.enter="search"
            />
            <!-- <icon
              name="search"
              class="fill-current opacity-75 absolute mt-1 ml-2 w-4 h-4 top-0"
            ></icon> -->
          </span>
          <!-- SEARCH INPUT FIELD END -->
          <div v-if="currentRefinement.length">
            <div>
              <div>
                <div
                  class="divide-y divide-blue-900"
                  v-for="index in indices"
                  :key="index.indexId"
                >
                  <div v-if="indices.length">
                    <!-- AUTOCOMPLETE SEARCH HEADER = DATA INDEX -->
                    <h2>
                      {{ index.indexName }}
                    </h2>
                    <ais-stats />
                    <div class="results-container">
                      <div v-for="hit in index.hits" :key="hit.objectID">
                        <!-- <ais-highlight attribute="name" :hit="hit" /> -->
                        <h3>{{ hit.name }}</h3>
                        <img class="search-img" :src="hit.image" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </ais-autocomplete>
      <!-- DATA ITEMS START - THESE FILTER BASED ON SEARCH -->
      <ais-hits>
        <template v-slot:item="{ item }">
          <h2>{{ item.name }}</h2>
        </template>
      </ais-hits>
      <!-- DATA ITEMS START - THESE FILTER BASED ON SEARCH -->
    </ais-configure>
    <ais-pagination />
  </ais-instant-search>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      searchClient: algoliasearch(
        // app id
        'KLV235H4VE',
        // public api key
        '63374ddc96b2b1677817975e9d89b275'
      ),
    };
  },
});
</script>

<style scoped>
.search-img {
  width: 100px;
}
input {
  width: 50%;
}
.results-container {
  width: 50%;
  height: 300px;
  overflow-y: auto;
  box-shadow: 5px 8px 6px #888888;
}
</style>
