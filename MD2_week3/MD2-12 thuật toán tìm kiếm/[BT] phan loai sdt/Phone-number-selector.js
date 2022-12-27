var vinaPhone = ['085', '081', '082'];
var mobiPhone = ['070', '079', '077'];
var viettel = ['037', '038', '039'];
var tempPhoneNumber = ['038998339', '0858373', '070736466', '0123456789'];
function check() {
    for (var i = 0; i < tempPhoneNumber.length; i++) {
        var phone = tempPhoneNumber[i].substring(0, 3);
        console.log(phone);
        for (var j = 0; j < 4; j++) {
            if (phone === vinaPhone[j]) {
                console.log("VinaPhone");
                break;
            }
            if (phone === mobiPhone[j]) {
                console.log("MobilePhone");
                break;
            }
            if (phone === viettel[j]) {
                console.log("Viettel");
                break;
            }
            if (phone !== vinaPhone[j] && phone !== mobiPhone[j] && phone !== viettel[j]) {
                console.log("No");
                break;
            }
        }
    }
}
check();
