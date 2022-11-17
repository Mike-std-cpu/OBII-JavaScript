const myName = `Mike`
const myLastName = `Andrade`
 const fullName= {
    name: `Mike`,
    lastName: `Andrade`
 }

 //-LocalStorage
 localStorage.setItem("My person", JSON.stringify(fullName));
 //-SessionStorage
 sessionStorage.setItem("My-person-with-session", JSON.stringify(fullName))