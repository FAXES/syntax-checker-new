var fs = require('fs');
os = require('os');
exec = require('child_process').exec;

function makeid(length) {
    if(!length) length = 40;
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

exports.checkSyntaxString = async function(string, language, callback) {
    fileId = makeid();
    string = string || ``;
    language = language || '.php'
    fs.writeFile(`${__dirname}/files/${fileId}.${language}`, string, 'utf8', (err) => {
        if (err) console.log(err);
    });

    if(language == 'php') {
        exec(`php -l ${__dirname}/files/${fileId}.php`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'py') {
        exec(`python3 -m py_compile ${__dirname}/files/${fileId}.py`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'rb') {
        exec(`ruby -c ${__dirname}/files/${fileId}.rb`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'pl') {
        exec(`perl -c ${__dirname}/files/${fileId}.pl`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'lua') { // BROKEN
        exec(`luac -p ${__dirname}/files/${fileId}.lua`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'sh') { // BROKEN
        exec(`bash -n ${__dirname}/files/${fileId}.sh`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'c') {
        exec(`gcc -fsyntax-only -Werror ${__dirname}/files/${fileId}.c`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'cpp') {
        exec(`gcc -fsyntax-only -Werror ${__dirname}/files/${fileId}.cpp`, function(err, stdout, stderr){
            if(err){
                console.log(err)
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'js') {
        exec(`node --check ${__dirname}/files/${fileId}.js`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }
}


exports.checkSyntaxFile = async function(filePath, language, callback) {
    language = language || '.php'

    if(language == 'php') {
        exec(`php -l ${filePath}`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'py') {
        exec(`python3 -m py_compile ${filePath}`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'rb') {
        exec(`ruby -c ${filePath}`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'pl') {
        exec(`perl -c ${filePath}`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'lua') { // BROKEN
        exec(`luac -p ${filePath}a`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'sh') { // BROKEN
        exec(`bash -n ${filePath}`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'c') {
        exec(`gcc -fsyntax-only -Werror ${filePath}`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'cpp') {
        exec(`gcc -fsyntax-only -Werror ${filePath}`, function(err, stdout, stderr){
            if(err){
                console.log(err)
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }

    if(language == 'js') {
        exec(`node --check ${filePath}`, function(err, stdout, stderr){
            if(err){
                callback({passed: false, error: null});
                return;
            }
            callback({passed: true, error: null});
        });
    }
}