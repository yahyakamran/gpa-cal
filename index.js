const Courses = [
  // --- Computing / CS / SE / AI Core ---

  { name: "Introduction to ICT Lab", number: "CL1000", credit: 1 },

  { name: "Programming Fundamentals", number: "CS1002", credit: 3 },
  { name: "Programming Fundamentals Lab", number: "CS1002", credit: 1 },

  { name: "Object Oriented Programming", number: "CS1004", credit: 3 },
  { name: "Object Oriented Programming Lab", number: "CS1004", credit: 1 },

  { name: "Data Structures", number: "CS2001", credit: 3 },
  { name: "Data Structures Lab", number: "CS2001", credit: 1 },

  { name: "Discrete Structures", number: "CS1005", credit: 3 },

  { name: "Operating Systems", number: "CS2006", credit: 3 },
  { name: "Operating Systems Lab", number: "CS2006", credit: 1 },

  { name: "Database Systems", number: "CS2005", credit: 3 },
  { name: "Database Systems Lab", number: "CS2005", credit: 1 },

  { name: "Software Engineering", number: "CS3009", credit: 3 },

  { name: "Computer Networks", number: "CS3001", credit: 3 },
  { name: "Computer Networks Lab", number: "CS3001", credit: 1 },

  { name: "Information Security", number: "CS3002", credit: 3 },

  { name: "Design & Analysis of Algorithms", number: "CS2009", credit: 3 },

  { name: "Theory of Automata", number: "CS3005", credit: 3 },

  { name: "Final Year Project – I Lab", number: "CS4091", credit: 3 },

  { name: "Final Year Project – II Lab", number: "CS4092", credit: 3 },

  // --- Mathematics & Supporting ---

  { name: "Applied Physics", number: "NS1001", credit: 3 },
  { name: "Calculus & Analytic Geometry", number: "MT1003", credit: 3 },
  { name: "Multivariable Calculus", number: "MT1006", credit: 3 },
  { name: "Linear Algebra", number: "MT1004", credit: 3 },
  { name: "Probability & Statistics", number: "MT2005", credit: 3 },

  // --- General Education ---

  { name: "Functional English", number: "SS1012", credit: 2 },
  { name: "Functional English Lab", number: "SS1012", credit: 1 },

  { name: "Ideology & Constitution of Pakistan", number: "SS1013", credit: 2 },

  { name: "Expository Writing", number: "SS1014", credit: 2 },
  { name: "Expository Writing Lab", number: "SS1014", credit: 1 },

  // --- Software Engineering Specific ---

  { name: "Introduction to Software Engineering", number: "SE1001", credit: 3 },
  { name: "Software Requirements Engineering", number: "SE2001", credit: 3 },
  { name: "Software Design & Architecture", number: "SE2002", credit: 3 },
  { name: "Software Construction & Development", number: "SE3004", credit: 3 },
  { name: "Software Quality Engineering", number: "SE3002", credit: 3 },

  // --- Artificial Intelligence Core ---

  { name: "Artificial Intelligence", number: "AI2002", credit: 3 },
  { name: "Artificial Intelligence Lab", number: "AI2002", credit: 1 },

  { name: "Machine Learning", number: "AI-ML", credit: 3 },
  { name: "Machine Learning Lab", number: "AI-ML", credit: 1 },

  { name: "Artificial Neural Networks", number: "AI-ANN", credit: 3 },

  // --- Computer / CE Support ---

  { name: "Applications of ICT", number: "CS1009", credit: 2 },
  { name: "Applications of ICT Lab", number: "CS1009", credit: 1 },

  // --- Electrical Engineering (BS-EE) Core ---

  // Semester 1
  { name: "Applied Calculus", number: "MT1001", credit: 3 },

  { name: "Applied Physics", number: "NS1007", credit: 2 },
  { name: "Applied Physics Lab", number: "NS1007", credit: 1 },

  { name: "Engineering Drawing Lab", number: "ME1001", credit: 1 },

  { name: "English Language Skills", number: "SS1005", credit: 3 },
  { name: "Islamic Studies / Ethics", number: "SS1007", credit: 2 },
  { name: "Occupational Health and Safety", number: "MG1008", credit: 1 },
  { name: "Pakistan Studies", number: "SS1003", credit: 2 },

  // Semester 2
  { name: "Civics and Community Engagement", number: "SS2043", credit: 2 },
  { name: "Differential Equation", number: "MT1006", credit: 3 },
  { name: "Engineering Workshop Lab", number: "EE1006", credit: 1 },
  { name: "Ideology and Constitution of Pakistan", number: "SS1013", credit: 2 },
  { name: "Linear Algebra", number: "MT1004", credit: 3 },

  { name: "Linear Circuit Analysis", number: "EE1001", credit: 3 },
  { name: "Linear Circuit Analysis Lab", number: "EE1001", credit: 1 },

  { name: "Programming for Engineers", number: "CS1011", credit: 3 },
  { name: "Programming for Engineers Lab", number: "CS1011", credit: 1 },

  // Semester 3
  { name: "Complex Variables and Transform", number: "MT2003", credit: 3 },

  { name: "Electrical Network Analysis", number: "EE2004", credit: 3 },
  { name: "Electrical Network Analysis Lab", number: "EE2004", credit: 1 },

  { name: "Electronic Devices and Circuits", number: "EE1004", credit: 3 },
  { name: "Electronic Devices and Circuits Lab", number: "EE1004", credit: 1 },

  { name: "Multivariable Calculus", number: "MT2008", credit: 3 },

  { name: "Object Oriented Data Structures", number: "CS2021", credit: 3 },
  { name: "Object Oriented Data Structures Lab", number: "CS2021", credit: 1 },

  { name: "Understanding of Holy Quran - I", number: "SS1021", credit: 1 },

  // Semester 4

  { name: "Signals and Systems", number: "EE2008", credit: 3 },
  { name: "Signals and Systems Lab", number: "EE2008", credit: 1 },

  { name: "Digital Logic Design", number: "EE1005", credit: 3 },
  { name: "Digital Logic Design Lab", number: "EE1005", credit: 1 },

  { name: "Probability and Random Processes", number: "EE2011", credit: 3 },

  { name: "Electro Mechanical Systems", number: "EE2010", credit: 3 },
  { name: "Electro Mechanical Systems Lab", number: "EE2010", credit: 1 },

  // Semester 5

  { name: "Analogue and Digital Communication", number: "EE3003", credit: 3 },
  { name: "Analogue and Digital Communication Lab", number: "EE3003", credit: 1 },

  { name: "Electromagnetic Theory", number: "EE3005", credit: 3 },

  { name: "Microprocessor Interfacing and Programming", number: "EE3002", credit: 3 },
  { name: "Microprocessor Interfacing and Programming Lab", number: "EE3002", credit: 1 },

  { name: "Technical Communication Skills", number: "SS2001", credit: 2 },

  // Semester 6

  { name: "Engineering Economics", number: "MG2002", credit: 2 },

  { name: "Feedback Control Systems", number: "EE3004", credit: 3 },
  { name: "Feedback Control Systems Lab", number: "EE3004", credit: 1 },

  { name: "Power Distribution and Utilization", number: "EE2038", credit: 3 },
  { name: "Power Distribution and Utilization Lab", number: "EE2038", credit: 1 },

  // Semester 7 & 8

  { name: "Final Year Project – I", number: "EE4091", credit: 3 },
  { name: "Technical and Business Writing", number: "SS2007", credit: 3 },
  { name: "Engineering Management", number: "MG3036", credit: 2 },
  { name: "Final Year Project – II", number: "EE4092", credit: 3 },
  { name: "Entrepreneurship", number: "SS2013", credit: 2 },

  // --- FinTech (BS-FinTech) Core ---

  // Semester 1

  { name: "IT in Business", number: "CS1001", credit: 2 },
  { name: "IT in Business Lab", number: "CS1001", credit: 1 },

  { name: "Fundamentals of Accounting", number: "AF1001", credit: 3 },
  { name: "Business Math - I", number: "MT1002", credit: 3 },
  { name: "Marketing Management", number: "MG1002", credit: 3 },

  { name: "English – I", number: "SS1016", credit: 2 },
  { name: "English – I Lab", number: "SS1016", credit: 1 },

  { name: "Islamic Studies / Ethics", number: "SS1007", credit: 2 },

  // Semester 2

  { name: "Financial Accounting", number: "AF1002", credit: 3 },
  { name: "Financial Accounting Lab", number: "AF1002", credit: 1 },

  { name: "Fundamentals of Management", number: "MG1001", credit: 3 },

  { name: "Programming for Business", number: "CS2016", credit: 3 },
  { name: "Programming for Business Lab", number: "CS2016", credit: 1 },

  { name: "Data Analysis for Business - I", number: "MG2008", credit: 3 },

  { name: "English – II", number: "SS1006", credit: 3 },
  { name: "English – II Lab", number: "SS1006", credit: 1 },

  { name: "Pakistan Studies", number: "SS1015", credit: 2 },

  // Semester 3

  { name: "Psychology / Sociology", number: "SS2019 / SS2018", credit: 2 },
  { name: "Business Finance", number: "AF2004", credit: 3 },

  { name: "Introduction to Object Oriented Programming", number: "CS2012", credit: 3 },
  { name: "Introduction to Object Oriented Programming Lab", number: "CS2012", credit: 1 },

  { name: "Business Math - II", number: "MT2004", credit: 3 },
  { name: "Business Economics", number: "MG2012", credit: 3 },
  { name: "Civics and Community Engagement", number: "SS2043", credit: 2 },
  { name: "Understanding of Holy Quran - I", number: "SS1021", credit: 1 },

  // Semester 4

  { name: "Data Analysis for Business - II", number: "MG2009", credit: 3 },
  { name: "Data Analysis for Business - II Lab", number: "MG2009", credit: 1 },

  { name: "Environmental Science & Sustainability for Business", number: "MG2011", credit: 3 },
  { name: "Critical Thinking", number: "SS2041", credit: 2 },

  { name: "Introduction to Database Systems", number: "CS2013", credit: 3 },
  { name: "Introduction to Database Systems Lab", number: "CS2013", credit: 1 },

  { name: "Financial Management", number: "AF3001", credit: 3 },
  { name: "Financial Management Lab", number: "AF3001", credit: 1 },

  { name: "Constitution and Ideology of Pakistan", number: "SS1013", credit: 2 },
  { name: "Understanding of Holy Quran - II", number: "SS1022", credit: 1 },

  // Semester 5

  { name: "Banking and Financial Systems", number: "AF3009", credit: 3 },

  { name: "Basic Econometrics", number: "MG3003", credit: 3 },
  { name: "Basic Econometrics Lab", number: "MG3003", credit: 1 },

  { name: "Blockchain Technology for Business", number: "MG3012", credit: 3 },
  { name: "Enterprise Systems and Applications", number: "CS3017", credit: 3 },
  { name: "Entrepreneurship", number: "MG4011", credit: 3 },

  // Semester 6

  { name: "Web Programming", number: "CS3010", credit: 3 },
  { name: "Web Programming Lab", number: "CS3010", credit: 1 },

  { name: "Business Research and Data Mining", number: "AF3008", credit: 3 },
  { name: "Business Research and Data Mining Lab", number: "AF3008", credit: 1 },

  { name: "Business Law for FinTech", number: "MG3037", credit: 3 },
  { name: "Banking Instruments and Procedures", number: "AF3010", credit: 3 },
  { name: "Business Communication", number: "MG2010", credit: 3 },

  // Semester 7

  { name: "Investment and Portfolio Analytics", number: "AF4011", credit: 3 },

  { name: "Final Year Project - I Lab", number: "MG4091", credit: 3 },

  // Semester 8

  { name: "Financial Risk Analytics and Derivatives", number: "AF4012", credit: 3 },
  { name: "Artificial Intelligence in Business Decision", number: "AF4013", credit: 3 },

  { name: "Final Year Project - II Lab", number: "MG4092", credit: 3 },

  { name: "Internship (FinTech)", number: "MG4052", credit: 3 }
];

CurrentCourse = [];
let GPA = -1;

function searchCourse(input, item){
    const str = (item.name).toLowerCase();
    const query = input.toLowerCase();
    let lastSearched = -1;

    for(let i=0; i < query.length; ++i) {
        const char = query[i];
        if(char != ' '){
            const foundIndex = str.indexOf(char, lastSearched + 1);
            if (foundIndex === -1) {
              return false;
            }
            lastSearched = foundIndex;
        }
    }
    if(query.length == 0)return false;
    return true;
}

function createInputGroup(label, id, obtainedValue, totalValue, onChange) {
    const group = document.createElement("div");
    group.classList.add("input-group");

    const labelElement = document.createElement("label");
    labelElement.textContent = label;
    group.appendChild(labelElement);

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");

    const obtainedInput = document.createElement("input");
    obtainedInput.type = "number";
    obtainedInput.id = `${id}-obtained`;
    obtainedInput.value = obtainedValue;
    obtainedInput.placeholder = "Obtained";
    obtainedInput.step = "0.01";
    obtainedInput.min = "0";

    const separator = document.createElement("span");
    separator.textContent = " / ";

    const totalInput = document.createElement("input");
    totalInput.type = "number";
    totalInput.id = `${id}-total`;
    totalInput.value = totalValue;
    totalInput.placeholder = "Total";
    totalInput.step = "0.01";
    totalInput.min = "0";

    obtainedInput.addEventListener('input', () => {
        onChange(obtainedInput.value, totalInput.value);
    });

    totalInput.addEventListener('input', () => {
        onChange(obtainedInput.value, totalInput.value);
    });

    inputContainer.appendChild(obtainedInput);
    inputContainer.appendChild(separator);
    inputContainer.appendChild(totalInput);

    group.appendChild(inputContainer);
    return group;
}

function getGpa(w){
    if(w >= 86){
        return 4.00;
    }else if(w >= 82){
        return 3.67;
    }else if(w >= 78){
        return 3.33;
    }else if(w >= 74){
        return 3.00;
    }else if(w >= 70){
        return 2.67;
    }else if(w >= 66){
        return 2.33;
    }else if(w >= 62){
        return 2.00;
    }else if(w >= 58){
        return 1.67;
    }else if(w >= 54){
        return 1.33;
    }else if(w >= 50){
        return 1.00;
    }else{
        return 0.00;
    }
}


function calculateGpa(){
    let total_gpa_sum = 0;
    let total_credit = 0;
    let gpa = 0;
    CurrentCourse.forEach(function(course, index){
        total_credit += course.credit;
        let sum = 0;
        let courseGpa;
        if(course.credit > 1){
            sum = course.mid1_o + course.mid2_o + course.quiz_assign_o + course.final_o;
            courseGpa = getGpa(sum);
        }else{
            sum = course.mid1_o + course.quiz_assign_o + course.final_o;
            courseGpa = getGpa(sum);
        }
        total_gpa_sum += courseGpa*course.credit;
    })
    gpa = total_gpa_sum / total_credit;
    GPA = gpa;
    displayGpa()
}


const searchBar = document.querySelector("#SearchCourse input");
const searchContainer = document.querySelector("#SearchCourse #result");
const searchBtn = document.getElementById("search-btn");
const formContainer = document.querySelector("#InputFormContainer");
const gpaContainer = document.querySelector("#gpa-d");

function displayGpa(){
    while(gpaContainer.firstChild){
        gpaContainer.removeChild(gpaContainer.firstChild);
    }
    if(GPA > 0){
        let h = document.createElement("h1")
        h.innerText = "GPA"
        gpaContainer.appendChild(h)
        let gpa = document.createElement("h2");
        gpa.innerText = GPA;
        gpaContainer.appendChild(gpa)
    }
}

function updateForm(){
    while(formContainer.firstChild){
        formContainer.removeChild(formContainer.firstChild);
    }
    CurrentCourse.forEach(course => {
        const div = document.createElement("div");
        div.classList.add("course-form");
        const header = document.createElement("h3");
        header.textContent = `${course.name} (${course.number}) - ${course.credit} Credit Hours`;
        div.appendChild(header);
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove Course";
        removeBtn.prop = CurrentCourse.length - 1;
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener('click', (e) => {
            CurrentCourse = CurrentCourse.splice(e.target.prop, e.target.prop);
            updateForm();
        });
        div.appendChild(removeBtn);
        const form = document.createElement("form");
        form.classList.add("marks-form");
        if(course.credit > 1) {

            const mid1Group = createInputGroup(
                "Mid Term 1:",
                `mid1-${course.number}`,
                course.mid1_o,
                course.mid1_t,
                (obtained, total) => {
                    course.mid1_o = parseFloat(obtained) || 0;
                    course.mid1_t = parseFloat(total) || 0;
                }
            );
            form.appendChild(mid1Group);

            const mid2Group = createInputGroup(
                "Mid Term 2:",
                `mid2-${course.number}`,
                course.mid2_o, 
                course.mid2_t,
                (obtained, total) => {
                    course.mid2_o = parseFloat(obtained) || 0;
                    course.mid2_t = parseFloat(total) || 0;
                }
            );
            form.appendChild(mid2Group);

            const quizGroup = createInputGroup(
                "Quiz/Assignment:",
                `quiz-${course.number}`,
                course.quiz_assign_o,
                course.quiz_assign_t,
                (obtained, total) => {
                    course.quiz_assign_o = parseFloat(obtained) || 0;
                    course.quiz_assign_t = parseFloat(total) || 0;
                }
            );
            form.appendChild(quizGroup);

            const finalGroup = createInputGroup(
                "Final Exam:",
                `final-${course.number}`,
                course.final_o,
                course.final_t,
                (obtained, total) => {
                    course.final_o = parseFloat(obtained) || 0;
                    course.final_t = parseFloat(total) || 0;
                }
            );
            form.appendChild(finalGroup);
        } else {
            // Lab
            const mid1Group = createInputGroup(
                "Mid Term:",
                `mid1-${course.number}`,
                course.mid1_o,
                course.mid1_t,
                (obtained, total) => {
                    course.mid1_o = parseFloat(obtained) || 0;
                    course.mid1_t = parseFloat(total) || 0;
                }
            );
            form.appendChild(mid1Group);

            const quizGroup = createInputGroup(
                "Quiz/Assignment:",
                `quiz-${course.number}`,
                course.quiz_assign_o,
                course.quiz_assign_t,
                (obtained, total) => {
                    course.quiz_assign_o = parseFloat(obtained) || 0;
                    course.quiz_assign_t = parseFloat(total) || 0;
                }
            );
            form.appendChild(quizGroup);

            const finalGroup = createInputGroup(
                "Final Exam:",
                `final-${course.number}`,
                course.final_o,
                course.final_t,
                (obtained, total) => {
                    course.final_o = parseFloat(obtained) || 0;
                    course.final_t = parseFloat(total) || 0;
                }
            );
            form.appendChild(finalGroup);
        }
        div.appendChild(form);
        formContainer.appendChild(div);
    });
    let calGpaBtn = document.createElement("button");
    calGpaBtn.innerText = "Calculate Gpa"
    calGpaBtn.addEventListener("click", calculateGpa)
    formContainer.appendChild(calGpaBtn);
}

function updateListener(){
    let actionBtns = document.querySelectorAll(".ActionBtn");

    actionBtns.forEach(button => {
        button.addEventListener('click', function(){
            let already = 0;
            for(let i=0; i < CurrentCourse.length; ++i){
                if(CurrentCourse[i].name == Courses[button.prop].name){
                    already = 1;
                }
            }
            if(!already){
                let course = Courses[button.prop];
                let obj;
                if(course.credit > 1){
                    obj = {
                        name: course.name,
                        number: course.number,
                        credit: course.credit,
                        mid1_o: 0,
                        mid1_t: 15,
                        mid2_o: 0,
                        mid2_t: 15,
                        quiz_assign_o: 0,
                        quiz_assign_t: 20,
                        final_o: 0,
                        final_t: 50
                    }
                }else{
                    obj = {
                        name: course.name,
                        number: course.number,
                        credit: course.credit,
                        mid1_o: 0,
                        mid1_t: 25,
                        quiz_assign_o: 0,
                        quiz_assign_t: 25,
                        final_o: 0,
                        final_t: 50
                    }
                }
                CurrentCourse.push(obj);
                updateForm();
            }
        });
    });
}

searchBtn.addEventListener('click', ()=>{
    var name = searchBar?.value;
    while (searchContainer.firstChild) {
        searchContainer.removeChild(searchContainer.firstChild);
    }
    const table = document.createElement("table");

    // Table Header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    Object.keys(Courses[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });
    const th = document.createElement("th");
    th.textContent = "Action";
    headerRow.appendChild(th);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    for(let i=0; i < Courses.length; i++){
        if(searchCourse(name, Courses[i])){
            const row = document.createElement("tr");
            Object.values(Courses[i]).forEach(value => {
                const td = document.createElement("td");
                td.textContent = value;
                row.appendChild(td);
            });
            // Adding action button
            const td = document.createElement("td");
            const actionBtn = document.createElement("Button");
            actionBtn.innerText = "Add";
            actionBtn.prop = i;
            actionBtn.classList.add("ActionBtn");
            td.appendChild(actionBtn);
            row.appendChild(td);
            tbody.appendChild(row);
        }
    }
    table.appendChild(tbody);
    searchContainer.append(table);
    updateListener();
})
