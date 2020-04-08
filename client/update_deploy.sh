# NOTE: This does not deploy env files. 
# This does not delete any existing env files, but 
# they must be done manually on 1st deploy.

# GET LATEST CODE
cd /var/www/temp_builds/gina/personal-site
git pull

# BUILD VUE JS WEBAPP
cd /var/www/temp_builds/gina/personal-site/client
npm install
npm run build:prod

# COPY WEBAPP BUILD TO NGINX SERVING FOLDER
rm -rf /var/www/ginaleeshin.com/public_html/
mkdir /var/www/ginaleeshin.com/public_html/
cp -a /var/www/temp_builds/gina/personal-site/client/dist/. /var/www/ginaleeshin.com/public_html/
sudo systemctl restart nginx

# INSTALL API
cd /var/www/temp_builds/gina/personal-site/server
npm install

# COPY API TO NGINX SERVING FOLDER
rm -rf /var/www/ginaleeshin.com/api/
mkdir /var/www/ginaleeshin.com/api/
cp -a /var/www/temp_builds/gina/personal-site/server/. /var/www/ginaleeshin.com/api/

# RUN API W/ PM2
cd /var/www/ginaleeshin.com/api/
pm2 restart gina_contact_api
pm2 list
