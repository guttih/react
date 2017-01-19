@echo off
 
if "%1x"=="x" goto help
if "%1"=="h" goto help
if "%1"=="-h" goto help
if "%1"=="/h" goto help
if "%1"=="/?"    goto help
if "%1"=="-help" goto help
if "%1"=="/help" goto help
if "%1"=="-eslint" goto ESLINT
if "%1"=="/eslint" goto ESLINT

if EXIST %1\index.android.js goto projectAlreadyExists
if "%2"=="android" start %ANDROID_HOME%\TOOLS\EMULATOR @Android_Accelerated_x86

:creatingProject
	call react-native init %1
	cd %1
	IF ERRORLEVEL 1 (	ECHO --- Error, react-native was unable to create your project
						goto endir)
	::echo adding 'use strict' at beginning of index.android.js
	::echo 'use strict'; > new.index.android.js & type index.android.js >> new.index.android.js & type new.index.android.js > index.android.js & del new.index.android.js
	::echo setting up .babelrc
	::echo {"presets": ["react-native"], > .babelrc & echo "plugins": [], "sourceMaps": true } >> .babelrc
:ESLINT
	echo  ------------------    setting up es-lint    ------------------
	echo copy  C:\scripts\data\.eslintrc.json .	
	copy  C:\scripts\data\.eslintrc.json .	
	::Installing eslint and warnings to the project
	echo npm install --save invariant warning
	call npm install --save invariant warning
	echo npm install --save-dev eslint eslint-config-react 
	call npm install --save-dev eslint eslint-config-react eslint-plugin-react
	::npm install --save-dev babel-eslint
	echo  --------------------------------------------------------------
	echo done!
	echo now you can open visual code, and hit CTRL+SHIFT+P and type run Android
	echo open the project by typing "code ."
	goto endir
	
:projectAlreadyExists
	echo The project "%1" already exists
	goto endir

:help
	echo How to use:
	echo First parameter:  The of the react-native application to be created.
	echo Second parameter: Shall the android emulator be launched or not

	echo examples:
	echo   Create a react native project called project1:
	echo   %0 project1
	echo .
	echo Create a react native project called project1 and start the android emulator:
	echo   %0 project1 android
	goto endir
:endir
