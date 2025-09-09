# How to Update Daily Menu Image

## For Restaurant Owner

### Option 1: Using Imgur (Recommended)

1. Go to [imgur.com](https://imgur.com)
2. Drag and drop your menu image
3. Copy the direct link (it will look like: `https://i.imgur.com/abc123.jpg`)
4. Open the file `components/lunch-menu-section.tsx`
5. Find line 12 and replace the URL:
   ```javascript
   const currentMenuUrl = "YOUR_NEW_IMGUR_URL_HERE";
   ```
6. Save the file

### Option 2: Using Google Drive

1. Upload your menu image to Google Drive
2. Right-click → "Share" → "Anyone with the link"
3. Copy the file ID from the URL
4. Use this format: `https://drive.google.com/uc?export=view&id=YOUR_FILE_ID`
5. Update line 12 in `components/lunch-menu-section.tsx`

### Option 3: Using Any Image Hosting

- Upload to any free image hosting service
- Get the direct image URL
- Update line 12 in the component

## Example URLs:

- Imgur: `https://i.imgur.com/abc123.jpg`
- Google Drive: `https://drive.google.com/uc?export=view&id=1FgOlHSLRDd6uOHHnNA_TfEXsBkI1NhU3`
- GitHub: `https://raw.githubusercontent.com/user/repo/main/menu.jpg`

## Important:

- Always use direct image URLs (ending with .jpg, .png, etc.)
- Test the URL in a browser first to make sure it works
- The image will update automatically on the website
