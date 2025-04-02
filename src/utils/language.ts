import { createContext } from "react";

export type Language = "en" | "tw" | "vi";

export const translations = {
  en: {
    // Navbar
    home: "Home",
<<<<<<< HEAD
=======
    restaurantName: "Vietnamese Cuisine",
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
    menu: "Menu",
    about: "About",
    contact: "Contact",
    
    // Hero
    heroTitle: "Authentic Taiwanese-Vietnamese Cuisine",
    heroSubtitle: "Experience the best of both culinary traditions in Taichung",
    reserveTable: "Order Now",
    viewMenu: "View Menu",
    
    // Menu
    menuTitle: "Our Menu",
    menuSubtitle: "Handcrafted with love and tradition",
    soupDishes: "Soup Dishes",
    otherDishes: "Other Dishes",
<<<<<<< HEAD
    
    // Menu items
    phoBo: "Phở Bò - Beef Noodle Soup",
    phoHaiSan: "Phở Hải Sản - Seafood Noodle Soup",
    phoThitHeo: "Phở Thịt Heo - Pork Noodle Soup",
    bunMangVit: "Bún Măng Vịt - Bamboo Duck Noodle Soup",
    comBoXao: "Cơm Bò Xào - Stir-fried Beef Rice",
    comSuon: "Cơm Sườn - Pork Chop Rice",
    bunBoXao: "Bún Bò Xào - Stir-fried Beef Noodle",
    bunThitNuong: "Bún Thịt Nướng - Grilled Meat Noodle",
    bunChaLua: "Bún Chả Lụa - Vietnamese Ham Noodle",
    thitNuong: "Thịt Nướng - Grilled Meat",
    thitBoXao: "Thịt Bò Xào - Stir-fried Beef",
    ganBo: "Gân Bò - Beef Tendon",
    chaLua: "Chả Lụa - Vietnamese Ham",
    caPhe: "Cà Phê - Vietnamese Coffee",
    
    // About
    aboutTitle: "About Our Chef",
    aboutText: "Meet Chef Trung Nguyen, our talented head chef who brings over 15 years of culinary experience from both Taiwan and Vietnam. Chef Trung specializes in authentic Vietnamese soups and Taiwanese street food, creating unique fusion dishes that honor both traditions.",
=======
    orderNow: "Order Now",
    
    // Menu items
    phoBo: "Phở Bò - Beef Noodle Soup",
    phoBoDesc: "Rich beef broth simmered for hours with rice noodles, tender sliced beef, and aromatic herbs. Served with bean sprouts and fresh basil.",
    
    phoHaiSan: "Phở Hải Sản - Seafood Noodle Soup",
    phoHaiSanDesc: "Fresh seafood medley in a savory broth with rice noodles, complemented by traditional Vietnamese herbs and spices.",
    
    bunThitNuong: "Bún Thịt Nướng - Grilled Meat Noodle",
    bunThitNuongDesc: "Grilled marinated pork served over rice vermicelli with fresh herbs, pickled vegetables, and fish sauce dressing.",
    
    bunChaLua: "Bún Chả Lụa - Vietnamese Ham Noodle",
    bunChaLuaDesc: "Traditional Vietnamese ham with rice vermicelli, fresh herbs, and a light fish sauce dressing.",
    
    comBoXao: "Cơm Bò Xào - Stir-fried Beef Rice",
    comBoXaoDesc: "Marinated beef stir-fried with fresh vegetables, served over steamed rice with a side of house-made sauce.",
    
    comSuon: "Cơm Sườn - Pork Chop Rice",
    comSuonDesc: "Grilled marinated pork chop served with steamed rice, fresh vegetables, and traditional dipping sauce.",
    
    // About
    aboutTitle: "About Our Chef",
    aboutText: "Meet Chef Thái Đặng, our talented head chef who brings over 4 years of culinary experience from both Taiwan and Vietnam. Chef Thái specializes in authentic Vietnamese soups and Taiwanese street food, creating unique fusion dishes that honor both traditions.",
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
    aboutSubtext: "Every dish is prepared with care using locally sourced ingredients and traditional cooking methods passed down through generations.",
    
    // Contact
    contactTitle: "Visit Us",
    contactSubtitle: "We'd love to serve you",
    address: "Address",
    addressText: "No. 123, Pingdeng St, Central District, Taichung City, Taiwan 400",
    phone: "Phone",
    openingHours: "Opening Hours",
<<<<<<< HEAD
    weekdays: "Monday - Friday: 11:00 AM - 9:00 PM",
    weekends: "Saturday - Sunday: 10:00 AM - 10:00 PM",
=======
    weekdays: "Working Days: 11:00 AM - 2:00 PM and 5:00 PM - 9:00 PM",
    weekends: "Monday Closed",
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
    
    // Footer
    follow: "Follow Us",
    copyright: "© 2023 Taiwanese-Vietnamese Cuisine. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
  tw: {
    // Navbar
    home: "首頁",
<<<<<<< HEAD
=======
    restaurantName: "越小廚",
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
    menu: "菜單",
    about: "關於我們",
    contact: "聯繫我們",
    
    // Hero
    heroTitle: "正宗台越美食",
    heroSubtitle: "在台中體驗兩種烹飪傳統的精華",
    reserveTable: "立即訂購",
    viewMenu: "查看菜單",
    
    // Menu
    menuTitle: "我們的菜單",
    menuSubtitle: "用愛和傳統手工製作",
    soupDishes: "湯品",
    otherDishes: "其他品項",
<<<<<<< HEAD
    
    // Menu items
    phoBo: "河粉Phở Bò - 牛肉河粉",
    phoHaiSan: "河粉Phở Hải Sản - 海鮮河粉",
    phoThitHeo: "豬肉河粉Phở Thịт Heo - 豬肉河粉",
    bunMangVit: "鴨肉米線Bún Măng Vịt - 鴨肉米線",
    comBoXao: "牛肉飯Cơm Bò Xào - 炒牛肉飯",
    comSuon: "排骨飯Cơm Sườn - 排骨飯",
    bunBoXao: "牛肉米線Bún Bò Xào - 炒牛肉米線",
    bunThitNuong: "米線Bún Thịт Nướng - 烤肉米線",
    bunChaLua: "米線Bún Chả Lụa - 越式火腿米線",
    thitNuong: "單點烤肉Thịt Nướng - 烤肉",
    thitBoXao: "單點蔥爆牛肉Thịt Bò Xào - 蔥爆牛肉",
    ganBo: "牛筋Gân Bò - 牛筋",
    chaLua: "單點火腿Chả Lụa - 越式火腿",
    caPhe: "越南咖啡Cà Phê - 越南咖啡",
    
    // About
    aboutTitle: "關於我們的主廚",
    aboutText: "認識Trung Nguyen主廚，我們才華橫溢的主廚，擁有超過15年來自台灣和越南的烹飪經驗。Trung主廚專精於正宗越南湯品和台灣街頭美食，創造尊重兩種傳統的獨特融合菜餚。",
=======
    orderNow: "立即訂購",
    
    // Menu items
    phoBo: "河粉Phở Bò - 牛肉河粉",
    phoBoDesc: "以數小時熬製的濃郁牛肉湯底，搭配河粉、嫩滑牛肉片和香草。配以豆芽和新鮮羅勒。",
    
    phoHaiSan: "河粉Phở Hải Sản - 海鮮河粉",
    phoHaiSanDesc: "新鮮海鮮拼盤配以鮮美湯底和河粉，搭配傳統越南香草和香料。",
    
    bunThitNuong: "米線Bún Thịt Nướng - 烤肉米線",
    bunThitNuongDesc: "烤醃製豬肉配以米線、新鮮香草、醃漬蔬菜和魚露調味料。",
    
    bunChaLua: "米線Bún Chả Lụa - 越式火腿米線",
    bunChaLuaDesc: "傳統越南火腿配以米線、新鮮香草和清爽的魚露調味料。",
    
    comBoXao: "牛肉飯Cơm Bò Xào - 炒牛肉飯",
    comBoXaoDesc: "醃製牛肉與新鮮蔬菜一同翻炒，配以白飯和自製醬料。",
    
    comSuon: "排骨飯Cơm Sườn - 排骨飯",
    comSuonDesc: "烤醃製豬排配以白飯、新鮮蔬菜和傳統蘸料。",
    
    // About
    aboutTitle: "關於我們的主廚",
    aboutText: "認識Thái Đặng主廚，我們才華橫溢的主廚，擁有超過4年來自台灣和越南的烹飪經驗。Thái主廚專精於正宗越南湯品和台灣街頭美食，創造尊重兩種傳統的獨特融合菜餚。",
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
    aboutSubtext: "每道菜都是用當地採購的食材和代代相傳的傳統烹飪方法精心準備的。",
    
    // Contact
    contactTitle: "來訪我們",
    contactSubtitle: "我們很樂意為您服務",
    address: "地址",
    addressText: "台灣台中市中區平等街123號400",
    phone: "電話",
    openingHours: "營業時間",
<<<<<<< HEAD
    weekdays: "週一至週五：上午11:00 - 晚上9:00",
    weekends: "週六至週日：上午10:00 - 晚上10:00",
    
    // Footer
    follow: "關注我們",
    copyright: "© 2023 台越美食。版權所有。",
=======
    weekdays: "營業日：上午11:00 - 下午2:00，下午5:00 - 晚上9:00",
    weekends: "週一公休",
    
    // Footer
    follow: "關注我們",
    copyright: "© 2023 越小廚。版權所有。",
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
    privacyPolicy: "隱私政策",
    termsOfService: "服務條款",
  },
  vi: {
    // Navbar
    home: "Trang chủ",
<<<<<<< HEAD
=======
    restaurantName: "Ẩm Thực Việt Nam",
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
    menu: "Thực đơn",
    about: "Giới thiệu",
    contact: "Liên hệ",
    
    // Hero
    heroTitle: "Ẩm Thực Đài-Việt Chính Thống",
    heroSubtitle: "Trải nghiệm tinh hoa của hai nền ẩm thực tại Taichung",
    reserveTable: "Đặt Hàng Ngay",
    viewMenu: "Xem Thực Đơn",
    
    // Menu
    menuTitle: "Thực Đơn Của Chúng Tôi",
    menuSubtitle: "Chế biến với tình yêu và truyền thống",
<<<<<<< HEAD
    soupDishes: "Món Canh",
    otherDishes: "Các Món Khác",
    
    // Menu items
    phoBo: "Phở Bò",
    phoHaiSan: "Phở Hải Sản",
    phoThitHeo: "Phở Thịt Heo",
    bunMangVit: "Bún Măng Vịt",
    comBoXao: "Cơm Bò Xào",
    comSuon: "Cơm Sườn",
    bunBoXao: "Bún Bò Xào",
    bunThitNuong: "Bún Thịt Nướng",
    bunChaLua: "Bún Chả Lụa",
    thitNuong: "Thịt Nướng",
    thitBoXao: "Thịt Bò Xào",
    ganBo: "Gân Bò",
    chaLua: "Chả Lụa",
    caPhe: "Cà Phê",
    
    // About
    aboutTitle: "Về Đầu Bếp Của Chúng Tôi",
    aboutText: "Gặp gỡ Đầu bếp Trung Nguyễn, đầu bếp tài năng của chúng tôi với hơn 15 năm kinh nghiệm ẩm thực từ cả Đài Loan và Việt Nam. Đầu bếp Trung chuyên về các món súp Việt Nam chính gốc và món ăn đường phố Đài Loan, tạo ra các món ăn kết hợp độc đáo tôn vinh cả hai truyền thống.",
=======
    soupDishes: "Món Súp",
    otherDishes: "Món Khác",
    orderNow: "Đặt Món Ngay",
    
    // Menu items
    phoBo: "Phở Bò",
    phoBoDesc: "Nước dùng bò đậm đà được ninh trong nhiều giờ với bánh phở, thịt bò mềm, và các loại thảo mộc thơm ngon. Dùng kèm giá đỗ và rau húng quế tươi.",
    
    phoHaiSan: "Phở Hải Sản",
    phoHaiSanDesc: "Hải sản tươi ngon trong nước dùng đặc biệt với bánh phở, kết hợp với các loại rau thơm và gia vị truyền thống Việt Nam.",
    
    bunThitNuong: "Bún Thịt Nướng",
    bunThitNuongDesc: "Thịt heo nướng thơm ngon trên bún tươi với rau thơm, đồ chua, và nước mắm pha.",
    
    bunChaLua: "Bún Chả Lụa",
    bunChaLuaDesc: "Chả lụa truyền thống với bún tươi, rau thơm, và nước mắm nhẹ nhàng.",
    
    comBoXao: "Cơm Bò Xào",
    comBoXaoDesc: "Thịt bò xào với rau tươi, phục vụ kèm cơm trắng và nước sốt đặc biệt.",
    
    comSuon: "Cơm Sườn",
    comSuonDesc: "Sườn heo nướng ướp gia vị phục vụ với cơm trắng, rau tươi và nước chấm truyền thống.",
    
    // About
    aboutTitle: "Về Đầu Bếp Của Chúng Tôi",
    aboutText: "Gặp gỡ Đầu bếp Thái Đặng, đầu bếp tài năng của chúng tôi với hơn 4 năm kinh nghiệm ẩm thực từ cả Đài Loan và Việt Nam. Đầu bếp Thái chuyên về các món súp Việt Nam chính gốc và món ăn đường phố Đài Loan, tạo ra các món ăn kết hợp độc đáo tôn vinh cả hai truyền thống.",
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
    aboutSubtext: "Mỗi món ăn được chuẩn bị cẩn thận với nguyên liệu địa phương và phương pháp nấu ăn truyền thống được truyền qua nhiều thế hệ.",
    
    // Contact
    contactTitle: "Ghé Thăm Chúng Tôi",
    contactSubtitle: "Chúng tôi rất vui được phục vụ bạn",
    address: "Địa chỉ",
    addressText: "Số 123, Đường Pingdeng, Quận Trung tâm, Thành phố Taichung, Đài Loan 400",
    phone: "Điện thoại",
    openingHours: "Giờ Mở Cửa",
<<<<<<< HEAD
    weekdays: "Thứ Hai - Thứ Sáu: 11:00 - 21:00",
    weekends: "Thứ Bảy - Chủ Nhật: 10:00 - 22:00",
=======
    weekdays: "Ngày làm việc: 11:00 - 14:00 và 17:00 - 21:00",
    weekends: "Nghỉ thứ Hai",
>>>>>>> da00537 (Initial commit: Updated website with logo, opening hours, and Facebook link)
    
    // Footer
    follow: "Theo Dõi Chúng Tôi",
    copyright: "© 2023 Ẩm Thực Đài-Việt. Tất cả các quyền được bảo lưu.",
    privacyPolicy: "Chính Sách Bảo Mật",
    termsOfService: "Điều Khoản Dịch Vụ",
  }
};

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});
