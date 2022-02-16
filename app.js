class Employees{
	constructor(){
	this.employeeList = {}
	}
	addEmployee(newEmployee){
	//	const no_of_emp = parseInt(Object.keys(this.employeeList).length)+2 
		this.employeeList = {
			...this.employeeList,
			newEmployee
		}
	}
	viewEmployee(){
		return this.employeeList
	}
	deleteEmployee(id){
		Object.keys(this.employeeList).forEach(key=>{
			if(key ===id){
				delete this.employeeList[key]
			}
		})
	}
}
class Departements{
	constructor(){
	this.departementList = {}
	}
	addDepartement(newEmployee){
	//	const no_of_emp = parseInt(Object.keys(this.employeeList).length)+2 
		this.employeeList = {
			...this.departementList,
			newEmployee
		}
	}
	viewEmployee(){
		return this.departementList
	}
	deleteEmployee(id){
		Object.keys(this.departementList).forEach(key=>{
			if(key ===id){
				delete this.employeeList[key]
			}
		})
	}
}
const appState = {
	currentPage: "dashbord"	
}
document.getElementById("employees").style.display = "none"
document.getElementById("departments").style.display = "none"
document.getElementById("roles").style.display = "none"
showNext = (id) => {
	let currentPage = appState.currentPage
	document.getElementById(currentPage).style.display = "none"
	document.getElementById(id).style.display = "block"
	appState.currentPage = id
	console.log(id)

}

register.addEventListener("click",function(){
	let emp = new Employees()
	emp.addEmployee({
		name:"abe",
		lname:"kebe"
	})
	console.log(emp.viewEmployee())
})