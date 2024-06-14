let operationArithmetical = new Promise((resolve) => {
    resolve(5 + 8);
});
operationArithmetical.then(result => {
    console.log(result);
});

