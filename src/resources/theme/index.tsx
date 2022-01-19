import { extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

const colors = {
    brand: {
        bgLightMode: 'rgb(253, 255, 109)',
        bgDarkMode: 'gray.800'
    },
}

const Input = {
    variants: {
        filled: (props: any) => ({
            field: {
                bgColor: mode('white', 'pink')(props),
                _focus: {
                    bg: mode('white', 'pink')(props)
                },
                _hover: {
                    bg: mode('teal.50', 'pink.300')(props),
                },
                _placeholder: { 
                    color: mode('grey', 'white')(props),
                }
            },
    
            
        })
    },
  }

  const NumberInput = {
    variants: {
        filled: (props: any) => ({
            field: {
                bgColor: mode('white', 'pink')(props),
                _focus: {
                    bg: mode('white', 'pink')(props)
                },
                _hover: {
                    bg: mode('teal.50', 'pink.300')(props),
                },
                _placeholder: { 
                    color: mode('grey', 'white')(props),
                }
            },
    
            
        })
    },
  }

export const theme = extendTheme({ colors, components: { Input, NumberInput } })