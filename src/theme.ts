import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: 'serif',
    body: 'serif',
  },
  styles: {
    body: {
      fontStyle: "serif"
    },
  },
  components: {
    Heading: {
      baseStyle: {
        textAlign: "center",
        marginY: "1em"
      },
    }
  }
})

