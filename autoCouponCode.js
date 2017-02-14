/*
---使用方法---
每一組coupon的資訊格式如下：
"0": {
    "status":true,
    "time": ["2017/2/01,00:00:00", "2017/2/01,23:59:59"],
    "code": "App1701600a"
}

說明：
"0": coupon code資料編號,起始編號為0,按需求數量可自由新增,例如coupon有3組,那就要新增"0","1","2"三組資料
"status": 該組coupon code的狀態,設定為true表示還有優惠券,設定為fasle表示優惠券領完了
"time": 該組coupon code的期間,前者為起始時間,後者為結束時間
"code": 即coupon code

edit by William 2017/2/14.
---
*/
var dateRecorder = {},
    coupon = {
    "0": {                                                      //coupon id
        "status": true,                                         //coupon狀態
        "time": ["2017/2/01,00:00:00", "2017/2/06,23:59:59"],   //coupon有效期間
        "code": "App1701600a"                                   //coupon code
    },
    "1": {
        "status": true,
        "time": ["2017/2/07,00:00:00", "2017/2/13,23:59:59"],
        "code": "App1701600b"
    },
    "2": {
        "status": false,
        "time": ["2017/2/14,00:00:00", "2017/2/20,23:59:59"],
        "code": "App1701600c"
    },
    "3": {
        "status": true,
        "time": ["2017/2/21,00:00:00", "2017/2/27,23:59:59"],
        "code": "App1701600d"
    },
    "4": {
        "status": true,
        "time": ["2017/2/28,00:00:00", "2017/2/28,23:59:59"],
        "code": "App1701600e"
    }
}

function coupon_init(_coupon) {
    var date = new Date();  //今天的日期時間
    for(keys in _coupon){
        var coupon_start = new Date(_coupon[keys]["time"][0]),  //coupon的開始日期時間
            coupon_end = new Date(_coupon[keys]["time"][1]);    //coupon的結束日期時間
        
        //quest1: 判斷當日coupon status(狀態),若領取完畢,將id為"btnout1"的標籤,設定其class名稱為"btnout1"
        if(_coupon[keys]["status"] === true){
            document.getElementById("btnout1").className = "";          //仍有優惠券
        }else{
            document.getElementById("btnout1").className = "btnout1";   //優惠券已領完
        }
        
        //quest2: 判斷當天日期要取用的coupon資料,將id為"coupon-btn"的標籤,設定其coupon-code屬性為對應的coupon code.
        if(coupon_start <= date && date <= coupon_end && !dateRecorder[keys]){
            dateRecorder[keys] = 1;
            document.getElementById("coupon-btn").setAttribute("coupon-code" ,_coupon[keys]["code"]);
            break;
        }
    }  
}
//執行
coupon_init(coupon);

