let score = parseInt(prompt("Enter your score (0-100):"));

if (score >= 90 && score <= 100) {
    console.log("Grade: A");
    if (score >= 98) {
        console.log("Excellent!");
    } else {
        console.log("Good job!");
    }
} else if (score >= 80 && score <= 89) {
    console.log("Grade: B");
    if (score >= 88) {
        console.log("Excellent!");
    } else {
        console.log("Good job!");
    }
} else if (score >= 70 && score <= 79) {
    console.log("Grade: C");
    if (score >= 78) {
        console.log("Excellent!");
    } else {
        console.log("Good job!");
    }
} else if (score >= 60 && score <= 69) {
    console.log("Grade: D");
    if (score >= 68) {
        console.log("Excellent!");
    } else {
        console.log("Good job!");
    }
} else if (score < 60 && score >= 0) {
    console.log("Grade: F");
    console.log("Good job!");
} else {
    console.log("Invalid score!");
}

