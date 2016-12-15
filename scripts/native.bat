@echo off
call initnative.bat
echo.
:BEGIN
  ::LIST avaialeble commands
  cd %NATIVE%
  echo ----------------------------  Skipanir sem til eru  ---------------------------- 
  dir *.bat /w|find "Volume" /V|find "Directory of" /V|find "File(s) " /V|find "Dir(s) " /V
  echo.
  echo.
  echo --------------------------------------------------------------------------------
  cd ..\projects
  @if "%1x"=="x" goto dir
    cd %1
    echo skrifa "code ." til að opna þetta project í Visual Studio Code
   
:dir
	dir
	goto ENDIR

:ENDIR
::SET NATIVE=