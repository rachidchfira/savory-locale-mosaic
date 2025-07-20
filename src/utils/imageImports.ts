// Use relative paths from the public directory
const createImageUrl = (path: string) => {
  // For development, use absolute path
  if (import.meta.env.DEV) {
    return `/images/${path}`;
  }
  // For production, use relative path
  return `images/${path}`;
};

const imageMap = {
  advertisement: createImageUrl('advertisement-min.png'),
  phoBo: createImageUrl('pho bo -min.png'),
  phoHaiSan: createImageUrl('pho hai san-min.png'),
  bunChaLua: createImageUrl('Bún Chả Lụa-min.jpg'),
  comBoXao: createImageUrl('Cơm Bò Xào-min.jpg'),
  comSuon: createImageUrl('Cơm Sườn -min.jpg'),
  chaLua: createImageUrl('Chả lụa 80 NT-min.png'),
  bunMangVit: createImageUrl('Bún măng Vit-min.png'),
  vietnameseCoffee: createImageUrl('Vietnamese coffe-min.png'),
  goiCuon: createImageUrl('Gỏi Cuốn ( 越式春捲） 110 NT.JPG'),
  bunThitNuong: createImageUrl('Bún Thịt Nướng-min.jpg'),
  thitSuonChien: createImageUrl('thịt sườn chiên ( 單點烤肉 ） - 100 NT.png'),
  logo: createImageUrl('logo5.png')
} as const;

export type ImageKey = keyof typeof imageMap;

export function getImageUrl(key: ImageKey): string {
  const path = imageMap[key];
  if (!path) {
    console.error(`Image not found for key: ${key}`);
    return imageMap.logo;
  }
  return path;
}
