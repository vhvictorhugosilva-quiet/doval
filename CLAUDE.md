# doval · cardápio digital — instruções pro Claude

Você está ajudando a **doval**, uma marmiteria (marmitas + doces). Este repositório é o site do cardápio, publicado na Vercel: **todo push na branch `main` vai pro ar sozinho em ~30 segundos**. Não existe ambiente de teste — o que entra na `main` é o que o cliente vê.

Quem normalmente pede alterações aqui é o **Lucas**, sócio e dono do projeto (não é programador). Fale com ele em português, de forma simples, sem jargão técnico. Antes de qualquer texto novo, leia `MARCA.md`.

## O que pode ser alterado

**Tudo que o Lucas pedir.** Ele é dono do projeto: cardápio da semana, kits prontos, doces (favoritos da casa e bolos simples), preços, textos, fotos, botões, seções. Não recuse um pedido dizendo que "é com o Victor".

O que muda é o **cuidado**, conforme o lugar:

| onde | o que fica ali | nível de cuidado |
|---|---|---|
| `cardapio.json` | pratos do cardápio da semana | baixo — arquivo pequeno, feito pra ser editado toda semana |
| `assets/fotos/` | fotos de todos os pratos e bolos | baixo (ver "Fotos") |
| `index.html` | todo o resto: início, kits prontos, doces, preços dos kits e dos bolos, textos, layout | **alto** — um erro aqui pode derrubar a página inteira |
| `support.js`, `vendor/`, `_ds/`, `vercel.json` | motor do site, design system e configuração | **não mexa**. Se um pedido só der pra fazer mudando esses arquivos, explique ao Lucas e combine com ele antes de seguir. |

Faça exatamente o que foi pedido. Não "melhore", reorganize ou reformate nada além disso.

## Cardápio da semana (`cardapio.json`)

```json
{
  "semana": [
    {
      "id": "fraldinha-suculenta",
      "status": "disponivel",
      "nome": "Fraldinha suculenta",
      "descricao": "Arroz, grão-de-bico, fraldinha e pimentão assado.",
      "preco": 35,
      "etiqueta": "Mais pedida",
      "foto": "assets/fotos/fraldinha-suculenta.jpg",
      "fotoAlt": "Marmita de fraldinha desfiada com pimentões e grão-de-bico"
    }
  ]
}
```

| campo | regra |
|---|---|
| `id` | único, minúsculas, sem acento, palavras com hífen. Normalmente o nome do prato (`frango-ao-curry`). |
| `status` | `"disponivel"` (com botões − / +) ou `"em-breve"` (card de "Testando na cozinha", sem botões). |
| `nome` | nome do prato, curto. |
| `descricao` | uma frase com os componentes do prato, no tom da marca (ver `MARCA.md`). |
| `preco` | **número**, preço por marmita: `35` ou `32.5`. Sem `"R$"`, sem aspas, ponto como decimal. Use `null` se o Lucas não informou — **nunca invente preço**. |
| `etiqueta` | selo no canto da foto: curto, 1 a 3 palavras ("Mais pedida", "Low carb", "Novidade"). Pode ser `null`. |
| `foto` | `assets/fotos/nome-do-arquivo.jpg`, ou `null` (aparece um desenho com "Foto a caminho"). |
| `fotoAlt` | descrição curta do que aparece na foto (acessibilidade). |
| `porcao` | opcional. Se omitido, aparece "400g · marmita individual". Só use se o Lucas pedir outro tamanho. |

A ordem na lista é a ordem no site. O site lê o nome e o preço daqui também pro carrinho e pra mensagem do WhatsApp — não há outro lugar pra atualizar. Depois de editar, rode `python3 scripts/checar-cardapio.py` (precisa terminar com `OK`).

## Outras seções (`index.html`)

Kits prontos, doces e o restante da página ficam no `index.html`. Ele foi exportado do Claude Design e é grande (≈250 KB), então:

- **Encontre o trecho exato antes de mexer.** Os dados de cada seção ficam em listas dentro do `<script type="text/x-dc">` perto do fim do arquivo:
  - kits prontos → lista `kitsFoto` (sabores) e tabela `TABELA` (preços por tamanho e quantidade); as fotos dos kits ficam em `<img src="assets/fotos/...">` dentro da seção `isKits`;
  - doces → listas `favoritos` (favoritos da casa) e `simples` (bolos simples); cada item tem `nome`, `desc`, preço (`preco` + `valorUn`, ou `pg` com os valores P/G, ou `cobPrecos` nos simples), `info`, `tag`, `foto: ['foto-id', 'arquivo.jpg']` e `alt`.
- **Troque só o valor** (o texto entre aspas, o número). Não mexa em chaves `{ }`, colchetes, vírgulas, `{{ }}`, `style=`, `onClick` ou `sc-if`/`sc-for`, a não ser que o pedido seja justamente esse.
- Em preços do `index.html`, atualize **o texto e o número juntos** quando os dois existirem (ex.: `preco: 'R$ 250,00 / unidade', valorUn: 250`). O carrinho usa o número.
- Mudanças maiores (seção nova, mudar layout, reorganizar a página): mostre ao Lucas o plano em poucas linhas antes de começar e teste no navegador antes de publicar.

## Fotos

1. Salve em `assets/fotos/` com nome em minúsculas, sem acento nem espaço: `frango-ao-curry.jpg`.
2. Formato JPG, **até 1200 px no lado maior**, idealmente abaixo de 400 KB. No Mac: `sips -Z 1200 assets/fotos/frango-ao-curry.jpg`. Se não tiver como redimensionar, avise o Lucas.
3. As fotos aparecem cortadas em proporção 4:3 — prefira fotos horizontais com o prato centralizado.
4. **Foto nova = nome novo.** O site manda o navegador guardar as fotos por 7 dias; se você só sobrescrever um arquivo com o mesmo nome, muita gente vai continuar vendo a foto antiga. Use um nome novo (`banana-bread-2.jpg`) e troque **todas** as referências a ele:
   - no `cardapio.json` (cardápio da semana), ou
   - no `index.html`: a linha `<meta name="ext-resource-dependency" content="assets/fotos/...">` no topo do arquivo **e** o `src=` ou o `foto: [...]` da seção. Procure o nome antigo no arquivo inteiro e troque em todos os lugares.
   - Alternativa quando precisar manter o nome: acrescente ou aumente um `?v=` em todas as referências (`bolo-nozes.jpg?v=2` → `?v=3`).
5. Não apague fotos antigas: um prato pode voltar ao cardápio.

## Passo a passo de qualquer alteração

1. **Atualize a pasta antes de editar**: `git pull` (ou peça pro Lucas clicar em "Fetch origin" / "Pull" no GitHub Desktop). Isso evita conflito com mudanças feitas por outra pessoa.
2. Confirme com o Lucas o que muda e **qualquer informação que faltar** (preço, foto, texto). Se ele não souber o preço, não chute: no cardápio da semana use `null`; em outras seções, pergunte.
3. Faça a alteração.
4. Confira:
   - mexeu no `cardapio.json` → `python3 scripts/checar-cardapio.py` precisa terminar com `OK`;
   - mexeu no `index.html` → abra o site rodando: `python3 -m http.server 8000` e http://localhost:8000. Confira a seção alterada, o carrinho (adicione o item e veja a mensagem do WhatsApp) e se o resto da página continua aparecendo. Abrir o `index.html` com duplo clique não funciona.
   - Se você não tiver como rodar o site, diga isso ao Lucas no resumo.
5. **Mostre um resumo pro Lucas e peça um "pode publicar"**. Ex.: "Troquei a foto do banana bread (banana-bread-2.jpg) e o preço do kit de 10 regular de R$ 300 para R$ 320. Publico?"
6. Publique:
   ```
   git add -A
   git commit -m "<o que mudou, em português>"
   git push
   ```
   Se você não conseguir fazer push (sem acesso ao GitHub), peça pro Lucas abrir o GitHub Desktop, clicar em **Commit to main** e depois **Push origin**.
7. Em ~30 s o site atualiza. Peça pro Lucas conferir no celular.

## Se der errado

- Se o `cardapio.json` estiver quebrado, o site mostra "Não deu pra carregar o cardápio da semana agora" com link pro WhatsApp — o resto do site continua funcionando. Corrija e publique de novo.
- Se o `index.html` quebrar, a página pode ficar em branco. Desfaça na hora: `git revert HEAD` e `git push` (ou, no GitHub Desktop, botão direito no commit → **Revert changes in commit** → **Push origin**). Depois investigue com calma.
- Se `git pull` ou `git push` der conflito ou erro que você não entende, **pare** e peça pro Lucas falar com o Victor. Nunca use `git push --force` nem `git reset --hard`.
