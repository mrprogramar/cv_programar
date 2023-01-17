const persona = '{"gender": "female","title": "Miss","first_name": "Jennie","last_name": "Nichols",\
                 "street": "Valwood Pkwy","number": 8929,"city": "Billings","state": "Michigan",\
                 "country": "United States","postcode": "63104",\
                 "latitude": "-69.8246", "longitude": "134.8719",\
                 "timezone_offset": "+9:30","timezone_description": "Adelaide, Darwin",\
                 "email": "jennie.nichols@example.com",\
                 "login_uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",\
                 "login_username": "yellowpeacock117",\
                 "login_password": "addison",\
                 "login_salt": "sld1yGtd",\
                 "login_md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",\
                 "login_sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",\
                 "login_sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d",\
                 "dob_date": "1992-03-08T15:13:16.688Z",\
                 "dob_age": 30,\
                 "registered_date": "2007-07-09T05:51:59.390Z",\
                 "registered_age": 14,\
                 "phone": "(272) 790-0888",\
                 "cell": "(489) 330-2385",\
                 "id_name": "SSN",\
                 "id_value": "405-88-3636",\
                 "picture_large": "https://randomuser.me/api/portraits/men/75.jpg",\
                 "picture_medium": "https://randomuser.me/api/portraits/med/men/75.jpg",\
                 "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg",\
                 "nat": "US",\
                 "info_seed": "56d27f4a53bd5441",\
                 "info_results": 1,\
                 "info_page": 1,\
                 "info_version": "1.4"}';

const obj = JSON.parse(persona);
//console.log(obj);
//console.log("Nombre: "+ obj.first_name)
document.getElementById("nombre").innerHTML = 
        obj.title + " " + obj.first_name +" "+ obj.last_name
document.getElementById("edad").innerHTML = 
        "Age: "+ obj.dob_age
document.getElementById("nacionalidad").innerHTML = 
        "Nationality: "+ obj.nat
document.getElementById("geolocalizacion").innerHTML = 
        "Post Code: "+ obj.postcode
document.getElementById("ciudad").innerHTML = 
        "City: "+ obj.city+" | State: "+obj.state+" | Country: "+obj.country
document.getElementById("contacto").innerHTML = 
        "Phone: "+ obj.phone+" | cell: "+obj.cell+" | Email: "+obj.email

