#!/bin/bash
set -e # abort any time an error occurred

# List of modules and their install commands
declare -A modules=(
  [MMM-PublicTransportHafas]="npm ci"
  [MMM-Pir]="npm install"
  [MMM-Bring]="npm install"
  [mmm-systemtemperature]="npm install"
  [MMM-Hue-Controller-2]="npm ci"
  [MMM-Cinestar-FDW]="npm install"
  [MMM-Screencast]="npm install"
)

for dir in "${!modules[@]}"; do
  echo "Installing dependencies in $dir..."
  (cd "$dir" && ${modules[$dir]} --no-audit)
done


