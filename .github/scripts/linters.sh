#!/bin/bash
# Скрипт запускает линтеры (CI/CD)

echo "Start linters script"

pnpm eslint --fix
pnpm stylelint --fix
