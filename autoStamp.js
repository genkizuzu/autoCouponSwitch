/*
---使用方法---
coupon狀態的資訊格式如下：
"0": {"status":true}

說明：
"0": coupon code資料編號,起始編號為0,按需求數量可自由新增,例如網頁上coupon有3組,那就要新增"0","1","2"三組資料
"status": 該組coupon code的狀態,設定為true表示還有優惠券,設定為fasle表示優惠券領完了

edit by William 2017/2/14.
---
*/
var coupon_status = {
    "0": {"status": true},
    "1": {"status": true},
    "2": {"status": true},
    "3": {"status": true},
    "4": {"status": true}
}

function couponStamp_init() {
    var now = new Date();
    var coupons = document.getElementsByClassName('stamp-area');
    
    //quest1:比對每組coupon的日期時間,如果過期則將class名稱為'stamp-area'的標籤,增加一個class名稱為'coupon_SoldOut'
    for (var i=0; i<coupons.length; i++) {
        var endDate = new Date(coupons[i].getAttribute('data-end-date'));
        if (now < endDate) {
            if (coupon_status[i]["status"]) {
                //還有coupone可領取
                coupons[i].className = coupons[i].className.replace(/coupon_SoldOut/, "");
            } else {
                //coupon領取完畢
                coupons[i].className = coupons[i].className + ' coupon_SoldOut';
            }
        } else {
            //coupon領取完畢
            coupons[i].className = coupons[i].className + ' coupon_SoldOut';
        }
    }
}

couponStamp_init();