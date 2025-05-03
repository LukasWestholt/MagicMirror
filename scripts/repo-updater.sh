# Please execute this on a Raspberry Pi
echo "Update MagicMirror"
git fetch upstream
git merge upstream/main
echo "Update MagicMirror modules"
git submodule update --init --recursive --remote
# or whitelisted:
# git submodule update --init --recursive --remote -- modules/MMM-Pir
echo "Commit MagicMirror module update"
git commit -m "Chore: Update some MMM"
git push

npm run install-mm
cd modules
source install-or-update.sh
