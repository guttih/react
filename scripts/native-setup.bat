@echo off

if "%1x"=="x"    goto HELP
if "%1"=="h"     goto HELP
if "%1"=="-h"    goto HELP
if "%1"=="/?"    goto HELP
if "%1"=="/h"    goto HELP
if "%1"=="-help" goto HELP
if "%1"=="/help" goto HELP

::INIT is default set
:INIT
	SET NATIVE=C:\Development\react\scripts
	SET NATIVEGLOBAL=C:\scripts


:BEGIN
	if "%1"=="/init"   goto INIT
	if "%1"=="/free"   goto FREE
	if "%1"=="/update" goto UPDATE
	goto ENDIR
 
:FREE
	SET NATIVE=
	SET NATIVEGLOBAL=
	goto ENDIR
:UPDATE
	if NOT EXIST "%NATIVE%\." GOTO UPDATE_ERROR
	if NOT EXIST "%NATIVEGLOBAL%\." GOTO UPDATE_ERROR
	echo A>react-setup.txt
	@echo on
	xcopy "%NATIVE%\*.bat" "%NATIVEGLOBAL%\*.bat" < react-setup.txt
	@echo off
	del react-setup.txt
	
	goto ENDIR
	
:UPDATE_ERROR
	if NOT EXIST "%NATIVE%\." ECHO MAPPAN  NATIVE: %NATIVE% er ekki til
	if NOT EXIST "%NATIVEGLOBAL%\." ECHO MAPPAN  NATIVEGLOBAL: "%NATIVE%" er ekki til
	echo Thad var villa i update, mappa er ekki til.
	goto ENDIR
:HELP
	echo possible commands:
	echo     %0 /init      Sets environment variables
	echo     %0 /free      Frees environment variables
	echo     %0 /update    Copies all files from "%NATIVE%" to "%NATIVEGLOBAL%"
	echo     %0 /help      This help
	goto ENDIR

:ENDIR