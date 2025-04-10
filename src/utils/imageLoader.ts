import.meta.glob('/lovable-uploads/*.{png,jpg,jpeg,JPG}', {
  eager: true,
  as: 'url'
});

export function getImageUrl(filename: string): string {
  try {
    return `/lovable-uploads/${filename}`;
  } catch (error) {
    console.error(`Error loading image: ${filename}`, error);
    return `/lovable-uploads/logo5.png`;
  }
}
