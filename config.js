// Cấu hình Firebase
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBCxeCdn5krOH6PnZlytXkoPfexG_2qYsg",
  authDomain: "keiths-hotdog.firebaseapp.com",
  projectId: "keiths-hotdog",
  appId: "1:758659658484:web:01c96ce8095637f2d464a1"
};

// Telegram
const TG_TOKEN = "8860239685:AAHwDp_Ejh1c7dKOZsycwl9mmZJSs9JpgDY";
const TG_CHAT_ID = "-5513661326";

// Menu mặc định: hiện khi chưa lưu menu nào trong database
const DEFAULT_MENU = {
  "shop": "Keith's Hotdog",
  "tagline": "Vị ngon của Keith. 33A Lò Siêu, P16, Q11. ĐT 0909 002 131",
  "colors": {
    "bg": "#f3e9d2",
    "ink": "#26332b",
    "accent": "#c9972b"
  },
  "categories": [
    {
      "name": "Hotdog",
      "items": [
        {
          "name": "Hotdog Trứng",
          "desc": "Bánh mì trứng phô mai",
          "price": 20000
        },
        {
          "name": "Hotdog Truyền Thống",
          "desc": "",
          "price": 23000
        },
        {
          "name": "Hotdog Baby",
          "desc": "",
          "price": 27000
        },
        {
          "name": "Hotdog Hàn Quốc",
          "desc": "",
          "price": 30000
        },
        {
          "name": "Hotdog Giòn",
          "desc": "",
          "price": 31000
        },
        {
          "name": "Hotdog Bacon Cheese",
          "desc": "",
          "price": 41000
        },
        {
          "name": "Hotdog XL",
          "desc": "Trứng phô mai, xúc xích Đức 80g",
          "price": 44000
        },
        {
          "name": "Hotdog Keith's",
          "desc": "Gà chiên trứng phô mai sốt độc quyền",
          "price": 45000
        },
        {
          "name": "Hotdog Tôm Phô Mai",
          "desc": "",
          "price": 47000
        },
        {
          "name": "Hotdog Cá Phô Mai",
          "desc": "",
          "price": 47000
        }
      ]
    },
    {
      "name": "Sandwich",
      "items": [
        {
          "name": "Sandwich Sữa Phô Mai",
          "desc": "",
          "price": 30000
        },
        {
          "name": "Sandwich Bacon Trứng",
          "desc": "",
          "price": 40000
        },
        {
          "name": "Sandwich Bò Trứng",
          "desc": "",
          "price": 42000
        },
        {
          "name": "Sandwich Xúc Xích Trứng Cheese",
          "desc": "",
          "price": 45000
        },
        {
          "name": "Sandwich Ham Cheese",
          "desc": "Thịt ham nướng phô mai, sốt cay béo vị Keith's",
          "price": 44000
        },
        {
          "name": "Sandwich Tôm Phô Mai",
          "desc": "",
          "price": 47000
        },
        {
          "name": "Sandwich Cá Phô Mai",
          "desc": "",
          "price": 47000
        }
      ]
    },
    {
      "name": "Burger",
      "items": [
        {
          "name": "Burger Bò",
          "desc": "",
          "price": 33000
        },
        {
          "name": "Burger Gà Phô Mai",
          "desc": "",
          "price": 45000
        },
        {
          "name": "Burger Bò Trứng Phô Mai",
          "desc": "",
          "price": 44000
        },
        {
          "name": "Burger Tôm Phô Mai",
          "desc": "",
          "price": 47000
        },
        {
          "name": "Burger Cá Phô Mai",
          "desc": "",
          "price": 47000
        }
      ]
    },
    {
      "name": "Combo",
      "items": [
        {
          "name": "Family Combo",
          "desc": "1 Sandwich Bacon Trứng, 2 gà xiên, 1 Hotdog Giòn, khoai tây chiên, 2 ly nước ngọt",
          "price": 131000,
          "best": true
        },
        {
          "name": "Combo Gà Kebab + Sandwich",
          "desc": "Gà Kebab 2 xiên, Sandwich Bacon Trứng",
          "price": 67000,
          "best": true
        },
        {
          "name": "Combo Hamburger",
          "desc": "Hamburger Bò Trứng Phô Mai, khoai tây",
          "price": 61000
        },
        {
          "name": "Combo Hotdog XL",
          "desc": "Hotdog XL, 1 ly nước ngọt",
          "price": 51000
        },
        {
          "name": "Combo Hotdog Giòn + Trà Tắc",
          "desc": "",
          "price": 47000
        }
      ]
    },
    {
      "name": "Khoai Tây",
      "items": [
        {
          "name": "Khoai Tây Chiên Truyền Thống",
          "desc": "",
          "price": 22000
        },
        {
          "name": "Khoai Tây Bơ Đường",
          "desc": "",
          "price": 27000
        },
        {
          "name": "Khoai Tây Lắc Phô Mai",
          "desc": "",
          "price": 30000
        },
        {
          "name": "Khoai Tây Bacon Cheese",
          "desc": "",
          "price": 41000
        }
      ]
    },
    {
      "name": "Ăn Vặt",
      "items": [
        {
          "name": "Gà Teriyaki",
          "desc": "2 xiên",
          "price": 35000
        },
        {
          "name": "Gà Kebab",
          "desc": "2 xiên",
          "price": 30000
        },
        {
          "name": "Xúc Xích XL",
          "desc": "80g",
          "price": 31000
        }
      ]
    },
    {
      "name": "Nước",
      "items": [
        {
          "name": "Trà Tắc",
          "desc": "",
          "price": 15000
        },
        {
          "name": "Trà Tắc Trân Châu Trắng Mật Ong",
          "desc": "",
          "price": 25000
        },
        {
          "name": "Nước Ngọt Ly",
          "desc": "",
          "price": 10000
        },
        {
          "name": "Nước Ngọt Chai",
          "desc": "",
          "price": 15000
        }
      ]
    },
    {
      "name": "Topping",
      "items": [
        {
          "name": "Trân Châu Trắng",
          "desc": "",
          "price": 5000
        },
        {
          "name": "Up Size 700ml",
          "desc": "",
          "price": 5000
        }
      ]
    },
    {
      "name": "Extra",
      "items": [
        {
          "name": "Trứng",
          "desc": "",
          "price": 7000
        },
        {
          "name": "Phô Mai Lát",
          "desc": "",
          "price": 10000
        },
        {
          "name": "Bacon",
          "desc": "",
          "price": 20000
        },
        {
          "name": "Bò Miếng",
          "desc": "",
          "price": 25000
        },
        {
          "name": "Tôm",
          "desc": "",
          "price": 30000
        },
        {
          "name": "Cá",
          "desc": "",
          "price": 30000
        }
      ]
    }
  ]
};
