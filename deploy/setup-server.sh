#!/bin/bash
# Запускать на сервере Hetzner от root: bash setup-server.sh

set -e

echo "=== Обновление системы ==="
apt-get update && apt-get upgrade -y

echo "=== Установка nginx ==="
apt-get install -y nginx

echo "=== Создание папки сайта ==="
mkdir -p /var/www/youtube-club
chown -R www-data:www-data /var/www/youtube-club

echo "=== Настройка nginx ==="
cp /tmp/nginx.conf /etc/nginx/sites-available/youtube-club
ln -sf /etc/nginx/sites-available/youtube-club /etc/nginx/sites-enabled/youtube-club
rm -f /etc/nginx/sites-enabled/default

nginx -t && systemctl reload nginx
systemctl enable nginx

echo ""
echo "=== Настройка SSH-ключа для деплоя ==="
# Создаём отдельного пользователя для деплоя
useradd -m -s /bin/bash deployer || true
mkdir -p /home/deployer/.ssh
chmod 700 /home/deployer/.ssh

echo ""
echo ">>> СЛЕДУЮЩИЙ ШАГ: добавьте публичный SSH-ключ в /home/deployer/.ssh/authorized_keys"
echo ">>> Команда на вашем компьютере: cat ~/.ssh/id_rsa.pub"
echo ""

# Права на папку сайта для deployer
chown -R deployer:deployer /var/www/youtube-club

echo "=== Готово! Сервер настроен. ==="
echo "Сайт будет доступен по адресу: http://204.168.218.30"
