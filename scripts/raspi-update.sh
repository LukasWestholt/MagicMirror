#!/bin/bash
set -e # abort any time an error occurred
# Please execute this on a Raspberry Pi
echo "Deactivate MagicMirror"
pm2 stop mm
echo "Update MagicMirror"
git reset --hard
git pull --recurse-submodules
npm run install-mm
echo "Update MagicMirror modules"
cd modules
source install-or-update.sh
echo "Start MagicMirror"
pm2 start mm
