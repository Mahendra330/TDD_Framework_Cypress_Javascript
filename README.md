# TDD_Framework_Cypress_Javascript

# QA_Automation: Automate the assigned test scenario:
	1. Open a Firefox/Chrome browser (you can use the selenium native Firefox/Chrome driver)
	2. Navigate to Website
	3. Enter Username and Password (Username: XXXXXXX,Password: XXXXXXXX)
	4. After successful login, click on “QA Assessment Account” in the top right corner of the page and select “Edit profile” from the drop down
	5. Set user to different language
	6. Select the Dashboard tab
	7. Logout the user

Pre Condition:
===============
Step1: Download Code and open in code Editor (Preference: Visual Code Editor).
Step2:Open Terminal from Code Editor and send below Command:
	cd /your/project/path
	npm install cypress --save-dev

Step3: Open Test Runner from code editor (npm run cy:open) and Run the Test Script.
Step4: I have mentioned multiple options to run test in package.json under script.
       You can chose either cross browser testing or Dash Board Testing or in Command line or with Terminal or with Mochawesome Report.

Step5: I have added Docker File in Framework to run test with Docker.please follow below step.
	-->open Docker from Test Machine.
	-->Install Plugin for Docker in code Editor (Visual Code Editor), if it is not available.
	-->Trigger below Command in Terminal and it will download dependency and run the test automatically.
	-->docker build -t cypress .


Description of Project Framework:
================================
1. Framework is designed with Cypress and Java Script.
2. This Framework contained two End to end Feature Testing

	1. Automation Test Script Login FeatureTest:
		a. Open a Firefox/Chrome browser.
		b. Navigate to website
		c. Pass Test with Valid Credential.
		d. Failed Test with Invalid Credential.
		

	2.Automation Test Script for Assigned Scenario:
		a. Open a Firefox/Chrome browser.
		b. Navigate to website
		c. Enter Username and Password (Username: XXXXXXX,Password: XXXXXXXX)
		d. After successful login, click on “QA Assessment Account” in the top right corner of the page and select “Edit profile” from the drop down
		e. Set user to different language
		f. Select the Dashboard tab
		g. Logout the user	
3.Desription of Framework Componet:
	a. Config.js: This has Contained all global variable data and which will be defined by user as per choice and this Data will be driven to Test Case during method call.
		     This is mainly designed to avoid Hard coding.

	b. Commands.js(Available Under Support folder): This has contained all Customized commands like login.

	d. Page-Objects Folder: This folder contains 1 subfolder called page and page has contianed page Objects for Each page.

	e. Integration Folder: This Folder has contained Test Scripts for both Feature.
4. Test Report is Available under mochawesome-report folder.
5. You can check Test Results from DashBoard: https://dashboard.cypress.io/projects/vrzi31/runs/1



