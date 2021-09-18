// let name;
// let value = "1";
// let ipk = "0.5";


// let year = 1970;
// let month = 9;
// let day = 18;

// let boolExample = name===undefined;


// console.log(typeof isOld)


function eyes(){
    console.log("Untuk melihat");
}

function mouth(){
    console.log("Untuk berbicara");
}

function head(){
    eyes();
    mouth();
}

function checkIsOld(year){
    let isOld = 2021 - year >= 40;
    if(isOld){
        console.log("Tua");
    } else if(2021 - year < 40){
        console.log("Muda");
    } else {
        console.log("Silahkan masukkan tahun kelahiran kamu");
    }
}

function checkIsOdd(value){
    if(value % 2 == 0){
        console.log("Genap");
    } else {
        console.log("Ganjil");
    }
}

checkIsOdd(3);
