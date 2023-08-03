<template>
  <!-- <ais-instant-search
    :search-client="searchClient"
    index-name="sample-products"
  >
    <div class="left-panel">
      <ais-clear-refinements class="hits-button" />
      <h2>Brands</h2>
      <ais-refinement-list attribute="manufacturer" searchable />
      <ais-configure :hitsPerPage="8" />
    </div>
    <div class="right-panel">
      <ais-search-box placeholder="Search a Product..." />
      <ais-hits>
        <template v-slot:item="{ item }">
          <h2>{{ item.name }}</h2>
        </template>
      </ais-hits>
      <ais-pagination />
    </div>
  </ais-instant-search> -->
  <div>
    <h1>MAIN APPLICATION</h1>
  </div>
  <div>
    <AutoCompleteSearch />
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/algolia-min.css';
import AutoCompleteSearch from './components/AutoCompleteSearch.vue';

export default {
  components: { AutoCompleteSearch },
  data() {
    return {
      searchClient: algoliasearch(
        // 'B1G2GM9NG0',
        // 'aadef574be1f9252bb48d4ea09b5cfe5'
        // app id
        'KLV235H4VE',
        // public api key
        '63374ddc96b2b1677817975e9d89b275'
      ),
    };
  },
};
</script>

<style>
body {
  font-family: sans-serif;
  padding: 1em;
}
/* .ais-Hits-list {
  margin-top: 0;
  margin-bottom: 1em;
}
.ais-InstantSearch {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 1em;
} */
.ais-ClearRefinements-button {
  background-color: blue;
}
.ais-ClearRefinements-button:hover {
  background-color: green;
}
.ais-ClearRefinements-button--disabled {
  background-color: red;
}

.ais-ClearRefinements-button--disabled:hover {
  background-color: purple;
}
/* .hits-button {
  background-color: yellow;
} */
</style>
