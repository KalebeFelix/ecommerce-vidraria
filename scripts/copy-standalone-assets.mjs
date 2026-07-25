// Roda automaticamente depois de "next build" (ver "postbuild" no package.json).
// O output standalone do Next não inclui /public nem .next/static por padrão —
// esse passo é obrigatório para o server.js standalone servir os assets certos.

import { cpSync, existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const standaloneDir = path.join(root, ".next", "standalone");

if (!existsSync(standaloneDir)) {
  console.log("`.next/standalone` não existe — pulando cópia (output: 'standalone' está ativo?).");
  process.exit(0);
}

cpSync(path.join(root, "public"), path.join(standaloneDir, "public"), { recursive: true });
cpSync(path.join(root, ".next", "static"), path.join(standaloneDir, ".next", "static"), {
  recursive: true,
});

console.log("public/ e .next/static copiados para .next/standalone/");
