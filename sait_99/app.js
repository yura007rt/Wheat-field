var express = require('express');
var nodemailer = require("nodemailer");
var app = express();
var bodyParser = require('body-parser');
module.exports = app;
app.use(bodyParser.json());
app.post('/getResource', function (req, res) {
    console.log("Your request:" + req.body.toString());
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({name: 'Yura', lastName: 'Golovinskiy', workPlace: 'notJob'}));
});
/*Обратная форма связи.*/
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));
/*Форма обратной связи*/
app.get('/email_form', function(req,res){
    res.sendfile(__dirname + '/page/email_form.html');
    console.log('NodeMailer reading console log...' + req.url);
});

// Отправка сообщения
//Валидация на пустые поля
app.post('/send', function(req, res){
    if(req.body.email == "" || req.body.subject == ""||req.body.description == "") {
        res.send("Заполните пустые поля");
        return false;
    }
    // (Парметры)
    var smtpTransport = nodemailer.createTransport({
        host: "smtp.gmail.com", // hostname
        secureConnection: true, // use SSL
        port: 465, // port for secure SMTP
        auth: {
            user: 'markizoloto@gmail.com',
            pass: 'perchik007'
        }
    });
    var mailOptions = {
        from: "Ювелирный салон Маркиз ✔ <markizoloto@gmail.com>", // адресс который придёт в заглавие
        to:  req.body.email, // Текст Сообщения
        subject: req.body.subject+" ✔", // Subject line
        //text: "Hello world ✔", // plaintext body
        html: "<p><b>"+req.body.description+"</b></p>"+"<p>Это сообщение <b>копия</b>, вашего отправленного Нам. <b>Пожалуйста</b>, не отвечайте на него. В скором времени мы с <b>Вами</b> свяжемся.</p>" // html body
    };
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            res.send("Сообщение не было отправлено из-за ошибки: "+error);
        }else{
            res.send("Сообщение было успешно отправлено. Его копия отправлена вам на почту.");
        }
    });
});

/*Главные страницы Главная, Услуги, Галлерея (Женская Мужская) О нас*/
app.get('/', function(req,res){
    res.sendfile(__dirname + '/index.html');
});
app.get('/uslugi', function(req,res){
    res.sendfile(__dirname + '/page/uslugi.html');
});
app.get('/contact', function(req,res){
    res.sendfile(__dirname + '/page/contact.html');
});
app.get('/woman_gallary', function(req,res){
    res.sendfile(__dirname + '/page/woman_gallary.html');
});

/*Остальные страницы*/

/*Галлерея*/
app.get('/ring', function(req,res){
    res.sendfile(__dirname + '/page/gallary/ring.html');
});
app.get('/cepochki', function(req,res){
    res.sendfile(__dirname + '/page/gallary/cepochki.html');
});
app.get('/braslet_woman', function(req,res){
    res.sendfile(__dirname + '/page/gallary/braslet_woman.html');
});
app.get('/sergi', function(req,res){
    res.sendfile(__dirname + '/page/gallary/sergi.html');
});


/*Изображения для Галлереи*/
/*Кольца*/
app.get('/images/gallary/ring_1.png', function(req,res){
    res.sendfile(__dirname + '/images/gallary/ring_1.png');
});
app.get('/images/gallary/slaid/1ring_1.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/1ring_1.jpg');
});
app.get('/images/gallary/slaid/1ring_2.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/1ring_2.jpg');
});
app.get('/images/gallary/slaid/1ring_3.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/1ring_3.jpg');
});
app.get('/images/gallary/slaid/2ring.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/2ring.jpg');
});
app.get('/images/gallary/slaid/3ring.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/3ring.jpg');
});
app.get('/images/gallary/slaid/4ring.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/4ring.jpg');
});
app.get('/images/gallary/slaid/5ring.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/5ring.jpg');
});
app.get('/images/gallary/slaid/6ring.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/6ring.jpg');
});
/*Серьги*/
app.get('/images/gallary/slaid/sergi1.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/sergi1.jpg');
});
app.get('/images/gallary/slaid/sergi2.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/sergi2.jpg');
});
app.get('/images/gallary/slaid/sergi3.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/sergi3.jpg');
});
app.get('/images/gallary/slaid/sergi4.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/sergi4.jpg');
});
app.get('/images/gallary/slaid/sergi5.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/sergi5.jpg');
});
/*Браслеты*/
app.get('/images/gallary/slaid/br1.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/br1.jpg');
});
app.get('/images/gallary/slaid/br2.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/br2.jpg');
});
app.get('/images/gallary/slaid/br3.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/br3.jpg');
});
/*Цепочки*/
app.get('/images/gallary/slaid/cepi1.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/cepi1.jpg');
});
app.get('/images/gallary/slaid/cepi2.jpg', function(req,res){
    res.sendfile(__dirname + '/images/gallary/slaid/cepi2.jpg');
});

/*Скрипты*/
app.get('/js/main.js', function(req,res){
    res.sendfile(__dirname + '/js/main.js');
});

    /*Библиотеки*/
app.get('/node_modules/jquery/dist/jquery.min.js', function(req,res){
    res.sendfile(__dirname + '/node_modules/jquery/dist/jquery.min.js');
});
app.get('/node_modules/jquery-mousewheel/jquery.mousewheel.js', function(req,res){
    res.sendfile(__dirname + '/node_modules/jquery-mousewheel/jquery.mousewheel.js');
});

/**/
/*Стили для страниц*/
app.get('/style/style.css', function(req,res){
    res.sendfile(__dirname + '/style/style.css');
});
app.get('/style/sbros.css', function(req,res){
    res.sendfile(__dirname + '/style/sbros.css');
});
app.get('/style/style.min.css', function(req,res){
    res.sendfile(__dirname + '/style/style.min.css');
});
app.get('/style/slaid_bar.css', function(req,res){
    res.sendfile(__dirname + '/style/slaid_bar.css');
});



/*Шрифты и иконки*/
app.get('/icon/style.css', function(req,res){
    res.sendfile(__dirname + '/icon/style.css');
});
app.get('/icon/fonts/icomoon.svg', function(req,res){
    res.sendfile(__dirname + '/icon/fonts/icomoon.svg');
});
app.get('/icon/fonts/icomoon.eot', function(req,res){
    res.sendfile(__dirname + '/icon/fonts/icomoon.eot');
});
app.get('/icon/fonts/icomoon.ttf', function(req,res){
    res.sendfile(__dirname + '/icon/fonts/icomoon.ttf');
});
app.get('/icon/fonts/icomoon.woff', function(req,res){
    res.sendfile(__dirname + '/icon/fonts/icomoon.woff');
});

/*Фоновые изображения*/
app.get('/images/fon11.png', function(req,res){
    res.sendfile(__dirname + '/images/fon11.png');
});
app.get('/images/fon2.png', function(req,res){
    res.sendfile(__dirname + '/images/fon2.png');
});
app.get('/images/fon3.png', function(req,res){
    res.sendfile(__dirname + '/images/fon3.png');
});
app.get('/images/fon4.png', function(req,res){
    res.sendfile(__dirname + '/images/fon4.png');
});
app.get('/images/fon5.png', function(req,res){
    res.sendfile(__dirname + '/images/fon5.png');
});
app.get('/images/fon6.png', function(req,res){
    res.sendfile(__dirname + '/images/fon6.png');
});
app.get('/images/emblema.png', function(req,res){
    res.sendfile(__dirname + '/images/emblema.png');
});



app.listen(3000, function () {
    console.log('Listening on port 3000...');
});



