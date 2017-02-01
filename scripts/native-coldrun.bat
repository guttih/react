@echo off
if "%1x"=="x" goto DEFAULT
if "%1"=="h"     goto HELP
if "%1"=="-h"    goto HELP
if "%1"=="/h"    goto HELP
if "%1"=="/?"    goto HELP
if "%1"=="-help" goto HELP
if "%1"=="/help" goto HELP
SET CURR_PROJECT=%1
goto GOON

:DEFAULT
	SET CURR_PROJECT=manager
:GOON
	@echo on
	call native.bat
	cd %CURR_PROJECT%
	IF ERRORLEVEL 1 goto NOT_EXISTS
	start "" code .
	call native -emulator && call native -run
	GOTO ENDIR
:HELP
	echo.
	
	echo Opens an editor, Starts an emulator and runs a project
	echo.
	echo example on how edit and run the app about, located in the react\project folder:
	echo.
	echo    %0 about
	echo.
	goto ENDIR
:NOT_EXISTS
	echo -------------- ERROR --------------
	echo.
	echo The project %1 does not exists
	echo.
	echo -----------------------------------
:ENDIR
	SET CURR_PROJECT=
