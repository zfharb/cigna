
<h1>
Project Overview:<br>
</h1>
Cigna interview code project.<br>

<h1>
Project Setup:<br>
</h1>

1. create local directory for your project:<br>
   mkdir cigna<br>

2. go to newly created directory:<br>
   cd cigna<br>

3. initiate local git:<br>
   git init<br>

4. clone the below project repo to local directory. <br>
   git clone https://github.com/zfharb/cigna.git<br>

2. initiate local git:<br>
   git init<br>

2. install node modules:<br>
   npm install<br>

<h1>
Project Run:<br>
</h1>

1. to run the cypress tests from the command line, open cmd.exe on window or terminal on mac: 

   npm run run:cypress 

1. to open the cypress GUI: 

   npm run open:cypress
   
<h1>
Report Run:<br>
</h1>

* For this project, mochawesome reporter. to generate the report and open the report html file:

   npm run create:html:report 

<h1>
CI pipeline:<br>
</h1>

This project is setup with GH actions. One each push from local repo, a new workflow run will start to run all test cases. To view all runs, go to below link:<br>

   https://github.com/zfharb/cigna/actions<br>

<h1>
Notes:<br>
</h1>

* This simple framework uses page object model. Some sites recommend not using this model with cypress but the POM was used here for the purpose of showing how one would be applied when doing automation. 

* More folders like helpers and utilities would be added in a more complex framework. There was no need to use any here.
