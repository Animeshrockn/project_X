ReadME : Project to build website wtih Flask, Angular and MongoDB 

Steup Steps : 

Make sure you have the following installed:
    Node.js (for Angular) - [Download](https://nodejs.org/)
    Python 3.x (for Flask) - [Download](https://www.python.org/downloads/)
    MongoDB - [Download](https://www.mongodb.com/try/download/community)

Setup Flask and MongoDB : 

create a virtual env :
    Command to create a Virtual Env :
        python -m venv project_x

    Activate the Virtual Env : 
        For Windows:
            source project_x/Scripts/activate 
        For MacOS:
            source project_x/bin/activate

    Deactivate the Virtual Env : 
        deactivate 

Install Flask and dependencies in Virtual Env : 
    pip install flask flask-cors pymongo dnspython

Create a new folder - backend 
Create a new file inside backend - app.py
Copy paste the content of app.py

Start the Flask Server : 
    Running the flask server :
        python backend/app.py

    Flask app local URL : 
        http://127.0.0.1:5000

Setup Angular :
    Global Install once :
        run it for global install from anywhere :
            npm install @angular/cli 
    
    create Angular app :
        ng new frontend:
            For stylesheet choose CSS and yes and yes for next 2 pages (just select NO if there is anything other than this )

    Once completed, it will create a frontend folder 

move inside the folder :
    cd frontend
    ng serve 

    Angular app should be running on URL :
        http://localhost:4200
    
    Install axios for API call :
        npm install axios

Create a service to call Flask API :
    