import { getImageUrl, MENU_IMAGES, MenuImageName } from "./imageUtils";

const preloadMenuImages = async () => {
  const preloadImage = (imageName: MenuImageName): Promise<void> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        console.log(`Successfully preloaded: ${imageName}`);
        resolve();
      };
      img.onerror = () => {
        console.error(`Failed to preload: ${imageName}`);
        resolve(); // Resolve anyway to not block other images
      };
      img.src = getImageUrl(imageName);
    });
  };

  try {
    console.log('Starting image preload...');
    // We know MENU_IMAGES contains valid MenuImageName values
    await Promise.all(MENU_IMAGES.map(imageName => preloadImage(imageName as MenuImageName)));
    console.log('All menu images preloaded successfully');
  } catch (error) {
    console.error('Error preloading images:', error);
  }
};

export default preloadMenuImages;
