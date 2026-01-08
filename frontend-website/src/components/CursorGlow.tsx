import { useMousePosition } from '@/hooks/useMousePosition';

export function CursorGlow() {
  const { x, y } = useMousePosition();

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.03), transparent 40%)`,
      }}
    />
  );
}
