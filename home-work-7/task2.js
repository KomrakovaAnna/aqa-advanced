function numberRec(num) {
    console.log(num);
    
    if (num > 0) {
        numberRec(num - 1);
    }
};

const num = 5;
numberRec(num);