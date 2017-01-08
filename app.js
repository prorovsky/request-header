var express = require('express'),
    app = express(),
    data = {
        ipAddress: '',
        language: '',
        software: ''
    };

app.get('/api/whoami', function(req, res){
    data.ipAddress = req.headers['x-forwarded-for'].split(',')[0] || req.ip;
    data.language = req.headers['accept-language'].split(",")[0];
    data.software = req.headers['user-agent'].match(/(\(.+?\))/)[0];
    res.json(data);
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Server started...')
});