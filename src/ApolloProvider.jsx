import { ApolloClient, InMemoryCache, ApolloProvider as Provider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://datausa.io/api/data?drilldowns=Nation&measures=Population', // Set to your endpoint
    cache: new InMemoryCache(),
});

const ApolloProvider = ({ children }) => {
    return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;