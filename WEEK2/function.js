const dataChecker = (str, rank) => {
    if (str == "codenation" && rank == 1) {
        console.log(`Both ${str} and the ranking ${rank} are correct.`)
    }
    else if (str == "codenation" && rank != 1) {
        console.log(`The ${str} is correct but rank is wrong.`)
    }
    else {
        console.log(`Both ${str} and/ or the ranking ${rank} are wrong`)
    }
}

dataChecker("codenation", 1)
