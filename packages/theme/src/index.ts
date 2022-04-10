import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { Button } from './components/Button'
import { semanticTokens } from './foundation/semanticTokens'

export const theme: ThemeConfig = extendTheme({
  semanticTokens,
  components: {
    Button,
  },
})
