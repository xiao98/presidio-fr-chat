# presidio-fr chat

Fenêtre de conversation de presidio-fr : un fork de [NextChat](https://github.com/ChatGPTNextWeb/NextChat) (MIT) rebaptisé et verrouillé sur la passerelle locale [presidio-fr-core](https://github.com/xiao98/presidio-fr-core). Le client ne parle jamais à un fournisseur directement : toutes ses requêtes passent par `http://127.0.0.1:8787`, où les données personnelles françaises sont masquées avant l'envoi et restaurées dans la réponse. Les clés API des fournisseurs vivent dans la passerelle, pas ici.

```
presidio-fr chat ──► presidio-fr-core (127.0.0.1:8787) ──masque──► Mistral / OpenAI / Anthropic
```

## Ce qui change par rapport à NextChat

- Nom, icônes, titre, manifeste, identifiant Tauri (`fr.presidio.chat`).
- `OPENAI_BASE_URL` = la passerelle locale ; « point d'accès personnalisé » activé par défaut, clé factice.
- Le bloc « NextChat cloud » des réglages est retiré ; l'auto-updater Tauri est désactivé (les mises à jour passent par les releases GitHub).
- CI : builds Windows et Linux seulement (pas de certificat Apple pour l'instant).

Tout le reste (conversations, masques, plugins, MCP, export) est NextChat tel quel ; `git remote upstream` pointe sur le dépôt d'origine pour récupérer leurs correctifs.

## Utiliser

1. Démarrer la passerelle : `cd presidio-fr-core && npm start` (panneau sur http://127.0.0.1:8787/ pour saisir les clés fournisseur).
2. Lancer presidio-fr chat (installateur dans les releases, ou `yarn dev` pour la version web).
3. Dans les réglages, le point d'accès est déjà `http://127.0.0.1:8787` ; choisir un modèle que le fournisseur configuré connaît (`mistral-small-latest`, `gpt-4o-mini`, `claude-…`).

## Développer

```bash
corepack enable && yarn install
yarn dev            # web, http://localhost:3000
yarn build          # vérification de compilation
yarn app:build      # installateur Tauri (nécessite Rust) — sinon : Actions → app → Run workflow
```

Licence MIT, comme NextChat ; voir `LICENSE`.
