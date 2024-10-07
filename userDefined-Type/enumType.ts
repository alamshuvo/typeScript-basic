// enum -store constants : duplicate value is not allowed here ;
// enum types:numiric,string numiric+string=hetergenous 

// numeric enum 
enum RequestType {
    ReadData=1,
    SaveData=5,
    DeleteData,
}
console.log(RequestType);

// string enum 
enum RequestTypeString{
    readData="Read Data",
    saveData="save data",
    deleteData="delete Data"
}
console.log(RequestTypeString.deleteData);
console.log(RequestType["ReadData"]);
console.log(RequestTypeString["deleteData"]);


enum RequestType3{
    readData="Read data"
    deleteData="delete data"
    id=101
}
console.log(RequestType3.id);
