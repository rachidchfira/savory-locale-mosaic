export function preloadImages(imagePaths: string[]): Promise<void[]> {
  const promises = imagePaths.map(path => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        console.log(`Successfully loaded: ${path}`);
        resolve();
      };
      img.onerror = (error) => {
        console.error(`Failed to load image: ${path}`, error);
        reject(error);
      };
      img.src = path;
    });
  });

  return Promise.all(promises);
}
