# Install node, see https://github.com/nodesource/distributions
curl -fsSL https://deb.nodesource.com/setup_23.x -o nodesource_setup.sh
sudo -E bash nodesource_setup.sh
sudo apt-get install -y nodejs
node -v

# Install MagicMirror
npm run install-mm

# Install modules
cd modules
(cd MMM-PublicTransportHafas && npm ci) && (cd MMM-Pir && npm install) && (cd MMM-Bring && npm install) && (cd mmm-systemtemperature && npm install) && (cd MMM-Hue-Controller-2 && npm ci)

# autostart, see https://docs.magicmirror.builders/configuration/autostart.html
sudo npm install -g pm2
pm2 startup

cd ~
echo -e "cd ./MagicMirror\nDISPLAY=:0 npm start" > mm.sh
chmod +x mm.sh
pm2 start mm.sh
pm2 save
# You can now use pm2 {restart|stop|logs|show} mm


