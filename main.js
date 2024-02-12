

// -------------------- 1. STUDENT NAMES ----------------------------------------
/*var cohortOneStudents = ["Sable", "David", "Joey",
 "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", 
 "Nikki", "Matt", "Dale", "Sydney"];

 for(i=0; i < cohortOneStudents.length; i++) {
    console.log(cohortOneStudents[i]);
 };*/




 // ---------------- 2. INTERESTS --------------------------------------------------------------------
 /*var interests = ["running", "lifting", "coding", "sitcoms", "games" ];

 for(i=0;i<interests.length;i++) {
    console.log("One of my interests is: " + interests[i]);
 }; */



 // ----------------- 3. FAVORITE INTEREST ------------------------------------------------------------
 var interests = ["running", "lifting", "coding", "sitcoms", "games" ];
 var favInt = "coding";

 for(i=0;i<interests.length;i++) {
    console.log("One of my interests is: " + interests[i]);
        if(interests[i] == "coding") {
            console.log("My absolute favorite interest is:" + interests[2]);
        }
 }


