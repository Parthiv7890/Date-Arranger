const employees = [
    { name: "Shyam", email: "shyam@gmail.com", dob: "09.03.2023" },
    { name: "Shyam", email: "shyam@gmail.com", dob: "09.06.2019" },
  
    { name: "Bob", email: "bob32@gmail.com", dob: "09.06.2021" },
    { name: "Jai", email: "jai87@gmail.com", dob: "01.01.2023" },
  ];
  
  customSort = (a, b) => {
    const dateA = new Date(a.dob);
    const dateB = new Date(b.dob);
    if (dateA > dateB) return 1;
    else if (dateA < dateB) return -1;
    return 0;
  };
  
  console.log(employees.sort(customSort));