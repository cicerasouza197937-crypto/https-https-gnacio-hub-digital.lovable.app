import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { LOGO_URL } from "@/lib/products";
import { useState } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/unidade", label: "Unidade" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/cotacao", label: "Cotação" },
  { to: "/area-cliente", label: "Área do Cliente" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="bg-secondary text-secondary-foreground text-xs">
        <div className="container-x flex flex-wrap items-center justify-between gap-2 py-2">
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-accent-yellow" /> Av. José Fonseca e Sílva, 4675 - Jardim Europa, Uberlândia/MG</span>
          <a href={`tel:+${SITE.phoneRaw}`} className="inline-flex items-center gap-1.5 hover:text-accent-yellow"><Phone className="h-3.5 w-3.5" /> {SITE.phone}</a>
        </div>
      </div>
      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={_} alt="Ferragista Inácio" className="h-12 w-12 rounded-md object-cover ring-1 ring-border" />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold uppercase tracking-wide text-secondary">Ferragista Inácio</div>
            <div className="text-[11px] text-muted-foreground">Jardim Europa • Uberlândia/MG</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-muted hover:text-brand"
              activeProps={{ className: "text-brand bg-muted" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" className="btn-whatsapp hidden md:inline-flex text-sm">
          WhatsApp
        </a>
        <button onClick={() => setOpen((o) => !o)} className="lg:hidden rounded-md p-2 hover:bg-muted" aria-label="Abrir menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x flex flex-col py-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium hover:bg-muted"
                activeProps={{ className: "text-brand bg-muted" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" className="btn-whatsapp mt-2 text-sm">WhatsApp</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 bg-secondary text-secondary-foreground">
      <div className="container-x grid gap-8 py-12 md:grid-cols-3">
        <div>
          <div className="font-display text-xl font-bold uppercase text-accent-yellow">Ferragista Inácio</div>
          <p className="mt-2 text-sm text-secondary-foreground/70">
            Sua ferragem completa no Jardim Europa. Material hidráulico, elétrico, ferramentas, EPI's, pesca e camping.
          </p>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer noopener" className="btn-whatsapp mt-4 text-sm">
            Fale no WhatsApp
          </a>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-accent-yellow">Navegação</h4>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-secondary-foreground/80 hover:text-accent-yellow">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-accent-yellow">Contato</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={`tel:+${SITE.phoneRaw}`} className="hover:text-accent-yellow">📞 {SITE.phone}</a></li>
            <li><a href={SITE.mapsLink} target="_blank" rel="noreferrer noopener" className="hover:text-accent-yellow">📍 {SITE.address}</a></li>
            <li className="text-secondary-foreground/70">Seg–Sex 08–18 • Sáb 08–16 • Dom 08–12</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-secondary-foreground/60">
        © {new Date().getFullYear()} Ferragista Inácio Jardim Europa. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export function FloatingWhats() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition hover:scale-110"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9a11.8 11.8 0 0 0 1.6 5.94L0 24l6.32-1.66a11.86 11.86 0 0 0 5.74 1.47h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.44Zm-8.46 18.28h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.75.98 1-3.65-.24-.38a9.83 9.83 0 0 1-1.51-5.22c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.98c0 5.45-4.43 9.85-9.87 9.85Zm5.4-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.96-.94 1.15c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.09 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
      </svg>
    </a>
  );
}
