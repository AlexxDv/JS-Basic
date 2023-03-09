function vacationBooksList(input){
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerBook = Number(input[2]);  

    console.log((totalPages/pagesPerHour)/daysPerBook)

}

vacationBooksList(["212 ","20 ","2 "])
vacationBooksList(["432 ","15 ","4 "])


