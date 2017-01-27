@echo off
SET DEFAULT_EMULATOR=Acceleratedx86LG_S5
if "%1"=="h"     goto HELP
if "%1"=="-h"    goto HELP
if "%1"=="/h"    goto HELP
if "%1"=="/?"    goto HELP
if "%1"=="-help" goto HELP
if "%1"=="/help" goto HELP
if "%1"=="-list" goto LIST
if "%1"=="/list" goto LIST
if "%1x"=="x" goto BEGIN

::ok, there was an parameter given so let's assume it's a name of the emulatorr
SET DEFAULT_EMULATOR=%1
goto BEGIN

:BEGIN
	echo starting emulator %DEFAULT_EMULATOR%
	start "" %ANDROID_HOME%\TOOLS\EMULATOR @%DEFAULT_EMULATOR%
	::GOTO ENDIR  // lets always list available emulators.
:LIST	
	@echo on
	%ANDROID_HOME%\TOOLS\EMULATOR -list-avds
	@echo off
	::Dæmi um hverig má keyra emulated device sem heitir "Android_Accelerated_x86"
	::start %ANDROID_HOME%\TOOLS\EMULATOR @Android_Accelerated_x86
	goto ENDIR
:HELP
	echo possible commands:
	echo     %0 /h              Help, shows this help
	echo     %0 /list           List available emulators.
	echo     %0                 The default emulator wich is "%DEFAULT_EMULATOR%" will be run.
	echo     %0 emulator_name   A emululator with the name  "emulator_name"" will be run.
	echo.
	goto ENDIR
:ENDIR
SET DEFAULT_EMULATOR=