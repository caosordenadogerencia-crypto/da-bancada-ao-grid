# Da Bancada ao Grid

Página de vendas do ebook de marketing e vendas para técnicos em prótese dentária, por Douglas Vince.

## Estrutura

- `dist/index.html`: página completa e Meta Pixel.
- `dist/styles.css`: identidade visual, responsividade e animações.
- `dist/script.js`: interações, modais e controles de animação.
- `dist/assets/`: imagens, mockup, amostras e vídeo do CIPRO.
- `.openai/hosting.json`: configuração do projeto original em Sites.

## Executar localmente

Na raiz do projeto:

```sh
python3 -m http.server 8080 --directory dist
```

Abra http://localhost:8080.

## Deploy na Vercel

O `vercel.json` na raiz configura o projeto como site estático e publica a pasta `dist`. Não há dependências para instalar nem etapa de build.

1. Importe este repositório na Vercel.
2. Mantenha **Root Directory** na raiz do repositório (`./`), onde está o `vercel.json`.
3. Use **Framework Preset: Other**. A configuração do repositório define o diretório de saída como `dist` e desativa instalação e build.
4. Clique em **Deploy**.

Se o projeto já existir na Vercel, confirme a raiz do repositório e faça um novo deploy da branch `main`.

Os arquivos de `dist/assets/`, incluindo o vídeo, são publicados como arquivos estáticos. A configuração de Sites em `.openai/hosting.json` não é usada pela Vercel.

## Verificação local

```sh
node --check dist/script.js
python3 -m json.tool vercel.json
```

## Configurações atuais

- Meta Pixel: `1184056213799446`, com evento `PageView`.
- Preço anunciado: R$ 47,00.
- Checkout: aguardando o link de pagamento; botão de compra desativado.
- O repositório contém amostras do ebook; o PDF integral é um produto separado.

## Direitos

Textos, marca, imagens e vídeos pertencem aos respectivos titulares. Material do projeto de Douglas Vince / Forward Zone; não há licença aberta de reutilização.
