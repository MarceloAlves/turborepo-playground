import * as React from 'react'
import { Button as ChakraButton, type ButtonProps } from '@chakra-ui/react'

export const Button = (props: ButtonProps) => {
  return <ChakraButton {...props} />
}
