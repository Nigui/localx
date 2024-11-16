import { colors } from "@cliffy/ansi/colors";

const themeColors = {
  default: colors.white,
  error: colors.red,
  info: colors.brightBlue,
  success: colors.green,
  warning: colors.yellow,
};

type LogOptions = Partial<{ prefix: string; color: keyof typeof themeColors }>;

function log({ prefix, color }: LogOptions = {}) {
  return (message: string) =>
    console.log(prefix, themeColors[color ?? "default"](message));
}

export const logger = {
  print: log(),
  success: log({ prefix: "✅", color: "success" }),
  info: log({ prefix: "ℹ️", color: "info" }),
  error: log({ prefix: "❌", color: "error" }),
  warn: log({ prefix: "⚠️", color: "warning" }),
};

const toolName = `
██╗      ██████╗  ██████╗ █████╗ ██╗     ██╗  ██╗    
██║     ██╔═══██╗██╔════╝██╔══██╗██║     ╚██╗██╔╝    
██║     ██║   ██║██║     ███████║██║      ╚███╔╝     
██║     ██║   ██║██║     ██╔══██║██║      ██╔██╗     
███████╗╚██████╔╝╚██████╗██║  ██║███████╗██╔╝ ██╗    
╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝    
`;

export function intro() {
  console.log(
    "\nWelcome to -\n",
    colors.cyan(toolName),
    "\n\t- Command line tool.\n\n"
  );
}
