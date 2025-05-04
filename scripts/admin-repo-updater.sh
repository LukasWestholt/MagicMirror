# Please execute this on a Raspberry Pi
echo "Update MagicMirror"
git remote add upstream https://github.com/MagicMirrorOrg/MagicMirror.git
git fetch upstream
git merge upstream/master --no-edit
echo "Update MagicMirror modules"
git submodule update --init --recursive --remote
# or whitelisted:
# git submodule update --init --recursive --remote -- modules/MMM-Pir
echo "Commit MagicMirror module update"
git add modules/*
git commit -m "Chore: Update some MMM"
