import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { readNumbers } from "./operations/input.js";
import { add } from "./operations/addition.js";
import { subtract } from "./operations/subtraction.js";
import { divide } from "./operations/division.js";
import { power } from "./operations/power.js";

async function main(): Promise<void> {
  const rl = createInterface({ input: stdin, output: stdout });
  let numbers: [number, number] | null = null;

  try {
    while (true) {
      console.log("\nКалькулятор на TypeScript");
      console.log("1. Ввести два числа");
      console.log("2. Выполнить сложение");
      console.log("3. Выполнить вычитание");
      console.log("4. Выполнить деление");
      console.log("5. Возвести первое число в степень второго");
      console.log("0. Завершить работу");
      const choice = (await rl.question("Выберите пункт меню: ")).trim();

      if (choice === "0") break;
      if (choice === "1") {
        numbers = await readNumbers((question) => rl.question(question));
        console.log(`Сохранены числа ${numbers[0]} и ${numbers[1]}.`);
        continue;
      }
      if (!["2", "3", "4", "5"].includes(choice)) {
        console.log("Нет такого пункта меню.");
        continue;
      }
      if (numbers === null) {
        console.log("Сначала выберите пункт 1 и введите два числа.");
        continue;
      }

      const [first, second] = numbers;
      try {
        let result: number;
        switch (choice) {
          case "2": result = add(first, second); break;
          case "3": result = subtract(first, second); break;
          case "4": result = divide(first, second); break;
          default: result = power(first, second);
        }
        console.log(`Результат: ${result}`);
      } catch (error) {
        console.log(error instanceof Error ? error.message : "Не удалось выполнить операцию.");
      }
    }
  } finally {
    rl.close();
  }
}

void main();
