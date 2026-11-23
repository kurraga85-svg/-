import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

async function main(): Promise<void> {
  const rl = createInterface({ input: stdin, output: stdout });
  console.log("Калькулятор на TypeScript");
  console.log("1. Ввести два числа");
  console.log("2. Выполнить сложение");
  console.log("3. Выполнить вычитание");
  console.log("4. Выполнить деление");
  console.log("5. Возвести число в степень");
  console.log("0. Завершить работу");
  console.log("Реализация пунктов меню будет добавлена в отдельных ветках Git.");
  rl.close();
}

void main();
