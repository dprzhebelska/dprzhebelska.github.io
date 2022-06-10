
const lessons = [
    {instructor: "IM",
    day: "mon",
    time: "9AM",
    level: 1,
    type: "tiny",
    dis: "jump",
    participants: ["Leila (3)", "Patrick (4)"],
    open: false},

    {instructor: "CD",
    day: "tues",
    time: "10AM",
    level: 3,
    type: "semi",
    dis: "dres",
    participants: ["Jack (13)", "Aiden(14)", "Lily (12)"],
    open: false},

    {instructor: "AW",
    day: "wed",
    time: "4PM",
    level: 6,
    type: "semi",
    dis: "jump",
    participants: ["Daria", "Sophia"],
    open: false},

    {instructor: "IM",
    day: "thur",
    time: "8AM",
    level: 2,
    type: "group",
    dis: "hunt",
    participants: ["Catalina", "Cassandra", "Adam (17)"],
    open: true},

    {instructor: "CD",
    day: "fri",
    time: "12PM",
    level: 5,
    type: "semi",
    dis: "dres",
    participants: ["Sarah"],
    open: true},

    {instructor: "AW",
    day: "sat",
    time: "4PM",
    level: 4,
    type: "semi",
    dis: "hunt",
    participants: [],
    open: true},


    {instructor: "IM",
    day: "sun",
    time: "2PM",
    level: 2,
    type: "group",
    dis: "jump",
    participants: ["Ashley (7)", "Andrew(9)"],
    open: true},

    {instructor: "CD",
    day: "mon",
    time: "1PM",
    level: 6,
    type: "semi",
    dis: "dres",
    participants: ["Sophia", "Daria"],
    open: false},

    {instructor: "AW",
    day: "tues",
    time: "7PM",
    level: 1,
    type: "tiny",
    dis: "jump",
    participants: ["Patrick(4)"],
    open: true},


    {instructor: "IM",
    day: "wed",
    time: "6PM",
    level: 5,
    type: "group",
    dis: "jump",
    participants: ["Angelo (13)", "Shanon (16)", "Madison (15)", "Sydney (12)", "Josie (17)"],
    open: false},

    {instructor: "CD",
    day: "thur",
    time: "8PM",
    level: 3,
    type: "semi",
    dis: "hunt",
    participants: ["Allison", "Dorsa"],
    open: false},

    {instructor: "AW",
    day: "fri",
    time: "7PM",
    level: 4,
    type: "priv",
    dis: "jump",
    participants: ["Negar"],
    open: false},


    {instructor: "IM",
    day: "sat",
    time: "9AM",
    level: 5,
    type: "priv",
    dis: "jump",
    participants: [],
    open: true},

    {instructor: "CD",
    day: "sun",
    time: "3PM",
    level: 2,
    type: "group",
    dis: "dres",
    participants: [],
    open: true},

    {instructor: "AW",
    day: "mon",
    time: "5PM",
    level: 1,
    type: "tiny",
    dis: "jump",
    participants: ["Leila (3)"],
    open: true},


    {instructor: "IM",
    day: "tues",
    time: "5PM",
    level: 5,
    type: "group",
    dis: "jump",
    participants: ["Angelo (13)", "Shanon (16)", "Madison (15)", "Sydney (12)", "Josie (17)"],
    open: false},

    {instructor: "CD",
    day: "sat",
    time: "10AM",
    level: 3,
    type: "group",
    dis: "dres",
    participants: ["Leslie (12)", "Lily (12)"],
    open: true},

    {instructor: "AW",
    day: "sun",
    time: "11AM",
    level: 4,
    type: "semi",
    dis: "hunt",
    participants: ["Angelina (14)", "Ashley (12)", "Clara"],
    open: false}
];

    const hours = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM"];

    const rows = ['row-1', 'row-2', 'row-3', 'row-4', 'row-5', 'row-6', 'row-7',
    'row-8', 'row-9', 'row-10', 'row-11', 'row-12', 'row-13', 'row-14', 'row-15'];


    for (var i=0; i<rows.length;i++) {
        document.getElementById(rows[i]+"-h").innerHTML = "<h5>" + hours[i] +"</h5>";
    }

    document.getElementById("search").onclick = function() {newSearch()};


    function newSearch() {
        var insts = [];
        
        if (document.getElementById("inst1").checked){
            insts.push("IM");
        }
        if (document.getElementById("inst2").checked){
            insts.push("CD");
        }
        if (document.getElementById("inst3").checked){
            insts.push("AW");
        }

        var discs = [];
        if (document.getElementById("dis1").checked){
            discs.push("dres");
        }
        if (document.getElementById("dis2").checked){
            discs.push("hunt");
        }
        if (document.getElementById("dis3").checked){
            discs.push("jump");
        }

        var lev = 0;

        for (var i =1; i<=8; i++) {
            if (document.getElementById("l" + i).checked) {
                lev = i;
                break;
            }
        }


        for (var i=0; i<lessons.length;i++) {
            
            var tmp = Object.values(lessons[i]);
            instructor = tmp[0];
            day = tmp[1];
            time = tmp[2];
            level = tmp[3];
            type = tmp[4];
            // cap = 5 ? (type === "group") : 3 ? (type === "semi") : 1;
            dis = tmp[5];
            parts = tmp[6];
            isOpen = tmp[7];

            console.log(discs.includes(dis));
            console.log(dis);
            console.log(discs);

            var j = hours.indexOf(time);
            console.log(time);
            console.log(rows[j]+"-"+tmp[1]);
            document.getElementById(rows[j]+"-"+tmp[1]).innerHTML = "";

            
            
            
            if (insts.includes(instructor)) {
                if (discs.includes(dis)) {
                    console.log(lev);
                    console.log(level);

                    if (level === lev) {
                        if (isOpen) {
                            var final = `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"><h6>${time}, ${dis}, lvl ${level}, ${type}, ${instructor}</h6> <ul class="list-group list-group-flush text-center">`;
                            for (var k=0; k<parts.length; k++) {
                                final = final + `<li class="h6 list-group-item bg-primary text-white">${parts[k]}</li>`
                            }
                            final = final + "</ul></button>"
                        } else {
                            
                            var final = `<button type="button" class="btn btn-secondary" disabled><h6>${time}, ${dis}, lvl ${level}, ${type}, ${instructor}</h6> <ul class="list-group list-group-flush text-center">`;
                            for (var k=0; k<parts.length; k++) {
                                final = final + `<li class="h6 list-group-item bg-secondary">${parts[k]}</li>`
                            }
                            final = final + "</ul></button>"
                        }
                        
                        document.getElementById(rows[j]+"-"+tmp[1]).innerHTML = final; 
                    }
                }
            }
            
                 
        }
    
        document.getElementById("submit1").onclick = function() {togglea()};

    
        function togglea() {
            document.getElementById("alertPlaceHolder").innerHTML = '<div class="alert alert-success close alert-dismissible fade show" aria-label="Close" role="alert" id="success"> \
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button> \
            <strong>Success!</strong> A confirmation email was sent to your inbox. \
          </div>';
        }   

        
    
        document.getElementById("myModal").onmouseleave = function() {togglem()}
    
        function togglem() {
            document.getElementById("alertPlaceHolder").innerHTML = "";
        }
    }
    

    // const calendarInstance = calendar.getInstance(calendarElement);
    // calendarInstance.addEvents(events);
  
  