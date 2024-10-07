// enum -store constants : duplicate value is not allowed here ;
// enum types:numiric,string numiric+string=hetergenous 
// numeric enum 
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 1] = "ReadData";
    RequestType[RequestType["SaveData"] = 5] = "SaveData";
    RequestType[RequestType["DeleteData"] = 6] = "DeleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
// string enum 
var RequestTypeString;
(function (RequestTypeString) {
    RequestTypeString["readData"] = "Read Data";
    RequestTypeString["saveData"] = "save data";
    RequestTypeString["deleteData"] = "delete Data";
})(RequestTypeString || (RequestTypeString = {}));
console.log(RequestTypeString.deleteData);
console.log(RequestType["ReadData"]);
console.log(RequestTypeString["deleteData"]);
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "Read data";
    RequestType3["deleteData"] = "delete data";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3.id);
