## Project Exercise 

#### Duration: 2.5hrs Max 

 

A patient application using SPA(Singple Page Application) template. The frontend is React(typescript) and .net 8 in backend(c#). The skeleton of the project is provided, and the applicant must add the missing code to make the project work.

**Client Project**: CMH.ExerciseProject.client <br />
**Server Project**: CMH.ExerciseProject.Server

To Run, click the start button in visual studio.



**Requirements** 

 

    1. Download and install VS 2022 community edition first.  

https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false 


    2. Open the project using VS 2022 and rebuild the solution to install project dependencies. 

 

**Exercise Instruction** 

 

 **1. Use the fake  database provided located in "CMH.ExerciseProject.Server\Database\PatientDatabase.cs"**

**2. An access key property stored in "CMH.ExerciseProject.Server\appsettings.json" must be used to connect to the database**

**3. Fill in the missing code in "CMH.ExerciseProject.Server\Database\PatientDataLayer.cs"** 

* 3.1 AddPatient Method 

* 3.2 DeletePatient Method 

* 3.3 GetPatients Method 

* 3.4 SearchPatients Method 

**4. Fill in the missing code in "CMH.ExerciseProject.Server\Controllers\PatientController.cs"** 

* 4.1 AddPatient Method 

* 4.2 DeletePatient Method 

* 4.3 GetPatients Method 

* 4.4 SearchPatients Method 

**5. Fill in the missing code in "CMH.ExerciseProject.client\src\Fetch.ts"** 

* 5.1 AddPatient Method 

* 5.2 DeletePatient Method 

* 5.3 SearchPatients Method 

**6. Fill in the missing code in "CMH.ExerciseProject.client\src\App.tsx"** 

* 6.1 Make the "Delete" button work. Once clicked, it must delete the record in database 

* 6.2 Make the "Add" button work. Once clicked, it must a create a new record in database 

* 6.3 Make the "Search" button work. Once a name is typed, it must display the patient/s found

 
