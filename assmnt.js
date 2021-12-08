function validateString(string){
    let length=string.length
    var pattern=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$")
    
    if(pattern.test(string)&length>=8){
        return true
    }
    else{
        return false
    }
    
}
console.log(validateString("Helloworld123#"));