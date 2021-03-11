# Pomodoro Clock and To Do List mobile app

The app has a timer and list keeping feature. The idea is to create the tasks and start the timer. The timer cycles between 25 minutes productive time and 5 minutes break time.

## Requirements
- See package.json

## Run on local machine through wsl2
-  run on windows powershell
```
adb kill-server 
adb -a nodaemon server start
``` 
- run on wsl2 Bash terminal
```
expo start --tunnel
```
- If you see the message `Successfully ran adb reverse`, then everything worked
- Use qr to open on physical device or use link to open on android emulator

## Attribute
Thank you to Udemy's React Native - The Practical Guide [2021 Edition] course.
