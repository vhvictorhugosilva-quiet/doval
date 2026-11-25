---
name: tratamento-fotos-doval
description: Trata as fotos de comida da doval (marmitas, bolos, doces) no padrão da marca e entrega as duas fotos do cardápio digital (card 4:3 fechado + foto completa ampliada), Instagram ou arquivo.
---

# Tratamento de fotos da doval

Skill para o Lucas (ou o Victor) tratar as fotos dos pratos e doces da doval e deixar cada uma pronta para o lugar onde vai entrar, principalmente os **cards do cardápio digital**.

Responda sempre em português, em tom simples e amigável. O Lucas não precisa saber nada de edição.

## O padrão das fotos da doval

As fotos de referência (novembro/2026) são assim, e o tratamento foi calibrado para elas:
- Luz de casa, amarelada/quente, à noite ou fim de tarde.
- Marmita no pote transparente sobre prato branco com borda azul, ou tábua de madeira; bolos em prato verde com bananas/ingredientes e pano listrado.
- Fundo com cebola, cenoura, alho, saleiro/pimenteiro e mesa de madeira, desfocado (modo retrato do iPhone).
- Foto em pé (3:4), tirada de cima em ângulo de ~45°.

O objetivo é a comida parecer apetitosa e real, como "feito com afeto": nada de filtro pesado, HDR, cor estourada ou edição que mude o que o cliente vai receber.

## O que o tratamento faz (e o que não faz)

1. Endireita a foto (orientação do celular) e converte HEIC do iPhone para JPG.
2. Corrige o amarelado da luz de casa olhando as áreas brancas (prato, pote, toalha): o branco fica um **branco levemente quente**, nunca azulado. Só conta como branco o que está amarelado ou quase neutro: prato verde e toalha/parede azul não entram. Com luz mista (parede azul + lâmpada), use `--calor 1` ou `--calor 2`. Se a foto não tem branco suficiente, a cor fica como está.
3. Ajusta os níveis (tira o aspecto "lavado") e levanta as sombras.
4. Dá contraste.
5. Aumenta a vivacidade das cores apagadas (vibrance), mexendo pouco nas que já são fortes, como abóbora, cenoura e banana.
6. Aplica nitidez.
7. Recorta no formato pedido, com o prato onde você mandar (`--foco`).

Não faz: remover objetos, trocar fundo, colocar texto, moldura, logo, emoji ou cores da marca na foto. Para peças com texto/arte, siga o `desing_doval.md` (só as cores da marca, fontes Koara/Ballo 2/Quicksand, ícones e patterns das pastas, nunca emojis).

## Formatos

| Formato | Tamanho | Uso |
|---|---|---|
| `cardapio` | gera as duas abaixo, com o mesmo tratamento | **cardápio digital: use este** |
| `card` | 1200×900 (4:3), JPG < 400 KB, nome sem `_doval` | foto do **card**: fechada e recortada no prato |
| `ampliada` | foto inteira, sem recorte, lado maior até 1800px, JPG < 560 KB, nome termina em `-ampliada` | foto que abre quando o cliente **clica** no card |
| `original` | proporção da foto, lado maior até 2400px | arquivo, `fotos_refinadas` |
| `feed` | 1080×1350 (4:5) | post do Instagram |
| `quadrado` | 1080×1080 | destaques, iFood |
| `stories` | 1080×1920 | stories/reels |

Se a foto é para o cardápio/site, use `cardapio`: cada prato tem duas fotos, a do card (fechada) e a ampliada (completa, só com o tratamento). Se o Lucas não disser, pergunte para onde vai a foto; se ele não souber, entregue `cardapio` + `original`.

## O espaço da foto no card do cardápio

No site (`doval-site/index.html`) a foto ocupa o topo do card em **proporção 4:3**, com `object-fit: cover` centralizado. O card tem de ~240 a ~400 px de largura (no celular, a tela toda). Por isso a skill já entrega em 4:3, e o site não corta mais nada.

- **Selo (etiqueta)**: pílula branca no **canto superior esquerdo** ("Mais pedida", "Low carb"...). No arquivo de 1200×900, ela ocupa mais ou menos a faixa x 40–640, y 40–160. Nada importante da comida pode ficar ali. No comparativo do formato `card`, essa área aparece marcada com um contorno vermelho (o contorno só existe no comparativo, não na foto final).
- **Lupa**: círculo branco no **canto inferior direito** (36 px), que abre a foto ampliada. No arquivo de 1200×900 fica mais ou menos em x 1020–1170, y 720–870, também marcado no comparativo. Pode cobrir a borda do pote ou um cantinho da comida, mas não a parte principal.
- **Enquadramento**: a foto do card é **fechada**: a comida é a protagonista e ocupa quase todo o quadro, levemente **abaixo do centro**; o cenário completo aparece na ampliada. Marmita: pote inteiro no quadro. Bolo comprido na diagonal (banana bread): pode cortar as pontinhas, porque inteiro ele fica pequeno no card. A borda do prato pode ser cortada.
- As fotos em pé (3:4) perdem bastante altura no corte 4:3: use `--foco` para escolher a faixa certa da foto.

### Como escolher o `--foco`

`--foco x,y` diz onde fica o centro do recorte, em frações da foto original (0,0 = canto superior esquerdo; 1,1 = canto inferior direito).
- Olhe a foto e estime onde está o centro do pote/bolo. Como ponto de partida, use esse ponto com `y` reduzido em ~0.05 a 0.08: o recorte sobe e a comida desce no quadro, saindo de baixo do selo.
- Valores que funcionaram nas fotos de referência: carne moída no prato azul `--foco 0.47,0.55 --zoom 1.08`; escondidinho no prato azul `--foco 0.47,0.49 --zoom 1.1`; frango no prato azul `--foco 0.5,0.51`; escondidinho na tábua `--foco 0.5,0.55 --zoom 1.4`; banana bread `--foco 0.61,0.5 --zoom 1.4`; bolo Ninho com uvas `--foco 0.5,0.585 --calor 2`; bolo de nozes `--foco 0.5,0.405`; fraldinha `--foco 0.5,0.585` (pote muito em pé: a pontinha de cima e de baixo fica cortada no card).
- `--zoom 1.1` aproxima 10% (use quando sobra muita mesa). Zoom abaixo de 1 não existe: não dá para "afastar" além da foto.
- Confira cada foto no comparativo e ajuste `--foco` foto a foto. É normal cada uma ter um valor diferente.

## Passo a passo

1. **Achar as fotos.**
   - Se ele anexou as fotos na conversa, use-as.
   - Se a pasta `doval` do computador estiver conectada: as fotos cruas ficam em `doval/fotos_raw/`; as tratadas vão para `doval/fotos_refinadas/` (formato `original`) e `doval/fotos_refinadas/card/` (card) e `doval/fotos_refinadas/ampliada/` (ampliada). Pergunte quais fotos tratar se ele não disser. Nunca sobrescreva nem apague os originais.
   - Se nada estiver disponível, peça para ele anexar as fotos.
2. **Dar nome**: para `cardapio`, o nome do arquivo de entrada vira o nome final. Copie a foto para o diretório de trabalho já com o nome do prato em minúsculas, sem acento nem espaço (`frango-ao-curry.jpg`), igual ao padrão do site. Se o prato já tem foto no site, use um **nome novo** (`frango-ao-curry-2.jpg`): com o mesmo nome, quem já visitou o site pode ver a antiga por até 7 dias.
3. **Preparar o ambiente:** `pip install pillow pillow-heif numpy --break-system-packages -q`
4. **Salvar o script** abaixo como `tratar.py` (num diretório de trabalho, separado das fotos).
5. **Rodar** uma foto por vez quando for `cardapio` ou `card` (cada uma tem o seu foco):
   ```
   python3 tratar.py frango-ao-curry.jpg --saida tratadas --formato cardapio --foco 0.5,0.52 --comparativo antes_depois_frango.png
   ```
   Sai `frango-ao-curry.jpg` (card) e `frango-ao-curry-ampliada.jpg` (completa). O comparativo mostra: card antes, card depois, completa antes, completa depois.
   Para os outros formatos, pode rodar várias de uma vez.
6. **Conferir você mesmo** o comparativo (ver lista abaixo) e ajustar o foco antes de mostrar.
7. **Mostrar o antes/depois** e perguntar se está bom.
8. **Ajustar se ele pedir**, rodando de novo com:
   - "mais leve / menos editado" → `--intensidade 0.6` ; "bem sutil" → `--intensidade 0.4` (de 0 a 1; 0 = só converte e recorta)
   - "mais quentinho" → `--calor 1` ; "menos amarelado" → `--calor -1` (de -2 a 2)
   - "mais claro" → `--brilho 1` ; "mais escuro" → `--brilho -1` (de -2 a 2)
   - "corta mais pra cima/baixo/lado" → mude `--foco`; "mais perto" → `--zoom 1.1`
   Mude um ajuste por vez, sempre pequeno.
9. **Entregar**: com a pasta conectada, grave nas pastas do passo 1; senão, envie os arquivos na conversa. Diga em uma frase quantas fotos foram tratadas e onde estão.

**Colocar a foto no site não é parte desta skill.** Se o Lucas quiser trocar a foto de um prato no cardápio, isso segue o `doval-site/CLAUDE.md`: a foto vai para `doval-site/assets/fotos/`, o `cardapio.json` é atualizado (`foto` = card, `fotoAmpliada` = completa), a checagem roda e a troca vai por pull request para o Victor aprovar (skill `abrir-pr`). Nunca publique direto.

## Antes de entregar, confira

- A foto está na orientação certa.
- O prato/pote branco está branco (levemente quente), não amarelo nem azul.
- Abóbora, cenoura e arroz amarelo não ficaram laranja de "plástico"; se ficaram, use `--intensidade 0.7` ou `--calor -1`.
- Nada estourou (queijo ralado e pote com detalhe) nem ficou escuro demais (feijão preto e bolo de chocolate com textura).
- No `card`: a comida ocupa quase todo o quadro (se sobra muita mesa, pano ou prato, aumente o `--zoom`), o pote fica inteiro e nada importante fica dentro do contorno vermelho do selo.
- Verdes e azuis do cenário (prato verde, toalha azul) continuam com a cor real.
- Na `ampliada`: foto inteira, sem corte, com o mesmo tratamento do card.
- Arquivo do `card` com 1200×900 e menos de 400 KB; `ampliada` com menos de 560 KB (confira os KB que o script mostra).

Foto muito escura, tremida ou desfocada não se salva com tratamento: avise o Lucas com carinho e sugira refazer.

## Dicas para o Lucas fotografar (se ele perguntar ou se o recorte ficar apertado)

- Para o cardápio, deixe **espaço em volta do pote**, principalmente em cima: o card corta a foto em formato deitado e coloca um selo no canto de cima à esquerda. Na foto ampliada o cliente vê tudo, então deixe o cenário arrumado também.
- Foto deitada (horizontal) funciona melhor para o card; em pé, afaste um pouco o celular.
- Mantenha o cenário de sempre (prato azul e branco, tábua, cebola/cenoura/alho ao fundo): é o que deixa as fotos com a cara da doval.

## Script `tratar.py`

```python
#!/usr/bin/env python3
"""Tratamento leve de fotos da doval.
Uso: python3 tratar.py ENTRADA [ENTRADA...] --saida PASTA [--formato cardapio|card|ampliada|original|feed|quadrado|stories]
     [--foco x,y] [--zoom N]
     [--intensidade 0.0-1.0] [--calor N] [--brilho N]
"""
import argparse, os, sys
import numpy as np
from PIL import Image, ImageOps, ImageFilter, ImageDraw

try:
    import pillow_heif
    pillow_heif.register_heif_opener()
except ImportError:
    pass

# cardapio = card (fechado) + ampliada (completa), com o mesmo tratamento
AMPLIADA_LADO = 1800
FORMATOS = {"card": (1200, 900), "feed": (1080, 1350), "quadrado": (1080, 1080), "stories": (1080, 1920)}


def tratar(im, k=1.0, calor=0.0, brilho=0.0):
    a = np.asarray(im.convert("RGB")).astype(np.float32) / 255.0

    # 1) balanço de branco pelas áreas claras e neutras (prato, pote, toalha):
    #    leva o branco para um branco levemente quente (nunca azulado)
    px = a.reshape(-1, 3)
    mx, mn = px.max(1), px.min(1)
    L = px.mean(1)
    sat = (mx - mn) / np.maximum(mx, 1e-4)
    claros = L > np.percentile(L, 70)
    # branco de verdade: amarelado pela luz de casa, ou quase neutro (sombra, luz do dia).
    # prato verde e toalha/parede azul não contam
    quente = (sat < 0.25) & (px[:, 0] >= px[:, 1] * 0.98) & (px[:, 1] >= px[:, 2] * 0.98)
    neutro = (sat < 0.12) & (L > 0.75) & (px[:, 1] <= np.maximum(px[:, 0], px[:, 2]) * 1.01)
    branco = quente | neutro
    neutros = px[claros & branco]
    if len(neutros) > max(500, 0.02 * len(px)):  # sem branco suficiente na foto, não mexe na cor
        med = neutros.mean(0)
        alvo = med.mean() * np.array([1.03, 1.0, 0.95])  # branco "feito com afeto"
        ganho = np.clip(1 + (alvo / np.maximum(med, 1e-4) - 1) * 0.75 * k, 0.88, 1.12)
        a = a * (ganho / ganho.mean() * 1.0)

    # 2) níveis automáticos (corta 0.5% nas pontas)
    L = a.mean(2)
    lo, hi = np.percentile(L, [0.5, 99.5])
    esticado = (a - lo) / max(hi - lo, 1e-4)
    a = a + (esticado - a) * min(0.9 * k, 1.0)

    # 3) levantar sombras de leve
    L = np.clip(a.mean(2, keepdims=True), 0, 1)
    a = a + (1 - L) ** 3 * 0.10 * k

    # 4) brilho opcional (gama)
    if brilho:
        a = np.clip(a, 0, 1) ** (1 / (1 + brilho * 0.1))

    # 5) contraste em curva S bem suave
    a = np.clip(a, 0, 1)
    s = 0.30 * k
    a = a + s * a * (1 - a) * (2 * a - 1)  # claros sobem, escuros descem, pontas fixas
    a = np.clip(a, 0, 1)

    # 6) calor extra só se pedido (--calor)
    w = (calor * 0.012) * k
    a[..., 0] *= 1 + w
    a[..., 2] *= 1 - w

    # 7) vibrance: satura mais o que está pouco saturado (protege pele/vermelhos)
    a = np.clip(a, 0, 1)
    mx, mn = a.max(2, keepdims=True), a.min(2, keepdims=True)
    sat = (mx - mn) / np.maximum(mx, 1e-4)
    cinza = a.mean(2, keepdims=True)
    fator = 1 + (0.04 + 0.30 * (1 - sat)) * k
    a = cinza + (a - cinza) * fator

    out = Image.fromarray((np.clip(a, 0, 1) * 255 + 0.5).astype(np.uint8))
    # 8) nitidez leve
    return out.filter(ImageFilter.UnsharpMask(radius=1.5, percent=int(75 * k), threshold=3))


def recortar(im, formato, foco=(0.5, 0.5), zoom=1.0):
    if formato not in FORMATOS:
        return im
    W, H = FORMATOS[formato]
    # maior janela na proporção do formato, reduzida pelo zoom, centrada no foco
    r = W / H
    cw = min(im.width, im.height * r) / max(zoom, 1.0)
    ch = cw / r
    cx = min(max(foco[0] * im.width, cw / 2), im.width - cw / 2)
    cy = min(max(foco[1] * im.height, ch / 2), im.height - ch / 2)
    box = (int(cx - cw / 2), int(cy - ch / 2), int(cx + cw / 2), int(cy + ch / 2))
    return im.crop(box).resize((W, H), Image.LANCZOS)


def salvar(im, destino, q, limite=None):
    im.save(destino, "JPEG", quality=q, optimize=True, progressive=True)
    while limite and os.path.getsize(destino) > limite and q > 70:
        q -= 4
        im.save(destino, "JPEG", quality=q, optimize=True, progressive=True)
    print("ok", destino, im.size, f"{os.path.getsize(destino)//1000} KB")


def marcar(im):
    """contornos (só no comparativo) do que o site coloca por cima da foto do card"""
    m = im.copy()
    d = ImageDraw.Draw(m)
    d.rounded_rectangle((40, 40, 640, 160), radius=60, outline=(238, 62, 16), width=8)  # selo
    d.ellipse((1020, 720, 1170, 870), outline=(238, 62, 16), width=8)  # lupa
    return m


def main():
    p = argparse.ArgumentParser()
    p.add_argument("entradas", nargs="+")
    p.add_argument("--saida", required=True)
    p.add_argument("--formato", default="original", choices=["original", "cardapio", "ampliada", *FORMATOS])
    p.add_argument("--intensidade", type=float, default=1.0)
    p.add_argument("--calor", type=float, default=0.0, help="-2 a +2")
    p.add_argument("--brilho", type=float, default=0.0, help="-2 a +2")
    p.add_argument("--max-lado", type=int, default=2400)
    p.add_argument("--foco", default="0.5,0.5", help="x,y de 0 a 1: onde está o prato (padrão: centro)")
    p.add_argument("--zoom", type=float, default=1.0, help="1 = o máximo da foto; 1.2 aproxima 20%%")
    p.add_argument("--comparativo", help="salva antes/depois nesse arquivo")
    x = p.parse_args()
    foco = tuple(float(v) for v in x.foco.split(","))
    os.makedirs(x.saida, exist_ok=True)
    pares = []
    for f in x.entradas:
        try:
            im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
        except Exception as e:
            print(f"ERRO {f}: {e}", file=sys.stderr)
            continue
        if x.formato == "original" and max(im.size) > x.max_lado:
            im.thumbnail((x.max_lado, x.max_lado), Image.LANCZOS)
        tratada = tratar(im, x.intensidade, x.calor, x.brilho)
        base = os.path.splitext(os.path.basename(f))[0]
        linha = []
        if x.formato in ("cardapio", "card"):
            card = recortar(tratada, "card", foco, x.zoom)
            salvar(card, os.path.join(x.saida, base + ".jpg"), 86, 380_000)
            linha += [recortar(im, "card", foco, x.zoom), marcar(card)]
        if x.formato in ("cardapio", "ampliada"):
            grande = tratada.copy()
            grande.thumbnail((AMPLIADA_LADO, AMPLIADA_LADO), Image.LANCZOS)
            salvar(grande, os.path.join(x.saida, base + "-ampliada.jpg"), 84, 560_000)
            linha += [im, grande]
        if not linha:
            novo = recortar(tratada, x.formato, foco, x.zoom)
            salvar(novo, os.path.join(x.saida, base + "_doval.jpg"), 90)
            linha = [recortar(im, x.formato, foco, x.zoom), novo]
        pares.append(linha)
    if x.comparativo and pares:
        h = 420
        linhas = []
        for imgs in pares:
            imgs = [a.resize((int(a.width * h / a.height), h)) for a in imgs]
            c = Image.new("RGB", (sum(a.width + 12 for a in imgs) - 12, h), (241, 241, 241))
            px = 0
            for a in imgs:
                c.paste(a, (px, 0)); px += a.width + 12
            linhas.append(c)
        W = max(l.width for l in linhas)
        folha = Image.new("RGB", (W, sum(l.height + 12 for l in linhas)), (241, 241, 241))
        y = 0
        for l in linhas:
            folha.paste(l, (0, y)); y += l.height + 12
        folha.save(x.comparativo, quality=85)
        print("comparativo", x.comparativo)


if __name__ == "__main__":
    main()
```
