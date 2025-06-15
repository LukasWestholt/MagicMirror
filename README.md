# ![MagicMirror²: The open source modular smart mirror platform.](.github/header.png)

smartmirror.local
username: lukas

# Fresh install

Install a fresh OS via Raspberry Pi Imager (64 Bit version) then:
```
sudo apt install screen
screen -S freshinstall
sudo apt update
sudo apt upgrade -y
sudo apt install -y git curl
git clone --depth 3 --recurse-submodules https://github.com/LukasWestholt/MagicMirror.git
cd MagicMirror
bash scripts/raspi-install.sh
```

## How to restart MagicMirror

Just execute:
```
pm2 restart mm
```

## How to update

Just execute:
```
cd MagicMirror/
bash scripts/raspi-update.sh
```

# Development custom modules

## Local testing in git bash
```
npm run install-mm
export MM_CONFIG_FILE=config/local_config.js
npm run server
```

## Checkout new version of module
```
cd modules/<module>
git fetch
git checkout origin/main
```

## Update MM and all modules
```
bash scripts/admin-repo-updater.sh
```

## Change remote of a module
```
# Edit in .gitmodules 
git submodule sync --recursive
bash scripts/admin-repo-updater.sh
```

## Add a new module

```
cd modules
git submodule add ...
# git commit and push
# Add it also to modules/install-or-update.sh and config/config.js.template
# On Raspberry execute: scripts/raspi-update.sh
```

## Some example modules

```
https://github.com/GaryLChew/MMM-1-Second-A-Day
https://github.com/szech/mmm-uk-pollen-forecast
https://github.com/basti0001/MMM-iHaveBeenThere
https://github.com/ryanzor/MMM-AirbarHelper # Outdated, needs hardware
https://github.com/retroflex/MMM-Overwatch
https://github.com/ow-api/ovrstat
https://github.com/idoodler/MMM-RPI-LED
https://github.com/RaxoCoding/MMM-OTIS
https://github.com/nout-kleef/MMM-Chess-Daily
https://github.com/njwilliams/MMM-Faces
https://github.com/ngnijland/MMM-text-clock
https://github.com/splattner/MMM-bernwordclock
https://github.com/bogomips/MMM-CoupEscooters
https://github.com/grenagit/MMM-VigiCrues
https://github.com/ottopaulsen/MMM-Tibber
https://github.com/MichMich/MMM-WatchDog
https://github.com/mykle1/MMM-HumanClock
https://github.com/jancalve/MMM-flick-gestures
https://github.com/mykle1/MMM-PopulationClock
https://github.com/jboucly/MMM-Pages-Screencast
https://github.com/Pip1405/MMM-FearAndGreedIndex
https://github.com/buxxi/MMM-RouterClients
https://github.com/thomo/MMM-kudos
https://github.com/mumblebaj/MMM-PhilipsHue
https://github.com/skuethe/MMM-Spotify
https://github.com/uxigene/MMM-Chart
https://github.com/kevinatown/MMM-Screencast
https://github.com/Tueti/MMM-MovieListings
https://github.com/MMRIZE/MMM-GroveGestures
https://github.com/lavolp3/MMM-AVStock
https://github.com/CFenner/MMM-AirQuality
https://github.com/ChrisF1976/MMM-Fireworks
https://github.com/jalibu/MMM-Jast
https://github.com/PierreGode/MMM-next-episode
https://github.com/jalibu/MMM-NINA
https://github.com/XppaiCyberr/MMM-NounsAuction
https://github.com/cgillinger/MMM-WeatherEffects
https://github.com/DreamyChloe/MMM-HueControl
https://github.com/alanshen111/MMM-Facts
https://github.com/Dennis-Rosenbaum/MMM-Quiz
https://github.com/gertperdZA/MMM-Afvalwijzer
https://github.com/dathbe/MMM-EarthquakeAlerts
https://github.com/KristjanESPERANTO/MMM-ApothekenNotdienst
```

## Build these TODO
```
Müll Kalender
Mehr Haltestellen. Weniger trams
```

# Other things

Docker install: https://docs.docker.com/engine/install/debian/ by curl get.docker.com

GPIO 22

Raspbian GNU/Linux 11 (bullseye). UPDATED!


### PIR module
- https://github.com/bugsounet/MMM-Pir

or

- https://github.com/Tom-Hirschberger/MMM-Screen-Powersave-Notification
- https://github.com/Tom-Hirschberger/MMM-GPIO-Notifications


Pins https://pinout.xyz/

Id of AnkiConnect: 2055492159


xrandr --auto



<p style="text-align: center">
  <a href="https://choosealicense.com/licenses/mit">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
 </a>
 <img src="https://img.shields.io/github/actions/workflow/status/magicmirrororg/magicmirror/automated-tests.yaml" alt="GitHub Actions">
 <img src="https://img.shields.io/github/check-runs/magicmirrororg/magicmirror/master" alt="Build Status">
 <a href="https://github.com/MagicMirrorOrg/MagicMirror">
  <img src="https://img.shields.io/github/stars/magicmirrororg/magicmirror?style=social" alt="GitHub Stars">
 </a>
</p>

**MagicMirror²** is an open source modular smart mirror platform. With a growing list of installable modules, the **MagicMirror²** allows you to convert your hallway or bathroom mirror into your personal assistant. **MagicMirror²** is built by the creator of [the original MagicMirror](https://michaelteeuw.nl/tagged/magicmirror) with the incredible help of a [growing community of contributors](https://github.com/MagicMirrorOrg/MagicMirror/graphs/contributors).

MagicMirror² focuses on a modular plugin system and uses [Electron](https://www.electronjs.org/) as an application wrapper. So no more web server or browser installs necessary!

## Documentation

For the full documentation including **[installation instructions](https://docs.magicmirror.builders/getting-started/installation.html)**, please visit our dedicated documentation website: [https://docs.magicmirror.builders](https://docs.magicmirror.builders).

## Links

- Website: [https://magicmirror.builders](https://magicmirror.builders)
- Documentation: [https://docs.magicmirror.builders](https://docs.magicmirror.builders)
- Forum: [https://forum.magicmirror.builders](https://forum.magicmirror.builders)
  - Technical discussions: <https://forum.magicmirror.builders/category/11/core-system>
- Discord: [https://discord.gg/J5BAtvx](https://discord.gg/J5BAtvx)
- Blog: [https://michaelteeuw.nl/tagged/magicmirror](https://michaelteeuw.nl/tagged/magicmirror)
- Donations: [https://magicmirror.builders/#donate](https://magicmirror.builders/#donate)

## Contributing Guidelines

Contributions of all kinds are welcome, not only in the form of code but also with regards to

- bug reports
- documentation
- translations

For the full contribution guidelines, check out: [https://docs.magicmirror.builders/about/contributing.html](https://docs.magicmirror.builders/about/contributing.html)

## Enjoying MagicMirror? Consider a donation!

MagicMirror² is Open Source and free. That doesn't mean we don't need any money.

Please consider a donation to help us cover the ongoing costs like webservers and email services.
If we receive enough donations we might even be able to free up some working hours and spend some extra time improving the MagicMirror² core.

To donate, please follow [this](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=G5D8E9MR5DTD2&source=url) link.

<p style="text-align: center">
  <a href="https://forum.magicmirror.builders/topic/728/magicmirror-is-voted-number-1-in-the-magpi-top-50"><img src="https://magicmirror.builders/img/magpi-best-watermark-custom.png" width="150" alt="MagPi Top 50"></a>
</p>
