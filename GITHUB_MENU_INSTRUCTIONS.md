# Daily Menu Update Instructions - GitHub Method

## For Restaurant Owner

### How to Update Menu Daily (No Code Changes Needed!)

#### Step 1: Create GitHub Repository (One Time Setup)

1. Go to [github.com](https://github.com) and create a free account
2. Create a new repository (make it public)
3. Name it something like `restaurant-menu` or `garden-bogoridi-menu`

#### Step 2: Upload Initial Menu Image

1. In your GitHub repository, click "Add file" → "Upload files"
2. Upload your menu image
3. **Important**: Name the file exactly `lunch.jpg` (or `lunch.png`)
4. Add a commit message like "Initial menu upload"
5. Click "Commit changes"

#### Step 3: Update the Website URL (One Time Only)

1. Open the file `components/lunch-menu-section.tsx`
2. Find line 31 with the `src=` URL
3. Replace `YOUR_USERNAME` with your GitHub username
4. Replace `YOUR_REPO_NAME` with your repository name
5. Save the file

#### Step 4: Daily Updates (After Initial Setup)

1. Go to your GitHub repository
2. Click on the `lunch.jpg` file
3. Click the pencil icon (Edit) or trash icon (Delete)
4. Upload your new menu image with the same filename `lunch.jpg`
5. Add commit message like "Updated daily menu"
6. Click "Commit changes"
7. **Done!** The website automatically shows the new menu

### Example:

- **GitHub Username**: `gardenbogoridi`
- **Repository Name**: `restaurant-menu`
- **Website URL**: `https://raw.githubusercontent.com/gardenbogoridi/restaurant-menu/main/lunch.jpg`

### Benefits:

- ✅ **No code changes needed after initial setup**
- ✅ **Same URL every day** - just replace the file content
- ✅ **Free to use** - GitHub is completely free
- ✅ **Reliable hosting** - GitHub has excellent uptime
- ✅ **Version history** - You can see all previous menus
- ✅ **Easy to use** - Simple drag and drop interface

### Important Notes:

- Always use the same filename: `lunch.jpg`
- The repository must be public (free accounts can have unlimited public repos)
- The URL stays exactly the same - only the file content changes
- You can see the history of all your menu updates in GitHub

### Quick Daily Process:

1. Go to GitHub repository
2. Edit the `lunch.jpg` file
3. Upload new image
4. Commit changes
5. Website updates automatically!

### Troubleshooting:

- If image doesn't show: Check that the repository is public
- If URL doesn't work: Make sure you're using the raw.githubusercontent.com URL
- If file won't upload: Make sure it's named exactly `lunch.jpg`
