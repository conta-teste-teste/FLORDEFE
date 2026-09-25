# Flor de Fé — Catálogo Interativo

Site premium e responsivo para a Flor de Fé, preparado para GitHub + Vercel.

## O que já existe
- Home premium com estética tecnológica e delicada
- Paleta oficial `#80719C` + `#F4F7F2`
- Coleções e filtros por categoria
- Catálogo responsivo
- Modal de personalização por produto
- Cor, medalha, nome e quantidade
- Envio direto para WhatsApp com mensagem preenchida
- Sem API e sem banco de dados nesta fase
- Mobile-first e pronto para deploy

## Configurar WhatsApp
Crie `.env.local` na raiz:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=5541999999999
```

Use DDI + DDD + número, apenas dígitos.

## Rodar localmente
```bash
npm install
npm run dev
```

## Deploy na Vercel
1. Suba a pasta para um repositório no GitHub.
2. Importe o repositório na Vercel.
3. Adicione `NEXT_PUBLIC_WHATSAPP_NUMBER` em Environment Variables.
4. Deploy.

## Produtos
Edite `data/products.js` para trocar nomes, categorias, opções e textos.

## Fotos reais
Nesta versão o site usa uma ilustração abstrata como placeholder de produto. Quando as fotos reais forem enviadas, substitua a área visual de cada card por imagens em `public/produtos/`.


## Imagens integradas nesta versao
- Hero principal
- Batizado
- Casamento
- Primeira Comunhao
- Tercos infantis
- Tercos personalizados
- Feminino delicado

As demais secoes continuam prontas para receber novas imagens conforme forem enviadas.
