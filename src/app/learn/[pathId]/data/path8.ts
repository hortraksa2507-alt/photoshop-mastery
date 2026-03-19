import { PathData } from "./types";

export const path8: PathData = {
  id: 8,
  title: "3D, Video & Generative AI",
  level: "Pro",
  levelColor: "var(--level-pro)",
  description:
    "Harness Photoshop's AI-powered tools, generative features, video capabilities, and 3D workspace for cutting-edge creative work.",
  lessons: [
    {
      id: "8-1",
      title: "Generative Fill: AI-Powered Content Creation",
      duration: "14 min",
      description:
        "Master Photoshop's flagship AI feature to add, replace, and extend image content using natural-language text prompts with photorealistic results.",
      keyTakeaways: [
        "Make a selection and generate content using the contextual taskbar",
        "Write effective prompts that describe subject, lighting, and style",
        "Use the three generated variation thumbnails to compare and choose",
        "Understand that Generative Fill creates non-destructive Generative Layers",
      ],
      content: [
        {
          heading: "How Generative Fill Works",
          body: "Generative Fill is powered by Adobe Firefly, Adobe's commercially safe AI model trained on licensed and public domain content. When you make a selection and enter a text prompt, Photoshop sends the selected region — along with surrounding context pixels — to Adobe's cloud servers. The model analyzes the surrounding image content (lighting direction, color temperature, texture style, perspective) and generates new pixels that match both your prompt and the existing image.\n\nThe result is placed on a Generative Layer — a special layer type that stores the AI generation metadata. This layer is fully non-destructive: you can regenerate with a different prompt at any time, adjust the layer's position, apply adjustment layers above it, or simply delete it to revert to the original. Generative Fill requires an internet connection and an Adobe account with Photoshop (or Firefly) credits.",
        },
        {
          heading: "Making the Right Selection",
          body: "The quality of your selection directly determines the quality of the generation. Generative Fill reads both the selected region (where new content will be placed) and the surrounding unselected pixels (for context). A tight, precise selection tells the AI exactly where to add content. A loose or feathered selection produces soft, blended results — sometimes desirable, sometimes not.\n\nFor replacing an object (removing a person from a background, for example), use Select > Subject to make an initial selection, then refine with Select and Mask. For adding content to a specific region (placing a lamp on a table, filling an empty sky), use the Rectangular Marquee or Lasso tool to define the target area generously — giving the AI a slightly larger region than the final content needs allows it to blend edges naturally.\n\nFor the sky region of a landscape, draw a selection above the horizon line. Feather the selection by 2–5px (Select > Modify > Feather) to ensure the generated content blends with the horizon rather than cutting in sharply.",
        },
        {
          heading: "Writing Effective Prompts",
          body: "Generative Fill's prompt field is optional — leaving it blank tells the AI to fill the selection based purely on surrounding context, which works well for removing objects or filling empty spaces. When you do write a prompt, specificity produces better results than vague descriptions.\n\nWeak prompt: 'trees'. Better prompt: 'tall pine trees in golden hour light, soft bokeh background, photorealistic'. The best prompts include: the subject ('vintage wooden chair'), lighting ('#quality modifier like soft diffused light'), style ('photorealistic', 'painterly', 'cinematic'), and sometimes negative guidance ('without shadows', 'clean background').\n\nDo not include position instructions in the prompt ('on the left side') — the selection defines position. Do not describe the rest of the image — the AI already sees it. Focus your prompt entirely on what should appear inside the selection. After generation, Photoshop presents three variation thumbnails in the Properties panel. Click each to preview it on the canvas. If none of the three are satisfactory, click Generate Again to produce three more variations.",
        },
        {
          heading: "Working with Generative Layers",
          body: "Each Generative Fill operation produces a Generative Layer with a special starburst icon in the Layers panel. The layer behaves like a regular pixel layer in most ways — you can move it, transform it, apply blending modes and opacity, and paint on its mask. The Generative Layer's mask is automatically set to the shape of your original selection, so the generated content only appears where you intended.\n\nTo regenerate with a different prompt, select the Generative Layer and look at the contextual taskbar or Properties panel — the Generate button and prompt field remain active. Edit the prompt and click Generate to replace the current generation with three new variations. The layer's mask and position are preserved; only the generated pixel content changes.\n\nFor a portrait retouching workflow, you might use Generative Fill to replace a distracting background. Make a selection of the background using Select > Subject (which selects the person) then Invert (Shift+Ctrl+I). Write a prompt like 'soft studio backdrop, neutral gray gradient, professional portrait photography'. Generate, choose the best variant, and your subject is now in front of a clean studio background — in seconds.",
        },
      ],
    },
    {
      id: "8-2",
      title: "Generative Expand: Extending Your Canvas",
      duration: "12 min",
      description:
        "Use AI to expand images beyond their original borders — widening aspect ratios, adding sky, or extending backgrounds for new compositions.",
      keyTakeaways: [
        "Use the Crop tool with Generative Expand enabled to extend canvas",
        "Adjust aspect ratio presets to match platform requirements",
        "Write prompts to guide what appears in the expanded areas",
        "Combine Generative Expand with manual retouching for seamless results",
      ],
      content: [
        {
          heading: "What Generative Expand Does",
          body: "Generative Expand solves a common production problem: you have an image in 4:5 portrait format but need a 16:9 widescreen version for a YouTube thumbnail. Or you have a beautifully composed square photo but your client needs a horizontal banner with space for text on the right side. Cropping loses content; letterboxing looks amateurish. Generative Expand adds new, AI-generated content to the empty areas created when you extend the canvas — content that convincingly continues the original scene.\n\nLike Generative Fill, Generative Expand uses Adobe Firefly and creates a non-destructive Generative Layer. The generated extension analyzes the colors, textures, lighting, and scene content at the edges of the original image and produces pixels that plausibly continue the scene outward.",
        },
        {
          heading: "Using the Crop Tool for Expansion",
          body: "Select the Crop tool (C). In the Options bar, make sure Generative Expand is selected in the Fill dropdown (it may default to Content-Aware Fill; click the dropdown to switch). Choose an aspect ratio preset — for Instagram landscape, use 1.91:1; for YouTube thumbnails, use 16:9; for Twitter header, use 3:1 — or drag the crop handles manually to define the new canvas size.\n\nDrag one or more edges of the crop boundary outward beyond the image's original content. The empty gray areas show where new content will be generated. Optionally enter a prompt in the contextual taskbar to guide what appears in the expanded regions — for a landscape photo being expanded sideways, try 'open meadow, afternoon light, same grass texture'. Click the checkmark or press Enter to generate.\n\nThree variations appear just as in Generative Fill. Choose the best one. If the expansion looks slightly off near the edges of the original content, use the Healing Brush or Clone Stamp on the Generative Layer to clean up any artifacts where generated and original pixels meet.",
        },
        {
          heading: "Practical Expansion Workflows",
          body: "Expanding for social media: a client provides a 1:1 square product photo and needs versions for Instagram feed (4:5), Instagram Stories (9:16), and Facebook banner (2.7:1). Using Generative Expand three times from the same source, you produce all three formats. Each expansion generates different content in the empty areas, but since most product photos have simple backgrounds (white, gradient, or neutral), the expansions usually look seamless.\n\nExpanding for editorial layout: a photographer's portrait is composed tightly with the subject nearly filling the frame, but the magazine layout needs breathing room on the right for headline text. Expand the canvas 40% to the right with a prompt like 'same plain studio wall, even lighting'. The generated space is a perfect text backdrop.\n\nExpanding for panoramic effects: a landscape shot taken at 24mm has a moderately wide field of view, but you want a cinematic ultra-wide look. Expand both left and right edges with no prompt, letting the AI extrapolate the scene. This works especially well for natural scenes (forests, mountains, seascapes) and less reliably for urban scenes with strong architectural geometry.",
        },
      ],
    },
    {
      id: "8-3",
      title: "The Remove Tool: Clean AI Erasure",
      duration: "10 min",
      description:
        "Paint over unwanted objects and watch Photoshop's AI remove them and replace them with plausible background content in a single brushstroke.",
      keyTakeaways: [
        "Select the Remove tool from the toolbar (J key, nested under Healing Brush)",
        "Paint over objects in a single stroke for automatic removal",
        "Use Remove Every Stroke vs. Remove on Release modes",
        "Handle difficult removals near complex edges and patterns",
      ],
      content: [
        {
          heading: "The Remove Tool vs. Content-Aware Fill",
          body: "Photoshop offers several tools for removing unwanted objects: the Clone Stamp, Healing Brush, Patch Tool, Content-Aware Fill, and now the AI-powered Remove Tool. Understanding when to use each saves time.\n\nThe Remove Tool is the fastest and most intelligent option for straightforward removals: a person in the background of a landscape, a cable in an architectural photo, a blemish on a product, or a piece of litter on a street. Paint over the object and release — the AI removes it and fills the area with convincing background content in seconds. For objects in front of complex, irregular backgrounds (patterned wallpaper, detailed stone textures), Content-Aware Fill's advanced workspace gives you more control over which source areas the fill samples from.",
        },
        {
          heading: "Using the Remove Tool",
          body: "Select the Remove Tool from the toolbar (press J to cycle through healing tools, or find the band-aid-with-sparkle icon). In the Options bar, set the brush size to roughly match the width of the object you want to remove. Leave 'Remove Every Stroke' checked for interactive, real-time removal as you paint, or uncheck it to wait until you lift the brush for a single calculation — useful when painting over large areas.\n\nPaint over the object with broad strokes. You do not need to be precise at the edges — paint slightly into the surrounding background. The AI determines the object's boundary. Release the mouse. The removal takes 1–3 seconds. The result appears directly on the canvas, and Photoshop automatically creates or uses an existing background layer to host the fixed pixels.\n\nFor a person standing in front of a plain sky: paint over them with a brush slightly larger than their silhouette. The Remove Tool generates sky pixels where the person was, correctly extrapolating the sky color and gradient. For a power line crossing a landscape: paint along the line's length. The AI reconstructs the sky, trees, or ground behind it.",
        },
        {
          heading: "Difficult Removals and Workarounds",
          body: "The Remove Tool struggles with objects that occupy a large portion of the frame (more than roughly 30% of the image area), objects in front of highly regular patterns (tile grids, brick walls with strong geometry), and objects at the very edge of the canvas. For these cases, switch to Content-Aware Fill (Edit > Content-Aware Fill) which gives you the sampling source editor to manually define where the fill draws reference pixels from.\n\nFor repeated-pattern backgrounds, use the Remove Tool to handle the bulk of the removal and then clean up any pattern misalignment with the Clone Stamp tool set to 'Aligned' mode, sampling from an area of the pattern that aligns correctly with the gap. A few minutes of manual cleanup on top of an AI removal is always faster than doing the entire removal manually.\n\nAfter any removal, zoom to 100% and inspect the edges. The Remove Tool occasionally leaves subtle artifacts — a slightly wrong color, a blurred edge, a texture inconsistency — that are invisible at fit-to-screen view but visible in print. Use the Healing Brush to spot-fix these areas.",
        },
      ],
    },
    {
      id: "8-4",
      title: "Neural Filters: One-Click AI Transformations",
      duration: "16 min",
      description:
        "Explore Photoshop's growing library of Neural Filters — AI-powered adjustments that perform tasks previously requiring hours of manual work.",
      keyTakeaways: [
        "Access all Neural Filters via Filter > Neural Filters",
        "Apply Smart Portrait adjustments: expression, age, gaze, and head pose",
        "Use Colorize to add color to black-and-white photographs",
        "Apply Depth Blur for AI-generated depth-of-field effects",
        "Output Neural Filter results to new layers for non-destructive editing",
      ],
      content: [
        {
          heading: "The Neural Filters Panel",
          body: "Filter > Neural Filters opens a side panel that organizes all available AI filters into categories: Featured, Photography, Restoration, Smart Portrait, Creative, and Color. Some filters are 'Featured' (installed and fast); others have a cloud icon indicating they require a download before first use. Click the cloud icon once to install a filter — it downloads in 30–60 seconds.\n\nAll Neural Filters share a common output option at the bottom of the panel: New Layer, New Masked Layer, Current Layer, New Document, or Smart Filter. Always choose New Layer or New Masked Layer for non-destructive work. This means the original pixel layer is untouched and the Neural Filter result lives on its own layer, which you can blend, mask, or discard independently.",
        },
        {
          heading: "Smart Portrait: Redefining Facial Retouching",
          body: "Smart Portrait is the most powerful Neural Filter for portrait photographers and retouchers. It operates on a detected face and offers sliders for: Happiness (-50 to +50, which subtly adjusts the corners of the mouth and eyes), Surprise, Anger, and Age (-50 younger, +50 older). The Hair Thickness slider adds or reduces hair volume. Gaze Direction shifts the apparent direction the eyes are looking. Head Direction changes the apparent angle of the head — useful for aligning a person's gaze with a product they're meant to be looking at in an advertisement.\n\nTo use Smart Portrait, open a portrait photograph with a clearly visible face. Open Filter > Neural Filters, find Smart Portrait under the Featured section, and make sure it's toggled on. Adjust the Happiness slider to +20 for a subtle, natural smile enhancement — this is frequently used in professional portrait delivery where a subject wasn't smiling quite enough. Set Output to New Layer. Click OK. The result appears on a new layer that you can reduce to 60–70% opacity to blend naturally with the original.",
        },
        {
          heading: "Colorize: Bringing History to Life",
          body: "The Colorize Neural Filter adds realistic color to black-and-white photographs. Open a grayscale or desaturated image. In Neural Filters, find Colorize under the Photography category. Toggle it on. Photoshop analyzes the image content — detecting faces, vegetation, sky, clothing — and applies statistically plausible colors. A person's skin gets natural skin tones. Grass gets green. Sky gets blue.\n\nThe Colorize filter includes focal point controls: you can click on areas of the image to add color hints. Click on a jacket and set the hint color to navy blue. Click on a car and set the hint to red. These hints guide the AI to produce colors you specify rather than its statistical defaults.\n\nFor restoring archival family photos, Colorize combined with the Scratch and Dust filter (also in Neural Filters, under Restoration) and Photo Restoration creates a powerful pipeline: remove scratches and damage first, then apply color. The Photo Restoration filter enhances detail, reduces noise, and sharpens edges in degraded old photographs — it is purpose-built for scanned prints and old negatives.",
        },
        {
          heading: "Depth Blur and Creative Filters",
          body: "Depth Blur generates a synthetic depth map from your image and applies lens blur that respects the estimated depth of different parts of the scene. Open a landscape or portrait photo. In Neural Filters > Photography > Depth Blur, toggle it on. The filter estimates which parts of the image are near (foreground) and far (background) and applies graduated blur. Use the Focal Range slider to set where the sharpness falls off. The Blur Strength slider (0–100) controls the intensity of the background blur.\n\nFor the best Depth Blur results on portraits, use an image with clear subject-background separation. The AI's depth estimation works very well for faces against backgrounds but struggles with flat scenes (a person photographed against a flat wall at the same distance as everything else). In those cases, supplement with a manual mask: output to a New Masked Layer and paint on the mask to refine which areas get the blur.\n\nThe Style Transfer filter (under Creative) applies the visual style of a reference painting or photo to your image — similar to apps like Prisma but integrated into Photoshop's non-destructive workflow. Choose one of the built-in style presets or load a custom reference image. Set Output to New Layer and reduce opacity to blend the stylized result tastefully over the original.",
        },
      ],
    },
    {
      id: "8-5",
      title: "Sky Replacement: Instant Dramatic Skies",
      duration: "11 min",
      description:
        "Replace flat, overcast, or blown-out skies with dramatic alternatives using Photoshop's intelligent Sky Replacement tool, and blend the result convincingly.",
      keyTakeaways: [
        "Access Sky Replacement via Edit > Sky Replacement",
        "Choose from built-in sky presets or import your own sky photos",
        "Adjust foreground lighting to match the new sky's light source",
        "Use the Sky Brush to correct edge detection near trees and architecture",
      ],
      content: [
        {
          heading: "The Sky Replacement Dialog",
          body: "Edit > Sky Replacement opens a dedicated dialog with a full-image preview. At the top of the dialog, a sky thumbnail shows the currently selected replacement sky. Click it to open the sky picker, which contains three categories of built-in skies: Blue Skies, Spectacular, and Sunsets. Each category has 8–12 presets ranging from dramatic stormy to serene golden hour.\n\nPhotoshop automatically detects the sky region in your image using edge detection around the horizon and above rooflines, trees, and other foreground elements. The detection is very good on clear horizon lines and fair on complex tree canopies. You do not need to make a selection first — the tool handles the masking automatically.",
        },
        {
          heading: "Sky and Foreground Adjustments",
          body: "After choosing a sky, the dialog provides two groups of controls: Sky and Foreground. Under Sky, Brightness adjusts the overall exposure of the sky photo (useful when your chosen sky is too bright for the ambient light in the scene). Temperature adds warm or cool color cast to the sky. Scale and Flip let you reposition the sky's horizon and orientation. The Fade Edge slider softens the transition between sky and foreground along complex edges.\n\nUnder Foreground, the Lighting Mode dropdown (Standard or Multiply) determines how the sky's light bleeds into the foreground. Standard works for most images. Multiply is better for keeping foreground shadow detail when the replacement sky is very bright. Lighting Adjustment (0–100) controls how much the foreground's color temperature shifts to match the new sky's light. For a golden hour sky replacement, setting Lighting Adjustment to 60–75 shifts the foreground shadows toward warm amber, creating the impression that the golden sky is actually illuminating the scene.\n\nColor Adjustment shifts the foreground's overall hue toward the sky's dominant color — again, useful for golden hour or stormy purple skies. Keep this subtle (0–30) to avoid an artificial look.",
        },
        {
          heading: "Edge Refinement and Using Your Own Sky Photos",
          body: "The Sky Brush tool inside the dialog (shortcut B while the dialog is open) lets you paint corrections over the auto-detected sky mask. Paint in the foreground color (black) to remove areas incorrectly included in the sky — perhaps a white rooftop mistaken for sky. Paint in the background color (white) to add areas incorrectly excluded — perhaps a bright area of sky visible through tree branches.\n\nFor professional-quality results with complex tree canopies, zoom to 200% in the preview and carefully paint the sky brush along branch edges. The sky replacement output creates a group in the Layers panel called 'Sky Replacement Group' containing separate Foreground Lighting, Sky, and Sky Lighting layers. After clicking OK, you can further refine the edge mask on the Sky layer with Select and Mask for pixel-perfect results.\n\nTo use your own sky photos, click the plus icon in the sky picker. Your sky photo should be higher resolution than the source image if possible, and it must have a clear sky region that Photoshop can detect. Landscape orientation works best. Good sources: shoot sky photos yourself during interesting weather, or use licensed stock sky photos. Save custom skies to a folder and they remain available in your picker permanently.",
        },
      ],
    },
    {
      id: "8-6",
      title: "Content-Aware Fill: Advanced Workspace",
      duration: "13 min",
      description:
        "Use the Content-Aware Fill advanced workspace for precise control over object removal, giving you source sampling tools that outperform simple patch operations.",
      keyTakeaways: [
        "Open the Content-Aware Fill workspace via Edit > Content-Aware Fill",
        "Use the Sampling Brush to include and exclude source regions",
        "Adjust Rotation Adaptation, Scale, and Mirror for pattern-based fills",
        "Output results to a new layer for non-destructive editing",
      ],
      content: [
        {
          heading: "When to Use Content-Aware Fill vs. Remove Tool",
          body: "The Remove Tool (covered in lesson 8-3) is faster for simple removals. The Content-Aware Fill workspace is better when you need precision: when the automatic sampling produces a bad result, when you need to prevent the fill from sampling a specific area (like another person you want to keep), or when you are filling a complex area where the AI needs guidance about which reference pixels are appropriate.\n\nTo access the advanced workspace, make a selection around the object you want to remove (using any selection tool), then go to Edit > Content-Aware Fill. The workspace opens with your image on the left — the sampling region highlighted in green — and a live preview on the right.",
        },
        {
          heading: "Controlling the Sampling Region",
          body: "The green overlay shows which areas Photoshop is sampling from to fill your selection. By default, it samples from the entire image excluding the selection itself. This is usually good but can include areas you don't want sampled — for example, if you are removing a person from the left side of the image, you don't want Photoshop sampling another person on the right side as a fill source.\n\nThe Sampling Brush in the workspace toolbar (B) has two modes: subtract (default, removes areas from the sampling region) and add (adds areas back). Paint over areas you don't want used as source material — they turn from green to normal. The preview updates in real time as you paint. For removing a product from a wood-grain table surface, paint away the sampling overlay everywhere except other areas of the same table — this ensures the fill is sampled only from matching wood grain.\n\nThe Auto option (in the Sampling Area Options at the right panel) lets Photoshop choose; Rectangular uses a simple rectangle around the selection; Custom uses only the green-painted areas. For most controlled removals, Custom is the most reliable.",
        },
        {
          heading: "Fill Settings and Output",
          body: "The Fill Settings panel on the right provides fine-tuning options. Color Adaptation (Default, None, Extreme) controls how aggressively Photoshop matches the fill's color to the surroundings. Use Extreme when filling in areas with strong gradients (sky near a light source). Rotation Adaptation (None, Low, Medium, High, Full) allows the sampled source to rotate — set this to Full for organic textures like grass or gravel where direction doesn't matter. Scale lets the sampled source resize to fit. Mirror allows the sample to be flipped, which is extremely useful for symmetrical patterns.\n\nIn the Output Settings, always choose 'New Layer'. This creates a separate layer containing only the filled pixels, leaving your original layer untouched. You can then paint on this layer's mask to refine edges, apply a Hue/Saturation adjustment clipped to it to fix any color mismatch, or lower its opacity to blend it more naturally.\n\nClick OK to execute the fill. Inspect the result at 100% zoom. If any areas look wrong — usually visible as slightly blurred seams or mismatched textures — use the Healing Brush on the output layer to clean them up. Content-Aware Fill typically gets you 85–90% of the way there; a few minutes of manual healing completes the job.",
        },
      ],
    },
    {
      id: "8-7",
      title: "Video Timeline Basics in Photoshop",
      duration: "15 min",
      description:
        "Open, navigate, and edit video clips in Photoshop's Timeline panel, and understand how Photoshop's layer system maps to video editing concepts.",
      keyTakeaways: [
        "Open the Timeline panel via Window > Timeline",
        "Import video files as Video Group layers",
        "Trim clips by dragging the start and end points in the Timeline",
        "Add keyframe-based position, opacity, and style animations to any layer",
        "Export video via File > Export > Render Video",
      ],
      content: [
        {
          heading: "Photoshop as a Video Editor",
          body: "Photoshop is not a replacement for Premiere Pro or Final Cut Pro, but it is a capable tool for short-form video work: social media clips under 30 seconds, animated graphic overlays, title cards with motion, GIF creation, and adding Photoshop's full filter and adjustment library to video frames. If you already live in Photoshop, using it for light video work avoids the learning curve of a dedicated video editor.\n\nOpen the Timeline panel via Window > Timeline. You'll see a prompt to 'Create Video Timeline' or 'Create Frame Animation'. Click 'Create Video Timeline' for working with video files or creating frame-by-frame animations on a timeline. The panel shows a horizontal timeline with your document's layers as horizontal bars, a playhead, zoom controls, and transport buttons (play, rewind, step frame).",
        },
        {
          heading: "Importing and Trimming Video",
          body: "To import a video file, go to File > Open and navigate to any supported video format: MP4, MOV, AVI, or MXF. Photoshop opens the video in a Video Group — a special layer container that holds the video track. In the Timeline panel, the Video Group appears as a colored bar spanning the video's duration.\n\nTo trim a clip, hover over the left or right edge of the Video Group bar in the Timeline. The cursor changes to a bracket icon. Drag inward to shorten the clip from either end. Unlike destructive editing, this trim is non-destructive — you can always drag the edge back outward to reveal the trimmed footage. To set the in and out points precisely, move the playhead to the desired frame (using the timecode readout at the top left of the Timeline) and use the Split At Playhead button (the scissors icon) to cut the clip.\n\nFor a social media teaser workflow: import a 2-minute interview clip, trim it to a 20-second highlight, add an animated title card on a separate text layer, and export as H.264 at 1080p. The entire workflow takes 10–15 minutes in Photoshop without touching Premiere.",
        },
        {
          heading: "Keyframe Animation",
          body: "Every layer in Photoshop can be animated in the Timeline using keyframes. Click the triangle next to any layer name in the Timeline to expand its animatable properties: Position, Opacity, Style (layer effects), Text Warp (for text layers), and Global Illumination (for 3D layers).\n\nClick the stopwatch icon next to a property to enable keyframe recording for that property. Move the playhead to the start position, set the initial value (e.g., drag the layer to the left of frame). Move the playhead to a later time, move the layer to its final position. Photoshop automatically creates a keyframe at each point where you changed the value, and interpolates (tweens) the motion between them.\n\nFor a title card animation: create a text layer, set Position keyframes at 0:00 (off screen, x = -500) and 0:15 (centered, x = 0). Set Opacity keyframes at 0:00 (0%) and 0:08 (100%). The text slides in and fades up simultaneously. Add an Ease In/Ease Out to the motion by right-clicking the keyframe diamonds in the Timeline and choosing 'Ease In' for the starting keyframe and 'Ease Out' for the ending keyframe.",
        },
        {
          heading: "Exporting Video",
          body: "Go to File > Export > Render Video to export your composition as a video file. The dialog has several key settings. In the Adobe Media Encoder section, leave File > Presets selected. Choose a preset from the dropdown — 'H.264' with 'YouTube 1080p Full HD' is the right choice for social media delivery. For highest-quality archival output, choose 'ProRes 4444 (Mac)' or 'DNxHD (Windows)'.\n\nSet the Range to 'All Frames' to export the entire Timeline, or specify a custom start and end frame. For animated GIFs, do not use Render Video — instead use the Save for Web (Legacy) approach covered in the next lesson.\n\nThe Frame Rate should match your source footage: 24fps for cinematic, 30fps for broadcast/web video, 60fps for high-frame-rate smoothness. The Size should match your project settings, typically 1920x1080 or 1080x1080 for square social content. Click Render. Photoshop processes every frame and encodes the output file — expect 30–60 seconds per minute of video at 1080p on modern hardware.",
        },
      ],
    },
    {
      id: "8-8",
      title: "Creating Animated GIFs",
      duration: "13 min",
      description:
        "Build looping animated GIFs for social media, email campaigns, and web banners using Photoshop's Timeline and frame animation modes.",
      keyTakeaways: [
        "Set up a document at the correct dimensions for the target platform",
        "Use Frame Animation mode for simple cel-style animations",
        "Control frame delay times and looping options",
        "Optimize GIF export settings for file size vs. quality balance",
        "Export via File > Export > Save for Web (Legacy)",
      ],
      content: [
        {
          heading: "Frame Animation vs. Timeline for GIFs",
          body: "Photoshop offers two animation modes accessible from the Timeline panel. Frame Animation (accessed by choosing 'Create Frame Animation' in the Timeline) presents a filmstrip of individual frames — each frame shows specific layer visibility and position states. Video Timeline mode (covered in lesson 8-7) is better for complex keyframed animations. For simple social media GIFs with 5–15 frames, Frame Animation mode is faster and more intuitive.\n\nFor a bouncing logo GIF, a loading spinner, a product feature highlight rotating through three selling points — Frame Animation is the right tool. Each frame is a snapshot of your Layers panel's state: which layers are visible, where positioned, and at what opacity.",
        },
        {
          heading: "Building a Frame Animation",
          body: "Create a new document at your target dimensions. For an Instagram story loop: 1080x1920px, 72dpi. Create all the visual elements you want to animate as separate layers. For a simple 'sale announcement' GIF with three slides: create three sets of text layers ('50% OFF!', 'This Weekend Only', 'Shop Now'), each set positioned identically but with different content and colors.\n\nIn the Timeline panel, click 'Create Frame Animation'. Frame 1 is created automatically, representing the current visibility of all layers. Set Frame 1 to show only the first set of layers. Click the 'New Frame' button (the page icon) to create Frame 2. In Frame 2, hide the first set of layers and show the second. Create Frame 3 and show the third set.\n\nSet frame delay by clicking the time indicator under each frame thumbnail (it shows '0 sec' by default). Set Frame 1 to 1 second, Frame 2 to 1 second, Frame 3 to 1.5 seconds. Set the loop count to 'Forever' using the dropdown at the bottom left of the Timeline. Press the Play button to preview the animation.",
        },
        {
          heading: "Tweening for Smooth Motion",
          body: "Frame Animation mode includes a Tween feature that automatically generates intermediate frames between two states, creating smooth motion or fade transitions. Select the starting frame, then click the Tween button in the Timeline panel (the overlapping circles icon). Set 'Frames to Add' to 5–10 for smooth motion. Check 'Position' to animate layer position, 'Opacity' for fades, 'Effects' to animate layer styles.\n\nFor a text fade-in animation: create Frame 1 with a text layer at 0% opacity, Frame 2 with the same text layer at 100% opacity. Select Frame 1, click Tween, add 8 frames, check Opacity. Photoshop generates 8 intermediate frames showing opacity at 12.5%, 25%, 37.5%, and so on — a smooth 8-frame fade in.\n\nFor a slide-in animation: position a layer completely off-canvas in Frame 1, centered in Frame 2, Tween Position between them. The resulting frames show the layer sliding across the canvas. Combine fade and position tweening for professional, app-style animation quality.",
        },
        {
          heading: "GIF Export Settings and Optimization",
          body: "Go to File > Export > Save for Web (Legacy) (Alt+Shift+Ctrl+S) to export the GIF. In the top right dropdown, select GIF. The key settings for GIF optimization are Colors (the palette size, 2–256), Dither, Lossy, and Web Snap.\n\nFor a simple graphic GIF with flat colors and text: set Colors to 64, Dither to None, Lossy to 0. The file size will be very small. For a photographic GIF: set Colors to 256, Dither to Diffusion at 75%, Lossy to 5–10 (which reduces file size with minimal visible quality loss). The preview pane shows exactly how the exported GIF will look, and the file size is shown below the preview.\n\nFor social media use, aim for under 1MB for a 5–8 frame GIF at 600x600px. File size climbs quickly with frame count, canvas size, and color complexity. If your GIF is too large, reduce dimensions (the Image Size tab in Save for Web), increase Lossy, reduce Colors, or cut frames. At the bottom of the dialog, confirm the animation settings: Looping is set to 'Forever' for most social GIFs. Click Save.",
        },
      ],
    },
    {
      id: "8-9",
      title: "Frame Animation vs. Timeline Animation",
      duration: "12 min",
      description:
        "Understand the strengths of each animation system, when to convert between them, and how to combine both in a single project.",
      keyTakeaways: [
        "Convert between Frame Animation and Video Timeline modes",
        "Use Timeline mode for smooth keyframe motion, Frame mode for cel animation",
        "Understand how layer visibility maps across both modes",
        "Export the same animation as both GIF and MP4 from one source document",
      ],
      content: [
        {
          heading: "Mapping the Two Systems",
          body: "Frame Animation and Video Timeline are two interfaces to the same underlying animation data. Frame Animation displays the animation as a sequence of discrete stills with configurable display durations — like a flipbook. Video Timeline displays the animation as continuous time with keyframe interpolation — like a video editor. Photoshop can convert between the two modes, though some data may not translate perfectly in both directions.\n\nFrame Animation is ideal for: GIFs with a small number of distinct states (a blinking notification badge, a two-frame button hover effect), cel-style character animation where each frame is hand-drawn on a separate layer, and sprite sheet creation for game assets. Video Timeline is ideal for: smooth motion graphics (flying logos, text reveals), video overlays, any animation where interpolated motion is important.",
        },
        {
          heading: "Converting Between Modes",
          body: "In the Timeline panel, click the hamburger menu icon (three horizontal lines) in the top right corner. You'll see 'Convert to Video Timeline' (if you're in Frame Animation mode) or 'Convert to Frame Animation' (if in Video Timeline mode). Choosing Convert to Video Timeline maps each frame to a segment of the timeline, with each frame's delay becoming the segment's duration. Choosing Convert to Frame Animation takes keyframe-animated properties and snapshots them at regular intervals into individual frames.\n\nAfter converting a Video Timeline animation to Frame Animation, check every frame at the end of the process — the conversion creates frames at the document's frame rate (typically 30fps for a 1-second animation at 30fps = 30 frames). For GIF export, this is often too many frames. In Frame Animation mode, select every second or third frame (Shift-click to multi-select) and delete them to reduce the frame count, creating a lower-frame-rate GIF with smaller file size.\n\nFor a project that needs to be delivered as both a GIF (for email) and an MP4 (for web), build the animation in Video Timeline mode for the smoothest motion, export as MP4 via File > Export > Render Video, then convert to Frame Animation, reduce frame count for GIF file size, and export via Save for Web (Legacy). Both deliverables come from the same source document.",
        },
        {
          heading: "Practical Project: Animated Social Card",
          body: "Build a social media card that transitions between two promotional messages with smooth cross-fade motion, exportable as both GIF and MP4. Document size: 1080x1080px. Frame rate: 24fps.\n\nIn Video Timeline mode: create a background layer with a gradient. Create two text layers — 'Summer Sale 40% Off' and 'Shop the Collection'. Add an Opacity keyframe on Text Layer 1: 100% at 0:00, 100% at 1:15, 0% at 1:20 (fade out). Add an Opacity keyframe on Text Layer 2: 0% at 1:15, 100% at 1:20, 100% at 3:00 (fade in and hold). The result is a two-second hold on the first message, a cross-dissolve to the second message, and a hold. Export as MP4 (Render Video, H.264 preset).\n\nThen convert to Frame Animation. The 72-frame timeline becomes 72 frames. For GIF export, select every other frame (Option/Alt-click to select even frames) and delete, leaving 36 frames at approximately 12fps. Export via Save for Web (Legacy) as GIF at 256 colors, Diffusion dither. The GIF loops with a small but acceptable frame rate reduction compared to the smooth MP4.",
        },
      ],
    },
    {
      id: "8-10",
      title: "3D Text & Basic 3D Objects",
      duration: "16 min",
      description:
        "Create three-dimensional text and primitive 3D objects in Photoshop, apply materials and lighting, and render high-quality 3D composites.",
      keyTakeaways: [
        "Extrude text to 3D using 3D > New 3D Extrusion from Selected Layer",
        "Navigate the 3D space using the 3D panel and Move tool",
        "Apply and edit materials in the Properties panel",
        "Set up IBL (Image-Based Lighting) for realistic rendering",
        "Render to a final layer using 3D > Render 3D Layer",
      ],
      content: [
        {
          heading: "Enabling and Navigating the 3D Workspace",
          body: "Photoshop's 3D features require a GPU with OpenGL support, and they are accessed via the 3D menu. If you don't see a 3D menu, go to Preferences > Performance and make sure 'Use Graphics Processor' is checked. Note that Adobe has signaled reduced investment in Photoshop 3D features in recent versions — they remain functional and useful for title card work, but complex 3D projects are better served by Dimension, Blender, or Cinema 4D.\n\nSwitch to the 3D Workspace via Window > Workspace > 3D. This arrangement opens the 3D panel (listing all 3D scene elements) and configures the Properties panel to show 3D-specific options. The 3D panel has tabs for Scene, Mesh, Materials, and Lights.",
        },
        {
          heading: "Creating 3D Text",
          body: "Type your text with the Type tool. Choose a bold, thick font for best extrusion results — thin serifs often produce messy geometry. With the text layer selected, go to 3D > New 3D Extrusion from Selected Layer. Photoshop converts the text layer to a 3D layer and extrudes the letterforms along the Z axis.\n\nIn the Properties panel with the Mesh selected (click the mesh icon in the 3D panel), you see Extrusion Depth — increase this to 100–200px for pronounced depth. The Bevel section adds a chamfered edge to the front face, which catches light beautifully and looks far more professional than sharp edges. Set Bevel Width to 10–15% and Bevel Contour to a subtle 'Cove-Shallow' or 'Rounded' shape.\n\nTo navigate around the 3D object, use the Move tool (V) with the 3D navigation overlay visible. Click and drag the Rotate spherical handle to orbit the camera around the text. Use the Slide axis to move the camera in/out. For precise positioning, type values in the X/Y/Z coordinate fields in the Options bar when a 3D axis is selected.",
        },
        {
          heading: "Materials and Lighting",
          body: "Click the Materials icon in the 3D panel to see all material surfaces: Front Inflation (the face), Front Bevel, Back Inflation, Back Bevel, and Extrusion (the sides). Click on 'Front Inflation Material' to select it. In the Properties panel, you can set Diffuse color (the base color), Specular (the shine color — white for metallic, black for matte), Shine (specular spread), Reflection (0–100%), Illumination (self-glow), and Ambient.\n\nFor a chrome/metallic look: set Diffuse to medium gray, Specular to white, Shine to 80%, Reflection to 90%. For a matte plastic: set Diffuse to your chosen color, Specular to white, Shine to 30%, Reflection to 5%. For a gold finish: set Diffuse to RGB (212, 175, 55), Specular to RGB (255, 245, 157), Shine to 65%, Reflection to 40%.\n\nFor lighting, click the Lights icon in the 3D panel. The default scene includes an Infinite Light (like a distant sun) and an Image-Based Light (IBL). Click on the IBL to select it. In Properties, click the folder icon next to Environment to load an HDR panoramic image as the environment light. HDR environment images produce far more realistic, nuanced lighting than manual light placement alone.",
        },
        {
          heading: "Rendering and Compositing 3D",
          body: "The interactive 3D view shows a low-quality preview. For final output, go to 3D > Render 3D Layer. Rendering can take 1–15 minutes depending on scene complexity, material reflection settings, and canvas size. Photoshop performs ray-tracing in the background — you can work in other applications while it renders. The rendered result appears progressively; press Escape to stop early at the current quality level.\n\nAfter rendering, your 3D layer contains the fully rendered 3D object with transparent background around it. You can now treat it like any other layer: add a drop shadow via Layer > Layer Style > Drop Shadow, color-grade it with Curves adjustment layers clipped to it, or composite it into a background photograph. The 3D layer remains live and editable — you can re-enter 3D mode by double-clicking it, adjust the camera angle or materials, and re-render.\n\nFor a title card workflow: composite the rendered 3D text over a background photograph, match the lighting direction of your 3D lights to the direction of light in the photograph, and add a subtle Hue/Saturation adjustment clipped to the 3D layer to match the color temperature of the photo's ambient light. The result looks like the 3D letters exist in the photographic scene.",
        },
      ],
    },
    {
      id: "8-11",
      title: "Photoshop & Adobe Firefly Integration",
      duration: "14 min",
      description:
        "Understand the relationship between Photoshop and Adobe Firefly, explore the Firefly web app for asset generation, and use generated assets directly in Photoshop workflows.",
      keyTakeaways: [
        "Understand that Generative Fill and Expand are powered by Firefly",
        "Use the Firefly web app (firefly.adobe.com) for text-to-image and text-to-vector",
        "Download generated assets and place them as Smart Objects in Photoshop",
        "Use Firefly's Style Reference and Structure Reference features for consistent output",
      ],
      content: [
        {
          heading: "The Photoshop-Firefly Relationship",
          body: "Adobe Firefly is Adobe's generative AI platform. It powers Generative Fill and Generative Expand directly inside Photoshop, but it also exists as a standalone web app at firefly.adobe.com with capabilities that go beyond what's available in Photoshop's toolbar. Understanding both surfaces lets you use the right tool for each generation task.\n\nInside Photoshop, Firefly integration is contextual and selection-based — you generate content within specific regions of existing documents. In the Firefly web app, you generate from scratch: full images from text descriptions, vector graphics, texture patterns, and design elements. The web app gives you larger generation canvases, more variation control, and access to features like Structure Reference (using an image's composition as a guide) and Style Reference (using an image's visual style as a guide).",
        },
        {
          heading: "Using the Firefly Web App for Asset Generation",
          body: "Navigate to firefly.adobe.com (requires an Adobe account). The Text to Image module lets you type a description and generates four image options at various aspect ratios. For generating product photography backgrounds: 'minimalist white marble surface with soft shadows, product photography backdrop, daylight'. For generating lifestyle scene elements: 'modern cozy living room, afternoon light, no people, clean contemporary style'.\n\nThe Content Type dropdown (Photo, Art, Graphic) significantly changes the output style. Photo produces photorealistic imagery suitable for compositing with real photographs. Art produces illustrated, painterly, or graphically stylized output. Graphic produces clean, design-oriented output closer to vectors.\n\nStyle Reference lets you upload a reference image and the generation matches its visual style — color palette, lighting mood, texture quality — without copying its content. This is invaluable for brand consistency: upload a client's existing photography and generate new assets that match their established visual language.",
        },
        {
          heading: "Bringing Firefly Assets into Photoshop",
          body: "Download a generated image from the Firefly web app as a PNG or JPEG. In Photoshop, use File > Place Embedded or File > Place Linked to bring it in as a Smart Object. Placing as a Smart Object preserves the ability to replace the asset later (right-click > Replace Contents) if you generate a better version in Firefly.\n\nFor brand asset workflows: generate multiple texture and background options in Firefly, place them as Smart Objects on a 'texture options' layer group, use layer visibility to compare them, and delete the rejects once approved. The approved texture is already in your document as a Smart Object, correctly sized and positioned.\n\nFirefly's Text to Vector module (in the web app) generates vector graphics that can be downloaded as SVG files. Open the SVG in Illustrator, clean up the paths, and then paste into Photoshop as a Smart Object. This workflow lets you generate iconography, decorative elements, and illustrative graphics using AI while maintaining vector quality for scaling.",
        },
        {
          heading: "Generative Credits and Commercial Licensing",
          body: "All content generated by Adobe Firefly is commercially licensed — Adobe guarantees indemnification for commercial use of Firefly-generated content. This is a significant advantage over some competing AI generation tools where the licensing status of generated content is ambiguous.\n\nGenerative Fill and Expand inside Photoshop consume Generative Credits, which are included with Creative Cloud subscriptions at varying monthly amounts depending on your plan. The Firefly web app similarly uses credits for Text to Image generation. Monitor your credit usage at account.adobe.com — if you are running heavy generation workloads for commercial projects, you may need to purchase additional credits or upgrade your plan.\n\nFor professional client work, document your use of Firefly-generated content in your project files and client communication. Some clients have policies about AI-generated content in deliverables — checking in advance prevents post-delivery disputes. Adobe's Terms of Service and the Firefly Content Credentials feature (which embeds generation metadata in file EXIF data) provide a transparent record of AI involvement in your work.",
        },
      ],
    },
    {
      id: "8-12",
      title: "AI-Assisted Selection Improvements",
      duration: "11 min",
      description:
        "Use Select > Subject, Select > Sky, and the AI-powered improvements in Select and Mask to make complex selections faster than ever before.",
      keyTakeaways: [
        "Use Select > Subject for instant one-click subject selection",
        "Use Select > Sky for automatic sky region selection",
        "Refine AI selections in the Select and Mask workspace",
        "Use the new Object Selection tool for selecting specific named objects",
      ],
      content: [
        {
          heading: "Select Subject: The Starting Point for Most Selections",
          body: "Select > Subject uses Adobe Sensei AI to identify and select the main subject(s) of your image in a single click. For portraits, it reliably selects the person(s). For product photography, it selects the product. For wildlife photography, it selects the animal. The selection is not pixel-perfect at this stage — it is a strong starting point that you refine.\n\nAfter Select > Subject, immediately open Select and Mask (Select > Select and Mask, or click the 'Select and Mask' button in the Options bar). Use the Refine Edge Brush to paint along complex edges like hair, fur, or fine fabric. The AI edge detection in Select and Mask is significantly more capable than the original edge-detection algorithms — it separates individual strands of hair from backgrounds with remarkable accuracy.\n\nFor a product photography background removal workflow: Select > Subject creates the initial product selection, Select and Mask refines edges along complex product shapes (reflective surfaces, thin product features), and Output to New Layer with Layer Mask produces a cleanly masked product on a transparent background ready for compositing.",
        },
        {
          heading: "Object Selection Tool: Selecting Named Objects",
          body: "The Object Selection Tool (W) is an AI-powered selection tool that recognizes semantic objects within an image. When you hover over an image with the Object Selection Tool active, Photoshop shows a blue highlight overlay on the detectable object under your cursor. Click to select it.\n\nIn the Options bar, the 'Object Finder' button must be active (it shows a blue indicator when on). The Find Objects setting lets Photoshop detect all objects in the image proactively. You can then hover to highlight and click to select: a chair, a person's face, a car, a building, a plant — the AI recognizes a wide vocabulary of everyday objects and architectural elements.\n\nFor images with multiple subjects, use the Object Selection Tool's Mode setting: Rectangle draws a rough rectangle around the target and selects the best object within it; Lasso lets you draw a rough freeform shape. This is faster than the Lasso or Pen tool for initial selections on distinct objects with clear boundaries.",
        },
        {
          heading: "Select Sky and Practical Sky Workflow",
          body: "Select > Sky automatically selects the sky region of a landscape or architectural image with one click. Unlike Sky Replacement (which goes straight to replacing the sky), Select > Sky gives you the raw selection — which you can use for any operation: manually painting in a sky from another document, applying color grading adjustments only to the sky, adding atmospheric haze, or creating a mask for a sky-only adjustment layer.\n\nAfter Select > Sky, check the selection quality at the edges. For complex tree canopy edges, open Select and Mask and use the Refine Edge Brush along the tree branches. Output to a Layer Mask. This gives you a 'Sky' masked layer that you can place any sky image beneath and control the compositing manually — more flexible than the Sky Replacement dialog for advanced compositing work.\n\nFor color grading: Select > Sky, then create a Curves adjustment layer. Because you had a selection active, the Curves layer is automatically masked to affect only the sky. Shift the curves to make the sky more blue and dramatic, or warm it up for golden hour. The foreground is unaffected. This technique — AI selection + targeted adjustment layer — is one of the fastest professional color-grading workflows in Photoshop.",
        },
      ],
    },
    {
      id: "8-13",
      title: "Smart Portrait Neural Filters in Depth",
      duration: "13 min",
      description:
        "Deep-dive into the Smart Portrait Neural Filter's full capabilities, including face-aware adjustments, expression manipulation, and age simulation for professional portrait retouching.",
      keyTakeaways: [
        "Understand all available Smart Portrait sliders and their realistic ranges",
        "Blend Smart Portrait output with the original for natural results",
        "Handle multi-face images by processing each face separately",
        "Combine Smart Portrait with traditional retouching for a complete portrait workflow",
      ],
      content: [
        {
          heading: "Smart Portrait: Full Slider Reference",
          body: "Smart Portrait operates on the detected face region of your image. Open a portrait photograph with a clearly visible, well-lit face (the AI works best on faces at least 500px wide in the image). Open Filter > Neural Filters and enable Smart Portrait.\n\nThe available sliders and their practical working ranges: Happiness (-50 to +50; keep within -20 to +30 for natural results — extreme values create uncanny valley distortion). Surprise (subtle to moderate use only). Anger (mostly useful for comedic or cinematic stylization). Facial Age (-50 adds youth; +50 ages; use -15 to +20 for subtle, believable adjustment). Hair Thickness (-50 thins; +50 increases volume; stay within ±30 for realism). Gaze Direction shifts eye direction left/right (-50 to +50) and up/down — useful for correcting slightly off-camera gazes in portrait photography. Head Direction rotates the apparent angle of the face.",
        },
        {
          heading: "Blending for Realism",
          body: "Raw Smart Portrait output at 100% opacity rarely looks fully natural. The model sometimes introduces slight skin texture inconsistencies, subtle color shifts at the face boundary, or micro-expression artifacts. The professional workflow always blends the Smart Portrait output layer with the original.\n\nOutput Smart Portrait to a New Layer. Reduce the layer opacity to 60–80% as a starting point. Most of the time, 70% opacity produces a result that has the desired expression change while retaining the original's skin texture quality. If specific areas need more blending (the chin area often looks most processed), add a mask to the Smart Portrait layer and paint at 30–50% brush opacity to reduce the effect intensity in those areas.\n\nFor the age adjustment slider specifically, output to a New Masked Layer. The automatic mask isolates the face region. Paint on the mask to reduce the age effect on the neck (which the model often handles poorly), the ears, and the hairline, while retaining the effect on the face proper.",
        },
        {
          heading: "Processing Multi-Face Images",
          body: "When an image contains multiple faces, Smart Portrait processes only one face at a time — the one it detects as the primary subject. For group portraits where you need to adjust multiple faces, you must run Smart Portrait once per face.\n\nThe workflow: Duplicate the background layer once per face you need to adjust. On each duplicate, run Smart Portrait targeting one person's face. Mask each Smart Portrait layer to show only the affected face. Stack all the Smart Portrait layers above the original. This gives you independent control over each person's expression and adjustment.\n\nFor a group family portrait where two of five subjects have closed eyes: use Smart Portrait's Happiness/expression tools to naturally open the eyes (note: Neural Filters in recent versions have added specific eye-opening adjustments; look for 'Eye Direction' under the Smart Portrait options). Output to separate layers per person, mask to each face, and blend as needed. This workflow — previously requiring hours of manual frequency separation retouching — now takes under 10 minutes.",
        },
        {
          heading: "Integration with Traditional Retouching",
          body: "Smart Portrait is most powerful when combined with traditional retouching techniques. Use Smart Portrait first for structural changes (expression, gaze correction, age) and traditional retouching afterward for skin quality (frequency separation, healing, dodge/burn). This order matters: if you retouch the skin texture first and then run Smart Portrait, the neural filter may override some of your detailed skin work.\n\nA professional portrait retouching workflow in order: (1) Exposure and color correction on a Camera Raw Smart Object. (2) Remove blemishes and distracting elements with the Remove Tool. (3) Run Smart Portrait for any expression or pose corrections, output to New Layer, blend to taste. (4) Frequency separation for skin retouching. (5) Dodge and burn for contouring. (6) Final color grade with Curves and Hue/Saturation. Smart Portrait is the third step — after basic cleanup but before detailed skin work — because its output is the base for everything that follows.",
        },
      ],
    },
    {
      id: "8-14",
      title: "Using AI Ethically in Professional Work",
      duration: "10 min",
      description:
        "Navigate the professional, legal, and ethical considerations of using AI generation tools in client work, editorial photography, and commercial production.",
      keyTakeaways: [
        "Understand Adobe Content Credentials and AI content disclosure",
        "Know when AI use requires client disclosure and permission",
        "Distinguish between editorially acceptable and unacceptable AI use",
        "Protect yourself legally with proper licensing documentation",
      ],
      content: [
        {
          heading: "Disclosure and Transparency",
          body: "The creative industry is rapidly developing norms around AI content disclosure. In editorial photography, the standard is increasingly clear: AI generation of visual content that misrepresents reality — changing what was photographically captured — violates the ethics standards of major photo agencies including AP, Reuters, and Getty. Removing a person from a news photo with Generative Fill, or replacing a real sky with a dramatic AI sky in a documentary image, crosses a line from retouching to fabrication.\n\nIn commercial work — advertising, marketing, design — the standards are less uniform but trending toward disclosure. Many brand clients now include AI disclosure requirements in their creative briefs. Some request that AI-generated elements be flagged in layered file deliverables. Building transparent documentation of where AI tools were used in your workflow is becoming standard professional practice.\n\nAdobe Content Credentials (accessible in Photoshop via Help > Content Credentials) embed a tamper-evident record in the file's metadata showing what AI tools were used during editing. This is not mandatory, but enabling it demonstrates professional transparency and aligns with the C2PA (Coalition for Content Provenance and Authenticity) standard being adopted industry-wide.",
        },
        {
          heading: "Client Communication and Contracts",
          body: "Before delivering AI-assisted work to clients, establish clear expectations in your contract or creative brief. A simple addition to your standard terms: 'This project may include content generated or modified using Adobe Firefly AI tools, which are commercially licensed by Adobe.' This protects you legally and informs the client.\n\nFor clients in highly regulated industries — news media, legal, medical, government — verify their specific AI use policies before starting work. Some clients have internal policies that prohibit AI-generated images in deliverables entirely. Learning this after delivery creates expensive revisions.\n\nOn the positive side, being transparent about AI efficiency can reframe how clients perceive your billing. If Generative Fill saves you two hours of background replacement work, you can either pass that savings to the client as a more competitive price, or invest that time in more refined creative work. Either way, communicating how you use AI tools helps clients understand the value you provide.",
        },
        {
          heading: "Protecting Your Creative Identity",
          body: "As AI tools become ubiquitous, the risk of creative homogenization increases. Work generated purely by AI with generic prompts tends toward a recognizable aesthetic — an average of the training data, optimized for visual pleasantness. Professional creative work needs to stand apart.\n\nUse AI as a starting point, not a finish line. Generative Fill generates a background; your color grading, compositional choices, and editorial decisions create the final image. Neural Filters suggest an expression change; your judgment about what looks natural and your manual blending create the result. The creative decisions that separate excellent work from average work remain irreplaceably human.\n\nKeep developing your foundational skills — selection, masking, color, composition, light — independent of AI tools. These skills make you a better director of AI tools, better at recognizing when AI output needs correction, and ensure your capabilities don't erode if AI tool availability changes. The professionals who will thrive as AI tools mature are those who combine deep craft knowledge with fluency in AI-assisted workflows.",
        },
      ],
    },
    {
      id: "8-15",
      title: "Final Project: AI-Powered Composite",
      duration: "20 min",
      description:
        "Create a complete, professional-quality composite image using every AI tool covered in this path, from initial subject extraction to final generative environment creation.",
      keyTakeaways: [
        "Combine Select > Subject, Generative Fill, Neural Filters, and Sky Replacement in one workflow",
        "Use Generative Expand to achieve a specific final aspect ratio",
        "Apply Smart Portrait corrections to the composited subject",
        "Perform final color grading to unify all elements into a cohesive image",
      ],
      content: [
        {
          heading: "Project Brief: Hero Product Composite",
          body: "The final project creates a hero image suitable for a full-page advertisement or website banner. Starting materials: a product photograph (a watch, perfume bottle, or consumer electronics product) shot on a plain studio background, and a lifestyle reference image showing the kind of environment where the product belongs — perhaps a luxury penthouse, a sunlit café table, or an outdoor adventure scene.\n\nThe goal: composite the product from the studio photograph into a photorealistic lifestyle scene that doesn't exist. The final image should look like a single, purposefully-shot photograph. Every step uses AI tools to accelerate what was previously multi-hour compositing work. The challenge is making all the AI contributions invisible — the mark of professional AI-assisted work.",
        },
        {
          heading: "Phase 1: Extract and Prepare the Subject",
          body: "Open the product photograph. Use Select > Subject to get the initial product selection. Open Select and Mask to refine the edges — pay special attention to any glass, chrome, or reflective surfaces where the background bleeds through. Use the Refine Edge Brush at 100% strength along these edges. Output to New Layer with Layer Mask.\n\nInspect the extracted product at 100% zoom. Use the Remove Tool to eliminate any halo artifacts — white or gray fringes from the original background that persist around the product edges. Clean these by painting directly on the mask with a small black brush (B) at 30–50% opacity to manually tighten any remaining fringing.\n\nOn the product layer, apply a Curves adjustment clipped to the product layer (Clip by holding Alt and clicking between the Curves layer and the product layer in the Layers panel). Neutralize any color cast from the original studio lighting — the product needs to be neutrally lit before you add the scene's ambient light in a later step.",
        },
        {
          heading: "Phase 2: Build the Environment with Generative Fill",
          body: "Create a new document at your target final size — for a 16:9 hero banner, use 3840x2160px. Place the extracted product as a Smart Object. Size and position it compositionally — perhaps in the lower third, slightly off-center.\n\nMake a selection of all areas outside the product (Ctrl+click the product layer mask thumbnail to load the selection, then Invert). With this selection active, apply Generative Fill with a prompt that describes your target environment: 'luxury penthouse living room, floor-to-ceiling windows, city view, evening light, bokeh background, shallow depth of field, photorealistic'. Generate three variations and choose the most compelling.\n\nIf the background doesn't fill the entire canvas perfectly, use Generative Expand on any remaining empty areas, matching the prompt to the existing generated background. The result is a custom AI-generated lifestyle environment built specifically around your product's position in the frame.",
        },
        {
          heading: "Phase 3: Light Matching and Final Composite",
          body: "The product now sits against an AI-generated background, but the lighting may not match — the product was lit by studio strobes while the background has a warm evening light. Apply a Hue/Saturation adjustment clipped to the product layer, shift the hue slightly warmer (+5 to +10), and reduce saturation by 5–10% to integrate it into the warm ambient light of the scene.\n\nAdd a Color Lookup adjustment layer (Layer > New Adjustment Layer > Color Lookup) above all layers to apply a cinematic color grade to the entire composition. The 'Fuji ETERNA 250D' or 'Cinespace' LUT presets (in the Abstract or Cinematic dropdown) add a unified film-like quality. Reduce the Color Lookup layer to 30–40% opacity for a subtle effect.\n\nFinally, add a subtle vignette: create a new layer set to Multiply blending mode, fill it with transparent, and use the Radial Gradient tool (black to transparent, radial, drawn from center outward) to darken the edges slightly. This draws the eye toward the product. Apply a final Generative Fill pass on any areas that look compositionally awkward — an empty corner, an odd background element near the product — with a prompt that continues the environment. Export at full resolution as TIFF for delivery and JPEG quality 95 for digital use.",
        },
      ],
    },
  ],
};
