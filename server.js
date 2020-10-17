var express = require('express');
var request = require('request');
var alasql = require('alasql');
var port = process.env.PORT || 3030;
var compression = require('compression');
var app = express();
app.use(compression());

app.get('/api', function(req, res) {
    return res.json({
        description: 'end point zmbpediabogor.store data author ramahardiansidik@gmail.com / visit ramahardian.online'
    });
});

app.get("/api/kategori", function(req, res) {
    request({
        url: 'https://api.airtable.com/v0/appMmICDCO6mBhZYl/kategori?api_key=keysY3XpvIdkAd38I',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var bulk = [];
            var resd = alasql('SELECT * FROM ?', [html.records]);
            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                var id = resd[i].id;
                var idkategori = vall['id_kategori'];
                var namakategori = vall['nama_kategori'];

                bulk.push({
                    id: id,
                    idkategori: idkategori,
                    namakategori: namakategori
                });
            }
            res.send(bulk)
        }
    })
});

function removeSpecialChars(str) {
    return str.replace(/(?!\w|\s)./g, '')
        .replace(/\s+/g, ' ')
        .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
}

app.get("/api/caridata/:nama", function(req, res) {
    var namas = req.params.nama.replace(/-/g, " ");
    request({
        url: 'https://api.airtable.com/v0/appJnzRgVZn2IjPX6/product_data?api_key=keyn7tbnITsVXlugK',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql("SELECT * FROM ?", [html.records]);
            var myArrays = [];
            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                if (resd[i].fields['gambar']) {
                    var gb = resd[i].fields['gambar'][0]['thumbnails'].large.url;
                    var id = resd[i].id;
                    var filename = vall['gambar'][0]['filename'];
                    var satu = gb.split("/")[4];
                    var dua = gb.split("/")[5];
                    var gam = 'https://plant29.store/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_");
                } else {
                    var gam = ''
                }
                var namaproduk = vall['namaproduk'];
                var stok = vall['stok'];
                var harga = vall['harga'];
                var kategori = vall['kategori'];
                var deskripsi = vall['deskripsi'];
                var stokproduk = vall['stokproduk'];

                myArrays.push({
                    id: id,
                    namaproduk: namaproduk,
                    gambar: gam,
                    stok: stok,
                    harga: harga,
                    kategori: kategori,
                    deskripsi: deskripsi,
                    stokproduk: stokproduk
                });

            }
            var myArraysa = []
            var pur = removeSpecialChars(namas)
            var hasil = alasql("SELECT * FROM ? WHERE namaproduk LIKE ?", [myArrays, '%' + pur + '%']);
            var inputText = namas;
            for (var i = 0; i < hasil.length; i++) {
                var vall = hasil[i];
                var namaproduk = vall['namaproduk'].replace(new RegExp(namas, "gi"), (match) => `<span class="higlight">${match}</span>`);
                var stok = vall['stok'];
                var namaproduks = vall['namaproduk'];
                var harga = vall['harga'];
                var id = vall['id'];
                var kategori = vall['kategori'];
                var deskripsi = vall['deskripsi'];
                var stokproduk = vall['stokproduk'];
                var gambar = vall['gambar'];

                myArraysa.push({
                    id: id,
                    namaproduk: namaproduk,
                    namaproduks: namaproduks,
                    gambar: gambar,
                    stok: stok,
                    harga: harga,
                    kategori: kategori,
                    deskripsi: deskripsi,
                    stokproduk: stokproduk
                });
            }
            res.send({ data: myArraysa });
        }
    })
});

app.get("/api/catalogdata", function(req, res) {
    function shuffle(o) { //v1.0
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    request({
        url: 'https://api.airtable.com/v0/appMmICDCO6mBhZYl/produk?api_key=keysY3XpvIdkAd38I',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql('SELECT * FROM ?', [html.records]);
            var myArrays = []
            var keyArray = Object.keys(resd);
            keyArray = shuffle(keyArray)
            if (resd[0].fields['gambar_produk']) {
                var vall = resd[keyArray[0]].fields;
                var namaprodukur = vall['nama_produk'];
                var gambar = vall['gambar_produk'][0]['thumbnails'].large.url;
                var filename = vall['gambar_produk'][0]['filename'];
                var satu = gambar.split("/")[4];
                var dua = gambar.split("/")[5];
                var gamm = 'https://zmbpediabogor.store/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_");
            } else {
                var namaprodukur = ''
                var gamm = ''
            }

            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;

                if (resd[i].fields['gambar_produk']) {
                    var gb = resd[i].fields['gambar_produk'][0]['thumbnails'].large.url;
                    var id = resd[i].id;
                    var filename = vall['gambar_produk'][0]['filename'];
                    var satu = gb.split("/")[4];
                    var dua = gb.split("/")[5];
                    var gam = 'https://zmbpediabogor.store/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_");
                } else {
                    var gam = ''
                }
                var namaproduk = vall['nama_produk'];
                var stok = vall['stok_produk'];
                var harga = vall['harga_produk'];
                var kategori = vall['kategori_produk'];
                var deskripsi = vall['deskripsi-produk'];
          
                myArrays.push({
                    id: id,
                    namaproduk: namaproduk,
                    gambar: gam,
                    stok: stok,
                    harga: harga,
                    kategori: kategori,
                    deskripsi: deskripsi
                });

            }
            res.send({ data: myArrays, ogimg: gamm, alt: namaprodukur });
        }
    })
});


app.get("/api/aboutdata", function(req, res) {
    request({
        url: 'https://api.airtable.com/v0/appJnzRgVZn2IjPX6/tentang_kami?api_key=keyn7tbnITsVXlugK',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql('SELECT * FROM ?', [html.records]);
            var myArrays = []
            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                var id = resd[i].id;
                var deskripsi = vall['deskripsi'];
                var gambar = vall['photo'][0]['thumbnails'].large.url;
                var filename = vall['photo'][0]['filename'];
                var satu = gambar.split("/")[4];
                var dua = gambar.split("/")[5];
                var stokproduk = vall['stokproduk'];
                myArrays.push({
                    id: id,
                    deskripsi: deskripsi,
                    photo: 'https://zmbpediabogor.store/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_")
                });
            }
            res.send(myArrays);
        }
    })
});

app.get("/api/tremdata", function(req, res) {
    request({
        url: 'https://api.airtable.com/v0/appJnzRgVZn2IjPX6/trem?api_key=keyn7tbnITsVXlugK',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql('SELECT * FROM ?', [html.records]);
            var myArrays = []
            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                var id = resd[i].id;
                var deskripsi = vall['deskripsi'];
                var gambar = vall['photo'][0]['thumbnails'].large.url;
                var filename = vall['photo'][0]['filename'];
                var satu = gambar.split("/")[4];
                var dua = gambar.split("/")[5];
                var stokproduk = vall['stokproduk'];
                myArrays.push({
                    id: id,
                    deskripsi: deskripsi,
                    photo: 'https://zmbpediabogor.store/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_")
                });
            }
            res.send(myArrays);
        }
    })
});

app.get("/api/shipingdata", function(req, res) {
    request({
        url: 'https://api.airtable.com/v0/appJnzRgVZn2IjPX6/shiping?api_key=keyn7tbnITsVXlugK',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql('SELECT * FROM ?', [html.records]);
            var myArrays = []
            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                var id = resd[i].id;
                var deskripsi = vall['deskripsi'];
                var gambar = vall['photo'][0]['thumbnails'].large.url;
                var filename = vall['photo'][0]['filename'];
                var satu = gambar.split("/")[4];
                var dua = gambar.split("/")[5];
                var stokproduk = vall['stokproduk'];
                myArrays.push({
                    id: id,
                    deskripsi: deskripsi,
                    photo: 'https://plant29.store/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_")
                });
            }
            res.send(myArrays);
        }
    })
});

app.get('/bulk/item-gambar/:idone/:idtwo/:file', function(req, res) {
    var file = req.params.file.replace(/_/g, " ");
    var idtwo = req.params.idtwo;
    var idone = req.params.idone;
    var url = 'https://dl.airtable.com/.attachmentThumbnails/' + idone + '/' + idtwo
    request({
        url: url,
        method: "HEAD",
        tunnel: true,
        gzip: true,
        proxy: false,
        followRedirect: false
    }, function(err, headRes) {
        if (!err) {
            var size = headRes.headers['content-length'];
            const fileSize = size
            //console.log(fileSize)
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'image/jpeg',
                'Cache-Control': 'max-age=3600'
            }
            res.writeHead(200, head)
            request.get(url).pipe(res);
        }
    })
})


app.get("/api/homie", function(req, res) {
    function shuffle(o) { //v1.0
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    request({
        url: "https://api.airtable.com/v0/appMmICDCO6mBhZYl/produk?api_key=keysY3XpvIdkAd38I",
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql('SELECT * FROM ? order by id ASC LIMIT 4', [html.records]);
            var myArrays = []
            var keyArray = Object.keys(resd);
            keyArray = shuffle(keyArray)

            for (var i = 0; i < resd.length; i++) {
                var vall = resd[keyArray[i]].fields;
                var id = resd[keyArray[i]].id;
                var namaproduk = vall['nama_produk'];
                var gambar = vall['gambar_produk'][0]['thumbnails'].large.url;
                var filename = vall['gambar_produk'][0]['filename'];
                var satu = gambar.split("/")[4];
                var dua = gambar.split("/")[5];
                var kategori = vall['kategori_produk'];
            
                myArrays.push({
                    id: id,
                    namaproduk: namaproduk,
                    gambar: 'https://zmbpediabogor.store/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_"),
                    kategori: kategori
                 
                });

            }
            res.send(myArrays);
        }
    })
});


app.get("/api/slide", function(req, res) {

    request({
        url: "https://api.airtable.com/v0/appMmICDCO6mBhZYl/slide?api_key=keysY3XpvIdkAd38I",
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql('SELECT * FROM ?', [html.records]);
            var myArrays = []
      

            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                var id = resd[i].id;
                var desk = vall['deskripsi_slide'];
           
                var mini = vall['mini_deskripsi'];
                var gambar = vall['gambar_slide'][0]['thumbnails'].large.url;
                var filename = vall['gambar_slide'][0]['filename'];
                var satu = gambar.split("/")[4];
                var dua = gambar.split("/")[5];

 

                myArrays.push({
                    id: id,
                    desk: desk,
                    mini: mini, 
                         mini: mini,
                    gambar: 'https://zmbpediabogor.store/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_")
                 
                });

            }
            res.send(myArrays);
        }
    })
});


app.get("/api/productdata/:id/:nama", function(req, res) {

    request({
        url: 'https://api.airtable.com/v0/appJnzRgVZn2IjPX6/product_data?api_key=keyn7tbnITsVXlugK',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var iddata = req.params.id
            var names = req.params.nama.replace(/-/g, ' ');

            var resd = alasql('SELECT * FROM ?', [html.records]);
            var myArrays = []
            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;

                var id = resd[i].id;
                var nama = resd[i].namaproduk;

                if (id == iddata) {

                    var namaproduk = vall['namaproduk'];
                    if (resd[i].fields['gambar']) {
                        var gambar = vall['gambar'][0]['thumbnails'].large.url;
                        var filename = vall['gambar'][0]['filename'];
                        var satu = gambar.split("/")[4];
                        var dua = gambar.split("/")[5];
                        var gam = 'https://plant29.store/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_");
                    } else {
                        var gam = '';
                    }

                    var stok = vall['stok'];
                    var harga = vall['harga'];
                    var kategori = vall['kategori'];
                    var deskripsi = vall['deskripsi'];
                    var stokproduk = vall['stokproduk'];
                    var cronical = 'https://plant29.store/product/' + id + '/' + names.replace(/\s/g, "-");

                    if (namaproduk == names) {


                        myArrays.push({
                            id: id,
                            namaproduk: namaproduk,
                            gambar: gam,
                            stok: stok,
                            harga: harga,
                            kategori: kategori,
                            deskripsi: deskripsi,
                            stokproduk: stokproduk,
                            cronical: cronical
                        });

                    }
                }
            }
            res.send(myArrays);
        }
    })
});


app.get("/api/kategoryproduct/:kat/:name", function(req, res) {

    request({
           url: 'https://api.airtable.com/v0/appMmICDCO6mBhZYl/kategori?api_key=keysY3XpvIdkAd38I',
        json: true
    }, function(error, response, html) {
        if (!error) {
            var resd = alasql('SELECT * FROM ?', [html.records]);

            var katdat = [];
            for (var i = 0; i < resd.length; i++) {
                var vall = resd[i].fields;
                var namakategori = vall['namakategori'];
                katdat.push(namakategori)
            }

            request({
                url: 'https://api.airtable.com/v0/appMmICDCO6mBhZYl/produk?api_key=keysY3XpvIdkAd38I',
                json: true
            }, function(error, response, html) {
                if (!error) {
                    var kategoris = req.params.kat;
                    var resd = alasql('SELECT * FROM ?', [html.records]);
                    var myArrays = [];
                    var names = req.params.name.replace(/-/g, ' ');
                    var arraycontainsturtles = (katdat.indexOf(names) > -1);

                    if (arraycontainsturtles) {

                        for (var i = 0; i < resd.length; i++) {
                            var vall = resd[i].fields;
                            var id = resd[i].id;
                            var kategori = vall['kategori_produk'];

                            if (kategori == kategoris) {
                                var namaproduk = vall['nama_produk'];
                                if (resd[i].fields['gambar_produk']) {
                                    var gambar = vall['gambar_produk'][0]['thumbnails'].large.url;
                                    var filename = vall['gambar_produk'][0]['filename'];
                                    var satu = gambar.split("/")[4];
                                    var dua = gambar.split("/")[5];
                                    var gam = 'https://zmbpediabogor.store/bulk/item-gambar/' + satu + '/' + dua + '/' + filename.replace(/\s/g, "_");
                                } else {
                                    var gam = '';
                                }

                                if (resd[0].fields['gambar_produk']) {
                                    var gambard = vall['gambar_produk'][0]['thumbnails'].large.url;
                                    var filenamea = vall['gambar_produk'][0]['filename'];
                                    var satua = gambard.split("/")[4];
                                    var duaa = gambard.split("/")[5];
                                    var gams = 'https://zmbpediabogor.store/bulk/item-gambar/' + satua + '/' + duaa + '/' + filenamea.replace(/\s/g, "_");
                                } else {
                                    var gams = '';
                                }


                                var stok = vall['stok_produk'];
                                var harga = vall['harga_produk'];
                                var kategori = vall['kategori_produk'];
                                var deskripsi = vall['deskripsi_produk'];
                                var cronical = 'https://zmbpediabogor.store/kategori/' + kategori + '/' + names.replace(/\s/g, "-");

                                myArrays.push({
                                    id: id,
                                    namaproduk: namaproduk,
                                    gambar: gam,
                                    stok: stok,
                                    harga: harga,
                                    kategori: kategori,
                                    deskripsi: deskripsi,
                                    oggambar: gams,
                                    cronical: cronical
                                });
                            }
                        }

                    }
                    res.send({ data: myArrays, gambarog: gams, namatitle: req.params.name.replace(/\s/g, "-") });
                }
            })

        }
    })


});





//module.exports = app;
// listen for requests :)

var listener = app.listen(port, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});