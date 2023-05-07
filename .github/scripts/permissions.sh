#!/bin/bash
# Скрипт дает разрешение всем скриптам *.sh разрешение быть исполняемыми (CI/CD)

echo "Start permissions script"

chmod +x .github/scripts/linters.sh
chmod +x .github/scripts/build.sh
chmod +x .github/scripts/installDependencies.sh
