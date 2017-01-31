@echo off
call native-init.bat
echo.
if "%1"=="h"     goto HELP
if "%1"=="-h"    goto HELP
if "%1"=="/h"    goto HELP
if "%1"=="/?"    goto HELP
if "%1"=="-help" goto HELP
if "%1"=="/help" goto HELP
if "%1"=="-emulator"     goto EMULATOR
if "%1"=="/emulator"     goto EMULATOR
if "%1"=="-new"     goto NEW
if "%1"=="/new"     goto NEW
if "%1"=="-update"  goto UPDATE
if "%1"=="/update"  goto UPDATE
if "%1"=="-run"     goto RUN
if "%1"=="/run"     goto RUN
if "%1"=="-coldrun"     goto COLDRUN
if "%1"=="/coldrun"     goto COLDRUN
goto BEGIN

:RUN
	@echo on
	react-native run-android
	@echo off
	goto ENDIR
:UPDATE
	echo starting emulator
	call  native-setup.bat /update
	goto ENDIR
:EMULATOR
	echo starting emulator 
	::start "" %ANDROID_HOME%\TOOLS\EMULATOR @Android_Accelerated_x86
	call native-emulator %2
	goto ENDIR
:NEW
	cd %NATIVE%
	cd ..\projects
	call native-new.bat %2
	goto ENDIR

:COLDRUN
	call native-coldrun.bat %2
	goto ENDIR

:HELP
	echo Initializes the react-native bat file system.
	echo. 
	echo If no parameters are specified then all native bat commands are listed and a cd to project folder
	echo.
	echo paramters:
	echo   /emulator
	echo       runs an android emulator
	echo   /new parameter1
	echo         will create a project with the name specified in parameter1.
	echo   /update
	echo        Copies all files from "%NATIVE%" to "%NATIVEGLOBAL%"
	echo.
	echo useful commands:
	echo   How to create a new app, run the emulator and run the app
	echo        "native && native -new mynewapp && native -emulator && native -run"
	echo.
	
	
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
	dir /od
	goto ENDIR

:ENDIR
