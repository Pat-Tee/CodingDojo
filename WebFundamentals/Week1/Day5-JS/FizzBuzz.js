for (i = 0; i <= 100; i++) {
    let three = i % 3 == 0;
    let five = i % 5 == 0;
    if (three)
        if (five)
            console.log(i + ": FizzBuzz");
        else
            console.log(i + ": Fizz");
    else
        console.log(i);

}