import { createContext } from "react";

export type Language = "en" | "zhTW" | "vi";

export const translations = {
  en: {
    // Navbar
    home: "Home",
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
    orderNow: "Order Now",
    loadingMenu: "Loading menu items...",

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
    
    advertisement: "Special Advertisement",
    advertisementDesc: "Check out our special promotions and new menu items!",

    bunMangVit: "Bún Măng Vịt - Duck and Bamboo Noodle Soup",
    bunMangVitDesc: "Traditional Vietnamese rice noodle soup with tender duck meat and bamboo shoots in a savory broth.",
    
    chaLua: "Chả Lụa - Vietnamese Pork Roll",
    chaLuaDesc: "Traditional Vietnamese pork sausage seasoned with fish sauce and black pepper, served with fresh herbs.",

    goiCuon: "Gỏi Cuốn - Vietnamese Spring Rolls",
    goiCuonDesc: "Fresh rice paper rolls filled with shrimp, pork, vermicelli noodles, and herbs, served with peanut dipping sauce.",

    caPheSua: "Vietnamese Coffee - Cà Phê Sữa",
    caPheSuaDesc: "Traditional Vietnamese coffee brewed with robusta beans and sweetened condensed milk, served hot or iced.",

    thitSuonChien: "Thịt Sườn Chiên - Fried Pork Side",
    thitSuonChienDesc: "Crispy fried pork ribs seasoned with Vietnamese spices, perfect as a side dish or appetizer.",
    
    // About
    aboutTitle: "About Our Chef",
    aboutText: "Meet Chef Thái Đặng, our talented head chef who brings over 4 years of culinary experience from both Taiwan and Vietnam. Chef Thái specializes in authentic Vietnamese soups and Taiwanese street food, creating unique fusion dishes that honor both traditions.",
    aboutSubtext: "Every dish is prepared with care using locally sourced ingredients and traditional cooking methods passed down through generations.",
    
    // Contact
    contactTitle: "Visit Us",
    contactSubtitle: "We'd love to serve you",
    address: "Address",
    addressText: "No. 123, Pingdeng St, Central District, Taichung City, Taiwan 400",
    phone: "Phone",
    openingHours: "Opening Hours",
    weekdays: "Working Days: 11:00 AM - 2:00 PM and 5:00 PM - 9:00 PM",
    weekends: "Monday Closed",
    
    // Footer
    follow: "Follow Us",
    copyright: "© 2025 Taiwanese-Vietnamese Cuisine. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
  zhTW: {
    // Navbar
    home: "首頁",
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
    orderNow: "立即訂購",
    loadingMenu: "正在載入菜單...",
    
    // Menu items
    phoBo: "Phở Bò - 牛肉河粉",
    phoBoDesc: "以數小時熬製的濃郁牛肉湯底，搭配河粉、嫩滑牛肉片和香草。配以豆芽和新鮮羅勒。",
    
    phoHaiSan: "Phở Hải Sản - 海鮮河粉",
    phoHaiSanDesc: "新鮮海鮮拼盤配以鮮美湯底和河粉，搭配傳統越南香草和香料。",
    
    bunThitNuong: "Bún Thịt Nướng - 烤肉米線",
    bunThitNuongDesc: "烤醃製豬肉配以米線、新鮮香草、醃漬蔬菜和魚露調味料。",
    
    bunChaLua: "Bún Chả Lụa - 越式火腿米線",
    bunChaLuaDesc: "傳統越南火腿配以米線、新鮮香草和清爽的魚露調味料。",
    
    comBoXao: "Cơm Bò Xào - 炒牛肉飯",
    comBoXaoDesc: "醃製牛肉與新鮮蔬菜一同翻炒，配以白飯和自製醬料。",
    
    comSuon: "Cơm Sườn - 排骨飯",
    comSuonDesc: "烤醃製豬排配以白飯、新鮮蔬菜和傳統蘸料。",
    
    advertisement: "特別廣告",
    advertisementDesc: "查看我們的特別優惠和新菜品！",

    bunMangVit: "Bún Măng Vịt - 鴨肉竹筍米線",
    bunMangVitDesc: "傳統越南米線搭配鮮嫩鴨肉和竹筍，配以美味湯底。",
    
    chaLua: "Chả Lụa - 越式火腿",
    chaLuaDesc: "傳統越南火腿配以特製醬料和香料調味，搭配新鮮蔬菜。",

    goiCuon: "Gỏi Cuốn - 越式春捲",
    goiCuonDesc: "新鮮米紙卷，內餡包含蝦仁、豬肉、米線和香草，搭配花生醬。",

    caPheSua: "Cà Phê Sữa - 越南咖啡",
    caPheSuaDesc: "傳統越南咖啡以羅布斯塔咖啡豆製成，搭配煉乳，可選擇熱飲或冰飲。",

    thitSuonChien: "Thịt Sườn Chiên - 炸豬排",
    thitSuonChienDesc: "香脆炸豬排配以越南特色調味料，可做為配菜或開胃菜。",
    
    // About
    aboutTitle: "關於我們的主廚",
    aboutText: "認識Thái Đặng主廚，我們才華橫溢的主廚，擁有超過4年來自台灣和越南的烹飪經驗。Thái主廚專精於正宗越南湯品和台灣街頭美食，創造尊重兩種傳統的獨特融合菜餚。",
    aboutSubtext: "每道菜都是用當地採購的食材和代代相傳的傳統烹飪方法精心準備的。",
    
    // Contact
    contactTitle: "來訪我們",
    contactSubtitle: "我們很樂意為您服務",
    address: "地址",
    addressText: "台灣台中市中區平等街123號400",
    phone: "電話",
    openingHours: "營業時間",
    weekdays: "營業日：上午11:00 - 下午2:00，下午5:00 - 晚上9:00",
    weekends: "週一公休",
    
    // Footer
    follow: "關注我們",
    copyright: "© 2025 越小廚。版權所有。",
    privacyPolicy: "隱私政策",
    termsOfService: "服務條款",
  },
  vi: {
    // Navbar
    home: "Trang chủ",
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
    orderNow: "Đặt Món Ngay",
    loadingMenu: "Đang tải thực đơn...",
    
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
    
    advertisement: "Quảng Cáo Đặc Biệt",
    advertisementDesc: "Xem các khuyến mãi đặc biệt và món ăn mới của chúng tôi!",

    bunMangVit: "Bún Măng Vịt",
    bunMangVitDesc: "Bún truyền thống Việt Nam với thịt vịt mềm và măng tươi trong nước dùng đậm đà.",
    
    chaLua: "Chả Lụa",
    chaLuaDesc: "Chả lụa truyền thống được làm từ thịt heo, ướp nước mắm và tiêu đen, dùng kèm rau thơm.",

    goiCuon: "Gỏi Cuốn",
    goiCuonDesc: "Bánh tráng cuốn tươi với tôm, thịt heo, bún và rau thơm, dùng kèm nước chấm đậu phộng.",

    caPheSua: "Cà Phê Sữa",
    caPheSuaDesc: "Cà phê truyền thống Việt Nam pha từ cà phê robusta và sữa đặc có đường, có thể uống nóng hoặc đá.",

    thitSuonChien: "Thịt Sườn Chiên",
    thitSuonChienDesc: "Sườn heo chiên giòn ướp gia vị đặc trưng Việt Nam, phù hợp làm món ăn kèm hoặc khai vị.",
    
    // About
    aboutTitle: "Về Đầu Bếp Của Chúng Tôi",
    aboutText: "Gặp gỡ Đầu bếp Thái Đặng, đầu bếp tài năng của chúng tôi với hơn 4 năm kinh nghiệm ẩm thực từ cả Đài Loan và Việt Nam. Đầu bếp Thái chuyên về các món súp Việt Nam chính gốc và món ăn đường phố Đài Loan, tạo ra các món ăn kết hợp độc đáo tôn vinh cả hai truyền thống.",
    aboutSubtext: "Mỗi món ăn được chuẩn bị cẩn thận với nguyên liệu địa phương và phương pháp nấu ăn truyền thống được truyền qua nhiều thế hệ.",
    
    // Contact
    contactTitle: "Ghé Thăm Chúng Tôi",
    contactSubtitle: "Chúng tôi rất vui được phục vụ bạn",
    address: "Địa chỉ",
    addressText: "Số 123, Đường Pingdeng, Quận Trung tâm, Thành phố Taichung, Đài Loan 400",
    phone: "Điện thoại",
    openingHours: "Giờ Mở Cửa",
    weekdays: "Ngày làm việc: 11:00 - 14:00 và 17:00 - 21:00",
    weekends: "Nghỉ thứ Hai",
    
    // Footer
    follow: "Theo Dõi Chúng Tôi",
    copyright: "© 2025 Ẩm Thực Đài-Việt. Tất cả các quyền được bảo lưu.",
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
