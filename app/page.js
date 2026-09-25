'use client';

import { useMemo, useState } from 'react';
import { products } from '../data/products';

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '55SEUNUMERO';
const categories = ['Todos', ...Array.from(new Set(products.map((p) => p.category)))];

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function SparkleIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.4 5.1L18 9l-4.6 1.9L12 16l-1.4-5.1L6 9l4.6-1.9L12 2Z" /><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" /></svg>;
}

function RosaryArt({ label }) {
  return (
    <div className="rosary-art" aria-label={`Espaço para foto: ${label}`}>
      <div className="rosary-glow" />
      <div className="rosary-ring">
        {Array.from({ length: 20 }).map((_, i) => <span key={i} style={{ '--i': i }} />)}
      </div>
      <div className="rosary-drop"><i /><i /><i /></div>
      <div className="rosary-cross">✦</div>
      <div className="photo-label">foto do produto</div>
    </div>
  );
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ color: '', medal: '', name: '', quantity: '' });
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = useMemo(() => (
    activeCategory === 'Todos' ? products : products.filter((p) => p.category === activeCategory)
  ), [activeCategory]);

  function openProduct(product) {
    setSelected(product);
    setForm({
      color: product.colors[0],
      medal: product.medals[0],
      name: '',
      quantity: product.quantities[0]
    });
  }

  const configuredMessage = selected ? [
    'Olá! Vim pelo catálogo da Flor de Fé 💜',
    '',
    `Produto: ${selected.name}`,
    `Código: ${selected.id}`,
    `Cor: ${form.color}`,
    `Medalha: ${form.medal}`,
    `Personalização: ${form.name || 'A definir'}`,
    `Quantidade: ${form.quantity}`,
    '',
    'Gostaria de receber um orçamento e saber o prazo de produção.'
  ].join('\n') : '';

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="header-wrap">
        <div className="header shell">
          <a className="brand" href="#inicio" aria-label="Flor de Fé">
            <img src="/logo-flor-de-fe.png" alt="Flor de Fé" />
          </a>

          <nav className={menuOpen ? 'nav open' : 'nav'}>
            <a href="#colecoes" onClick={() => setMenuOpen(false)}>Coleções</a>
            <a href="#catalogo" onClick={() => setMenuOpen(false)}>Catálogo</a>
            <a href="#experiencia" onClick={() => setMenuOpen(false)}>Experiência</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>

          <div className="header-actions">
            <a className="button button-small button-glass desktop-only" href={whatsappLink('Olá! Vim pelo site da Flor de Fé e gostaria de atendimento.')} target="_blank" rel="noreferrer">
              WhatsApp <ArrowIcon />
            </a>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <section className="hero shell" id="inicio">
        <div className="hero-copy reveal">
          <div className="status-pill"><span /> Atelier de terços personalizados</div>
          <h1>Fé que se transforma em <em>detalhe.</em></h1>
          <p>Peças personalizadas para momentos que ficam na memória — criadas com delicadeza, significado e uma experiência feita para encantar.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#catalogo">Explorar catálogo <ArrowIcon /></a>
            <a className="button button-ghost" href="#experiencia">Como personalizar</a>
          </div>
          <div className="microproof">
            <div><strong>100%</strong><span>personalizável</span></div>
            <div><strong>Feito</strong><span>com propósito</span></div>
            <div><strong>Online</strong><span>orçamento fácil</span></div>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="hero-orbit orbit-a" />
          <div className="hero-orbit orbit-b" />
          <div className="hero-product-card glass-card">
            <div className="hero-card-top"><span>Flor de Fé</span><span>01 — 26</span></div>
            <RosaryArt label="Terço Flor de Fé" />
            <div className="hero-card-bottom">
              <div><span>coleção</span><strong>Essência</strong></div>
              <div className="mini-chip">personalize</div>
            </div>
          </div>
          <div className="floating-card floating-card-one"><SparkleIcon /><span>Detalhes que contam histórias</span></div>
          <div className="floating-card floating-card-two"><span className="dot" /> Atendimento pelo WhatsApp</div>
        </div>
      </section>

      <section className="marquee-wrap" aria-hidden="true">
        <div className="marquee">
          <span>BATIZADO</span><b>✦</b><span>CASAMENTO</span><b>✦</b><span>PRIMEIRA COMUNHÃO</span><b>✦</b><span>CRISMA</span><b>✦</b><span>LEMBRANÇAS</span><b>✦</b>
          <span>BATIZADO</span><b>✦</b><span>CASAMENTO</span><b>✦</b><span>PRIMEIRA COMUNHÃO</span><b>✦</b><span>CRISMA</span><b>✦</b><span>LEMBRANÇAS</span><b>✦</b>
        </div>
      </section>

      <section className="section shell" id="colecoes">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Coleções</span>
            <h2>Para cada momento,<br /><em>um significado.</em></h2>
          </div>
          <p>Do sacramento à lembrança especial, cada coleção nasce para transformar fé em presença, afeto e memória.</p>
        </div>

        <div className="collection-grid">
          {[
            ['01', 'Batizado', 'Delicadeza para o começo de uma caminhada de fé.'],
            ['02', 'Casamento', 'Lembranças que unem significado e elegância.'],
            ['03', 'Primeira Comunhão', 'Um marco espiritual transformado em memória.'],
            ['04', 'Lembranças', 'Pequenos gestos que permanecem para sempre.']
          ].map(([n, title, copy], index) => (
            <a href="#catalogo" className={`collection-card c${index + 1}`} key={title} onClick={() => setActiveCategory(title === 'Lembranças' ? 'Lembrancinhas' : title)}>
              <span className="collection-number">{n}</span>
              <div className="collection-symbol">✦</div>
              <div><h3>{title}</h3><p>{copy}</p></div>
              <div className="circle-arrow"><ArrowIcon /></div>
            </a>
          ))}
        </div>
      </section>

      <section className="catalog-section" id="catalogo">
        <div className="shell">
          <div className="section-heading catalog-heading">
            <div>
              <span className="eyebrow">Catálogo digital</span>
              <h2>Escolha. Personalize.<br /><em>Transforme.</em></h2>
            </div>
            <p>Selecione um modelo e monte sua versão. O pedido vai para o WhatsApp com tudo organizado — sem formulário complicado.</p>
          </div>

          <div className="filters" role="tablist" aria-label="Filtrar produtos">
            {categories.map((category) => (
              <button key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>
            ))}
          </div>

          <div className="product-grid">
            {filtered.map((product, index) => (
              <article className="product-card" key={product.id}>
                <div className="product-visual">
                  <div className="badge">{product.badge}</div>
                  <div className="code">{product.id}</div>
                  <RosaryArt label={product.name} />
                  <button className="quick-button" onClick={() => openProduct(product)}>Personalizar <ArrowIcon /></button>
                </div>
                <div className="product-info">
                  <div className="product-kicker"><span>{product.category}</span><span>{product.accent}</span></div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-row"><strong>{product.price}</strong><button onClick={() => openProduct(product)}>Ver detalhes</button></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell experience" id="experiencia">
        <div className="experience-copy">
          <span className="eyebrow">Experiência Flor de Fé</span>
          <h2>Personalizar deve ser tão especial quanto <em>receber.</em></h2>
          <p>O site organiza as escolhas do cliente e entrega tudo pronto no WhatsApp. Simples para quem compra, organizado para quem atende.</p>
          <a className="text-link" href="#catalogo">Começar uma personalização <ArrowIcon /></a>
        </div>
        <div className="steps-panel glass-card">
          {[
            ['01', 'Escolha o modelo', 'Navegue pelas coleções e encontre o terço ideal.'],
            ['02', 'Defina os detalhes', 'Cor, medalha, nome e quantidade em poucos toques.'],
            ['03', 'Envie no WhatsApp', 'O resumo completo abre automaticamente na conversa.'],
            ['04', 'Finalize com a gente', 'Confirmamos valores, prazo e detalhes do pedido.']
          ].map(([n, title, copy]) => (
            <div className="step-item" key={n}>
              <span>{n}</span><div><strong>{title}</strong><p>{copy}</p></div><i>↗</i>
            </div>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="shell manifesto-inner">
          <img src="/logo-flor-de-fe.png" alt="Flor de Fé" />
          <p>“Onde a delicadeza encontra a devoção.”</p>
          <span>Flor de Fé · Terços personalizados</span>
        </div>
      </section>

      <section className="cta shell" id="contato">
        <div className="cta-glow" />
        <span className="eyebrow">Seu momento merece significado</span>
        <h2>Vamos criar algo <em>especial?</em></h2>
        <p>Conte a sua ideia para a Flor de Fé. A gente transforma intenção em detalhe.</p>
        <a className="button button-primary button-large" href={whatsappLink('Olá! Vim pelo site da Flor de Fé e quero criar um terço personalizado.')} target="_blank" rel="noreferrer">Conversar no WhatsApp <ArrowIcon /></a>
      </section>

      <footer className="footer shell">
        <div className="footer-brand"><img src="/logo-flor-de-fe.png" alt="Flor de Fé" /><p>Terços personalizados com delicadeza, fé e significado.</p></div>
        <div className="footer-links"><a href="#colecoes">Coleções</a><a href="#catalogo">Catálogo</a><a href="#experiencia">Personalização</a></div>
        <div className="footer-end"><span>© 2026 Flor de Fé</span><span>Feito com propósito ✦</span></div>
      </footer>

      {selected && (
        <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && setSelected(null)}>
          <div className="modal" role="dialog" aria-modal="true" aria-label={`Personalizar ${selected.name}`}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Fechar">×</button>
            <div className="modal-visual"><RosaryArt label={selected.name} /><span>{selected.id}</span></div>
            <div className="modal-content">
              <span className="eyebrow">Personalize seu terço</span>
              <h2>{selected.name}</h2>
              <p>{selected.description}</p>

              <div className="form-grid">
                <label>Cor<select value={form.color} onChange={(e) => setForm({ ...form, color: e.target.value })}>{selected.colors.map((x) => <option key={x}>{x}</option>)}</select></label>
                <label>Medalha<select value={form.medal} onChange={(e) => setForm({ ...form, medal: e.target.value })}>{selected.medals.map((x) => <option key={x}>{x}</option>)}</select></label>
                <label>Nome / personalização<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ex.: Helena" /></label>
                <label>Quantidade<select value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })}>{selected.quantities.map((x) => <option key={x} value={x}>{x} un.</option>)}</select></label>
              </div>

              <div className="summary-box">
                <span>Resumo</span>
                <p>{form.color} · {form.medal} · {form.name || 'sem nome definido'} · {form.quantity} un.</p>
              </div>

              <a className="button button-primary button-full" href={whatsappLink(configuredMessage)} target="_blank" rel="noreferrer">Pedir orçamento no WhatsApp <ArrowIcon /></a>
              <small>Você será direcionado ao WhatsApp com as escolhas já preenchidas.</small>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
