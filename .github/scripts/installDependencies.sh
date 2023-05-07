#!/bin/bash
# Скрипт устанавливает зависимости приложения (CI/CD)

echo "Start install dependencies script"

npm install -g pnpm@8
pnpm install --frozen-lockfile --ignore-scripts
