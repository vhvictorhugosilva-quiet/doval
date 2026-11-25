# doval · cardápio digital — instruções pro Claude

Você está ajudando a **doval**, uma marmiteria (marmitas + doces). Este repositório é o site do cardápio, publicado na Vercel: **todo push na branch `main` vai pro ar sozinho em ~30 segundos**. Não existe ambiente de teste — o que entra na `main` é o que o cliente vê.

Quem normalmente pede alterações aqui é o **Lucas** (sócio, não é programador). Fale com ele em português, de forma simples, sem jargão técnico. Antes de qualquer texto novo, leia `MARCA.md`.

## O que você pode mexer

A tarefa do dia a dia é **trocar o cardápio da semana**. Isso se faz **só** em:

- `cardapio.json` — os pratos da semana
- `assets/fotos/` — adicionar fotos novas dos pratos

Para qualquer outra coisa (preços dos kits, doces, textos de outras seções, layout, cores, botões), **pare e diga ao Lucas que isso precisa passar pelo Victor**. Não tente "dar um jeito".

## O que você nunca mexe

- `index.html` — layout e lógica do site (exportado do Claude Design). Um erro aqui derruba a página inteira.
- `support.js`, `vendor/`, `_ds/` — motor do site e design system.
- `vercel.json`, configurações do GitHub ou da Vercel.
- Não "melhore", reorganize ou reformate nada além do que foi pedido.

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

## Fotos novas

1. Salve em `assets/fotos/` com nome em minúsculas, sem acento nem espaço: `frango-ao-curry.jpg`.
2. Formato JPG, **até 1200 px no lado maior**, idealmente abaixo de 400 KB. No Mac: `sips -Z 1200 assets/fotos/frango-ao-curry.jpg`. Se não tiver como redimensionar, avise o Lucas.
3. A foto aparece cortada em proporção 4:3 — prefira fotos horizontais com o prato centralizado.
4. Cada prato pode ter **duas fotos**: a do card (`foto`, fechada no prato) e a completa (`fotoAmpliada`, em pé ou deitada, até 1800 px no lado maior e idealmente abaixo de 560 KB). A skill `tratamento-fotos-doval`, formato `cardapio`, gera as duas.
5. Foto trocada ganha **nome novo** (`-2`, `-3`...): com o mesmo nome, quem já visitou o site pode continuar vendo a antiga por até 7 dias.
6. Não apague fotos antigas: um prato pode voltar ao cardápio.

## Passo a passo de uma troca

1. **Atualize a pasta antes de editar**: `git pull` (ou peça pro Lucas clicar em "Fetch origin" / "Pull" no GitHub Desktop).
2. Confirme com o Lucas o que entra e o que sai, e **qualquer informação que faltar** (preço, foto, etiqueta). Se ele não souber o preço, use `null` — não chute.
3. Edite o `cardapio.json` e adicione as fotos.
4. Rode a checagem: `python3 scripts/checar-cardapio.py`. Ela precisa terminar com `OK`. Corrija qualquer `ERRO`; mostre os `AVISO`s pro Lucas.
5. Se possível, veja o site rodando: `python3 -m http.server 8000` e abra http://localhost:8000 → "Cardápio da semana". (Abrir o `index.html` com duplo clique não funciona.)
6. **Mostre um resumo pro Lucas e peça um "pode publicar"** antes de publicar. Ex.: "Vou colocar Frango ao curry (R$ 32,00, selo Novidade, foto nova) e tirar a Fraldinha. Publico?"
7. Publique:
   ```
   git add cardapio.json assets/fotos/
   git commit -m "Cardápio da semana: <pratos>"
   git push
   ```
   Se você não conseguir fazer push (sem acesso ao GitHub), peça pro Lucas abrir o GitHub Desktop, clicar em **Commit to main** e depois **Push origin**.
8. Em ~30 s o site atualiza. Peça pro Lucas conferir no celular.

## Se der errado

- Se o `cardapio.json` estiver quebrado, o site mostra "Não deu pra carregar o cardápio da semana agora" com link pro WhatsApp — o resto do site continua funcionando. Corrija e publique de novo.
- Pra desfazer a última publicação: `git revert HEAD` e `git push`.
- Se `git pull` ou `git push` der conflito ou erro que você não entende, **pare** e peça pro Lucas falar com o Victor. Nunca use `git push --force` nem `git reset --hard`.
