// Define and export the image map type
export const IMAGE_MAP = {
  "pho.png": "pho.png",
  "pho hai san.png": "pho hai san.png",
  "Bún Chả Lụa.jpg": "Bún Chả Lụa.jpg",
  "Cơm Bò Xào.jpg": "Cơm Bò Xào.jpg",
  "Cơm Sườn.jpg": "Cơm Sườn.jpg",
  "Chả lụa 80 NT.png": "Chả lụa 80 NT.png",
  "Bún măng Vit.png": "Bún măng Vit.png",
  "Gỏi Cuốn 110 NT.JPG": "Gỏi Cuốn 110 NT.JPG",
  "Bún Thịt Nướng.jpg": "Bún Thịt Nướng.jpg",
  "thịt sườn chiên 100 NT.png": "thịt sườn chiên 100 NT.png",
  "Vietnamese coffe.png": "Vietnamese coffe.png"
} as const;

export type MenuImageName = keyof typeof IMAGE_MAP;

export const getImageUrl = (imageName: MenuImageName): string => {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const filename = IMAGE_MAP[imageName];
  if (!filename) {
    console.error(`Image not found in map: ${imageName}`);
    return `${origin}/placeholder.svg`;
  }
  return `${origin}/images/${encodeURIComponent(filename)}`;
};

export const MENU_IMAGES = Object.keys(IMAGE_MAP) as MenuImageName[];
