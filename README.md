# doval · cardápio digital

Site estático do cardápio da doval (marmitas + doces). Publicado na Vercel: cada commit na branch `main` vai pro ar sozinho em ~30 segundos.

Origem: exportado do Claude Design (projeto "Redesign cardápio digital Doval", v1.0).

## Estrutura

```
index.html        ← a página inteira (início, kits, cardápio da semana, doces)
support.js        ← motor do Claude Design (não editar)
vendor/           ← React (cópia local, não editar)
_ds/doval/        ← design system: cores, fontes, componentes (não editar)
assets/fotos/     ← fotos dos pratos e bolos (JPG, até 1200px)
assets/illustrations/ ← doodles da marca
assets/           ← logo, vídeo de abertura, imagem de compartilhamento
vercel.json       ← configuração da Vercel
```

## Como trocar o cardápio da semana (Lucas)

1. No GitHub, abra `index.html` e clique no lápis (Edit).
2. Procure (Ctrl/Cmd + F) por `data-card="sem-a"` (1º prato), `sem-b` (2º prato) ou `sem-c` (opção vegana).
3. Dentro do card, troque só o texto entre as tags:
   - nome: linha com `data-nome` → `>Fraldinha suculenta<`
   - descrição: a linha logo abaixo do nome
   - preço: linha com `data-preco` → mantenha o formato `R$ 35,00 / marmita` (o carrinho lê o valor daqui)
   - etiqueta da foto (ex.: "Mais pedida", "Low carb"): o `<span>` logo abaixo da foto
4. Foto nova: envie o arquivo em `assets/fotos/` (Add file → Upload, nome sem espaço nem acento, ex.: `frango-curry.jpg`) e troque o `src="assets/fotos/..."` do card.
5. Clique em **Commit changes**. Em ~30s o site atualiza.

Não mexa em nada que tenha `{{ }}`, `style=` ou `onClick`: é o que faz os botões funcionarem.

## Rodar no computador

```
cd doval-site
python3 -m http.server 8000
```
e abra http://localhost:8000 (abrir o arquivo direto com duplo clique não funciona).

## Pendências

- Depois de ter o domínio, trocar `og:image` no `index.html` para o endereço completo (ex.: `https://doval.com.br/assets/og-image.jpg`), para a prévia do link aparecer no WhatsApp.
- Confirmar a licença da fonte Koara (versão "free") para uso comercial na web.
