@echo off
call native-init.bat
echo.
if "%1"=="h"     goto HELP
if "%1"=="-h"    goto HELP
if "%1"=="/h"    goto HELP
if "%1"=="/?"    goto HELP
if "%1"=="-help" goto HELP
if "%1"=="/help" goto HELP
goto BEGIN

:HELP
	echo Initializes the react-native bat file system.
	echo. 
	echo If no parameters are specified then all native bat commands are listed and a cd to project folder
	goto ENDIR
:BEGIN
  ::LIST avaialeble commands
  cd %NATIVE%
  echo ----------------------------  Skipanir sem til eru  ---------------------------- 
  dir *.bat /w|find "Volume" /V|find "Directory of" /V|find "File(s) " /V|find "Dir(s) " /V
  echo.
  echo.
  echo --------------------------------------------------------------------------------
  cd ..\projects
  @if "%1x"=="x" goto DIR
    cd %1
    echo skrifa "code ." til að opna þetta project í Visual Studio Code
   
:DIR
	dir
	goto ENDIR

:ENDIR
