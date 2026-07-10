import mangueiraConduite from "@/assets/products/mangueira-conduite.jpg.asset.json";
import mangueiraNivel from "@/assets/products/mangueira-nivel.jpg.asset.json";
import mangueiraGas from "@/assets/products/mangueira-gas.jpg.asset.json";
import assento from "@/assets/products/assento-sanitario.jpg.asset.json";
import churrasqueira from "@/assets/products/churrasqueira.jpg.asset.json";
import topjet from "@/assets/products/chuveiro-topjet.jpg.asset.json";
import belladucha from "@/assets/products/chuveiro-belladucha.jpg.asset.json";
import maxi from "@/assets/products/ducha-maxi.jpg.asset.json";
import luminaria from "@/assets/products/luminaria.jpg.asset.json";
import mangueiraJardim from "@/assets/products/mangueira-jardim.jpg.asset.json";
import disco from "@/assets/products/disco-corte.jpg.asset.json";
import pu from "@/assets/products/pu-multiuso.jpg.asset.json";
import lixadeira from "@/assets/products/lixadeira.jpg.asset.json";
import trinchas from "@/assets/products/trinchas.jpg.asset.json";
import logo from "@/assets/products/logo.jpg.asset.json";

export const LOGO_URL = logo.url;

export type Product = {
  slug: string;
  name: string;
  category: string;
  price?: string;
  image: string;
  highlights: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "chuveiro-lorenzetti-top-jet-100",
    name: "Chuveiro Lorenzetti Top Jet 100",
    category: "Elétrica",
    price: "R$ 175,00",
    image: topjet.url,
    highlights: ["Multi temperaturas", "Jatos uniformes", "Controle de temperatura", "Fácil instalação"],
  },
  {
    slug: "chuveiro-lorenzetti-bella-ducha-4t",
    name: "Chuveiro Lorenzetti Bella Ducha 4T",
    category: "Elétrica",
    price: "R$ 100,00",
    image: belladucha.url,
    highlights: ["Economia de água e energia", "Grande espalhador", "Resistência Loren Ultra", "220V 6800W"],
  },
  {
    slug: "ducha-maxi-lorenzetti",
    name: "Ducha Maxi Lorenzetti",
    category: "Elétrica",
    price: "R$ 90,00",
    image: maxi.url,
    highlights: ["67% de economia de água e energia", "Maior área de banho", "Resistência Loren Ultra", "220V 7500W"],
  },
  {
    slug: "luminaria-linear-60cm-jng",
    name: "Luminária Linear 60cm JNG",
    category: "Elétrica",
    price: "R$ 35,00",
    image: luminaria.url,
    highlights: ["Alta luminosidade", "Potência 20W", "Vida útil 14.000h", "Fácil instalação"],
  },
  {
    slug: "lixadeira-eletrica-black-decker",
    name: "Lixadeira Elétrica Black+Decker G650",
    category: "Ferramentas Elétricas",
    price: "R$ 300,00",
    image: lixadeira.url,
    highlights: ["1 ano de garantia", "Alta potência", "Uso profissional", "Ergonômica"],
  },
  {
    slug: "disco-de-corte-aqua-tools",
    name: "Disco de Corte Aqua Tools 4.1/2\"",
    category: "Ferramentas Elétricas",
    price: "3 por R$ 10,00",
    image: disco.url,
    highlights: ["Corte preciso", "Alta durabilidade", "Ideal para metal e aço", "13.300 RPM"],
  },
  {
    slug: "pu-multiuso-aqua-tools",
    name: "PU Multiuso Aqua Tools 40",
    category: "Construção",
    price: "R$ 20,00",
    image: pu.url,
    highlights: ["Veda, cola e sela", "Resistente à umidade", "Alta durabilidade", "Pintável"],
  },
  {
    slug: "assento-sanitario-herc",
    name: "Assento Sanitário Herc",
    category: "Hidráulica",
    price: "A partir de R$ 35,00",
    image: assento.url,
    highlights: ["Durável e resistente", "Fácil de instalar", "Encaixe universal", "Design envolvente"],
  },
  {
    slug: "churrasqueira-de-carrinho",
    name: "Churrasqueira de Carrinho",
    category: "Camping & Lazer",
    price: "A partir de R$ 150,00",
    image: churrasqueira.url,
    highlights: ["Estrutura resistente", "Ampla área de grelha", "Mobilidade fácil", "Pegadores térmicos"],
  },
  {
    slug: "mangueira-de-jardim-5m",
    name: "Mangueira de Jardim 5m",
    category: "Jardim",
    image: mangueiraJardim.url,
    highlights: ["Reforçada e durável", "Resistente a raios UV", "Flexível", "5 metros"],
  },
  {
    slug: "mangueira-para-gas-8m",
    name: "Mangueira para Gás 8m",
    category: "Hidráulica",
    image: mangueiraGas.url,
    highlights: ["Ideal para instalações de gás", "Transparente e reforçada", "Segura e resistente", "8 metros"],
  },
  {
    slug: "mangueira-de-nivel-3m",
    name: "Mangueira de Nível 3m",
    category: "Ferramentas Manuais",
    image: mangueiraNivel.url,
    highlights: ["Transparente e flexível", "Ideal para medições", "Material resistente", "3 metros"],
  },
  {
    slug: "mangueira-conduite-3m",
    name: "Mangueira Conduíte 3m",
    category: "Elétrica",
    image: mangueiraConduite.url,
    highlights: ["Proteção para fios e cabos", "Flexível e resistente", "Não propaga chamas", "Diâmetro 25mm"],
  },
  {
    slug: "trinchas-e-pinceis-atlas",
    name: "Trinchas e Pincéis Atlas",
    category: "Pintura",
    price: "A partir de R$ 7,00",
    image: trinchas.url,
    highlights: ["Cerdas macias", "Excelente acabamento", "Cabo ergonômico", "Alta durabilidade"],
  },
];
