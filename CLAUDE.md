# doval · cardápio digital — instruções pro Claude

Você está ajudando a **doval**, uma marmiteria (marmitas + doces). Este repositório é o site do cardápio, publicado na Vercel: **o que entra na branch `main` vai pro ar em ~30 segundos**. Não existe ambiente de teste — o que entra na `main` é o que o cliente vê.

**Nunca faça push direto na `main`.** Toda troca vai por um pull request (PR) que o **Victor** aprova: use a skill `abrir-pr` (`.claude/skills/abrir-pr/SKILL.md`). A Vercel bloqueia publicações feitas direto pelo Lucas.

Quem normalmente pede alterações aqui é o **Lucas**, sócio e dono do projeto (não é programador). Fale com ele em português, de forma simples, sem jargão técnico. Antes de qualquer texto novo, leia `MARCA.md`.

## O que pode ser alterado

**Tudo que o Lucas pedir.** Ele é dono do projeto: cardápio da semana, kits prontos, doces (favoritos da casa e bolos simples), preços, textos, fotos, botões, seções. Não recuse um pedido dizendo que "é com o Victor" — o Victor entra só na aprovação do PR, como em qualquer troca.

O que muda é o **cuidado**, conforme o lugar:

| onde | o que fica ali | nível de cuidado |
|---|---|---|
| `cardapio.json` | pratos do cardápio da semana | baixo — arquivo pequeno, feito pra ser editado toda semana |
| `assets/fotos/` | fotos de todos os pratos e bolos | baixo (ver "Fotos novas") |
| `index.html` | todo o resto: início, kits prontos, doces, preços dos kits e dos bolos, textos, layout | **alto** — um erro aqui pode derrubar a página inteira (ver "Outras seções") |
| `support.js`, `vendor/`, `_ds/`, `vercel.json` | motor do site, design system e configuração | **não mexa**. Se um pedido só der pra fazer mudando esses arquivos, explique ao Lucas e combine com ele antes de seguir. |

Faça exatamente o que foi pedido. Não "melhore", reorganize ou reformate nada além disso.

## Como é o `cardapio.json`

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
| `fotoAmpliada` | opcional. Foto completa que abre quando o cliente clica na foto do card: `assets/fotos/nome-do-arquivo-ampliada.jpg`. Se omitido, abre a própria `foto`. |
| `fotoAlt` | descrição curta do que aparece na foto (acessibilidade). |
| `porcao` | opcional. Se omitido, aparece "400g · marmita individual". Só use se o Lucas pedir outro tamanho. |

A ordem na lista é a ordem no site. Hoje são 2 pratos disponíveis + 1 card "em breve" (opção vegana); mantenha esse card a menos que o Lucas peça pra tirar.

O site lê o nome e o preço do `cardapio.json` também pro carrinho e pra mensagem do WhatsApp — não há outro lugar pra atualizar.

## Outras seções (`index.html`)

Kits prontos, doces e o restante da página ficam no `index.html`. Ele foi exportado do Claude Design e é grande, então:

- **Encontre o trecho exato antes de mexer.** Os dados de cada seção ficam em listas dentro do `<script type="text/x-dc">` perto do fim do arquivo:
  - kits prontos → lista `kitsFoto` (sabores, com `ampliada`) e tabela `TABELA` (preços por tamanho e quantidade); a foto do card de cada kit fica num `<img src="assets/fotos/...">` dentro da seção `isKits`;
  - doces → listas `favoritos` (favoritos da casa) e `simples` (bolos simples); cada item tem `nome`, `desc`, preço (`preco` + `valorUn`, ou `pg` com os valores P/G, ou `cobPrecos` nos simples), `info`, `tag`, `foto: ['foto-id', 'arquivo.jpg']`, `ampliada` e `alt`.
- **Troque só o valor** (o texto entre aspas, o número). Não mexa em chaves `{ }`, colchetes, vírgulas, `{{ }}`, `style=`, `onClick` ou `sc-if`/`sc-for`, a não ser que o pedido seja justamente esse.
- Em preços do `index.html`, atualize **o texto e o número juntos** quando os dois existirem (ex.: `preco: 'R$ 250,00 / unidade', valorUn: 250`). O carrinho usa o número.
- Mudanças maiores (seção nova, mudar layout, reorganizar a página): mostre ao Lucas o plano em poucas linhas antes de começar e teste no navegador antes de enviar.

## Fotos novas

1. Salve em `assets/fotos/` com nome em minúsculas, sem acento nem espaço: `frango-ao-curry.jpg`.
2. Formato JPG, **até 1200 px no lado maior**, idealmente abaixo de 400 KB. No Mac: `sips -Z 1200 assets/fotos/frango-ao-curry.jpg`. Se não tiver como redimensionar, avise o Lucas.
3. A foto aparece cortada em proporção 4:3 — prefira fotos horizontais com o prato centralizado.
4. Cada prato pode ter **duas fotos**: a do card (`foto`, fechada no prato) e a completa (`fotoAmpliada`, em pé ou deitada, até 1800 px no lado maior e idealmente abaixo de 560 KB). A skill `tratamento-fotos-doval`, formato `cardapio`, gera as duas.
5. Foto trocada ganha **nome novo** (`-2`, `-3`...): com o mesmo nome, quem já visitou o site pode continuar vendo a antiga por até 7 dias. Troque **todas** as referências ao nome antigo:
   - no cardápio da semana: `foto` e `fotoAmpliada` no `cardapio.json`;
   - nas outras seções: no `index.html`, a linha `<meta name="ext-resource-dependency" content="assets/fotos/...">` no topo **e** o `src=` / `foto: [...]` / `ampliada` da seção. Procure o nome antigo no arquivo inteiro.
6. Não apague fotos antigas: um prato pode voltar ao cardápio.

## Passo a passo de qualquer alteração

1. **Atualize a pasta antes de editar**: `git switch main` e `git pull --ff-only` (ou peça pro Lucas clicar em "Fetch origin" / "Pull" no GitHub Desktop). Se for ajustar um envio que o Victor ainda não aprovou, fique na mesma branch e siga "Ajustar um envio" da skill `abrir-pr`.
2. Confirme com o Lucas o que muda e **qualquer informação que faltar** (preço, foto, texto). Se ele não souber o preço, não chute: no cardápio da semana use `null`; em outras seções, pergunte.
3. Faça a alteração (`cardapio.json`, fotos e/ou `index.html`).
4. Se mexeu no `cardapio.json`, rode a checagem: `python3 scripts/checar-cardapio.py`. Ela precisa terminar com `OK`. Corrija qualquer `ERRO`; mostre os `AVISO`s pro Lucas.
5. Veja o site rodando: `python3 -m http.server 8000` e abra http://localhost:8000 na seção alterada. (Abrir o `index.html` com duplo clique não funciona.) **Se mexeu no `index.html`, isso é obrigatório:** confira a seção, o carrinho (adicione o item e veja a mensagem do WhatsApp) e se o resto da página continua aparecendo. Se não tiver como rodar o site, diga isso ao Lucas no resumo.
6. **Mostre um resumo pro Lucas e peça um "pode enviar"** antes de enviar. Ex.: "Vou enviar pro Victor: entra Frango ao curry (R$ 32,00, selo Novidade, foto nova) e sai a Fraldinha. Pode enviar?"
7. Envie pra aprovação com a skill `abrir-pr`. Ela cria uma branch, abre o PR e te dá o link.
8. Avise o Lucas que **ainda não está no ar**: ele manda o link pro Victor, e o site atualiza ~30 s depois que o Victor aprovar. Aí peça pra conferir no celular.

## Se der errado

- Se o `cardapio.json` estiver quebrado, o site mostra "Não deu pra carregar o cardápio da semana agora" com link pro WhatsApp — o resto do site continua funcionando. Corrija e envie de novo pela skill `abrir-pr`.
- Se uma mudança no `index.html` deixar a página quebrada ou em branco, avise o Lucas na hora: ele pede pro Victor usar o botão **Revert** no PR aprovado. Depois investigue com calma e envie a correção num PR novo.
- Pra desfazer qualquer outra publicação: peça pro Victor usar o botão **Revert** no PR aprovado.
- Se `git pull` ou `git push` der conflito ou erro que você não entende, **pare** e peça pro Lucas falar com o Victor. Nunca use `git push --force` nem `git reset --hard`.
