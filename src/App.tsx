import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import { MathJaxContext } from "better-react-mathjax"
import { Home } from "./Home"
import { theme } from "./theme"

export const App = () => {

  const mathjaxConfig = {
    "fast-preview": {
      disabled: true
    },
    tex2jax: {
      inlineMath: [
        ["$", "$"],
      ],
      displayMath: [
        ["$$", "$$"],
      ]
    },
    messageStyle: "none"
  };
  
  return (
    <ChakraProvider theme={theme}>
      <MathJaxContext config={mathjaxConfig}>
        <Home />
      </MathJaxContext>
    </ChakraProvider>
  )
}
