# Please execute this on a Raspberry Pi
echo "Update MagicMirror"
git reset --hard
git pull || exit 1
npm run install-mm
echo "Update MagicMirror modules"
cd modules || exit 1
source install-or-update.sh
