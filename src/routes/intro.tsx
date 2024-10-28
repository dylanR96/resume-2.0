import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/intro')({
  component: () => <div>Hello /intro!</div>,
})
