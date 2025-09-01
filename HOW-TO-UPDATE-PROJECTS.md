# 🚀 How to Update Your Projects - Simple Guide

Your portfolio now uses a **single, easy-to-update file** for all projects. No more juggling multiple files!

## 📁 Where to Make Changes

**ALL PROJECTS** are now managed in:
```
src/data/projects.ts
```

## ✨ Adding a New Project

Just add a new object to the `allProjects` array in `src/data/projects.ts`:

```typescript
{
  id: "my-new-project",           // Unique identifier (use kebab-case)
  title: "My Amazing Project",    // Display name
  description: "What this project is about...",
  category: "Animation",          // Category for filtering
  videoUrl: "https://youtu.be/...", // YouTube/Vimeo URL (optional)
  year: "2024",                   // When you made it (optional)
  tools: ["Maya", "After Effects"], // Software used (optional)
  featured: true,                 // Show on homepage (optional)
  order: 1,                       // Display order (optional)
},
```

## 🎯 Available Categories

Use any of these categories (or create new ones):
- `"Unreal Engine"`
- `"Virtual Production"`
- `"Animation"`
- `"Demo Reel"`
- `"Short Film"`
- `"Volunteer Work"`

## 🎬 Adding Videos

### YouTube Videos
```typescript
videoUrl: "https://youtu.be/VIDEO_ID"
// OR
videoUrl: "https://youtube.com/watch?v=VIDEO_ID"
// OR  
videoUrl: "https://youtube.com/shorts/VIDEO_ID"
```

### Vimeo Videos
```typescript
videoUrl: "https://vimeo.com/VIDEO_ID"
// OR
videoUrl: "https://player.vimeo.com/video/VIDEO_ID"
```

### Thumbnails
Thumbnails are **automatically generated** from video URLs:
- ✅ **YouTube**: Always works automatically
- ⚠️ **Vimeo**: May need custom thumbnails for best results

**For Vimeo videos, you can set custom thumbnails:**
```typescript
{
  videoUrl: "https://vimeo.com/1234567890",
  thumbnailUrl: "/projects/my-project/thumbnail.jpg", // Custom thumbnail
  // ... other fields
}
```

**How to get Vimeo thumbnails:**
1. Play your Vimeo video
2. Pause at a good frame
3. Take a screenshot
4. Save as `/public/projects/your-project/thumbnail.jpg`
5. Reference it in `thumbnailUrl`

## 🖼️ Adding Images

```typescript
images: [
  "/projects/my-project/1.jpg",
  "/projects/my-project/2.jpg",
  "/projects/my-project/3.jpg"
]
```

## 📝 Text-Only Projects (like Volunteer Work)

For projects without videos:
```typescript
{
  id: "volunteer-work",
  title: "Film Festival Volunteer",
  description: "Helped with festival operations...",
  category: "Volunteer Work",
  role: "Festival Assistant",
  year: "2024"
  // No videoUrl needed!
}
```

## ⚡ Quick Examples

### Adding an Animation
```typescript
{
  id: "character-walk-cycle",
  title: "Character Walk Cycle",
  description: "Realistic character animation showcasing natural movement.",
  category: "Animation",
  videoUrl: "https://youtu.be/abc123",
  tools: ["Maya", "Character Animation"],
  year: "2024",
  featured: true,
  order: 10
},
```

### Adding an Unreal Project
```typescript
{
  id: "forest-environment",
  title: "Mystical Forest Environment", 
  description: "Open world forest with dynamic lighting and weather.",
  category: "Unreal Engine",
  videoUrl: "https://youtu.be/xyz789",
  tools: ["Unreal Engine 5", "Lumen", "Nanite"],
  images: [
    "/projects/forest/screenshot1.jpg",
    "/projects/forest/screenshot2.jpg"
  ],
  year: "2024",
  featured: true
},
```

## 🔧 What Happens Automatically

- **Thumbnails**: Auto-generated from YouTube/Vimeo URLs
- **Project Pages**: Every project gets its own detail page at `/projects/project-id`
- **Filtering**: Categories automatically appear in the filter menu
- **Search**: Projects are searchable by title, description, and tools
- **Sorting**: Projects appear in order (or by the `order` field)

## 🎨 Featured Projects

Set `featured: true` to show projects on the homepage and in special sections.

## 📊 Project Display Order

Use the `order` field to control display order (lower numbers appear first):
```typescript
order: 1,  // Shows first
order: 2,  // Shows second
// Projects without order appear last
```

## 🚫 What NOT to Touch

- Don't modify the helper functions at the bottom
- Don't change the `Project` interface unless you know what you're doing
- The old files (`unreal-projects.ts`, `portfolio.ts`) now pull from this file automatically

## ✅ After Making Changes

1. Save the file
2. The website automatically updates!
3. Your new projects appear in:
   - The main projects grid (`/projects`)
   - Filter categories (if new category)
   - Individual project pages (`/projects/your-project-id`)

## 🆘 Need Help?

- **Missing thumbnail?** Check your video URL format
- **Project not showing?** Make sure the `id` is unique and uses kebab-case
- **Category not filtering?** Ensure category name matches exactly

---

That's it! One file, endless possibilities. Happy updating! 🎉
