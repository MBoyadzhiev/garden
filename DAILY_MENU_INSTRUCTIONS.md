# Daily Menu Update Instructions

## For Restaurant Owner

### How to Update Menu Daily (No Code Changes Needed!)

#### Step 1: Upload to Google Drive

1. Go to [drive.google.com](https://drive.google.com)
2. Upload your daily menu image
3. **Important**: Name the file exactly `lunch.jpg` (or `lunch.png`)
4. Right-click the file → "Share" → "Anyone with the link can view"

#### Step 2: Get the File ID

1. Copy the Google Drive link (looks like: `https://drive.google.com/file/d/1ABC123XYZ/view`)
2. Extract the file ID (the part between `/d/` and `/view`)
3. Example: If link is `https://drive.google.com/file/d/1ABC123XYZ/view`, the ID is `1ABC123XYZ`

#### Step 3: Update the Website (One Time Only)

1. Open the file `components/lunch-menu-section.tsx`
2. Find line 32 with the `src=` URL
3. Replace the file ID in the URL with your new file ID
4. Save the file

#### Step 4: Daily Updates (After Initial Setup)

- Just upload a new image with the same filename `lunch.jpg`
- Replace the old file in Google Drive
- The website will automatically show the new menu!

### Example:

- **Google Drive Link**: `https://drive.google.com/file/d/1ABC123XYZ/view`
- **File ID**: `1ABC123XYZ`
- **Website URL**: `https://drive.google.com/uc?export=view&id=1ABC123XYZ`

### Benefits:

- ✅ No code changes needed after initial setup
- ✅ Just replace the file in Google Drive daily
- ✅ Website automatically updates
- ✅ Free to use
- ✅ Reliable Google Drive hosting

### Important Notes:

- Always use the same filename: `lunch.jpg`
- Make sure the file is set to "Anyone with the link can view"
- The file ID only needs to be updated once (when you first set it up)
- After that, just replace the file in Google Drive with the same name
