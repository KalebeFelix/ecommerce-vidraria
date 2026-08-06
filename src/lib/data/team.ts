import { Eye, Heart, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import type { TeamMember, ValueItem } from "@/lib/types";

import duoPrincipal from "@/assets/images/about/duo-principal-01.jpg";
import socialSenior from "@/assets/images/about/socia-senior-01.jpg";
import socialJunior from "@/assets/images/about/socia-junior-01.jpg";

export const aboutStory =
  "A Ponto do Vidro é uma empresa que atua no setor vidreiro desde 1997 no mercado de Fortaleza-CE e Região Metropolitana. A grande experiência somada ao amor pela atividade faz da Ponto do Vidro uma empresa sólida e conceituada.";

export const aboutHeroImage = duoPrincipal;

export const teamMembers: TeamMember[] = [
  { name: "Sócia", role: "Direção e atendimento", image: socialSenior },
  { name: "Sócia", role: "Gestão e projetos", image: socialJunior },
];

export const mission = {
  title: "Missão",
  icon: Heart,
  text: "Atender bem, buscando a satisfação das necessidades dos nossos clientes e também dos profissionais de arquitetura, através de produtos e serviços de alta qualidade.",
};

export const vision = {
  title: "Visão",
  icon: Eye,
  text: "Ser referência em alta qualidade em vidros e em serviços vidraceiros, com atendimento diferenciado dentro do seguimento de vidraçaria no estado do Ceará.",
};

export const values: ValueItem[] = [
  {
    name: "Compromisso",
    description: "Buscar honrar sempre o que foi combinado com clientes, colaboradores, fornecedores e sociedade.",
    icon: ShieldCheck,
  },
  {
    name: "Transparência",
    description: "Trabalhar com verdade e ética em todas as atividades realizadas.",
    icon: Eye,
  },
  {
    name: "Responsabilidade",
    description: "Oferecer os melhores produtos e serviços, colaborando com o desenvolvimento de nossos colaboradores.",
    icon: HeartHandshake,
  },
  {
    name: "Inovação",
    description: "Acompanhar as novidades do ramo, oferecendo qualidade, bom gosto, praticidade e criatividade.",
    icon: Sparkles,
  },
];
