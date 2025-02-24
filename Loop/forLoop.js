for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        process.stdout.write((i * j).toString().padEnd(4)); // Print in a row
    }
    console.log(); // Move to the next line
}
