var Client = require('ftp');
var client = new Client();
var path = require('path');

//待上传的文件
var __assets__ = [];
//是否已经连接
var __connected__ = false;

var __conf__ = null;

function uploadFile(startTime){
    var file = __assets__.shift();
    if(!file) return client.end();
    client.put(file.source, file.remotePath, function(err){
        var timming = Date.now() - startTime;
        if(err){
            console.log('error',err);
            console.log('上传失败:',file.remotePath);
        }else{
            console.log('上传成功:',file.remotePath,timming + 'ms');
        }
        if (__assets__length === 0){
            client.end();
        }else{
            uploadFile(Date.now());
        }
    })
}

//发起连接
function connect(conf){
    if (!__connected__){
        client.connect(__conf__);
    }
}

//连接成功
client.on('ready',function(){
    __connected__ = true;
    uploadFile(Date.now());
})

//连接关闭
client.on('close',function(){
    __connected__ = false;
    if (__assets.length > 0 ) connect();
})

function deployWithFtp(conf, assets, callback) {
    __conf__ = conf;
    __assets__ = __assets__.concat(assets);
    connect();
}

function DeployPlugin(conf, options){
    this.conf = conf;
    this.options = options;
}

DeployPlugin.prototype.apply = function(compiler){
    var conf = this.conf;
    var options = this.options;
    compiler.plugin('done',function(stats){
        var files = [];
        var assets = stats.compilation.assets;
        for(var name in assets){
            options.map(function(cfg){
                if(cfg.reg.test(name)){
                    files.push({
                        locaPath:name,
                        remotePath:path.join(cfg.to,name),
                        source: new Buffer(assets[name].source(),'utf-8')
                    })
                }
            })
        }
        deployWithFtp(conf,files);
    })
}

module.exports = DeployPlugin;
