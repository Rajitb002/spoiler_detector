//Loading the libraries
const {exec} = require('child_process');
exec('npm install @nlpjs/basic',(error,stdout,stderr) =>{
    if(error){
        console.error('exec error: ${error}');
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});

//NLP stuff
const {dockStart} = require('@nlpjs/basic')
async() =>{
const dock = await dockStart();
const nlp = dock.get('nlp');
};
