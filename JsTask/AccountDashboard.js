Employees =[
    {
           id:1,
        name:"Alice",
        department:"Engineering",
        salary:12000,
        bonusPercentage:15,
        yearsOfExperience:2
    },
    {
         id:2,
        name:"Charlie",
        department:"HR",
        salary:73000,
        bonusPercentage:10,
        yearsOfExperience:1
    },
    {
         id:3,
        name:"Arun",
        department:"Sales",
        salary:32000,
        bonusPercentage:20,
        yearsOfExperience:3
    },
    {
         id:4,
        name:"Ronaldo",
        department:"HR",
        salary:15000,
        bonusPercentage:10,
        yearsOfExperience:4
    },
    {
        id:5,
        name:"Justin",
        department:"Engineering",
        salary:75000,
        bonusPercentage:15,
        yearsOfExperience:2
    
    },
    {
         id:6,
        name:"Dave",
        department:"Sales",
        salary:65000,
        bonusPercentage:20,
        yearsOfExperience:3
    },
    {
        id:7,
        name:"Jon",
        department:"Engineering",
        salary:45000,
        bonusPercentage:25,
        yearsOfExperience:2
    }
    ]
  
const departmentHr =Employees.filter((findHr)=>findHr.department==="HR")

const departmentSales =Employees.filter((findSales)=>findSales.department==="Sales")

const departmentEngineering =Employees.filter((findEngineering)=>findEngineering.department==="Engineering")

