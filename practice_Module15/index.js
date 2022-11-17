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

 //Cookie with 2 minutes longer | Time created : 18:10 expire in 18:12
 document.cookie = "ObjectName=MyPeson;expires" + new Date(`November 16, 2022 18:12:00`).toUTCString()