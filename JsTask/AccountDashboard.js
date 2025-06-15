Employees =[
    {
           id:1,
        name:"Alice",
        department:"Engineering",
        salary:12000,
        bonusPercentage:15,
        yearsOfExperience:4
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
        yearsOfExperience:3,
        targets: 450000
    },
    {
         id:4,
        name:"Ronaldo",
        department:"HR",
        salary:14000,
        bonusPercentage:10,
        yearsOfExperience:4
    },
    {
        id:5,
        name:"Justin",
        department:"Engineering",
        salary:75000,
        bonusPercentage:15,
        yearsOfExperience:5
    
    },
    {
         id:6,
        name:"Dave",
        department:"Sales",
        salary:65000,
        bonusPercentage:20,
        yearsOfExperience:3,
        targets :990000
    },
    {
        id:7,
        name:"Jon",
        department:"Engineering",
        salary:45000,
        bonusPercentage:25,
        yearsOfExperience:2
    },
    {
        id:8,
        name:"Don",
        department:"Sales",
        salary:85000,
        bonusPercentage:45,
        yearsOfExperience:2,
        targets:700000
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
          id:6,
        name:"Dave",
        department:"Sales",
        salary:65000,
        bonusPercentage:20,
        yearsOfExperience:3,
        targets :990000
    }
    ]
  
const departmentHr =Employees.filter((findHr)=>findHr.department==="HR")

const departmentSales =Employees.filter((findSales)=>findSales.department==="Sales")

const departmentEngineering =Employees.filter((findEngineering)=>findEngineering.department==="Engineering")

const bonusForHr = ()=>{
    const HRBonus = []
    const SalesBonus =[]
    const EngineeringBonus =[]
    for(const hr of departmentHr){
          if(hr.salary < 50000){
            const bonus = 0.1*hr.salary
            hr.salary += bonus
          
            HRBonus.push({
                Id : hr.id,
            Name : hr.name,
            Salary : hr.salary - bonus,
           Department: hr.department,
           Bonus : bonus,
           TotalCompensation :hr.salary
         })
        }
    }
    for(const sales of departmentSales){
        if(sales.targets < 100000){
            const minimum = 0.05* sales.salary
            sales.salary += minimum
            SalesBonus.push({
                ID :sales.id,
            Name : sales.name,
            Department :sales.department,
            Salary : sales.salary - minimum,
            Bonus : minimum,
            TotalCompensation : sales.salary
        })
        }
        else if(sales.targets >= 100000 && sales.targets < 500000){
            const between = 0.1 * sales.salary
            sales.salary += between
            SalesBonus.push({
                ID :sales.id,
            Name : sales.name,
            Department :sales.department,
            Salary : sales.salary -between,
            Bonus : between,
            TotalCompensation : sales.salary
        })
        }
        else{
            const more = 0.2 * sales.salary
            SalesBonus.salary += more
            SalesBonus.push({
            ID :sales.id,
            Name : sales.name,
            Department :sales.department,
            Salary : sales.salary - more,
            Bonus : more,
            TotalCompensation : sales.salary
        })
        }
        
    }
    for(const engineering of departmentEngineering){
        if(engineering.yearsOfExperience > 2){
            const Bonus = 0.15 * engineering.salary
            engineering.salary += Bonus
            EngineeringBonus.push({
                ID:engineering.id,
                Name:engineering.name,
                Department:engineering.department,
                YearsOfExperience:engineering.yearsOfExperience,
                Salary:engineering.salary - Bonus,
                Bonus : Bonus,
                TotalCompensation: engineering.salary
            })
        }
    }
    return {HR:HRBonus , Sales:SalesBonus , Engineering : EngineeringBonus}
    

}
console.log(bonusForHr())


const filterEmployeesByDepartment = (deptName)=>{
    
    const findDuplicated = [...new Set(Employees.map(emp => emp.id))]
    const filteredEmployee=[]
    for(const dept of Employees){
        if(dept.department === deptName){
            const Bonus = (dept.bonusPercentage / 100 ) * dept.salary
            filteredEmployee.push({
                Name : dept.name,
                Id :dept.id,
                Department : dept.department,
                BaseSalary : dept.salary,
                Bonus : Bonus,
                TotalCompensation: dept.salary + Bonus
            })
        }
    }
    return filteredEmployee
}
console.log(filterEmployeesByDepartment("Sales"))