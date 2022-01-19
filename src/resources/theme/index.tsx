import { extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

const colors = {
    brand: {
        bgLightMode: 'rgb(253, 255, 109)',
        bgDarkMode: 'gray.800'
    },
}

const Input = {
    // style object for base or default style
    baseStyle: {
        colorScheme: 'red',
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
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
    // default values for `size` and `variant`
    defaultProps: {
      size: '',
      variant: '',
    },
  }

export const theme = extendTheme({ colors, components: { Input } })