const images = {
  advertisement: '/lovable-uploads/advertisement.png',
  phoBo: '/lovable-uploads/pho bo.png',
  phoHaiSan: '/lovable-uploads/pho hai san.png',
  bunChaLua: '/lovable-uploads/Bún Chả Lụa.jpg',
  comBoXao: '/lovable-uploads/Cơm Bò Xào.jpg',
  comSuon: '/lovable-uploads/Cơm Sườn.jpg',
  chaLua: '/lovable-uploads/Chả lụa 80 NT.png',
  bunMangVit: '/lovable-uploads/Bún măng Vit.png',
  vietnameseCoffee: '/lovable-uploads/Vietnamese coffe.png',
  goiCuon: '/lovable-uploads/Gỏi Cuốn 110 NT.JPG',
  bunThitNuong: '/lovable-uploads/Bún Thịt Nướng.jpg',
  logo: '/lovable-uploads/logo5.png'
} as const;

export function getImage(key: keyof typeof images): string {
  try {
    // Create a URL object to handle special characters
    const url = new URL(images[key], window.location.origin).href;
    return url;
  } catch (error) {
    console.error(`Error loading image: ${key}`, error);
    return images.logo;
  }
}
