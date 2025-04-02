import { createContext } from "react";

export type Language = "en" | "tw" | "vi";

interface Review {
  id: string;
  dishId: string;
  rating: number;
  comment: string;
  timestamp: number;
}

export const translations = {
  en: {
    // Reviews
    reviews: "Reviews",
    writeReview: "Write a Review",
    yourRating: "Your Rating",
    yourComment: "Your Comment",
    submitReview: "Submit Review",
    recentReviews: "Recent Reviews",
    noReviews: "No reviews yet",
    maxCharacters: "Maximum 200 characters",
    reviewPlaceholder: "Share your experience with this dish...",
    reviewSuccess: "Review submitted successfully",
    reviewError: "Error submitting review",
    averageRating: "Average Rating",
    cancel: "Cancel",
    
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
    copyright: "© 2023 Taiwanese-Vietnamese Cuisine. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
  },
  tw: {
    // Reviews
    reviews: "評論",
    writeReview: "寫評論",
    yourRating: "您的評分",
    yourComment: "您的評論",
    submitReview: "提交評論",
    recentReviews: "最新評論",
    noReviews: "尚無評論",
    maxCharacters: "最多200字",
    reviewPlaceholder: "分享您對這道菜的體驗...",
    reviewSuccess: "評論提交成功",
    reviewError: "提交評論時出錯",
    averageRating: "平均評分",
    cancel: "取消",
    
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
    copyright: "© 2023 越小廚。版權所有。",
    privacyPolicy: "隱私政策",
    termsOfService: "服務條款",
  },
  vi: {
    // Reviews
    reviews: "Đánh giá",
    writeReview: "Viết đánh giá",
    yourRating: "Đánh giá của bạn",
    yourComment: "Nhận xét của bạn",
    submitReview: "Gửi đánh giá",
    recentReviews: "Đánh giá gần đây",
    noReviews: "Chưa có đánh giá nào",
    maxCharacters: "Tối đa 200 ký tự",
    reviewPlaceholder: "Chia sẻ trải nghiệm của bạn về món ăn này...",
    reviewSuccess: "Gửi đánh giá thành công",
    reviewError: "Lỗi khi gửi đánh giá",
    averageRating: "Đánh giá trung bình",
    cancel: "Hủy",
    
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
