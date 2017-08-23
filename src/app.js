import Vue from 'vue';
import App from './components/app';
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';
import VueApollo from 'vue-apollo';

const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    uri: 'http://localhost:5000/graphql',
  }),
  connectToDevTools: true,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

// universal entry
// https://ssr.vuejs.org/en/structure.html

export function createApp(ctx) {
  const app = new Vue({
    apolloProvider,
    render: h => h(App)
  });

  return {app};
}

Vue.use(VueApollo);
