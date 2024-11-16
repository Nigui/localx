import { tty } from "@cliffy/ansi/tty";

export function clearScreen() {
  // @ts-ignore: deno bad typings
  tty.eraseScreen();
}
