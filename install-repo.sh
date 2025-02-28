npm run install-mm
cd modules

(cd MMM-PublicTransportHafas && npm ci) && (cd MMM-Pir && npm install) && (cd MMM-Bring && npm install) && (cd mmm-systemtemperature && npm install) && (cd MMM-Hue-Controller-2 && npm ci)
