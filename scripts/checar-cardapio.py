#!/usr/bin/env python3
"""Confere o cardapio.json antes de publicar.

Uso (dentro da pasta doval-site):  python3 scripts/checar-cardapio.py
Sai com erro (código 1) se encontrar algo que quebraria o site.
"""
import json, os, re, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARQ = os.path.join(RAIZ, "cardapio.json")
erros, avisos = [], []

try:
    with open(ARQ, encoding="utf-8") as f:
        dados = json.load(f)
except FileNotFoundError:
    sys.exit("ERRO: cardapio.json não encontrado na raiz do site.")
except json.JSONDecodeError as e:
    sys.exit(f"ERRO: cardapio.json não é um JSON válido (linha {e.lineno}, coluna {e.colno}): {e.msg}")

pratos = dados.get("semana") if isinstance(dados, dict) else None
if not isinstance(pratos, list):
    sys.exit('ERRO: o cardapio.json precisa ter uma lista em "semana".')
if not pratos:
    erros.append('A lista "semana" está vazia: o cardápio da semana vai aparecer sem nenhum prato.')

ids = set()
for i, p in enumerate(pratos, 1):
    nome = p.get("nome") or f"prato {i}"
    tag = f'[{i}] {nome}'
    pid = p.get("id")
    if not pid or not re.fullmatch(r"[a-z0-9-]+", str(pid)):
        erros.append(f'{tag}: "id" precisa existir e ter só letras minúsculas, números e hífen (ex.: "frango-curry").')
    elif pid in ids:
        erros.append(f'{tag}: "id" repetido ({pid}). Cada prato precisa de um id diferente.')
    ids.add(pid)
    if not p.get("nome"):
        erros.append(f'{tag}: falta "nome".')
    status = p.get("status")
    if status not in ("disponivel", "em-breve"):
        erros.append(f'{tag}: "status" precisa ser "disponivel" ou "em-breve".')
    preco = p.get("preco")
    if preco is not None and (isinstance(preco, bool) or not isinstance(preco, (int, float)) or preco <= 0):
        erros.append(f'{tag}: "preco" precisa ser um número (ex.: 35 ou 32.5) ou null. Sem "R$", sem aspas.')
    if status == "disponivel" and preco is None:
        avisos.append(f'{tag}: sem preço — vai aparecer "Preço a confirmar" e entrar na lista como "a combinar".')
    foto = p.get("foto")
    if foto:
        if not re.fullmatch(r"assets/fotos/[a-z0-9-]+\.(jpg|jpeg|png|webp)", foto):
            erros.append(f'{tag}: "foto" precisa ser assets/fotos/nome-sem-acento.jpg (minúsculas, sem espaço).')
        caminho = os.path.join(RAIZ, foto)
        if not os.path.isfile(caminho):
            erros.append(f'{tag}: a foto {foto} não existe na pasta.')
        elif os.path.getsize(caminho) > 600_000:
            avisos.append(f'{tag}: a foto tem {os.path.getsize(caminho)//1000} KB. Reduza pra até 1200px de largura (ideal < 400 KB).')
        if not p.get("fotoAlt"):
            avisos.append(f'{tag}: falta "fotoAlt" (descrição da foto pra acessibilidade).')
        ampliada = p.get("fotoAmpliada")
        if ampliada:
            if not re.fullmatch(r"assets/fotos/[a-z0-9-]+\.(jpg|jpeg|png|webp)", ampliada):
                erros.append(f'{tag}: "fotoAmpliada" precisa ser assets/fotos/nome-sem-acento.jpg (minúsculas, sem espaço).')
            cam = os.path.join(RAIZ, ampliada)
            if not os.path.isfile(cam):
                erros.append(f'{tag}: a foto ampliada {ampliada} não existe na pasta.')
            elif os.path.getsize(cam) > 700_000:
                avisos.append(f'{tag}: a foto ampliada tem {os.path.getsize(cam)//1000} KB. Reduza pra até 1800px no lado maior (ideal < 560 KB).')
    elif status == "disponivel":
        avisos.append(f'{tag}: sem foto — vai aparecer o desenho com "Foto a caminho".')

for a in avisos:
    print("AVISO:", a)
for e in erros:
    print("ERRO:", e)
if erros:
    sys.exit(1)
print(f"OK: {len(pratos)} prato(s) no cardápio da semana.")
