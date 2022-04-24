const fs = require('fs');

class Container{
    constructor(file){
        this.file = file;
    }
    
    async getAllProducts(){
        try{   
            if(fs.existsSync(this.file)){
                const data = await fs.promises.readFile(this.file, 'utf-8');         
                return data;
            }
        }
        catch(err){
            return `Error: ${err}`;
        }  
    }    
}

module.exports = Container;
