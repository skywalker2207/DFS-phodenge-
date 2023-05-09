# Team Name: Dfs_Phodenge

## Project : Data analytics dashboard

## Target Area : Data Analytics

## Overview

   The goal of this project is to build a dashboard analyzing the healthcare database along with knowledge graph. We can analyze various trends in the patient's data like patient's basic data (height,weight,etc), medical observations,blood reports,genome sequence data,etc.

## Installation Steps

Prerequisites:

- Node

For Linux:

```
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs
```

For Mac:

```
brew install node
```

- Clone the repository and and go inside the folder, or download the zip file and extract it.

```
cd server
npm install
```

It should start installing npm packages but in case if still doesn't work, run the following command.

```
nvm install v18.16.0
npm install
```

- After this make a new file with name `.env` in the `server` folder and write the following code in it.

```
MONGO_URL = mongodb+srv://skywalker2207:2207@dfs.b2wqoik.mongodb.net/?retryWrites=true&w=majority
PORT = 5001
```

- Now run the following command to setup backend and start the server.

```
npm install mongoose -g
npm run start
```

- open another terminal and go inside the `data` folder and run the following command.

```
pip install -r requirements.txt
python3 server.py
```

This comletes our backend setup.

- Now go inside `client` folder and make a `.env.local` file and paste the following code in it.

```
REACT_APP_BASE_URL = http://localhost:5001

```

- Now run the following command to setup frontend and start the server.

```
nvm install v18.16.0
npm install
npm run start
```

This will launch the frontend.

## Requirements

### 1. Patient Data Management

   The platform must be able to store and manage basic patient data, including
   demographic information, medical history, and contact information. We are not adding a
   way for a patient to input their data; assuming we have patient data, we will display all
   the data for a better understanding.

### 2. Medical Observations

   The platform must be able to manage medical observations, including vital signs,
   physical examination findings, and diagnostic imaging results.

### 3. Blood Reports

   The platform must be able to store and manage blood reports, including complete blood
   counts, blood chemistries, and other blood test results.

### 4. Data Access, Downloading and Sharing

   Patients must be able to access and share their healthcare data with authorized
   healthcare providers and other authorized individuals

## Non-Functional Requirements

### 1. Performance

   The platform must be able to support a large number of concurrent users and must
   have a response time of fewer than 2 seconds.

### 2. Security

   The platform must have strong security measures in place to protect the confidentiality
   and privacy of patient data.

### 3. Usability

   The platform must have a user-friendly interface that is easy for patients to use.

### 4. Interoperability

   The platform must be able to interface with other healthcare systems and data sources
   to ensure that patient data is up-to-date and accurate.

## Technical Requirements

## System Design

### Flowchart

<p align="center">
<img src='./images/flowchart.png' alt="Flow Chart" height="500">
</p>

This flowchart is a graphical representation of a process that depicts the steps involved in completing a our project or task.
<!-- 
We have divided project into 3 phases.

1. SQL Schema Formation
2. Cleaning Data
3. Migration of data

<p align="center">
<img src='./images/backend_architechture.png' alt="Backend Architechture" height="500">
</p>

##### Stage 1 ( SQL Schema )

- The Data is provided in the form of CSV or JSON files.
- The first phase of our project is to create a SQL schema for the data.
- The schema will include tables, columns, and relationships between the tables.
- The SQL schema should be designed to efficiently store and retrieve data, while also ensuring data integrity and consistency.

##### Stage 2 ( Cleaning Data )

- The second phase of our project is to clean the data before it can be inserted into the database.
- This phase involves preparing the CSV or JSON files so that the data is consistent, accurate, and ready for insertion into the SQL database.
- During the cleaning process, we need to check for errors, missing values, duplicates, and inconsistencies in the data.

##### Stage 3 ( Migration of data )

- The third and final phase of our project is to migrate the cleaned data into the SQL database. This involves inserting the data into the appropriate tables in the database, according to the SQL schema we created earlier.
- The migration process can be done using SQL commands or a variety of tools and programming languages, such as Python or Java.
- Once the data migration script executed, we will log the process and any errors that may have occurred. -->

### Sequence Diagram

<p align="center">
    <img src="./images/Healthcare_Generic.png" alt="Sequence Diagram" height="500">
</p>

---

## Generic Data Model

<p align="center">
    <img src="./images/Healthcare_Generic.png" alt="Sequence Diagram" height="500">
</p>

## Use Case Diagram

<p align="center">
    <img src="./images/usecasediagram.jpeg" alt="Sequence Diagram" height="500" width =  "550">
</p>

Documentation: [Link](https://github.com/skywalker2207/DFS-phodenge-/blob/main/SRS.pdf)

---
## Demo of the WebApp
<p align="center">
    ![(https://github.com/skywalker2207/DFS-phodenge-/blob/main/images/demovideo.mov)](https://github.com/skywalker2207/DFS-phodenge-/blob/main/images/demovideo)
</p>

## Traceability 


## Code Structure

The project is structured as follows:

<!-- - `config/`: Contain all configuration while migrating database scripts -->
- `images/`: Contain all images for README files
<!-- - `logs/`: Contain file for logs -->
<!-- - `migrations/`: Contain script for migrate tables -->
- `client/`: Contain all frontend code
   - `node_modules` : Contains all the npm packages.
   - `public` : Contains all the static files and index.html file.
   - `src` : Contains all the source code for the project.
      - `assets` : Contains all the assets of the project.
      - `components` : Contains all the components of the project.
      - `data` : Contains all the mock data files.
      - `scenes` : Contains all the scenes of the project.
      - `state` : Contains all the state of the project.
     - `App.js` : Contains the main component of the project.
     - `index.js` : Contains the code rendering the main component.
     - `index.css` : Contains the styling for the main component.
     - `package.json` : Contains all the npm packages.
     - `package-lock.json` : Contains all the npm packages.
     - `README.md` : Contains all the information about the project.

- `server/`: Contain all backend code
   - `node_modules` : Contains all the npm packages.
   - `data` : Contains all the data files.
      - `healthcare_data.csv` : Contains all the data in csv format.
      - `data_generator.py` : Contains the code to generate data.
      - `server.py` : Contains the code to connect to the database.
      - `requirements.txt` : Contains all the requirements for the project


   - `models` : Contains all the models of the project.
   - `routes` : Contains all the routes of the project.
   - `index.js` : Contains the main component of the project.
   - `package.json` : Contains all the npm packages.
   - `package-lock.json` : Contains all the npm packages.
   - `README.md` : Contains all the information about the project.
<!-- - `src/`: Contains all the source code for the project. -->
  <!-- - `data/`: Contain all data files for ingestion
  - `database/`: Contain file for database connection
  - `models/`: Contain sequalize models for tables
  - `sample_data/`: Contains sample data with data type
  - `scripts/`:
    - `CSV/`: Contain CSV to SQL migration script
    - `JSON/`: Contain JSON to SQL migration script
    - `clearTableData.js/`: script for clear all data from tables
  - `logger.js`: Logging Methods and Initialization
  - `index.js`: The entry point of the application.
- `.enc/`: Contains all global variable and private variables of project -->
- `README.md`: The README file for the project.
- `SRS.pdf`: The SRS file for the project.


### Team Members

- Nikhil aggrawal (2020102021)
- Mitul Garg (2020102026)
- Atharv Sujlegaonkar (2020102025)
