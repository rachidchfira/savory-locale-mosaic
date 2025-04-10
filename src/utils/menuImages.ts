const menuImages = {
  phoBo: "/images/pho.png",
  phoHaiSan: "/images/pho hai san.png",
  bunChaLua: "/images/Bún Chả Lụa.jpg",
  comBoXao: "/images/Cơm Bò Xào.jpg",
  comSuon: "/images/Cơm Sườn.jpg",
  chaLua: "/images/Chả lụa 80 NT.png",
  bunMangVit: "/images/Bún măng Vit.png",
  goiCuon: "/images/Gỏi Cuốn 110 NT.JPG",
  bunThitNuong: "/images/Bún Thịt Nướng.jpg",
  thitSuonChien: "/images/thịt sườn chiên 100 NT.png",
  vietnameseCoffee: "/images/Vietnamese coffe.png"
} as const;

export type MenuImageKey = keyof typeof menuImages;

export default menuImages;
