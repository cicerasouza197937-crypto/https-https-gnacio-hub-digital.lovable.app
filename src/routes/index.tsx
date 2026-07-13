import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { LOGO_URL } from "@/lib/products";
import { ArrowRight, Wrench, Star, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Ferragista Inácio Jardim Europa - Ferragens em Uberlândia/MG" },
      { name: "description", content: "Ferramentas, material hidráulico e elétrico, EPI's, pesca e camping no Jardim Europa, Uberlândia. Aberto todos os dias, com delivery." },
      { property: "og:title", content: "Ferragista Inácio Jardim Europa - Ferragens em Uberlândia/MG" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(45deg,#fff_0_1px,transparent_1px_14px)]" />
        <div className="container-x relative flex flex-col items-center gap-8 py-12 md:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-yellow/40 bg-accent-yellow/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-yellow">
            <MapPin className="h-3.5 w-3.5" /> Jardim Europa • Uberlândia/MG
          </span>
          <div className="relative w-full max-w-[540px]">
            <div className="absolute inset-0 -z-0 rounded-3xl bg-gradient-to-br from-accent-yellow/20 via-transparent to-white/10 blur-2xl" />
            <img
              src={LOGO_URL}
              alt="Ferragista Inácio - Jardim Europa"
              width={1080}
              height={1350}
              className="relative z-10 mx-auto w-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl"
              style={{ aspectRatio: "1080 / 1350", objectFit: "contain" }}
            />
          </div>
          <p className="max-w-2xl text-center text-secondary-foreground/80">
            Ferramentas, material hidráulico, elétrico, EPI's, pesca e camping. Atendimento rápido, preço justo e{" "}
            <strong className="text-accent-yellow">aberto todos os dias</strong> — inclusive fins de semana.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" className="btn-whatsapp">Fale no WhatsApp</a>
            <Link to="/produtos" className="btn-primary">Ver produtos <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/cotacao" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 font-semibold hover:bg-white/5">
              Solicitar cotação
            </Link>
          </div>
        </div>
      </section>


      {/* QUEM SOMOS - segunda dobra */}
      <section className="section-y bg-muted/40">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <img
            src={LOGO_URL}
            alt="Comercial Inácio Ferragista"
            className="w-full max-w-sm justify-self-center rounded-xl border border-border bg-white p-4 shadow-md"
          />
          <div>
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              Quem Somos
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase md:text-4xl">
              A ferragem do bairro que virou referência da região
            </h2>
            <p className="mt-4 text-muted-foreground">
              A <strong className="text-foreground">Ferragista Inácio</strong> nasceu no coração do{" "}
              <strong className="text-foreground">Jardim Europa, em Uberlândia/MG</strong>, com um propósito
              simples: oferecer atendimento próximo, produtos confiáveis e preço justo para quem cuida da casa,
              faz obra, trabalha na construção civil ou curte o mundo pesca e camping.
            </p>
            <p className="mt-3 text-muted-foreground">
              Ao longo dos anos, viramos ponto de referência no bairro por sempre ter em estoque o que ninguém
              acha — do <em>parafuso avulso</em> à <em>ferramenta elétrica profissional</em>. Nossa equipe
              conhece cada cliente pelo nome e cada produto pela função. Não vendemos apenas ferragens:
              entregamos solução.
            </p>
            <Link to="/quem-somos" className="btn-primary mt-6 text-sm">
              Conheça nossa história <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="section-y">
        <div className="container-x">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">O que você encontra aqui</h2>
            <p className="mt-2 text-muted-foreground">Um mix completo para obra, reforma, manutenção e lazer.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SITE.services.map((s) => (
              <div key={s} className="group flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition hover:border-brand hover:shadow-md">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand/10 text-brand"><Wrench className="h-4 w-4" /></span>
                <span className="font-medium">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="section-y">
        <div className="container-x">
          <div className="mb-8 max-w-2xl">
            <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">O que dizem no Google</h2>
            <p className="mt-2 text-muted-foreground">Avaliações reais de clientes que passam pela loja.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex text-accent-yellow">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <span className="text-sm text-muted-foreground">Baseado nas avaliações do Google</span>
              </div>
              <p className="mt-4 text-muted-foreground">
                Para conferir todas as avaliações atualizadas da Ferragista Inácio no Jardim Europa, acesse diretamente
                nossa página no Google Maps — lá você encontra notas, comentários e fotos enviadas pelos clientes.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={SITE.reviewsLink} target="_blank" rel="noreferrer noopener" className="btn-primary text-sm">
                  Ver avaliações no Google
                </a>
                <a href={SITE.mapsLink} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold hover:bg-muted">
                  Abrir no Google Maps
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-border shadow-sm">
              <iframe
                title="Localização Ferragista Inácio"
                src={SITE.mapsEmbed}
                className="h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-brand text-brand-foreground">
        <div className="container-x grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">Precisa agora? Chama no WhatsApp.</h2>
            <p className="mt-2 text-brand-foreground/85">Cotação rápida, delivery na região e atendimento humano.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" className="btn-whatsapp">WhatsApp</a>
            <a href={`tel:+${SITE.phoneRaw}`} className="inline-flex items-center gap-2 rounded-md bg-white/15 px-5 py-3 font-semibold text-white hover:bg-white/25">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
