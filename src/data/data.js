import KFC from '../assets/KFC.jpg'
import MCD from '../assets/MCD.jpg'
import dunkin from '../assets/dunkin.jpg'
import teater from '../assets/teater.jpg'
import skincare from '../assets/skincare.jpg'

const voucher=
    {
        FoodBeverage: [
            {
                "id":"asdfg",
                "voucher":"20% off Coupon at KFC",
                "date":"valid until 30 July 2022",
                "image": KFC,
                "points":"300 Points"
            }, {
                "id":"adsaf",
                "voucher":"20% off Coupon at McDonald",
                "date":"valid until 30 July 2022",
                "image":MCD,
                "points":"500 Points"
            }, {
                "id":"adsag",
                "voucher":"40% off Coupon at Dunkin",
                "date":"valid until 30 July 2022",
                "image":dunkin,
                "points":"200 Points"
            },
            
        ],
        Entertaiment:[
            {
                "id":"axczfg",
                "voucher":"20% off Coupon at XXI",
                "date":"valid until 30 July 2022",
                "image":teater,
                "points":"300 Points"
            }, {
                "id":"avvsaf",
                "voucher":"50% off Coupon at CGV",
                "date":"valid until 30 July 2022",
                "image":teater,
                "points":"500 Points"
            }
        ],
        HealthyBeauty:[
            {
                "id":"aqwezfg",
                "voucher":"20% off Coupon at Watson",
                "date":"valid until 30 July 2022",
                "image":skincare,
                "points":"300 Points"
            }, {
                "id":"avsdaf",
                "voucher":"50% off Coupon at Natural Republik",
                "date":"valid until 30 July 2022",
                "image":skincare,
                "points":"500 Points"
            }, {
                "id":"aew2ag",
                "voucher":"20% off Coupon at Dan+Dan",
                "date":"valid until 30 July 2022",
                "image":skincare,
                "points":"200 Points"
            }
        ]
    }
export default voucher;