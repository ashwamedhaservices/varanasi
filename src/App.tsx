import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Routes from "./routes"
import { Provider } from "react-redux"
import { store } from "./redux-store"

export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </Provider>
)
