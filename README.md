# doval · cardápio digital

Site estático do cardápio da doval (marmitas + doces). Publicado na Vercel: o que entra na branch `main` vai pro ar em ~30 segundos. As trocas entram por pull request (PR), aprovado pelo Victor.

Origem: exportado do Claude Design (projeto "Redesign cardápio digital Doval", v1.0).

## Estrutura

```
index.html        ← a página inteira (início, kits, cardápio da semana, doces)
cardapio.json     ← pratos do cardápio da semana (é o que muda toda semana)
CLAUDE.md         ← regras pro Claude que for editar este site
MARCA.md          ← tom de voz e identidade da doval
.claude/skills/   ← abrir-pr: passo a passo pra enviar uma troca pra aprovação
scripts/          ← checar-cardapio.py: confere o cardapio.json antes de publicar
support.js        ← motor do Claude Design (não editar)
vendor/           ← React (cópia local, não editar)
_ds/doval/        ← design system: cores, fontes, componentes (não editar)
assets/fotos/     ← fotos dos pratos e bolos (JPG, até 1200px)
assets/illustrations/ ← doodles da marca
assets/           ← logo, vídeo de abertura, imagem de compartilhamento
vercel.json       ← configuração da Vercel
```

## Como trocar o cardápio da semana (Lucas)

Os pratos da semana ficam todos no arquivo `cardapio.json`. O resto do site (kits, doces, textos) fica no `index.html` e também pode ser alterado pelo Claude, seguindo os cuidados do `CLAUDE.md`.

**Com o Claude (recomendado):** abra esta pasta no Claude e peça, por exemplo: *"troca o cardápio da semana: sai a fraldinha, entra frango ao curry a R$ 32, selo Novidade, foto em anexo"*. O Claude segue as regras do `CLAUDE.md`: atualiza a pasta, edita o `cardapio.json`, confere com `scripts/checar-cardapio.py`, te mostra o resumo e, depois do seu "pode enviar", abre um PR pro Victor aprovar (skill `abrir-pr`).

**Sem o Claude (pelo site do GitHub):** abra `cardapio.json`, clique no lápis, troque os textos entre aspas e o número do `preco` (ex.: `32.5`, sem "R$"), e clique em **Commit changes**. Escolha **Create a new branch for this commit and start a pull request** → **Propose changes** → **Create pull request**. Foto nova: na página dessa mesma branch, **Add file → Upload files** dentro de `assets/fotos/` (nome sem acento nem espaço), e coloque o caminho no campo `foto`.

Mande o link do PR pro Victor. O site atualiza ~30s depois que ele aprovar, usando **Create a merge commit** (squash e rebase podem fazer a Vercel bloquear a publicação). Se o arquivo tiver algum erro, a seção mostra um aviso com o link do WhatsApp e o resto do site continua no ar.

## Rodar no computador

```
cd doval-site
python3 -m http.server 8000
```
e abra http://localhost:8000 (abrir o arquivo direto com duplo clique não funciona).

## Pendências

- Depois de ter o domínio, trocar `og:image` no `index.html` para o endereço completo (ex.: `https://doval.com.br/assets/og-image.jpg`), para a prévia do link aparecer no WhatsApp.
- Confirmar a licença da fonte Koara (versão "free") para uso comercial na web.
