'use client'

import { ChakraProvider, createSystem, defineConfig, defaultSystem } from '@chakra-ui/react'
import React from 'react'

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        border: { value: '#E2E8F0' },
        surface: { value: '#F7FAFC' },
        primary: { value: '#6251da' },
        subtleText: { value: '#718096' }
      }
    }
  }
})

const system = createSystem(defaultSystem, customConfig)

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>
}
