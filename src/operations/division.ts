export function divide(first: number, second: number): number {
  if (second === 0) throw new Error("Делить на ноль нельзя.");
  return first / second;
}
