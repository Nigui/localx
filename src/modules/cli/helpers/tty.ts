import { tty } from "@cliffy/ansi/tty";

export function clearScreen() {
  // @ts-ignore: deno bad typings
  tty.eraseScreen();
}

export function newLine(nb: number = 1) {
  console.log(new Array(nb).fill("\n").toString());
}
