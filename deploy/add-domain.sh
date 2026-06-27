#!/bin/bash
# Запускать после покупки домена: bash add-domain.sh youtubeclub.ru
# Устанавливает SSL-сертификат через Let's Encrypt

DOMAIN=$1
if [ -z "$DOMAIN" ]; then
  echo "Использование: bash add-domain.sh ВАШ_ДОМЕН"
  exit 1
fi

set -e

apt-get install -y certbot python3-certbot-nginx

# Обновляем nginx конфиг с доменом
sed -i "s/server_name _;/server_name $DOMAIN www.$DOMAIN;/" /etc/nginx/sites-available/youtube-club
nginx -t && systemctl reload nginx

# Получаем SSL сертификат
certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos -m admin@$DOMAIN

echo "=== Готово! Сайт доступен по https://$DOMAIN ==="
