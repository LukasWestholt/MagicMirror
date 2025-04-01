# Install node, see https://github.com/nodesource/distributions
curl -fsSL https://deb.nodesource.com/setup_23.x -o nodesource_setup.sh
sudo -E bash nodesource_setup.sh
rm nodesource_setup.sh
sudo apt-get install -y nodejs
node -v

# Install MagicMirror, see https://docs.magicmirror.builders/getting-started/installation.html#manual-installation
npm run install-mm

# Install modules
cd modules
(cd MMM-PublicTransportHafas && npm ci) && (cd MMM-Pir && npm install) && (cd MMM-Bring && npm install) && (cd mmm-systemtemperature && npm install) && (cd MMM-Hue-Controller-2 && npm ci)

# autostart, see https://docs.magicmirror.builders/configuration/autostart.html#using-pm2
sudo npm install -g pm2
pm2 startup
# see logs and do manually

cd ~
echo -e "cd ./MagicMirror\nDISPLAY=:0 npm start" > mm.sh
chmod +x mm.sh
pm2 start mm.sh
pm2 save
# You can now use pm2 {restart|stop|logs|show} mm

## Hardware configuration
# See https://github.com/MagicMirrorOrg/MagicMirror/wiki/Configuring-the-Raspberry-Pi

sudo tee -a /etc/xdg/lxsession/LXDE-pi/autostart >> /dev/null <<EOF
@wlr-randr --output HDMI-A-1 --transform 90

@xset s noblank
@xset s off
EOF

sudo tee -a /etc/rc.local >> /dev/null <<EOF
/sbin/iwconfig wlan0 power off
exit 0
EOF

# Disable LEDs, see /boot/firmware/overlays/README
sudo cp /boot/firmware/config.txt /boot/firmware/config_backup.txt
sudo tee -a /boot/firmware/config.txt >> /dev/null <<EOF
# Disable the PWR/ACT LED on Raspberry Pi 3 Model B Rev 1.2
dtparam=pwr_led_trigger=none
dtparam=act_led_trigger=none
EOF
