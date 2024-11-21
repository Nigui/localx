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
  return (...args: any[]) => {
    prefix && args.unshift(prefix);
    console.log(
      ...args
        .map((a) =>
          typeof a === "string"
            ? a
            : typeof a === "object"
            ? JSON.stringify(a)
            : new String(a).toString()
        )
        .map(themeColors[color ?? "default"])
    );
  };
}

export const logger = {
  print: (args: unknown, options?: LogOptions) => {
    log(options)(...(Array.isArray(args) ? args : [args]));
  },
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
