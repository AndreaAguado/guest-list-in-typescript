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
                color: mode('grey.600', 'pink.600')(props),
                fontWeight: 'bold',
                _focus: {
                    bg: mode('white', 'pink')(props)
                },
                _hover: {
                    bg: mode('teal.50', 'pink.300')(props),
                },
                _placeholder: { 
                    color: mode('grey', 'white')(props),
                    fontWeight: 'light',
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
                fontWeight: 'bold',
                _focus: {
                    bg: mode('white', 'pink')(props)
                },
                _hover: {
                    bg: mode('teal.50', 'pink.300')(props),
                },
                _placeholder: { 
                    color: mode('grey', 'white')(props),
                    fontWeight: 'light',
                }
            },
    
            
        })
    },
  }

  const Textarea = {
    variants: {
        filled: (props: any) => ({
            bgColor: mode('white', 'pink')(props),
            fontWeight: 'bold',
            _focus: {
                bg: mode('white', 'pink')(props)
            },
            _hover: {
                bg: mode('teal.50', 'pink.300')(props),
            },
            _placeholder: { 
                color: mode('grey', 'white')(props),
                fontWeight: 'light',
            }  
        })
    },
  }

export const theme = extendTheme({ colors, components: { Input, NumberInput, Textarea } })