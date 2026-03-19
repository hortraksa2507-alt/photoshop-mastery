import { PathData } from "./types";

export const path1: PathData = {
  id: 1,
  title: "Photoshop Foundations",
  level: "Beginner",
  levelColor: "var(--level-beginner)",
  description:
    "Master the interface, workspace, and essential tools from scratch. Perfect for complete beginners.",
  lessons: [
    {
      id: "1-1",
      title: "Welcome to Photoshop",
      duration: "8 min",
      description:
        "Get introduced to Adobe Photoshop, understand what it can do, and set yourself up for success as a beginner.",
      keyTakeaways: [
        "Understand what Photoshop is used for in the real world",
        "Learn the difference between raster and vector graphics",
        "Set up Photoshop for the first time with recommended settings",
        "Know what to expect from this learning path",
      ],
      content: [
        {
          heading: "What Is Photoshop?",
          body: "Adobe Photoshop is the world's most powerful image editing application, used by photographers, graphic designers, web designers, illustrators, and artists across virtually every creative industry. At its core, Photoshop lets you open, create, and manipulate images — but that description barely scratches the surface. You can retouch a portrait to smooth skin, composite two photos together to create a fantastical scene, design a website mockup, create a logo, or paint a digital illustration entirely from scratch.\n\nPhotoshop has been around since 1990 and is now part of Adobe Creative Cloud. When you launch it for the first time it can look overwhelming — dozens of tools, panels, and menus. That feeling is completely normal. By the end of this course, every part of that interface will feel familiar and purposeful. Think of this first lesson as your orientation: we're going to give you the map before we start exploring.",
        },
        {
          heading: "Raster vs. Vector: Why It Matters",
          body: "Before you open a single file, there is one foundational concept you need to understand: the difference between raster and vector graphics. Photoshop is primarily a raster editor. A raster image is made up of a grid of tiny colored squares called pixels. A photograph you take on your phone is a raster image. The more pixels it has, the higher its resolution and the more detail it contains.\n\nVector graphics, on the other hand, are defined by mathematical paths — lines and curves — which means they can be scaled to any size without losing quality. Adobe Illustrator is the industry-standard vector tool. Photoshop does have some vector capabilities (the Pen tool and Shape tools create vector paths), but its heart is raster. This means you need to think about resolution before you start a project. If you create a document at 72 PPI (pixels per inch) and then try to print it at poster size, it will look blurry and pixelated. Always plan your resolution for your intended output from the very beginning.",
        },
        {
          heading: "First-Time Setup",
          body: "When you launch Photoshop for the first time, take five minutes to configure it properly. Go to Edit > Preferences > Performance (on Mac, go to Photoshop > Settings > Performance). Here you will see Memory Usage — Photoshop recommends a percentage of your RAM to use. For most users, setting this to 70–80% gives a good balance between Photoshop performance and keeping your computer responsive for other tasks.\n\nNext, go to Edit > Preferences > Scratch Disks. Photoshop uses your hard drive as a temporary workspace when it runs out of RAM. Ideally, point this to your fastest drive, and if possible, a different drive than the one your operating system is on. Finally, visit Edit > Preferences > Interface and choose a brightness theme. Most professionals use the second-darkest option (dark gray), as it makes colors appear more accurate without straining your eyes. Click OK when you are done and restart Photoshop to apply the memory changes.",
        },
        {
          heading: "Your Learning Roadmap",
          body: "This course is structured to build your skills progressively. You will start with the interface and basic document management, then learn the core tools one group at a time — selection tools, painting tools, type tools, and retouching tools. From there you will move into layers (the most important concept in Photoshop), adjustments, filters, and finally how to save and export your work for different purposes.\n\nEvery lesson includes a practice exercise. Do not skip these. The fastest way to learn Photoshop is to actually use it, make mistakes, and figure out how to fix them. Keep a folder on your desktop called 'Photoshop Practice' and save every exercise file there. By lesson 16 you will combine everything you have learned into a real photo enhancement project you can put in your portfolio.",
        },
      ],
    },
    {
      id: "1-2",
      title: "The Photoshop Interface",
      duration: "12 min",
      description:
        "Learn every part of the Photoshop workspace — the toolbar, menu bar, panels, and canvas — so you can navigate with confidence.",
      keyTakeaways: [
        "Identify the five main areas of the Photoshop workspace",
        "Customize and save your own workspace layout",
        "Show, hide, and rearrange panels efficiently",
        "Use the Application Frame and zoom controls",
      ],
      content: [
        {
          heading: "The Five Main Areas",
          body: "The Photoshop workspace is divided into five distinct regions. At the very top is the Menu Bar, which contains every single command Photoshop offers, organized into menus like File, Edit, Image, Layer, Type, Select, Filter, View, Window, and Help. Directly below the menu bar is the Options Bar, which changes dynamically depending on which tool you have selected — it shows the settings and controls for that specific tool.\n\nOn the left side is the Tools Panel (also called the Toolbox). This narrow vertical strip holds all of Photoshop's tools, grouped by function. You will spend a lot of time here. On the right side are the Panels — floating windows that give you access to Layers, Colors, Adjustments, History, and much more. You can show or hide any panel from the Window menu. Finally, in the center is the Canvas — the actual document area where your image lives.",
        },
        {
          heading: "Navigating the Tools Panel",
          body: "The Tools Panel has around 70 tools organized into groups. When you see a small triangle in the bottom-right corner of a tool icon, it means that tool has hidden variants underneath it. For example, the Rectangular Marquee Tool has the Elliptical Marquee, Single Row, and Single Column tools hiding beneath it. To access them, click and hold on any tool icon to reveal a flyout menu of its variants.\n\nEvery tool has a single-letter keyboard shortcut. M for Marquee, V for Move, B for Brush, E for Eraser, T for Type, and so on. Learning these shortcuts will dramatically speed up your workflow. You can see a tool's shortcut by hovering over it in the Tools Panel — a tooltip will appear showing both the tool name and its shortcut. Press Shift plus a shortcut key to cycle through the variants in a group — for example, pressing Shift+M repeatedly toggles between the Rectangular and Elliptical Marquee tools.",
        },
        {
          heading: "Working with Panels",
          body: "Panels can be docked, undocked, grouped, and resized. By default, several panels are docked to the right side of the screen in a column. You can click and drag a panel's tab to move it. Drag it to another panel group to dock it there, or drag it to an empty area of the screen to make it a floating panel. To close a panel, click the three-line hamburger icon in its top-right corner and choose Close, or simply go to Window and uncheck it.\n\nA fantastic feature is the ability to collapse panels into icons to save screen space. Click the double-arrow icon at the top of the panel dock to collapse it to icon mode — this gives you much more canvas space on smaller screens. Click any icon to temporarily expand that panel, then click elsewhere to collapse it again. When you have arranged your panels the way you like, go to Window > Workspace > New Workspace, give it a name like 'My Setup', and save it. Now if your panels ever get accidentally rearranged, you can restore your layout by going to Window > Workspace and selecting your saved workspace.",
        },
        {
          heading: "Zoom and Navigation Essentials",
          body: "Knowing how to move around your canvas efficiently is critical. Press Cmd+Plus (Mac) or Ctrl+Plus (Windows) to zoom in, and Cmd+Minus / Ctrl+Minus to zoom out. Press Cmd+0 / Ctrl+0 to fit the entire image on screen, and press Cmd+1 / Ctrl+1 to view the image at 100% (actual pixels). You can also hold Cmd+Spacebar (Mac) or Ctrl+Spacebar (Windows) to temporarily activate the Zoom tool — click to zoom in, or Alt/Option-click to zoom out — without switching away from your current tool.\n\nTo pan around a zoomed-in image, hold the Spacebar to temporarily switch to the Hand tool, then click and drag to move around. This is one of the most-used shortcuts in Photoshop. Alternatively, you can use the Navigator panel (Window > Navigator) to see a bird's-eye view of your document and drag the red box to quickly jump to different areas. For very precise work, go to View > Zoom In/Out, or simply type a specific zoom percentage directly into the zoom field in the bottom-left corner of the document window.",
        },
        {
          heading: "Pro Tips for Workspace Efficiency",
          body: "Press the Tab key to hide all panels and the Tools Panel at once, giving you a full-screen canvas view. Press Tab again to bring everything back. Press Shift+Tab to hide only the panels on the right while keeping the Tools Panel visible — great for quick full-canvas checks.\n\nIf you ever lose a panel or your workspace looks wrong, go to Window > Workspace > Reset [Workspace Name] to restore it to its saved state. Also, Photoshop has an Essentials, Photography, Graphic and Web, and several other preset workspaces under Window > Workspace. These pre-arrange panels for different types of work. Try the Photography workspace if you are working on photos — it surfaces the Histogram and Adjustments panels prominently, which you will use constantly.",
        },
      ],
    },
    {
      id: "1-3",
      title: "Working with Documents",
      duration: "10 min",
      description:
        "Learn how to create new documents, open existing files, understand resolution and color modes, and manage multiple documents.",
      keyTakeaways: [
        "Create new documents with the correct settings for print or web",
        "Understand resolution, color mode, and bit depth",
        "Open, place, and manage multiple files",
        "Use the New Document dialog presets effectively",
      ],
      content: [
        {
          heading: "Creating a New Document",
          body: "To create a new document, go to File > New or press Cmd/Ctrl+N. This opens the New Document dialog, which is your starting point for every project. Photoshop organizes templates into tabs at the top: Recent, Saved, Photo, Print, Art & Illustration, Web, Mobile, and Film & Video. These presets automatically fill in the correct settings for each use case — for example, clicking on a web preset sets the resolution to 72 PPI and the color mode to RGB, while a print preset sets resolution to 300 PPI and color mode to CMYK.\n\nFor most beginners, you will use two main setups. For anything going on a screen (website, social media, digital art), use 72 PPI, RGB color mode, 8-bit depth. For anything being printed (flyers, posters, business cards), use 300 PPI, CMYK color mode, 8-bit depth. After choosing your settings, give your document a name in the Name field, then click Create.",
        },
        {
          heading: "Understanding Resolution and Color Mode",
          body: "Resolution in Photoshop is measured in PPI — pixels per inch. This number tells you how many pixels are packed into every inch of the image. A higher PPI means more pixels, more detail, and a sharper print. 72 PPI is standard for screens because most monitors display at around that density. 300 PPI is the minimum for quality print reproduction — professional print shops often require at least 300 PPI at the final print size.\n\nColor mode determines how colors are stored and mixed. RGB (Red, Green, Blue) is the mode for anything displayed on screens — it is an additive color model where combining all three at full strength makes white. CMYK (Cyan, Magenta, Yellow, Black) is used for print — it is a subtractive model that represents the four inks used in commercial printing. If you design in RGB and then convert to CMYK for print, some colors — particularly very vivid blues and greens — will shift because certain RGB colors cannot be reproduced with CMYK inks. This is called being 'out of gamut.' Whenever possible, start your print projects in CMYK from the beginning.",
        },
        {
          heading: "Opening, Placing, and Managing Files",
          body: "To open an existing image, go to File > Open (Cmd/Ctrl+O) and navigate to your file. Photoshop supports a huge range of file formats: JPEG, PNG, TIFF, PSD, PDF, RAW files from cameras, and many more. You can also drag and drop files directly from Finder (Mac) or File Explorer (Windows) onto the Photoshop application icon, or onto the open canvas area.\n\nTo bring one image into an existing document — for example, placing a logo onto a photo — go to File > Place Embedded. This inserts the image as a Smart Object (a special layer type covered in later lessons) and surrounds it with transform handles so you can resize it immediately. Use File > Place Linked if you want Photoshop to reference the original file rather than embed a copy — useful for large files you might update later. When you have multiple documents open, they appear as tabs at the top of the canvas area. Click any tab to switch to that document, or go to Window > Arrange to display multiple documents side by side.",
        },
        {
          heading: "Saving Your Work",
          body: "Photoshop has two main save commands. File > Save (Cmd/Ctrl+S) saves the file in its current format — if it is a PSD file, it saves as PSD; if it is a JPEG, it saves as JPEG (though saving a JPEG will flatten layers and you will lose editability). The much better habit is to always work in PSD format and use File > Save As (Cmd/Ctrl+Shift+S) when you need to export in another format.\n\nThe PSD (Photoshop Document) format is Photoshop's native format and preserves everything: all your layers, adjustment layers, masks, smart objects, and settings. Think of PSD as your master working file — always keep it. Use File > Export > Export As (or the older File > Save for Web) to create your final JPEG, PNG, or GIF outputs without destroying your working PSD. We will cover this in much more detail in Lesson 14.",
        },
      ],
    },
    {
      id: "1-4",
      title: "Understanding Layers",
      duration: "15 min",
      description:
        "Layers are the foundation of all non-destructive editing in Photoshop. Learn how to create, organize, and manipulate layers like a pro.",
      keyTakeaways: [
        "Understand the concept of layers and layer stacking order",
        "Create, rename, duplicate, and delete layers",
        "Use layer groups to organize complex documents",
        "Control layer visibility, opacity, and blend modes",
      ],
      content: [
        {
          heading: "What Are Layers and Why Do They Matter?",
          body: "Layers are without question the single most important concept in Photoshop. Think of layers as transparent sheets of glass stacked on top of each other. Each sheet can contain different content — a photo, a piece of text, a colored shape, a painted brushstroke — and because they are separate, you can edit each one independently without affecting anything else. This is the core principle of non-destructive editing.\n\nImagine you are designing a birthday card. Layer 1 has the background color, Layer 2 has a photo of the birthday person, Layer 3 has decorative shapes, and Layer 4 has the text. If you want to change the text, you only touch Layer 4 — everything else stays exactly as it is. Without layers, every change you made would be permanently baked into a single flat image, and one mistake could ruin everything. With layers, you can always go back, change your mind, hide elements, and experiment freely.",
        },
        {
          heading: "Creating and Managing Layers",
          body: "The Layers panel is your command center for all layer operations. If you cannot see it, go to Window > Layers or press F7. Each layer appears as a row in the panel, with a thumbnail showing its content. The order of layers in the panel reflects their visual stacking order on the canvas — layers at the top of the panel appear in front of layers lower in the panel.\n\nTo create a new empty layer, click the New Layer icon at the bottom of the Layers panel (it looks like a square with a folded corner) or press Cmd/Ctrl+Shift+N to name it as you create it. Always name your layers something descriptive — 'Background Photo', 'Logo', 'Headline Text' — never leave them as 'Layer 1', 'Layer 2'. This discipline will save you enormous confusion on complex projects. To rename a layer, double-click its name in the Layers panel and type the new name. To duplicate a layer, right-click it and choose Duplicate Layer, or press Cmd/Ctrl+J. To delete a layer, drag it to the trash icon at the bottom of the Layers panel.",
        },
        {
          heading: "Layer Groups and Organization",
          body: "Once you start working on real projects, you will quickly accumulate many layers — a complex design might have 50 or 100 layers. Layer Groups (also called folders) are essential for keeping things organized. To create a group, click the New Group icon at the bottom of the Layers panel (the folder icon), or select multiple layers and press Cmd/Ctrl+G to group them. You can then collapse the group to a single row in the panel by clicking the triangle next to the folder icon.\n\nA good organizational habit is to group layers by function. For a website design, you might have groups called 'Header', 'Navigation', 'Hero Image', 'Content Section', and 'Footer'. Each group contains the layers relevant to that section. Groups can even be nested inside other groups for extremely complex projects. To move layers between groups, simply drag them in the Layers panel — you will see a blue highlight indicating where the layer will land when you release the mouse.",
        },
        {
          heading: "Opacity, Visibility, and Blend Modes",
          body: "Every layer has an Opacity slider at the top of the Layers panel, which controls how transparent that layer is. At 100% the layer is fully visible; at 0% it is completely invisible. Anything in between creates a semi-transparent effect where layers below show through. You can quickly change a layer's opacity by selecting it and pressing a number key — press 5 for 50%, press 7 for 70%, press 0 for 100%. For tools like the Brush, pressing number keys changes brush opacity instead, so make sure the Move tool (V) is active when using number keys to change layer opacity.\n\nThe small eye icon to the left of each layer in the Layers panel controls visibility. Click it to toggle a layer on or off — this is great for comparing before and after, or for hiding elements you are not currently working on. Blend Modes are one of Photoshop's most powerful features. The dropdown menu at the top-left of the Layers panel (which says 'Normal' by default) controls how a layer interacts with the layers below it. 'Multiply' darkens, 'Screen' lightens, 'Overlay' increases contrast. We will explore blend modes in detail in later lessons, but for now, try clicking through the list on a layer that sits above a photo and watch how each mode changes the result.",
        },
        {
          heading: "Practice Exercise",
          body: "Open any photo in Photoshop. In the Layers panel, double-click the layer (it will be called 'Background' with a lock icon) and click OK to convert it to a regular layer — this unlocks it so you can work with it freely. Now create a new layer above it (Cmd/Ctrl+Shift+N, name it 'Color Overlay'). Select a bright color from the Color Picker and use the Paint Bucket tool (press G) to fill this new layer with that color.\n\nNow experiment with the Opacity slider on the 'Color Overlay' layer — watch how reducing opacity makes the photo show through. Then try different Blend Modes on the color layer — notice how Multiply, Screen, and Overlay all create completely different results with the same two layers. This is the power of layers: flexible, non-destructive, infinitely editable. When you are done, create a group called 'Experiment', drag both layers into it, and practice collapsing and expanding the group.",
        },
      ],
    },
    {
      id: "1-5",
      title: "Basic Selection Tools",
      duration: "14 min",
      description:
        "Master Photoshop's selection tools to isolate and edit specific parts of an image with precision.",
      keyTakeaways: [
        "Use the Marquee, Lasso, and Magic Wand selection tools",
        "Add to, subtract from, and intersect selections",
        "Feather and refine selection edges",
        "Move, copy, and delete selected content",
      ],
      content: [
        {
          heading: "Why Selections Are Essential",
          body: "A selection in Photoshop is a defined area that tells Photoshop, 'only affect this region.' When you have an active selection (indicated by the animated dashed border called 'marching ants'), any edits you make — painting, adjustments, filters, transformations — will only apply to the area inside the selection. Everything outside is protected. This is how you change the color of a sky without affecting the buildings, or brighten someone's face without brightening the background.\n\nThere are several families of selection tools, each suited to different situations. The Marquee tools create geometric selections. The Lasso tools create freehand selections. The Magic Wand and Quick Selection tools select based on color similarity. More advanced tools like Select > Subject and Select > Sky use AI to make intelligent selections automatically. We will cover the foundational tools in this lesson.",
        },
        {
          heading: "Marquee and Lasso Tools",
          body: "The Rectangular Marquee tool (press M) draws rectangular or square selections. Click and drag to draw. Hold Shift while dragging to constrain the selection to a perfect square. Hold Alt/Option while dragging to draw from the center outward. The Elliptical Marquee (hidden under the Rectangular Marquee — click and hold its icon, or press Shift+M to toggle) works the same way but draws oval and circular selections. Hold Shift for a perfect circle.\n\nThe Lasso tool (press L) lets you draw completely freehand selections — click and drag to trace around an irregular shape. Release the mouse button and Photoshop closes the selection automatically. The Polygonal Lasso (Shift+L) creates selections with straight lines between clicked points — great for selecting buildings, boxes, or any object with straight edges. Just click around the edge of your subject, creating anchor points as you go, and double-click to close the selection. The Magnetic Lasso (Shift+L again) tries to snap to edges as you drag — it works well on high-contrast edges but can be frustrating on complex subjects.",
        },
        {
          heading: "Magic Wand and Quick Selection",
          body: "The Magic Wand tool (press W) selects areas based on color similarity. Click on a color in your image and Photoshop selects all adjacent pixels of a similar color. The Tolerance setting in the Options Bar controls how broadly 'similar' is defined — a low tolerance (10–20) selects only very close colors, while a high tolerance (50–100) selects a much wider range. Check 'Contiguous' to select only connected areas of that color, or uncheck it to select all matching areas across the entire image regardless of whether they are touching.\n\nThe Quick Selection tool (also under W, or press Shift+W to toggle) is usually more intuitive than the Magic Wand. Instead of clicking a color, you paint over the area you want to select — Photoshop intelligently expands the selection to include similar-colored, similar-textured areas as you brush. It works almost like magic on subjects that have clear contrast with their background. Use a small brush size for precise edges and a larger brush for open areas. In the Options Bar, make sure 'Enhance Edge' or 'Auto-Enhance' is checked for smoother selection edges.",
        },
        {
          heading: "Modifying Selections",
          body: "Once you have an initial selection, you will almost always need to refine it. Hold Shift and draw another selection to add to the existing one (the cursor shows a plus sign). Hold Alt/Option and draw to subtract from the selection (minus sign). Hold both Shift+Alt/Option to intersect — keeping only the area where both selections overlap. These modifier keys work with any selection tool, so you can use the Magic Wand to make an initial selection and then refine it with the Lasso.\n\nTo soften the edge of a selection — creating a gradual fade instead of a hard cut — use feathering. Before drawing your selection, enter a Feather value in the Options Bar (try 10–30 pixels for a soft edge). You can also feather an existing selection by going to Select > Modify > Feather. To expand or contract a selection by a specific amount, go to Select > Modify > Expand or Contract. To deselect everything, press Cmd/Ctrl+D. To reselect the last selection, press Cmd/Ctrl+Shift+D. To invert a selection (select everything that was NOT selected), press Cmd/Ctrl+Shift+I — incredibly useful when it is easier to select the background and then invert to get the subject.",
        },
        {
          heading: "Using Your Selection",
          body: "With an active selection, pressing Cmd/Ctrl+C copies the selected content and Cmd/Ctrl+V pastes it as a new layer. Press Cmd/Ctrl+X to cut the selected area (removing it from the current layer and placing it on the clipboard). Press Delete/Backspace to delete the selected content — if you are on a regular layer, it deletes to transparency; if you are on a Background layer, it fills with the background color.\n\nYou can also move the selected pixels by switching to the Move tool (V) and dragging. Be careful though — on a non-Background layer, moving a selection moves the actual pixel content, leaving a transparent hole behind. To move just the selection border without moving the content, switch to any selection tool and drag from inside the selection. Practice by opening a photo with a clear sky and using the Magic Wand or Quick Selection tool to select the sky, then try pressing Cmd/Ctrl+J to copy the selection to a new layer — a handy shortcut that creates a new layer containing only the selected content.",
        },
      ],
    },
    {
      id: "1-6",
      title: "The Brush Tool Family",
      duration: "12 min",
      description:
        "Discover the Brush, Pencil, Eraser, and related painting tools. Learn to control brush size, hardness, opacity, and flow.",
      keyTakeaways: [
        "Control brush size, hardness, opacity, and flow",
        "Use the Brush Preset Picker and load new brush sets",
        "Understand the difference between Brush, Pencil, and Airbrush modes",
        "Paint along paths and create special brush effects",
      ],
      content: [
        {
          heading: "The Brush Tool Fundamentals",
          body: "The Brush tool (press B) is one of Photoshop's oldest and most versatile tools. At its simplest, it paints the foreground color onto a layer as you click and drag. But with thousands of possible settings, it is also capable of simulating oil paint, watercolor, chalk, ink, and just about any other traditional medium — or creating entirely unique digital textures.\n\nTo use the Brush tool, first make sure you have the correct layer selected in the Layers panel — the Brush paints directly onto pixels, so always paint on a dedicated layer rather than directly on your subject. Press B to select the Brush, then look at the Options Bar across the top of the screen. You will see controls for Mode, Opacity, Flow, Smoothing, and a brush preview circle showing the current brush size. The most important habit to develop: always paint on a new empty layer so you can adjust or erase your brushwork without affecting the original image.",
        },
        {
          heading: "Controlling Brush Size and Hardness",
          body: "The two most fundamental brush settings are Size and Hardness. Size determines how large the brush tip is in pixels. You can change it in several ways: use the brush size slider in the Options Bar, type a value in the size field, or — the fastest method — press the Left Bracket key [ to decrease size and Right Bracket ] to increase size. Press Shift+[ to decrease hardness and Shift+] to increase hardness.\n\nHardness controls whether the brush edge is sharp or soft. At 100% hardness, the brush has a crisp, defined edge — good for precise painting, technical work, or creating graphics. At 0% hardness, the edge feathers out to a very soft gradient — good for natural-looking painting, blending, and retouching. Right-click anywhere on the canvas while the Brush tool is active to open the Brush Preset Picker, which gives you quick access to all installed brushes plus sliders for size and hardness. This context menu is faster than going up to the Options Bar every time.",
        },
        {
          heading: "Opacity, Flow, and Airbrush Mode",
          body: "Opacity controls the maximum transparency of each brushstroke. At 100% opacity, the brush lays down completely opaque color. At 50%, the painted color is semi-transparent and the layer below shows through. Crucially, if you paint over the same area multiple times in one stroke (without lifting the mouse), the opacity does NOT build up — you would need to release the mouse and paint again for each pass to build transparency. Use the number keys (with the Move tool NOT selected) to set brush opacity: 1 = 10%, 5 = 50%, 0 = 100%.\n\nFlow works differently from Opacity. Flow controls the rate at which paint is applied per brushstroke — with a low Flow value (like 20%), painting repeatedly over the same area in a single stroke WILL gradually build up color, similar to how ink flows from a real brush or pen. The Airbrush mode (click the airbrush icon in the Options Bar, or press Alt+Shift+P) takes this further: hold the mouse button in place and color continuously builds up, just like holding an aerosol can against a surface. For realistic painting and blending, try Opacity at 100% and Flow between 10–30%. For cover-up or graphic work, use full Opacity and full Flow.",
        },
        {
          heading: "The Eraser and Other Brush-Based Tools",
          body: "The Eraser tool (press E) works exactly like the Brush, but instead of adding color, it removes pixels. On a regular layer, erasing reveals transparency (the checkerboard pattern). On a Background layer, erasing fills with the background color instead. The Eraser shares the same Size, Hardness, Opacity, and Flow controls as the Brush. Use a soft eraser at low opacity for gentle blending and fading effects, and a hard eraser at full opacity for precise clean-up.\n\nOther important members of the brush family include the Healing Brush (J), Clone Stamp (S), Smudge, Blur, Sharpen, Dodge, Burn, and Sponge tools — all of which use brush-like strokes to apply their effects. We will cover retouching tools in Lesson 10. For now, also explore the Pencil tool (hidden under the Brush, or press Shift+B to cycle): the Pencil always paints with 100% hard edges regardless of the Hardness setting — useful for pixel art or technical diagrams where you never want anti-aliased (smoothed) edges.",
        },
        {
          heading: "Pro Tips and Shortcuts",
          body: "To paint in a perfectly straight horizontal or vertical line, click once where you want to start, then hold Shift and click where you want to end — Photoshop draws a straight stroke between the two points. You can also hold Shift and drag to constrain the brush to horizontal or vertical strokes. This works with the Eraser tool too.\n\nTo quickly sample a color from anywhere in your image and set it as your foreground color, hold Alt/Option while the Brush tool is active — the cursor temporarily changes to an eyedropper. Click any color in the image to sample it, then release Alt/Option to return to the Brush. This is much faster than opening the Color Picker manually. Finally, try increasing the Spacing value in the full Brush Settings panel (Window > Brush Settings, or press F5) above 100% — this makes the brush tip repeat at intervals, creating dotted lines or textured strokes rather than a continuous line.",
        },
      ],
    },
    {
      id: "1-7",
      title: "Working with Color",
      duration: "10 min",
      description:
        "Learn how Photoshop manages foreground and background colors, how to use the Color Picker, Swatches panel, and Eyedropper tool.",
      keyTakeaways: [
        "Set foreground and background colors using multiple methods",
        "Navigate the Color Picker and understand color values",
        "Use the Swatches panel to save and reuse colors",
        "Sample colors from images with the Eyedropper tool",
      ],
      content: [
        {
          heading: "Foreground and Background Colors",
          body: "Photoshop maintains two active colors at all times: the Foreground Color and the Background Color, shown as two overlapping squares in the lower portion of the Tools Panel. The front square is the Foreground Color — this is what the Brush, Pencil, and Type tools use when they create content. The back square is the Background Color — this is used when you erase on a Background layer, use the Gradient tool in certain modes, or use some filters.\n\nClick either square to open the Color Picker and choose a new color. Press D to reset both colors to the default black foreground and white background. Press X to swap the foreground and background colors — this is an incredibly useful shortcut when you are painting with two alternating colors or when you need to quickly switch between a light and dark value. The foreground and background colors are also visible and adjustable in the Color panel (Window > Color).",
        },
        {
          heading: "Using the Color Picker",
          body: "The Color Picker is Photoshop's main tool for choosing exact colors. When you click either the foreground or background color swatch, the Color Picker opens. On the left is a large color field (a square gradient showing saturation on the horizontal axis and brightness on the vertical axis). To its right is a narrow vertical color strip called the Hue slider. Click anywhere in the hue slider to choose a base color (red, blue, green, yellow, etc.), then click in the large color field to choose the specific shade.\n\nFor precise color work, use the numeric fields on the right. The H, S, B fields represent Hue (0–360 degrees on the color wheel), Saturation (0–100%), and Brightness (0–100%) — this is a good system for humans to think about color. The R, G, B fields let you enter exact RGB values from 0–255 each. The # field at the bottom accepts hexadecimal color codes like #FF5733 — you will use this constantly for web design since hex codes are how colors are defined in HTML and CSS. After choosing a color, the picker shows a before/after swatch so you can compare your new choice to the current color before committing.",
        },
        {
          heading: "The Swatches Panel and Color Libraries",
          body: "If you work with brand colors or any consistent color palette, the Swatches panel (Window > Swatches) is essential. It displays a grid of saved colors you can click to instantly set as the foreground color. To add a new color to your swatches, set up the foreground color you want, then click the New Swatch button at the bottom of the Swatches panel — give it a descriptive name like 'Brand Blue' and click OK.\n\nPhotoshop also comes with many professional color libraries — Pantone, web-safe colors, and more. Click the three-line menu in the Swatches panel and choose a library like 'Pantone Solid Coated' to load Pantone swatches. Pantone (PMS) colors are standardized ink colors used in professional printing, ensuring your printed pieces match exactly what you see on screen. You can also create a new Swatch Group (folder) to organize colors by project — very useful when managing multiple client brands in the same workspace.",
        },
        {
          heading: "The Eyedropper Tool",
          body: "The Eyedropper tool (press I) samples color from any pixel in your image and sets it as the foreground color. This is how you 'pick up' a color from a photo to use elsewhere. Click once to sample a single pixel, or hold and drag to see a live preview of the color as you hover over different areas. The Sample Size option in the Options Bar is important: 'Point Sample' picks the exact color of the single pixel you click, while '3 by 3 Average' or '5 by 5 Average' averages the colors of a small surrounding area — the averaged options are usually more useful because they give you a representative color rather than a potentially noisy individual pixel.\n\nYou can also use the Eyedropper in conjunction with the Brush tool without switching tools: while painting with the Brush, hold Alt/Option to temporarily activate the Eyedropper, click any color in the image to sample it, and the moment you release Alt/Option you are back to painting with your newly sampled color. This paint-and-sample workflow is the foundation of digital painting and is the technique used by professional digital artists to create smooth, realistic color blends.",
        },
      ],
    },
    {
      id: "1-8",
      title: "Transform & Crop",
      duration: "11 min",
      description:
        "Learn to resize, rotate, skew, warp, and crop images and layers using Photoshop's powerful transform tools.",
      keyTakeaways: [
        "Use Free Transform to resize, rotate, and distort layers",
        "Apply perspective and warp transformations",
        "Crop images and use the Crop tool's advanced options",
        "Understand the difference between transforming layers and the canvas",
      ],
      content: [
        {
          heading: "Free Transform",
          body: "Free Transform is the command you will use most often to resize, rotate, and reposition layer content. Select the layer you want to transform in the Layers panel, then press Cmd/Ctrl+T (or go to Edit > Free Transform). A bounding box with handles appears around the layer content. Drag the corner handles to resize — in older versions of Photoshop you needed to hold Shift to maintain proportions, but since Photoshop CC 2019 proportional scaling is the default. Hold Shift while dragging to scale non-proportionally. Drag from inside the bounding box to reposition the content.\n\nTo rotate, hover your cursor just outside a corner handle until it changes to a curved double-arrow, then drag to rotate. Hold Shift while rotating to snap to 15-degree increments (0°, 15°, 30°, 45°, etc.). You can also type exact values in the Options Bar at the top of the screen — enter width and height percentages, an angle in degrees, or X/Y coordinates for the position. When you are happy with your transformation, press Enter/Return to commit it. Press Escape to cancel and return to the original state.",
        },
        {
          heading: "Advanced Transform Options",
          body: "Free Transform has several advanced modes accessible by right-clicking inside the bounding box while it is active. Scale does what the default handles do. Rotate gives you rotation only. Skew lets you drag a side handle to shear the content diagonally — great for creating shadow effects or making a flat rectangle look like it is lying on a surface. Distort lets you move each corner handle independently — useful for perspective corrections. Perspective moves two corner handles simultaneously to simulate a real perspective view.\n\nWarp (also in the right-click menu) is especially powerful: it displays a grid over the layer and lets you drag any point or line on that grid to push and pull the image like taffy. This is how designers bend flat labels onto curved bottles, or make a flag appear to ripple in the wind. For even more control, check out Edit > Puppet Warp, which lets you place pin points on a subject and move individual body parts while the rest of the image stays in place — ideal for adjusting the pose of a person or animal.",
        },
        {
          heading: "The Crop Tool",
          body: "The Crop tool (press C) lets you trim the edges of your document to a new size or ratio. Press C to activate it. Handles appear on all four edges and corners of the canvas. Drag any handle inward to define the area you want to keep — the darkened area outside will be cropped away. Press Enter to commit the crop.\n\nIn the Options Bar, the Ratio/Size dropdown is very useful. Choose a preset aspect ratio like 1:1 (square), 16:9 (widescreen), 4:5 (Instagram portrait), or type in custom dimensions. This constrains the crop to that exact shape as you drag, perfect when you need to crop an image to fit a specific space. The 'Delete Cropped Pixels' checkbox in the Options Bar is important: when unchecked, Photoshop hides the cropped pixels rather than permanently deleting them (this requires the layer to not be a Background layer). This means you can uncrop later by pressing Cmd/Ctrl+Z or by pulling the crop handles back out. Leave this unchecked as a general rule for flexibility.",
        },
        {
          heading: "Straighten and Content-Aware Crop",
          body: "A very useful feature of the Crop tool is the ability to straighten a crooked photo. In the Options Bar, click the Straighten button (or press P while the Crop tool is active), then click and drag along a line in your image that should be horizontal (like a horizon line) or vertical (like a building edge). Photoshop automatically rotates the canvas to straighten that line.\n\nContent-Aware Crop is a clever feature that uses AI to fill in gaps when you crop in a way that extends beyond the current canvas edge. For example, if you straighten a crooked photo, the rotation creates transparent triangular corners. With Content-Aware enabled in the Options Bar, Photoshop intelligently fills those corners with generated content that matches the surroundings — it is not always perfect, but it often saves you significant manual retouching work. To use it, check 'Content Aware' in the Crop tool's Options Bar before committing the crop.",
        },
      ],
    },
    {
      id: "1-9",
      title: "Type Tool Basics",
      duration: "10 min",
      description:
        "Add and style text in Photoshop using the Type tool. Learn point text, area text, character formatting, and paragraph settings.",
      keyTakeaways: [
        "Create point text and area (paragraph) text layers",
        "Format text with fonts, size, leading, tracking, and kerning",
        "Use the Character and Paragraph panels for precise control",
        "Convert text to shapes or rasterize for special effects",
      ],
      content: [
        {
          heading: "Creating Text Layers",
          body: "Press T to select the Type tool. You will notice the Options Bar shows font family, font style (Regular, Bold, Italic, etc.), font size, anti-aliasing method, alignment, and color. There are two fundamental ways to place text in Photoshop, and they behave very differently.\n\nPoint Text: simply click once on the canvas where you want the text to start, and type. The text expands in a single line (or multiple lines if you press Enter) with no boundary. This is best for short text like headlines, labels, and captions. Area Text (also called Paragraph Text): click and drag to draw a text box, then type. The text automatically wraps within the box boundaries. This is best for longer blocks of body copy, descriptions, or any text that needs to flow within a defined space. You can resize an Area Text box by dragging its corner handles while the Type tool is active. Press Cmd/Ctrl+Enter to finish editing and exit the text layer (pressing just Enter adds a new line).",
        },
        {
          heading: "The Character Panel",
          body: "For detailed control over your text, open the Character panel by going to Window > Character or clicking the Character panel icon in the Options Bar while the Type tool is active. The Character panel gives you access to every typographic setting.\n\nFont Family and Font Style are at the top. Below that, the left field sets font size (try keyboard shortcut Cmd/Ctrl+Shift+> to increase size and Cmd/Ctrl+Shift+< to decrease). Leading (pronounced 'ledding') is the vertical space between lines of text — click the icon that looks like two A's stacked vertically. Tracking adjusts the spacing between all selected characters — positive values spread letters apart, negative values bring them closer together. Kerning adjusts the space between two specific characters — click between two letters and adjust. These three spacing controls are the foundation of professional typography.",
        },
        {
          heading: "The Paragraph Panel and Text Alignment",
          body: "Open the Paragraph panel via Window > Paragraph. This panel controls how text aligns and flows within its container. The seven alignment buttons at the top cover left align, center align, right align, and four justify modes (justify left, justify center, justify right, and justify all — the last option stretches the final line to fill the full width, which usually looks bad and should be avoided).\n\nFor Area Text boxes, you can also set Space Before Paragraph and Space After Paragraph — these add padding between separate paragraphs rather than using blank lines, giving you more precise control. Indent Left Margin and Indent Right Margin indent the entire paragraph from the text box edges. Hyphenation (a checkbox at the bottom) can automatically hyphenate long words that break across lines. In general, for design work, turn hyphenation off — in print typography at narrow column widths, it can be acceptable, but for most design use it tends to look amateurish.",
        },
        {
          heading: "Type Effects and Rasterization",
          body: "Text layers in Photoshop remain editable as vector objects — meaning you can change the words, font, or size at any time. However, many of Photoshop's pixel-based tools (brushes, filters, etc.) cannot be applied to live text layers. To apply filters or paint directly on text, you need to rasterize it: right-click the text layer in the Layers panel and choose Rasterize Type. Important warning: once rasterized, the text is no longer editable as text. Always keep a backup of the original text layer by duplicating it (Cmd/Ctrl+J) and hiding the duplicate before rasterizing.\n\nA better alternative for many effects is to convert text to a Shape: right-click the text layer and choose Convert to Shape. This turns each character into a vector path that you can manipulate with the Pen and Direct Selection tools, while keeping it resolution-independent. You can also apply Layer Styles (double-click a layer in the panel to open Layer Style) to text layers without rasterizing — drop shadows, glows, gradients, strokes, and bevels all apply live to text and remain fully editable.",
        },
      ],
    },
    {
      id: "1-10",
      title: "Basic Retouching",
      duration: "13 min",
      description:
        "Learn the essential retouching tools — Heal, Clone Stamp, Dodge, Burn, and Spot Healing — to clean up and enhance photos.",
      keyTakeaways: [
        "Remove blemishes and unwanted objects with the Healing Brush tools",
        "Clone and copy areas with the Clone Stamp tool",
        "Lighten and darken specific areas with Dodge and Burn",
        "Use Content-Aware Fill for seamless object removal",
      ],
      content: [
        {
          heading: "The Healing Brush Family",
          body: "The Healing Brush tools are designed to remove imperfections from photos while blending seamlessly with the surrounding area. There are three main variants, all accessed by pressing J or clicking and holding the healing tool icon in the toolbar.\n\nThe Spot Healing Brush is the simplest and fastest. Just paint over the area you want to fix — a blemish, a scratch, a power line in a landscape — and Photoshop automatically samples the surrounding area and blends the fix in. You do not need to manually define a source. It works best on small, relatively simple areas. For best results, make your brush slightly larger than the blemish, click once, and let Photoshop do the work. The Healing Brush works similarly but requires you to set a source point first: hold Alt/Option and click a clean area of skin or texture, then paint over the blemish. The tool copies the texture from the source while matching the color and tone of the destination — this gives you more control than the Spot Healing Brush.",
        },
        {
          heading: "The Clone Stamp Tool",
          body: "The Clone Stamp tool (press S) is a more manual version of healing. Instead of intelligently blending, it literally copies pixels from a source point and paints them onto the destination. Hold Alt/Option and click to set your source point, then paint over the area you want to cover. You will see a crosshair moving in the source area as you paint, showing you exactly what is being copied.\n\nThe Clone Stamp is useful when the Healing Brush struggles — for example, when working near a high-contrast edge like a hairline against a bright background, the Healing Brush can bleed dark tones from the hair into the skin. The Clone Stamp copies exactly what you sample without trying to blend, giving you precise control. Use a medium-soft brush at 100% opacity for most cloning work. Change the source point frequently (keep Alt/Option-clicking new source areas) to avoid creating repeated patterns that make the retouching obvious.",
        },
        {
          heading: "Content-Aware Fill",
          body: "Content-Aware Fill is one of Photoshop's most impressive AI-powered features. It can remove entire objects from photos — a tourist from a landmark shot, a distracting trash can in a landscape, an ex from a group photo — by intelligently generating replacement background content.\n\nTo use it, first make a selection around the object you want to remove (use any selection tool). Make the selection slightly generous — a few pixels larger than the object itself. Then go to Edit > Content-Aware Fill. This opens a full workspace showing your image, the selected area, and a preview of the result. On the right panel, make sure Sampling Area Options is set to 'Auto'. The green overlay shows which areas Photoshop is using as source material for its fill — you can paint in the sampling area to add or remove regions from consideration. When the preview looks good, click OK. For large, complex objects the result might need some cleanup with the Healing Brush, but for many subjects the Content-Aware Fill is surprisingly convincing.",
        },
        {
          heading: "Dodge, Burn, and Sponge Tools",
          body: "The Dodge and Burn tools are derived from traditional darkroom techniques (dodging lightened areas of a print, burning darkened them). In Photoshop, the Dodge tool (press O) lightens areas you paint over, and the Burn tool (press O again, or Shift+O to cycle) darkens them. Both work by painting directly on the layer, affecting the underlying pixels.\n\nIn the Options Bar, the Range setting controls which tonal values are affected: Shadows, Midtones, or Highlights. To lighten dark areas under the eyes, use Dodge on Shadows. To add depth and richness to a mid-tone sky, use Burn on Midtones. The Exposure slider controls how strong each pass is — keep it low (5–15%) and build up the effect gradually with multiple strokes for the most natural-looking result. The Sponge tool (also under O) increases or decreases color saturation in specific areas — use Saturate mode to punch up the color in a dull flower, or Desaturate mode to tone down an area that is too vibrant. Always work with a low Flow setting for subtle, controllable results.",
        },
        {
          heading: "Best Practices for Non-Destructive Retouching",
          body: "The golden rule of retouching is to never paint directly on your original image layer. Instead, for Healing Brush and Clone Stamp work, create a new empty layer above the original and check 'Sample All Layers' or 'Sample: Current & Below' in the Options Bar. This tells the tool to sample from the layers below but paint its output onto your new empty layer. This way, all your retouching lives on a separate layer that you can reduce opacity on, selectively erase, or completely throw away without touching the original.\n\nFor Dodge and Burn, create a new layer, fill it with 50% gray (Edit > Fill > 50% Gray), and set its blend mode to Overlay. Painting black on this layer darkens (burns) the image, and painting white lightens (dodges) it — but because the gray-filled Overlay layer is completely invisible at 50% gray, you are adding all this shading non-destructively on a separate layer. Use the Brush at low opacity with a very soft brush for the most natural-looking dodge and burn. This is the professional retouching workflow used by high-end photo editors.",
        },
      ],
    },
    {
      id: "1-11",
      title: "Adjustment Layers",
      duration: "14 min",
      description:
        "Use Adjustment Layers to non-destructively correct and enhance color and tone in your photos — one of the most powerful Photoshop workflows.",
      keyTakeaways: [
        "Understand why Adjustment Layers are better than direct adjustments",
        "Use Levels, Curves, and Hue/Saturation for core corrections",
        "Apply adjustments selectively with layer masks",
        "Stack multiple adjustments for complex corrections",
      ],
      content: [
        {
          heading: "Why Adjustment Layers?",
          body: "Photoshop has two ways to apply tonal and color adjustments. The first is through the Image > Adjustments menu — these are called direct adjustments and they permanently alter the pixels on your layer. Once applied and saved, there is no going back. The second and vastly superior method is Adjustment Layers.\n\nAn Adjustment Layer is a special type of layer that sits above your image and applies a color or tonal change through it — but it never touches the actual pixels. Because it is a layer, you can hide it to compare before and after, adjust its opacity to reduce the effect's strength, change its settings at any time by double-clicking it, delete it entirely to undo the change, or paint on its built-in mask to apply the adjustment to only part of the image. Add as many adjustment layers as you like — they stack, and their combined effect flows down to the image below. This is the professional, non-destructive workflow that every serious Photoshop user follows.",
        },
        {
          heading: "Levels and Curves",
          body: "To add an Adjustment Layer, click the half-black/half-white circle icon at the bottom of the Layers panel and choose an adjustment type, or go to the Adjustments panel (Window > Adjustments) and click any adjustment icon.\n\nLevels (Cmd/Ctrl+L if applied directly, or through the Adjustments panel for a layer) shows a histogram — a bar chart of all the tonal values in your image. Three input sliders are below the histogram: black point (left), midpoint gray (middle), and white point (right). Drag the black point slider inward to the base of the histogram to set the darkest point — this adds contrast and removes muddy shadows. Drag the white point inward similarly to set the brightest point. Moving the midpoint gray changes overall brightness without affecting the whites or blacks. Curves gives you even more control: it displays the same tonal range as a diagonal line you can bend. Click anywhere on the line to add a control point and drag up (brighter) or down (darker). The classic 'S-curve' — pulling the highlights up and the shadows down — is the most widely used tonal adjustment in photography.",
        },
        {
          heading: "Hue/Saturation and Color Balance",
          body: "The Hue/Saturation adjustment (Cmd/Ctrl+U if direct, or as an Adjustment Layer) is your primary tool for color changes. The Hue slider rotates all colors around the color wheel — dragging it shifts all colors simultaneously. The Saturation slider increases or decreases color intensity — dragging left toward -100 removes all color, creating a black-and-white image; dragging right toward +100 makes colors vivid and punchy. Lightness adjusts overall brightness (though Levels and Curves are better tools for precise lightness control).\n\nA powerful feature is the channel selector dropdown at the top (which says 'Master' by default). Click it and choose a specific color like 'Reds' or 'Yellows' — now your sliders only affect that range of colors. This lets you change a yellow flower to orange without affecting anything else in the image, or make a blue sky more vibrant without making skin tones look overprocessed. The Color Balance adjustment is also useful for overall color temperature changes — it has Shadows, Midtones, and Highlights sections, each with three sliders: Cyan-Red, Magenta-Green, and Yellow-Blue. Drag toward blue in Shadows and toward yellow in Highlights to create a cinematic color grade.",
        },
        {
          heading: "Layer Masks on Adjustment Layers",
          body: "Every Adjustment Layer automatically comes with a built-in Layer Mask — the white rectangle you see next to the adjustment icon in the Layers panel. This mask controls where the adjustment is visible. White means the adjustment shows fully; black means the adjustment is completely hidden; gray means it shows partially.\n\nTo paint on the mask, click the white mask thumbnail in the Layers panel to make it active (you will see a white border appear around it), then paint with the Brush tool using black to hide the adjustment in specific areas, or white to reveal it. For example, add a Curves adjustment to brighten the entire image, then paint black on its mask over the sky — the sky stays at its original brightness while the rest of the scene gets brighter. This is a fundamental technique called local adjustment. Press Alt/Option-click on the mask thumbnail to view the mask itself as a black and white image directly on the canvas, which is helpful for checking for hard edges or gaps.",
        },
        {
          heading: "Stacking Adjustments and Using Clipping Masks",
          body: "The real power of Adjustment Layers emerges when you stack multiple adjustments. A typical photo correction workflow might layer: a Levels adjustment to set the black and white points, a Curves adjustment to fine-tune contrast, a Hue/Saturation adjustment to boost colors slightly, and a Color Balance adjustment for a slight warm or cool push. Each is a separate layer you can tweak independently.\n\nBy default, an Adjustment Layer affects all layers below it in the stack. To restrict an adjustment to only the layer directly below it (and not all layers), create a Clipping Mask: with the Adjustment Layer selected, press Cmd/Ctrl+Alt/Option+G, or right-click the Adjustment Layer and choose 'Create Clipping Mask', or hold Alt/Option and click the line between the Adjustment Layer and the layer below it. An arrow appears on the Adjustment Layer pointing downward, indicating it is clipped to just the layer below. This is essential when you have multiple subjects on separate layers and want to adjust them individually.",
        },
      ],
    },
    {
      id: "1-12",
      title: "Filters & Effects",
      duration: "11 min",
      description:
        "Explore Photoshop's vast filter library — from blur and sharpen to artistic effects and the powerful Smart Filters workflow.",
      keyTakeaways: [
        "Apply blur, sharpen, and noise filters effectively",
        "Use Smart Filters for non-destructive filter application",
        "Work with the Filter Gallery for artistic effects",
        "Apply Gaussian Blur for background defocus effects",
      ],
      content: [
        {
          heading: "Introduction to Filters",
          body: "Filters in Photoshop are effects applied directly to pixel data — they process, transform, or stylize the actual image pixels. You access all filters through the Filter menu at the top of the screen. There are dozens of filter categories: Blur, Sharpen, Noise, Distort, Stylize, Render, and the Filter Gallery, which contains over 40 artistic, sketch, and texture effects.\n\nBefore applying any filter, there is a critical workflow decision to make: should you apply the filter destructively (directly to the pixels) or non-destructively as a Smart Filter? Applying directly to pixels is permanent — once you save and close the file, the filter change cannot be reversed. Applying as a Smart Filter keeps the filter editable: you can change its settings, hide it, or delete it at any time. The method for using Smart Filters is straightforward and should be your default approach, which we will cover next.",
        },
        {
          heading: "Smart Filters",
          body: "To use a Smart Filter, first convert your layer to a Smart Object. Right-click the layer in the Layers panel and choose 'Convert to Smart Object', or go to Filter > Convert for Smart Filters. The layer thumbnail gets a small icon in the corner indicating it is now a Smart Object. Now apply any filter from the Filter menu — instead of permanently altering the pixels, Photoshop adds the filter as a sub-item below the Smart Object layer in the Layers panel.\n\nDouble-click the filter name in the Layers panel to reopen its settings dialog and change the values at any time. Click the eye icon next to the filter to toggle it on and off. Drag filters up and down to reorder them (the stacking order affects the final result). Click the mask thumbnail next to 'Smart Filters' text (Photoshop automatically creates a white mask) to paint with black and hide the filter from specific areas of the image. This workflow gives you all the creative freedom of filters without any of the risk of permanent pixel destruction.",
        },
        {
          heading: "Essential Filters: Blur and Sharpen",
          body: "Gaussian Blur (Filter > Blur > Gaussian Blur) is the most-used blur filter. It applies a smooth, even blur based on a Radius value in pixels — a radius of 1–2 is a very subtle softening, 10–20 creates a medium blur, 50+ creates a heavy, dreamy blur. Gaussian Blur is used to soften backgrounds, create glow effects (duplicate a layer, apply Gaussian Blur, set to Screen blend mode), or to blur a layer before using it as a soft shadow.\n\nMotion Blur (Filter > Blur > Motion Blur) creates a linear streak effect that simulates camera movement — useful for adding speed effects to vehicles or sports subjects. The Angle control rotates the direction of the blur. Radial Blur creates a spinning or zooming blur. For sharpening, Unsharp Mask (Filter > Sharpen > Unsharp Mask) is still widely used by professionals despite its confusing name (it comes from a darkroom technique). Amount controls strength, Radius controls how wide the sharpening halo is, and Threshold sets how much contrast difference is needed before sharpening is applied. Start with Amount: 80, Radius: 1.5, Threshold: 0 and adjust from there.",
        },
        {
          heading: "The Filter Gallery and Artistic Effects",
          body: "The Filter Gallery (Filter > Filter Gallery) is a separate dialog that houses over 40 stylizing effects grouped into categories: Artistic, Brush Strokes, Distort, Sketch, Stylize, and Texture. Each filter has its own settings panel. What makes the Filter Gallery special is that you can stack multiple filters and adjust their order — click the New Effect Layer icon at the bottom of the dialog to add another filter on top of the first.\n\nFor beginners, a few notable filters to explore: Glowing Edges (Stylize) creates a neon-on-black look. Rough Pastels (Artistic) makes a photo look like a pastel drawing. Watercolor (Artistic) simulates the watercolor painting medium. Bas Relief (Sketch) creates an embossed stone-like effect. These are generally most effective when applied at reduced layer opacity (50–70%) as a subtle stylistic overlay rather than at full strength, which can look very obvious and amateurish. Remember to convert to Smart Object first so you can adjust the strength after seeing it in context.",
        },
      ],
    },
    {
      id: "1-13",
      title: "Working with Shapes",
      duration: "9 min",
      description:
        "Create and style vector shapes in Photoshop using the Shape tools, and understand the three shape drawing modes.",
      keyTakeaways: [
        "Draw rectangles, ellipses, polygons, and custom shapes",
        "Understand the three drawing modes: Shape, Path, and Pixels",
        "Style shapes with fill colors, gradients, and stroke settings",
        "Combine multiple shapes using path operations",
      ],
      content: [
        {
          heading: "Shape Tool Basics",
          body: "Photoshop's Shape tools create vector-based graphics: rectangles, ellipses, triangles, polygons, lines, and custom shapes from a library of hundreds of pre-made icons and symbols. Access them by pressing U, or click and hold the shape tool icon to see the flyout menu. The Rectangle tool (U) draws rectangles and squares. The Ellipse tool (Shift+U) draws ovals and circles. The Triangle tool draws equilateral triangles. The Polygon tool draws any regular polygon — set the number of sides in the Options Bar (3 for a triangle, 5 for a pentagon, 6 for a hexagon, etc.). The Custom Shape tool gives access to a massive library of shapes — click the shape dropdown in the Options Bar to browse and load shape packs.\n\nWhen drawing shapes, hold Shift to constrain proportions (making a perfect square from the Rectangle tool, or a perfect circle from the Ellipse tool). Hold Alt/Option to draw from the center outward rather than from a corner.",
        },
        {
          heading: "The Three Drawing Modes",
          body: "Before drawing a shape, check the mode selector in the Options Bar — it has three options: Shape, Path, and Pixels. This is the most confusing aspect of shape tools for beginners, so let's clarify each one.\n\nShape mode creates a dedicated Shape Layer in the Layers panel. This is a vector layer that has a fill color and optional stroke, remains fully editable and scalable, and can be styled with Layer Styles. This is what you want in almost all situations. Path mode draws the shape as a path (a mathematical outline with no fill or stroke) without creating a layer — the path appears temporarily in the Paths panel and can be used as a selection boundary or as the basis for a clipping mask. Pixels mode rasterizes the shape immediately, painting filled pixels directly onto the current layer — the least flexible option, as it cannot be resized without quality loss. Always use Shape mode unless you have a specific reason to use the others.",
        },
        {
          heading: "Filling and Stroking Shapes",
          body: "In Shape mode, the Options Bar shows Fill and Stroke controls. Click Fill to open a panel where you can choose: No Color (transparent), a Solid Color (click the color swatch), a Gradient (gradients that shift between two or more colors), or a Pattern (a tiling texture). For the Stroke, you set a color the same way, plus a width in pixels and a style (solid line, dashed, or dotted).\n\nTo change a shape's fill or stroke after it is created, select the shape layer and adjust the Fill and Stroke in the Options Bar, or double-click the shape's thumbnail in the Layers panel to open the color picker. You can also apply Layer Styles to Shape layers (double-click the layer in the panel) — drop shadows, glows, bevels, and texture overlays all work great on shapes and are fully editable at any time. Resize shapes freely by using Free Transform (Cmd/Ctrl+T) — because they are vector, they scale without any quality loss.",
        },
        {
          heading: "Combining Shapes with Path Operations",
          body: "When multiple shapes are on the same Shape layer (draw multiple shapes before committing if you want them on the same layer), you can control how they interact using Path Operations in the Options Bar. Combine Shapes adds the new shape to the existing shape. Subtract Front Shape removes the new shape's area from the existing shape — perfect for creating a donut shape (draw a circle, then subtract a smaller circle from it). Intersect Shape Areas keeps only the overlapping region of both shapes. Exclude Overlapping Shapes creates a combined shape but removes the overlapping area.\n\nThese operations are the basis of creating logos and icons directly in Photoshop. For example: draw a large rectangle for a button background, then switch to Subtract mode and draw a smaller rectangle inside it to punch a 'window' through the shape. The result is a frame shape that would take much longer to achieve by any other method. To draw shapes on separate layers (which is usually preferable for flexibility), make sure you click 'New Layer' in the Options Bar, or simply create a new layer before drawing each shape.",
        },
      ],
    },
    {
      id: "1-14",
      title: "Saving & Exporting",
      duration: "10 min",
      description:
        "Learn all the ways to save and export your Photoshop files — PSD, JPEG, PNG, PDF, and web-optimized formats.",
      keyTakeaways: [
        "Save working files as PSD to preserve all layers and editability",
        "Export JPEG and PNG using Export As and Save for Web",
        "Understand when to use each file format",
        "Export multiple sizes and formats using Artboards",
      ],
      content: [
        {
          heading: "The PSD Master File",
          body: "The most important saving habit in Photoshop is to always maintain a PSD master file. PSD (Photoshop Document) is the native file format that preserves every aspect of your work: all layers, adjustment layers, smart objects, layer masks, text layers (as editable text), shapes, guides, and all settings. Only PSD (and PSDC, PSB for very large files) can store all of this information. Every other export format collapses (flattens) your layers into a single raster image.\n\nSave your PSD with File > Save (Cmd/Ctrl+S) or File > Save As (Cmd/Ctrl+Shift+S). When you first save a new document, Photoshop will ask whether to save to your computer or to Creative Cloud — both are fine, but saving to your computer gives you a local file you can access without an internet connection. Save your PSD frequently while working, and never delete it even after exporting your final JPEG or PNG.",
        },
        {
          heading: "Export As for Modern Workflows",
          body: "For exporting a final image, File > Export > Export As (Shift+Alt+Cmd/Ctrl+W) is the modern recommended tool. It opens a dialog showing a preview of your image and export options on the right. The Format dropdown lets you choose JPEG, PNG, GIF, or SVG. For JPEG, set Quality between 80–90 for excellent quality at a reasonable file size — going higher rarely produces a visible improvement but increases file size significantly. For PNG, choose PNG-8 (256 colors, smaller file) or PNG-24 (full color with transparency, larger file). PNG-24 is what you want for images with transparent backgrounds or when you need pixel-perfect quality.\n\nThe Image Size section lets you set a specific pixel width and height for the export — very useful when you need to hit a specific size requirement. The Canvas Size shows the actual document dimensions. Check 'Resample' to change the number of pixels, and choose 'Bicubic Sharper' for downscaling and 'Bicubic Smoother' for upscaling. Click Export All to save the file.",
        },
        {
          heading: "Save for Web (Legacy but Still Useful)",
          body: "The older File > Export > Save for Web (Alt/Option+Shift+Cmd/Ctrl+S) dialog is still widely used, especially for web graphics where file size optimization is critical. It shows a side-by-side comparison of the original and the compressed output, with the resulting file size displayed below the preview. This real-time preview lets you judge the trade-off between quality and file size visually.\n\nIn the top-right panel, choose your format (JPEG, PNG-8, PNG-24, GIF). For JPEG, the Quality slider directly maps to the quality percentage. Watch the file size in the bottom left as you drag — for web use, aim to keep images under 200 KB for photos, and under 100 KB for graphics. The Optimized checkbox for JPEG usually gives a slightly smaller file with no visible quality difference and should always be checked. The Convert to sRGB checkbox is important: check this when saving for web to ensure colors display consistently across different screens and browsers.",
        },
        {
          heading: "Choosing the Right Format",
          body: "Knowing which file format to use for each situation is a core professional skill. JPEG is the standard for photographs and complex images being used on screen or sent via email. It uses lossy compression — some data is permanently discarded to achieve small file sizes. Never use JPEG for graphics with text, logos, or flat colors as the compression creates visible artifacts around crisp edges.\n\nPNG is ideal for graphics, logos, icons, screenshots, and any image requiring a transparent background. PNG uses lossless compression — no quality is lost. PNG files are larger than JPEGs, so avoid them for full-page photos. TIFF is used for high-quality print output — it is a lossless format that supports layers (though most programs that receive TIFFs expect flat files). PDF is excellent for sending print-ready documents to print shops and for multi-page documents. GIF supports transparency and animation — though for animated content, modern workflows often use WebP or video formats instead. When in doubt: PSD for working files, JPEG for photos, PNG for graphics and transparency.",
        },
      ],
    },
    {
      id: "1-15",
      title: "Keyboard Shortcuts Essentials",
      duration: "8 min",
      description:
        "Learn the most important Photoshop keyboard shortcuts to dramatically speed up your workflow and work like a professional.",
      keyTakeaways: [
        "Master the 20 most critical Photoshop shortcuts",
        "Customize and create your own keyboard shortcuts",
        "Use modifier keys to unlock hidden tool behaviors",
        "Learn workflow shortcuts for history, zoom, and navigation",
      ],
      content: [
        {
          heading: "Why Shortcuts Matter",
          body: "Professional Photoshop users rarely reach for the menu bar. Almost every command they need is accessible through a keyboard shortcut, and using shortcuts versus menus can literally double your working speed over a full day of editing. More importantly, shortcuts keep you in a flow state — you do not have to stop, find a menu, scan through options, and click. Once shortcuts are muscle memory, you barely think about them, freeing your mind to focus entirely on the creative work.\n\nDo not try to learn all shortcuts at once. Instead, focus on the ones relevant to what you are working on right now. Each time you reach for a menu, pause and ask yourself: 'Is there a shortcut for this?' Look it up, use it instead, and repeat it a few times. Within a few weeks, it will be automatic. This lesson covers the 20 most impactful shortcuts — the ones that appear constantly in every kind of Photoshop work.",
        },
        {
          heading: "The Top 20 Essential Shortcuts",
          body: "File operations: Cmd/Ctrl+N (new document), Cmd/Ctrl+O (open), Cmd/Ctrl+S (save), Cmd/Ctrl+Shift+S (save as), Cmd/Ctrl+W (close document), Cmd/Ctrl+Z (undo — in CC 2020+ this is a multi-step undo like other apps; use Cmd/Ctrl+Alt+Z for older-style step backward).\n\nCanvas navigation: Cmd/Ctrl+Plus (zoom in), Cmd/Ctrl+Minus (zoom out), Cmd/Ctrl+0 (fit on screen), Cmd/Ctrl+1 (100% zoom), Spacebar+drag (pan). Layer operations: Cmd/Ctrl+J (duplicate layer), Cmd/Ctrl+G (group layers), Cmd/Ctrl+Shift+G (ungroup), Cmd/Ctrl+E (merge down), Cmd/Ctrl+Shift+E (merge visible). Selection: Cmd/Ctrl+A (select all), Cmd/Ctrl+D (deselect), Cmd/Ctrl+Shift+I (invert selection). Transform: Cmd/Ctrl+T (free transform). These 20 shortcuts alone will make a dramatic difference to your workflow speed from day one.",
        },
        {
          heading: "Tool Shortcuts and Modifier Keys",
          body: "Every tool has a single-letter shortcut. The most important ones: V (Move), M (Marquee), L (Lasso), W (Quick Selection/Magic Wand), C (Crop), E (Eraser), B (Brush), S (Clone Stamp), J (Healing Brush), T (Type), P (Pen), U (Shape), H (Hand), Z (Zoom). Press Shift+the letter key to cycle through a tool's group (Shift+M toggles between Rectangular and Elliptical Marquee).\n\nModifier keys unlock hidden behaviors on tools. With the Move tool (V): hold Shift to constrain movement to horizontal or vertical; hold Alt/Option to duplicate the layer as you drag. With the Brush (B): hold Shift and click to draw a straight stroke between two points; hold Alt/Option to sample color. With Free Transform active: hold Shift to scale proportionally from a corner; hold Alt/Option to transform from the center; hold Cmd/Ctrl to switch to Distort mode. With any selection tool: hold Shift to add to the selection; hold Alt/Option to subtract from it. Learning these modifier behaviors is just as important as the basic shortcuts.",
        },
        {
          heading: "Customizing Shortcuts and Final Tips",
          body: "Photoshop lets you customize or add keyboard shortcuts for any command. Go to Edit > Keyboard Shortcuts (Alt/Option+Shift+Cmd/Ctrl+K). In this dialog you can assign a shortcut to any menu command, tool, or panel command. If the shortcut you type is already in use, Photoshop will warn you — you can either accept the conflict (reassigning the shortcut) or try a different key combination. Save your custom shortcut set with a name so you can restore it if Photoshop resets.\n\nA few more useful shortcuts that do not fit neatly into categories but are used constantly: F key cycles through screen modes (normal, full screen with menu bar, full screen without menu bar). Tab hides/shows all panels. X swaps foreground and background colors. D resets colors to black/white. [ and ] change brush size. Shift+[ and Shift+] change brush hardness. Cmd/Ctrl+Shift+N creates a new named layer. Cmd/Ctrl+Alt/Option+Z steps back through history. Cmd/Ctrl+F re-applies the last used filter with the same settings. Print this list and keep it next to your desk until these shortcuts are second nature.",
        },
      ],
    },
    {
      id: "1-16",
      title: "Course Project: Photo Enhancement",
      duration: "20 min",
      description:
        "Apply everything you have learned to complete a full photo enhancement project — retouching, color grading, text, and export.",
      keyTakeaways: [
        "Apply a complete photo retouching and enhancement workflow from start to finish",
        "Combine adjustment layers, retouching tools, and text in a single project",
        "Create a polished, portfolio-ready result",
        "Export the final image in multiple formats for different uses",
      ],
      content: [
        {
          heading: "Project Overview and Setup",
          body: "Congratulations on reaching the final lesson of Photoshop Foundations. This project is your opportunity to apply everything you have learned in a single, cohesive workflow. You will take a raw photograph and transform it into a polished, portfolio-quality piece that demonstrates your newly acquired skills. The project has five phases: document setup and organization, retouching, color grading, adding text and graphic elements, and final export.\n\nOpen a portrait or landscape photograph in Photoshop. If you do not have a suitable image, Adobe provides free sample images through the Adobe Stock Free tier, or you can use any photo from Unsplash (unsplash.com) which offers high-quality, royalty-free photography. Once your image is open, immediately save it as a PSD file with File > Save As. Name it 'Course-Project-Final.psd' and save it to your Photoshop Practice folder. Then double-click the background layer in the Layers panel, click OK to convert it to a regular layer, and rename it 'Original Photo'. Create a Group called 'Retouching', another called 'Color Grading', and another called 'Text and Graphics' — these will hold the different phases of your work.",
        },
        {
          heading: "Phase 1: Retouching",
          body: "Create a new empty layer inside the Retouching group and name it 'Healing'. Select the Spot Healing Brush (J) and set the Options Bar to 'Sample All Layers'. At a brush size slightly larger than any blemishes, dust spots, or distractions you want to remove, click once on each problem area. For stubborn areas, switch to the Healing Brush: Alt/Option-click to set a clean source point nearby, then paint over the problem.\n\nIf there are larger distractions — an unwanted object, a telephone wire, a distracting background element — use the Lasso tool to draw a loose selection around it, then go to Edit > Content-Aware Fill and let Photoshop generate a replacement. Check the preview, adjust the sampling area if needed, and click OK. Add another new layer called 'Dodge and Burn' above the Healing layer. Set its blend mode to Overlay and fill it with 50% gray (Edit > Fill, choose 50% Gray). Select the Brush tool, set to white, 10% opacity, very soft edge. Paint gently over any areas you want to brighten, like eyes or areas you want to emphasize. Switch to black and do the same for areas you want to deepen.",
        },
        {
          heading: "Phase 2: Color Grading",
          body: "Inside the Color Grading group, add the following Adjustment Layers in this order (from bottom to top in the Layers panel): First, a Levels adjustment. Drag the black point input slider to the left edge of the histogram data, and the white point to the right edge. This sets proper contrast. Second, a Curves adjustment. Create a gentle S-curve: pull the upper quarter of the curve slightly up (brightening highlights) and pull the lower quarter slightly down (deepening shadows). This adds contrast and punch.\n\nThird, add a Hue/Saturation adjustment. Set the overall Saturation to around +15 to +25 to make colors more vibrant — do not overdo it. Then switch the channel from Master to 'Reds' and adjust the Hue slightly if needed for skin tones. Fourth, add a Color Balance adjustment. In the Midtones section, push slightly toward Blue (-5 to -10 on the Yellow/Blue slider) and slightly toward Magenta (+5 on the Magenta/Green slider) for a slightly cool, cinematic feel — or push toward Yellow and Red for a warm, golden hour look. Adjust to taste. Finally, add a Vibrance adjustment set to around +20 — Vibrance is smarter than Saturation because it boosts less-saturated colors more than already-saturated ones, preventing skin tones from looking over-processed.",
        },
        {
          heading: "Phase 3: Adding Text and Graphics",
          body: "Inside the Text and Graphics group, press T to select the Type tool. Click once in the lower third of the image to create a Point Text layer. Type a title — if this is a portrait, type the subject's name; if it is a landscape, type the location. Set the font to something clean and modern (try Futura, Helvetica Neue, or any sans-serif you like from the font dropdown), size around 60–80pt for a headline, color white. Press Cmd/Ctrl+Enter to commit.\n\nAdd a second Type layer for a subtitle or date in a smaller size (around 24pt). Use the Move tool (V) to position both text layers. To help the text read against a busy background, create a new layer below the text layers in the group, set its Opacity to around 40%, and draw a black-filled rectangle covering the lower section of the image where the text sits — this creates a subtle dark panel that improves readability without looking like a crude box. Add a Shape Layer with a thin horizontal line or a small graphic element to separate the main title from the subtitle, for a clean magazine-style layout.",
        },
        {
          heading: "Phase 4: Final Review and Export",
          body: "Before exporting, do a thorough final review. Hide each Adjustment Layer group and the Text group one at a time by clicking the eye icon, and compare each step to the original. Ask yourself: Is the retouching seamless — no obvious cloning patterns or healing artifacts? Does the color grade enhance the mood without looking processed? Does the text layout feel balanced and readable? Make any final tweaks. Then hide all your working groups and look at the final composite — this is what your viewer will see.\n\nNow export in three formats. First, your master PSD is already saved — this is your working file for future edits. Second, go to File > Export > Export As, choose JPEG, quality 85, full size, and click Export. Save it as 'Course-Project-Web.jpg'. This is your online-ready version. Third, export again as PNG-24 at full size for the highest-quality version suitable for print portfolio use — save it as 'Course-Project-Print.png'. Congratulations — you have just completed a professional photo enhancement workflow using tools and techniques from every lesson in this course. This file belongs in your portfolio.",
        },
      ],
    },
  ],
};
