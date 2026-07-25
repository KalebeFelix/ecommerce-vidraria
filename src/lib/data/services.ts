import { DoorOpen, ShowerHead, Blinds, Scissors } from "lucide-react";
import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "manutencao-portas-janelas",
    name: "Manutenção de Portas e Janelas",
    description:
      "Ajuste de trilhos, roldanas e vedação de portas e janelas de vidro para deslizar e fechar como no primeiro dia.",
    icon: DoorOpen,
  },
  {
    slug: "manutencao-boxes",
    name: "Manutenção de Boxes",
    description:
      "Troca de roldanas, borrachas e ferragens, reaperto de estrutura e reposição de vidros trincados.",
    icon: ShowerHead,
  },
  {
    slug: "manutencao-cortina-vidro",
    name: "Manutenção de Cortina de Vidro",
    description:
      "Revisão de trilhos, roldanas e vedação de cortinas de vidro de correr e dobráveis em varandas e sacadas.",
    icon: Blinds,
  },
  {
    slug: "corte-lapidacao-bizote",
    name: "Corte, Lapidação e Bizote",
    description:
      "Corte sob medida, lapidação de bordas e bizote decorativo em vidros e espelhos para projetos e reposições.",
    icon: Scissors,
  },
];
