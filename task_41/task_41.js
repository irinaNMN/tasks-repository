let operationArithmetical = new Promise((resolve, reject) => {
    resolve(5 + 8);
});
operationArithmetical.then(result => {
    console.log(result);
});

