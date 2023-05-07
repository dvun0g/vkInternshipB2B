#!/bin/bash
# Скрипт дает разрешение всем скриптам *.sh разрешение быть исполняемыми (CI/CD)

echo "Start permissions script"

chmod +x ./linters.sh
chmod +x ./build.sh
chmod +x ./installDependencies.sh
