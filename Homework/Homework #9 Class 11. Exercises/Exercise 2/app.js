// let str = 'String';
// let boolean = true;
// let number = 10;
// let defaultValueofPrimitiveTypes = undefined;
// let defaultValueofReferenceType = null;
// let arr = [];
// let obj = {};



let obj = {
    str:  'String',
    boolean: true,
    number: 10,
    defaultValueofPrimitiveTypes: undefined,
    defaultValueofReferenceType: null,
    arr: [,1,2,4],
    objct: {}
}

for (const property in obj) {
        alert(` ${property} ${obj[property]}`);
        console.log(`${property} ${obj[property]}`);
}
