export type Ask = (question: string) => Promise<string>;

async function readNumber(ask: Ask, label: string): Promise<number> {
  while (true) {
    const raw = (await ask(`${label}: `)).trim().replace(",", ".");
    const value = Number(raw);
    if (raw !== "" && Number.isFinite(value)) return value;
    console.log("Введите корректное число.");
  }
}

export async function readNumbers(ask: Ask): Promise<[number, number]> {
  const first = await readNumber(ask, "Введите первое число");
  const second = await readNumber(ask, "Введите второе число");
  return [first, second];
}
