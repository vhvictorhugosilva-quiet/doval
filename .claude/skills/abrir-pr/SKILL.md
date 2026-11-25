---
name: abrir-pr
description: Envia uma troca de cardápio da doval pra aprovação do Victor, abrindo um pull request em vez de publicar direto na main. Use sempre que o Lucas pedir pra publicar, subir, enviar, mandar pro ar ou atualizar o site, e também quando pedir pra ajustar um envio que o Victor ainda não aprovou.
---

# Enviar o cardápio pra aprovação (abrir PR)

O site só publica quando o Victor aprova. Você prepara a mudança numa **branch** separada e abre um **pull request (PR)**. Nada vai pro ar neste momento.

Com o Lucas, fale "enviar pro Victor aprovar". Não precisa explicar branch nem PR.

## Regras

- **Nunca** faça push na `main`, nem aprove ou faça merge do PR. Quem aprova é o Victor.
- **Nunca** use `git push --force`, `git reset --hard` ou `git stash`.
- **Nunca** troque o nome ou o e-mail do autor dos commits (`git config user.*`, `--author`).
- Só entram no PR: `cardapio.json` e arquivos em `assets/fotos/`. Se o pedido for outro, pare e diga que precisa passar pelo Victor.
- Se um comando der erro que você não entende, **pare** e peça pro Lucas falar com o Victor.
- O repositório e os PRs são públicos: não coloque telefone, e-mail ou dado de cliente no texto.

## Passo a passo

### 1. Veja a situação

```
git status -sb
git branch --show-current
git fetch origin
```

- Está numa branch `cardapio/...` e o Lucas quer **ajustar um envio que o Victor ainda não aprovou**: vá pra "Ajustar um envio".
- Há arquivos alterados fora de `cardapio.json` e `assets/fotos/`: **pare** e mostre a lista pro Lucas.
- Se não, siga em frente.

### 2. Crie a branch a partir da versão mais nova

O nome é `cardapio/AAAA-MM-DD-prato`, em minúsculas, sem acento nem espaço. Exemplo:

```
git switch --no-track -c cardapio/2026-11-30-frango-ao-curry origin/main
```

As alterações ainda não salvas em commit vão junto. Se o Git disser que elas seriam sobrescritas, **pare** e peça pro Lucas falar com o Victor. Se disser que a branch já existe, acrescente `-2` no nome.

Se o `git status` do passo 1 mostrou `ahead` na `main` (commit feito lá e ainda não enviado), crie a branch de onde está, sem `origin/main`, pra não deixar o commit pra trás:

```
git switch -c cardapio/2026-11-30-frango-ao-curry
```

### 3. Confira

```
python3 scripts/checar-cardapio.py
git diff
```

A checagem precisa terminar com `OK`. Corrija qualquer `ERRO` e mostre os `AVISO`s pro Lucas.

### 4. Peça o "pode enviar"

Mostre um resumo e espere a resposta. Ex.: "Vou enviar pro Victor: entra Frango ao curry (R$ 32,00, selo Novidade, foto nova) e sai a Fraldinha. Pode enviar?"

### 5. Salve e envie

```
git add cardapio.json assets/fotos/
git diff --cached --name-only
git commit -m "Cardápio da semana: <pratos>"
git diff --name-only origin/main...HEAD
git push -u origin HEAD
```

As duas listas de arquivos só podem ter `cardapio.json` e `assets/fotos/`. Antes do push, confirme com `git branch --show-current` que **não** está na `main`.

Se o push falhar por falta de acesso, peça pro Lucas abrir o GitHub Desktop, conferir que a **Current branch** é a `cardapio/...` (não a `main`) e clicar em **Publish branch**.

### 6. Abra o PR

**Se o `gh` estiver instalado e conectado** (`gh auth status`):

```
gh pr create --base main --head <branch> --title "Cardápio da semana: <pratos>" --body "<texto>"
```

**Se não**, mande este link pro Lucas, trocando `<branch>`, com o título e o texto prontos pra colar. Ele clica em **Create pull request**:

```
https://github.com/vhvictorhugosilva-quiet/doval/compare/main...<branch>?expand=1
```

Texto do PR:

```
## O que muda
- Entra: <prato>, <preço>, <selo>, <foto nova ou não>
- Sai: <prato>
- Muda: <o que mudou>

## Conferido
- Checagem do cardápio: OK
- Avisos: <nenhum, ou quais>

## Pra aprovar
Conferir em "Files changed" e usar "Create a merge commit" (não usar squash nem rebase).
```

### 7. Avise o Lucas

Passe o link do PR e diga:

- "Enviei pro Victor. Ainda **não** está no ar; vai pro ar cerca de 30 segundos depois que ele aprovar. Manda esse link pra ele."
- Pode aparecer um X vermelho da Vercel no PR ("Deployment was blocked"). É esperado e não impede a aprovação. Não tente consertar.

## Ajustar um envio

1. Confirme que o PR ainda está aberto: `gh pr view` ou pergunte pro Lucas. Se já foi aprovado, comece um envio novo pelo passo 1.
2. Na mesma branch, edite, rode a checagem, peça o "pode enviar" e faça:

```
git add cardapio.json assets/fotos/
git commit -m "Ajusta cardápio: <o que mudou>"
git push
```

O PR se atualiza sozinho. Avise o Lucas e atualize o texto do PR se ele não bater mais.

## Depois que o Victor aprovar

```
git switch main
git pull --ff-only
```

Peça pro Lucas conferir o site no celular.

## Pro Victor: como aprovar

1. Entre no GitHub como `vhvictorhugosilva-quiet`.
2. Abra o PR e confira **Files changed**: só `cardapio.json` e `assets/fotos/`.
3. Na seta do botão verde, escolha **Create a merge commit** e confirme. Squash e rebase podem manter o Lucas como autor, e a Vercel bloqueia a publicação.
4. Veja se o commit do merge ficou verde na `main` e confira o site.
5. Pra desfazer: botão **Revert** no PR já aprovado, e merge do PR que ele cria (também com **Create a merge commit**).
