/* source: https://medium.com/@jurshsmith/compare-the-triplets-hackerrank-19e1f838fdf3 */

function compareTriplets(a,b) {
    const{a,B} = a.reduce((acc,cur) => {
        const{counter} = acc;
        if(a[counter] > b[counter]) {
            acc.A++;
        } else if (a[counter] < b[counter]) {
            acc.B++;
        }
        acc.counter++;
        return acc;
    }, {A:0,B:0,counter:0});
    return[A,B];
}
