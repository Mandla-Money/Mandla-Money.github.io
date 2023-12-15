# Mandla Money Docs

This repository contains the documentation for Mandla Money available at https://mandla-money.github.io/.

## Setup

The documentation is hosted via GitHub pages and has a GitHub workflow set to deploy the site when you push to the `main` branch.

### Local setup

Clone the repository.

```bash
git clone git@github.com:Mandla-Money/Mandla-Money.github.io.git mandla-money-docs
cd mandla-money-docs
```

Install requirements.

```bash
npm install
```

Preview and develop the documentation with.

```bash
npm run docs:dev
```

Update the `config.mts` file in `docs/.vitepress` to add menu entries for new pages to the sidebar
