const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) return reject('Numbers must bo non-negative');

            resolve(a + b);
        }, 2000);
    });
};

const doWork = async () => {
    const sum = await add(1, 99);
    const sum2 = await add(sum, 50);
    const sum3 = await add(sum2, 1);
    return sum3;
};

const doWork2 = async () => {
    const sum = await add(1, 99);
    return sum;
};

doWork()
    .then((result) => {
        console.log('result ', result);
        return doWork2();
    })
    .then((result2) => {
        console.log('result2 ', result2);
    })
    .catch((err) => {
        console.log(err);
    });
