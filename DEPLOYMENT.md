# Deployment Guide for Namecheap cPanel Hosting

## Build Files
The production build files are located in the `dist` directory and include:
- index.html
- assets/ directory (containing CSS and JavaScript files)

## Deployment Steps

1. **Login to cPanel**
   - Login to your Namecheap cPanel account
   - Navigate to File Manager

2. **Upload Files**
   - Go to the `public_html` directory (or your desired subdomain directory)
   - Upload all contents from the `dist` directory:
     - index.html
     - assets/ directory (with all its contents)

3. **Directory Structure**
   After uploading, your hosting directory should look like this:
   ```
   public_html/
   ├── index.html
   └── assets/
       ├── index-[hash].css
       └── index-[hash].js
   ```

4. **Configuration Requirements**
   - No special server configuration is needed as this is a static site
   - The site should work out of the box with standard Apache settings

## Important Notes
- Do not modify the file names of the assets as they include content hashes
- Always upload all files from the `dist` directory together to maintain proper references
- If you're using a subdomain, make sure to upload the files to the correct subdomain directory

## Troubleshooting
If you encounter a "404 Not Found" error for routes:
1. Create a `.htaccess` file in your root directory with this content:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```
   This ensures that all routes are redirected to index.html for client-side routing to work properly.

## Post-Deployment Verification
1. Visit your website's URL
2. Check if all pages load correctly
3. Verify that images and other assets are loading
4. Test the navigation and features
5. Clear your browser cache if you see any old content
