# Please execute this on a Raspberry Pi
echo "Update MagicMirror"
npm run install-mm
echo "Update MagicMirror modules"
cd modules
source install-or-update.sh
