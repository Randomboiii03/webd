"use client"

import { useEffect, useState, useRef } from "react"
import { Code, Database, Server, Cpu, Wifi, Layers, HardDrive, Hash } from "lucide-react"
import type { JSX } from "react/jsx-runtime"

interface FallingSymbol {
  id: number
  icon: JSX.Element
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  rotation: number
}

export default function FallingTechSymbols() {
  const [symbols, setSymbols] = useState<FallingSymbol[]>([])
  const requestRef = useRef<number>()
  const containerRef = useRef<HTMLDivElement>(null)
  const lastTimeRef = useRef<number>(0)
  const symbolsRef = useRef<FallingSymbol[]>([])

  // Initialize symbols
  useEffect(() => {
    const icons = [
      <Code key="code" className="text-primary" />,
      <Database key="database" className="text-primary" />,
      <Server key="server" className="text-primary" />,
      <Cpu key="cpu" className="text-primary" />,
      <Wifi key="wifi" className="text-primary" />,
      <Layers key="layers" className="text-primary" />,
      <HardDrive key="harddrive" className="text-primary" />,
      <Hash key="hash" className="text-primary" />,
    ]

    const initialSymbols: FallingSymbol[] = []

    // Create initial set of symbols
    for (let i = 0; i < 15; i++) {
      initialSymbols.push(createSymbol(icons, i))
    }

    symbolsRef.current = initialSymbols
    setSymbols(initialSymbols)

    // Start animation loop
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  const createSymbol = (icons: JSX.Element[], id: number) => {
    const containerWidth = window.innerWidth

    return {
      id,
      icon: icons[Math.floor(Math.random() * icons.length)],
      x: Math.random() * containerWidth,
      y: -50 - Math.random() * 500, // Start above the viewport at random heights
      size: Math.random() * 20 + 10, // Size between 10-30px
      speed: Math.random() * 1 + 0.5, // Speed between 0.5-1.5
      opacity: Math.random() * 0.5 + 0.2, // Opacity between 0.2-0.7
      rotation: Math.random() * 360, // Random rotation
    }
  }

  const animate = (time: number) => {
    if (!lastTimeRef.current) {
      lastTimeRef.current = time
    }

    const deltaTime = time - lastTimeRef.current
    lastTimeRef.current = time

    // Update symbols position
    const updatedSymbols = symbolsRef.current.map((symbol) => {
      // Move symbol down
      const newY = symbol.y + symbol.speed * (deltaTime / 16)

      // If symbol is out of viewport, reset it to the top
      if (newY > window.innerHeight + 50) {
        const icons = [
          <Code key="code" className="text-primary" />,
          <Database key="database" className="text-primary" />,
          <Server key="server" className="text-primary" />,
          <Cpu key="cpu" className="text-primary" />,
          <Wifi key="wifi" className="text-primary" />,
          <Layers key="layers" className="text-primary" />,
          <HardDrive key="harddrive" className="text-primary" />,
          <Hash key="hash" className="text-primary" />,
        ]

        return {
          ...createSymbol(icons, symbol.id),
          y: -50, // Reset to just above viewport
        }
      }

      return {
        ...symbol,
        y: newY,
      }
    })

    symbolsRef.current = updatedSymbols
    setSymbols(updatedSymbols)

    requestRef.current = requestAnimationFrame(animate)
  }

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {symbols.map((symbol) => (
        <div
          key={symbol.id}
          className="absolute"
          style={{
            left: `${symbol.x}px`,
            top: `${symbol.y}px`,
            opacity: symbol.opacity,
            transform: `rotate(${symbol.rotation}deg)`,
            width: `${symbol.size}px`,
            height: `${symbol.size}px`,
          }}
        >
          {symbol.icon}
        </div>
      ))}
    </div>
  )
}

