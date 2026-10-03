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

## Publicação

O projeto é um site estático, sem dependências ou etapa de build. Configure `dist` como diretório de publicação no provedor escolhido.

A página original está em https://da-bancada-ao-grid.vinceforward.chatgpt.site.

## Configurações atuais

- Meta Pixel: `1184056213799446`, com evento `PageView`.
- Preço anunciado: R$ 47,00.
- Checkout: aguardando o link de pagamento; botão de compra desativado.
- O repositório contém amostras do ebook; o PDF integral é um produto separado.

## Direitos

Textos, marca, imagens e vídeos pertencem aos respectivos titulares. Material do projeto de Douglas Vince / Forward Zone; não há licença aberta de reutilização.
