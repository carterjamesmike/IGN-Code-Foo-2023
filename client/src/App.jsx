import React from "react"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client"
//npmimport { setContext } from "@apollo/client/link/context"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Poll from "./components/Poll"

//API endpoint
const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
})

//Apollo client
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})



function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <main>
          <Poll />
        </main>
      </Router>
    </ApolloProvider>
  )
}

export default App
