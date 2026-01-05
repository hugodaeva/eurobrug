# EuroBrug. Landing Page (GitHub Pages)

Landing page estática da EuroBrug, publicada via GitHub Pages com domínio customizado.
Site bilíngue (EN/NL) via i18n simples em JavaScript.

## Publicação
- Hospedagem: GitHub Pages
- Branch: `main`
- Build: não existe build. É HTML/CSS/JS puro.

### Domínio (GoDaddy)
- Apex (`eurobrug.com`) aponta para GitHub Pages via 4 registros A (185.199.108.153, 109.153, 110.153, 111.153).
- `www` é CNAME para `<seu-usuario>.github.io` (ex: `hugodaeva.github.io`).
- O arquivo `CNAME` na raiz do repo mantém o domínio do Pages.

## Estrutura do projeto
Arquivos principais:
- `index.html` . Home
- `companies.html` . Página para empresas
- `talent.html` . Página para talentos
- `i18n.js` . Textos (EN/NL) e lógica de troca de idioma
- `assets/` . Imagens (logo, hero, etc)
- `og.png` . Imagem de preview para WhatsApp/LinkedIn (Open Graph)
- `favicon.ico` + ícones (PNG) . Favicon e ícones de app
- `site.webmanifest` . Manifest PWA (básico)
- `robots.txt` . Regras para crawlers
- `sitemap.xml` . Mapa do site

## Boas práticas de edição
### 1) Não quebrar anchors e IDs
Os links do menu e do footer dependem de IDs e âncoras, por exemplo:
- `#about`, `#services`, `#model`, `#how`, `#talent`, `#final`

Regra:
- Não renomeie IDs.
- Não duplique IDs.

### 2) i18n (EN/NL) funcionando em tudo
O site traduz textos via atributos `data-i18n` no HTML e chaves no `i18n.js`.

Regra:
- Todo texto visível deve vir de `data-i18n`.
- Sempre atualize EN e NL juntos.
- Exceções intencionais: marca "EuroBrug" e a lista de “Articles” do footer (podem ficar em inglês).

Como atualizar um texto:
1. Procure no HTML o elemento com `data-i18n="chave_x"`.
2. Edite o valor da chave no `i18n.js` em EN e NL.
3. Teste o toggle de idioma para garantir que tudo muda.

### 3) CTAs e links de formulário
Os botões de conversão (CTAs) devem abrir links externos em nova aba:
- `target="_blank" rel="noopener"`

Regra:
- CTA principal: **Hire a Dev** (abre o form)
- Na área final:
  - Card A: **Hire a Dev**
  - Card B: **Candidate Application** com botões **Apply** e **Refer a Friend**
- Não exibir emails no site.

Atualizar link do form:
- Procure por `FORM_URL` no projeto e substitua pelo novo link.
- Confirme que todos os botões usam o mesmo destino.

### 4) Imagens (troca fácil)
Hero image:
- Deve ser possível trocar a imagem apenas substituindo o arquivo, mantendo mesmo nome e caminho.
- O CSS usa `object-fit: cover` e bordas arredondadas. Não remover `overflow: hidden`.

Logo:
- `assets/logo.png`
- Se trocar a logo, mantenha PNG e preferencialmente quadrada.

### 5) Consistência visual
Regras:
- Layout dark e cards clean.
- Tudo com borda arredondada (sem caixas quadradas).
- Títulos de seção com detalhe/underline azul.
- Evitar criar estilos “fora do padrão”. Reutilize classes existentes.

## SEO e compartilhamento (WhatsApp/LinkedIn)
O projeto já inclui:
- `<title>` por página
- `<meta name="description">`
- canonical
- robots
- Open Graph (og:title, og:description, og:image, og:url)
- Twitter card
- JSON-LD (Organization/WebSite)
- favicon + ícones + manifest
- `sitemap.xml` e `robots.txt`

Boas práticas:
- Ao mudar headline/posicionamento, atualize `title`, `description` e OG de cada página.
- `og.png` deve ser 1200x630 para preview consistente.
- Se trocar domínio/rotas, atualize:
  - canonical
  - og:url
  - sitemap.xml

## Teste local (sem deploy)
Como visualizar localmente:
- Mac/Linux:
  - `python3 -m http.server 8000`
- Windows:
  - `py -m http.server 8000`

Acesse:
- `http://localhost:8000`

Regra:
- Sempre teste localmente antes de subir para o GitHub, principalmente:
  - Toggle de idioma
  - Links dos CTAs
  - Navegação por âncoras
  - Imagem OG e favicon (ver no DevTools)

## Deploy (GitHub Pages)
Fluxo padrão:
1. Faça upload/commit dos arquivos na branch `main`.
2. Aguarde o GitHub Pages atualizar.
3. Faça hard refresh no navegador (Cmd+Shift+R ou Ctrl+Shift+R).

## Convenção de commits
Sugestões:
- `Fix layout: ...`
- `Update copy: ...`
- `Add SEO: ...`
- `Update i18n: ...`

Descrição do commit (opcional) em bullets, com o que mudou e por quê.

## Checklist rápido antes de subir
- Toggle EN/NL troca todo texto (exceto marca e Articles).
- Não existe “Vacancy/Vacature” no UI.
- Anchors funcionam: `#services`, `#model`, `#how`, `#talent`, `#final`.
- CTAs abrem em nova aba e apontam para o form correto.
- Nenhum conteúdo fora do `<body>` e nada depois de `</html>`.
- Hero image e cards com bordas arredondadas.
- `og.png` e favicon presentes.
