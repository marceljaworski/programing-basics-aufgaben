function node(){
    console.log("1. node version: ")
    return  process.version;
}
if (process.argv[2]== "node") console.log(node());

function os(){
    console.log("2. os: ")
    return process.platform + " " + process.arch;
}
if (process.argv[2]== "os") console.log(os(process));

function directory(){
    console.log(`3. a)Filename b)Directory name`)
    return  "a)" + __filename + " b)" + __dirname;
}
if (process.argv[2]== "directory") console.log(directory(process));


if(process.argv[2]== "alle") console.log(`1. ${node(process)} 2. ${os(process)} 3. ${directory(process)}`);
