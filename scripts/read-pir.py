#!/usr/bin/env python

from time import sleep
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)           # Set's GPIO pins to BCM GPIO numbering
INPUT_PIN = 6
GPIO.setup(INPUT_PIN, GPIO.IN)

while True:
    if GPIO.input(INPUT_PIN):
        print('3.3')
    else:
        print('0')
    sleep(0.5)


