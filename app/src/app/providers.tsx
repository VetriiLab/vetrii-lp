'use client'

import { ChakraProvider, createSystem, defineConfig, defaultConfig } from '@chakra-ui/react'
import React from 'react'

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        navy: { value: '#090F1C' },
        primary: { value: '#6251da' },
        border: { value: '#E2E8F0' },
        surface: { value: '#FFFFFF' },
        subtleText: { value: '#718096' }
      }
    },
    semanticTokens: {
      colors: {
        bg: {
          value: { base: '{colors.surface}', _dark: '{colors.navy}' }
        },
        text: {
          value: { base: '{colors.navy}', _dark: '#FFFFFF' }
        },
        muted: {
          value: { base: '{colors.subtleText}', _dark: 'rgba(255, 255, 255, 0.6)' }
        }
      }
    }
  }
})

const system = createSystem(defaultConfig, customConfig)

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>
}
