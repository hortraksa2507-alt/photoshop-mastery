import { PathData } from "./types";

export const path3: PathData = {
  id: 3,
  title: "Layer Techniques & Compositing",
  level: "Intermediate",
  levelColor: "var(--level-intermediate)",
  description:
    "Deep dive into layers, blend modes, smart objects, and professional compositing workflows.",
  lessons: [
    {
      id: "3-1",
      title: "Blend Modes Deep Dive",
      duration: "18 min",
      description:
        "Master all blend mode categories and understand the math behind how they work.",
      keyTakeaways: [
        "Understand all 27 Photoshop blend modes",
        "Know which blend mode category to reach for",
        "Use blend modes for creative and corrective work",
        "Cycle through blend modes with keyboard shortcuts",
      ],
      content: [
        {
          heading: "How Blend Modes Actually Work",
          body: "Blend modes control how a layer's pixels interact mathematically with the pixels on layers beneath it. Every blend mode falls into one of six categories: Normal, Darken, Lighten, Contrast, Comparative, and Color. Understanding these categories is the real shortcut — once you know what a category does, you can predict what each mode inside it will do before you even try it.\n\nThe formula for each blend mode takes two values: the Base color (pixels below) and the Blend color (pixels on the current layer), and produces a Result color. For example, Multiply multiplies the two values together and divides by 255, which always darkens. Screen does the inverse — it inverts both values, multiplies them, inverts the result — which always lightens. You don't need to memorize the math, but understanding the direction (darker, lighter, or contrast-boosting) puts you in control.",
        },
        {
          heading: "The Darken and Lighten Groups",
          body: "The Darken group — Darken, Multiply, Color Burn, Linear Burn, and Darker Color — will never make pixels brighter than the original. Multiply is the workhorse here: it's perfect for dropping shadows onto a scene, darkening overexposed areas, or adding texture. Pure white on a Multiply layer is completely invisible, which makes it ideal for placing scanned textures. Color Burn and Linear Burn intensify contrast aggressively and are great for creating rich, saturated shadows.\n\nThe Lighten group mirrors the Darken group: Lighten, Screen, Color Dodge, Linear Dodge (Add), and Lighter Color. Screen is the go-to for adding light effects, lens flares, or fire — pure black becomes invisible on a Screen layer. Color Dodge and Linear Dodge produce very intense, blown-out highlights and are often used for particle effects and glows. A practical trick: place a soft-light texture on Screen mode to add a subtle brightening effect to portraits without changing the shadows.",
        },
        {
          heading: "Contrast and Overlay Modes",
          body: "The Contrast group is where a lot of the creative magic happens: Overlay, Soft Light, Hard Light, Vivid Light, Linear Light, Pin Light, and Hard Mix. These modes simultaneously darken areas darker than 50% gray and lighten areas brighter than 50% gray — making 50% gray itself completely invisible. This invisible-gray trick is incredibly powerful: create a new layer filled with 50% gray (Edit > Fill > 50% Gray), set it to Overlay, and you have a dodge-and-burn layer where painting with white dodges and painting with black burns — completely non-destructively.\n\nSoft Light is the gentlest of the group and is excellent for color grading — it adds a soft, photographic contrast boost. Hard Light is the same as Overlay but with the base and blend layers swapped, producing a more intense result. Vivid Light and Linear Light push the contrast even further and are great for high-impact editorial looks. To cycle through blend modes quickly, select the Move tool (V), then press Shift + Plus (+) to go forward through modes or Shift + Minus (–) to go backward.",
        },
        {
          heading: "Color Group and Practical Workflows",
          body: "The Color group — Hue, Saturation, Color, and Luminosity — separates color into its components and applies only one aspect. Color mode (the blend mode) is extremely useful for colorizing black-and-white images: create a new layer in Color mode, paint with a color, and you tint the underlying detail without affecting its brightness. Luminosity does the opposite — it applies the brightness of the blend layer to the hue and saturation of the base, which is useful when you want to sharpen or add detail without shifting colors.\n\nThe Comparative group — Difference and Exclusion — creates psychedelic inversion effects and is mostly used for alignment tasks. When two identical layers are stacked and one is set to Difference, identical pixels produce pure black, making it a perfect tool for checking whether layers are pixel-perfectly aligned. To change a layer's blend mode from the keyboard, make sure the Move tool is active (press V), then hold Shift and press a letter: N for Normal, M for Multiply, S for Screen, O for Overlay, F for Soft Light, and so on.",
        },
      ],
    },
    {
      id: "3-2",
      title: "Advanced Layer Masks",
      duration: "16 min",
      description:
        "Go beyond basic masking with gradients, luminosity masks, and mask refinement techniques.",
      keyTakeaways: [
        "Create luminosity masks from image data",
        "Use gradient masks for seamless blending",
        "Refine masks with Curves and levels adjustments",
        "Apply mask feathering and density controls",
      ],
      content: [
        {
          heading: "Layer Mask Fundamentals Refreshed",
          body: "A layer mask is a grayscale channel attached to a layer: white reveals, black conceals, and gray creates partial transparency. You add one by clicking the Add Layer Mask icon at the bottom of the Layers panel (the rectangle with a circle inside). To paint on the mask, click the mask thumbnail in the Layers panel to target it — a double border appears around it confirming it's active. Use a soft black brush to hide areas and a soft white brush to bring them back. This is always reversible — you're never deleting pixels.\n\nTo view the mask itself as a red overlay on your image, hold Alt (Windows) or Option (Mac) and click the mask thumbnail. This shows you exactly what's masked with a red overlay, like Quick Mask mode. Alt/Option-click again to return to the normal view. You can also view the mask as a black-and-white channel by Shift-clicking the mask thumbnail, which toggles visibility of the mask without disabling it.",
        },
        {
          heading: "Gradient Masks for Natural Blending",
          body: "When compositing two images together — for example, swapping a sky — a hard-edged mask looks fake. A gradient mask creates a smooth, painterly transition. With the mask selected, choose the Gradient tool (G), set it to Foreground to Background, make sure your foreground/background colors are black and white (press D to reset), and drag across the image. The gradient is applied directly to the mask, creating a seamless fade.\n\nFor more control, hold Shift while dragging to constrain the gradient to a straight line. You can also use the Linear, Radial, or Reflected gradient types for different blending effects. If you need to blend multiple images at different points, use a soft black brush to refine the gradient after applying it. A key intermediate technique: drag your gradient, check the result, then use Levels (Ctrl/Cmd + L while the mask is active) to adjust where the transition starts and ends — moving the midpoint slider controls the transition zone precisely.",
        },
        {
          heading: "Luminosity Masks: Selecting by Brightness",
          body: "A luminosity mask is a selection based on the brightness values of the image itself, which makes it perfect for blending HDR exposures or targeting adjustments to highlights or shadows without hard edges. To create a basic luminosity mask, go to the Channels panel, hold Ctrl (Windows) or Cmd (Mac), and click the composite RGB channel thumbnail. This loads the highlights as a selection — bright areas are fully selected, shadows are partially selected, and pure black is not selected at all.\n\nWith this selection active, go back to your Layers panel and add a layer mask. The mask is now based on image luminosity. To target midtones or shadows, you can modify the selection before creating the mask: load the luminosity selection, then go to Select > Modify or use Levels on a saved channel to push the selection toward shadows. There are also dedicated luminosity mask plugins like Lumenzia or TK Actions that give you a full panel of precision luminosity selections, which are extremely popular in landscape photography compositing.",
        },
        {
          heading: "Mask Density, Feathering, and Refinement",
          body: "Once a mask exists, double-clicking the mask thumbnail opens the Properties panel (Window > Properties if it's not showing), which gives you two critical sliders: Density and Feather. Density works like overall mask opacity — reducing it from 100% makes the masked areas partially visible again globally. This is great for ghosting in previously masked content. Feather blurs the edges of the entire mask, softening any hard transitions. Start with a Feather value of 1–3 pixels for portraits and 0 for graphic work.\n\nFor precise edge work, click Select and Mask in the Properties panel (or go to Select > Select and Mask). This opens the refinement workspace where you can use the Refine Edge Brush tool to paint over complex edges like hair or fur, and Photoshop will analyze the edge detail and build a much more accurate mask. Set the Output to Selection or New Layer with Layer Mask to apply the result. The Smart Radius checkbox in Select and Mask is worth enabling — it automatically varies the radius based on edge complexity, applying tighter refinement to hard edges and softer treatment to organic ones.",
        },
      ],
    },
    {
      id: "3-3",
      title: "Clipping Masks",
      duration: "10 min",
      description:
        "Use clipping masks to confine layers within shapes, text, and other layer boundaries.",
      keyTakeaways: [
        "Create clipping masks with keyboard shortcuts",
        "Clip multiple layers to a single base",
        "Use clipping masks with text and shapes",
        "Combine clipping masks with blend modes",
      ],
      content: [
        {
          heading: "What a Clipping Mask Does",
          body: "A clipping mask uses one layer's shape (its non-transparent pixels) as a visibility boundary for all the layers clipped to it. The bottom layer in the clipping group is called the base layer — its outline defines the visible area. Any layer clipped above it is only visible where the base layer has pixels. This is fundamentally different from a layer mask: a clipping mask uses an existing layer's shape rather than a grayscale channel to define transparency.\n\nTo create a clipping mask, position a layer directly above the layer you want to use as the base, then press Alt + Ctrl + G (Windows) or Option + Cmd + G (Mac). Alternatively, hold Alt/Option and hover between the two layers in the Layers panel — the cursor changes to a downward arrow with a square — then click. The clipped layer gets an indented icon with a small arrow pointing down, indicating it's clipped to the layer below.",
        },
        {
          heading: "Practical Uses: Text, Shapes, and Smart Objects",
          body: "One of the most common uses is filling text with an image or texture. Type your text, place your image or texture layer directly above the text layer, and create a clipping mask. The image now fills the text exactly, and you can move the image layer independently with the Move tool to reposition the texture inside the letters. Because the text layer is still live type, you can still edit the text and the fill updates automatically.\n\nClipping masks also work beautifully with shapes. Draw a circle or rectangle with a Shape layer, then clip your photo above it — instant rounded-photo effect. You can clip multiple adjustment layers above the shape too, affecting only the clipped content. With Smart Objects as a base, clipping masks become even more powerful: convert your base to a Smart Object (right-click > Convert to Smart Object), clip everything to it, then transform the entire group just by transforming the Smart Object base. All clipped content scales and transforms with it.",
        },
        {
          heading: "Stacking Multiple Clipped Layers",
          body: "You can clip as many layers as you want to a single base. Each clipped layer respects the base layer's boundaries, and all the normal layer interactions still apply — you can change blend modes, opacity, and add layer masks to individual clipped layers. A typical workflow might be: a Shape layer as base, a photo layer clipped to it, a Color Lookup adjustment layer clipped above for a grade, and a soft-light Curves layer clipped on top for contrast — all contained within the shape.\n\nOne important nuance: the blend mode of the base layer itself affects how the entire clipping group interacts with layers beneath. If you set the base layer to Multiply, the whole group will multiply into the layers below. To avoid this unintended interaction, keep the base layer in Normal mode (or at whatever blend mode you actually want for the group's interaction). If you need to move the entire clipping group, link all the layers, or group them first with Ctrl/Cmd + G, then move the group.",
        },
      ],
    },
    {
      id: "3-4",
      title: "Smart Objects Explained",
      duration: "14 min",
      description:
        "Learn how Smart Objects protect your work and enable flexible, non-destructive editing.",
      keyTakeaways: [
        "Convert layers to Smart Objects",
        "Understand embedded vs. linked Smart Objects",
        "Edit Smart Object contents independently",
        "Use Smart Objects for repeated elements",
      ],
      content: [
        {
          heading: "What Makes a Smart Object Smart",
          body: "A Smart Object is a container that holds the original image data inside a layer — transformations, filters, and warps applied to a Smart Object are stored as instructions rather than being applied destructively to the pixels. This means you can scale a Smart Object down, then back up, and recover full quality. Regular pixels lose quality permanently the moment you scale them down and back up. The Smart Object icon (a small page icon in the layer thumbnail) tells you it's protected.\n\nTo convert any layer to a Smart Object, right-click the layer in the Layers panel and choose Convert to Smart Object. You can also go to Layer > Smart Objects > Convert to Smart Object. Multiple layers can be selected and converted together — they'll be wrapped into a single Smart Object containing all of them. To edit the contents, double-click the Smart Object thumbnail and the contents open in a new temporary document (a .psb file). Any changes you save there update the Smart Object in the parent document automatically.",
        },
        {
          heading: "Embedded vs. Linked Smart Objects",
          body: "When you place a file via File > Place Embedded, Photoshop copies the file's data into the document — this is an Embedded Smart Object. It's self-contained, so the document works even if the original file is moved or deleted. When you use File > Place Linked, Photoshop stores only a reference to the external file — this is a Linked Smart Object. The layer thumbnail shows a chain-link badge. Linked Smart Objects are powerful for multi-document workflows: update the source file on disk, and every document that links to it updates automatically when you reopen or click Layer > Smart Objects > Update All Modified Content.\n\nTo convert an embedded Smart Object to a linked one, go to Layer > Smart Objects > Convert to Linked. Choose where to save the extracted file. This is great for cleaning up large PSDs — you can extract heavy textures to disk and link them to reduce file size. You can also package all linked assets via File > Package, which copies everything into a folder alongside your PSD.",
        },
        {
          heading: "Smart Filters and Non-Destructive Filters",
          body: "One of the biggest advantages of Smart Objects is Smart Filters. Any filter applied to a Smart Object — Gaussian Blur, Unsharp Mask, Camera Raw Filter, Liquify — is stored as an editable smart filter that you can double-click to modify at any time. To apply a filter as a Smart Filter, just make sure your layer is a Smart Object first, then go to Filter and apply any filter normally. It appears beneath the layer in the Layers panel with a slider icon.\n\nEvery Smart Filter automatically gets its own filter mask — the white rectangle to the left of the filter name. You can paint black on this mask to hide the filter effect in specific areas, giving you precise control. This is excellent for selective sharpening: apply Unsharp Mask as a Smart Filter, then paint black on the filter mask over areas like skin that shouldn't be sharpened, while keeping the sharpening active over eyes and hair. You can also adjust the Smart Filter's blend mode and opacity by double-clicking the sliders icon to the right of the filter name.",
        },
        {
          heading: "Reusing Smart Objects Across a Document",
          body: "A very powerful feature: when you duplicate a Smart Object by holding Alt/Option while dragging it (which creates a copy), the copy and the original are actually independent. But if you use Layer > New Layer via Copy (Ctrl/Cmd + J) or right-click and choose Duplicate Layer, the copies are also independent. To create a linked duplicate — where editing one updates all copies — right-click and choose New Smart Object via Copy for a completely independent copy, or simply duplicate the layer normally for a linked instance.\n\nActually, the simplest way to create instances that all share the same Smart Object content is to duplicate the layer with Ctrl/Cmd + J. All duplicated copies reference the same embedded data. Edit the Smart Object contents in any one of them, and all instances update. This is ideal for placing the same logo or element multiple times at different sizes and positions — you only need to update the source once. For fully independent copies, use right-click > New Smart Object via Copy, which creates a separate embedded copy.",
        },
      ],
    },
    {
      id: "3-5",
      title: "Advanced Adjustment Layers",
      duration: "15 min",
      description:
        "Explore targeted adjustments, clipped corrections, and complex tonal control with adjustment layers.",
      keyTakeaways: [
        "Use Curves for precise tonal control",
        "Target adjustments with luminosity and color masks",
        "Stack and combine multiple adjustments",
        "Use Selective Color for targeted hue shifts",
      ],
      content: [
        {
          heading: "Curves: The Most Powerful Adjustment",
          body: "The Curves adjustment layer (Layer > New Adjustment Layer > Curves, or the Curves icon in the Adjustments panel) is the single most versatile tool in Photoshop. The diagonal line represents the full tonal range from shadows (bottom-left) to highlights (top-right). Clicking on the line creates control points; dragging a point up brightens that tonal range, dragging it down darkens it. An S-curve — one point pulled up in the upper-thirds and one pulled down in the lower-thirds — adds contrast by brightening highlights and deepening shadows simultaneously.\n\nCurves works per-channel too. Click the channel dropdown at the top of the Curves dialog (it says RGB by default) and switch to Red, Green, or Blue to adjust individual channels. Lifting the red channel adds warmth; lowering it adds cyan. This is how professional color grading is done. A classic cinematic look: slightly lift the bottom-left anchor point of the shadows to about 15–20 (instead of 0) — this crushes pure black into a lifted gray, creating that faded-film aesthetic. The On-Image adjustment tool (the hand icon with arrows) lets you click directly on a part of your image and drag up/down to adjust that specific tonal value.",
        },
        {
          heading: "Hue/Saturation and Selective Color",
          body: "Hue/Saturation is a standard adjustment, but its targeted channel editing is where it becomes advanced. Open the Hue/Saturation dialog (Layer > New Adjustment Layer > Hue/Saturation) and change the channel dropdown from Master to any specific color: Reds, Yellows, Greens, Cyans, Blues, Magentas. Now your Hue, Saturation, and Lightness sliders only affect that color range. You can shift a blue sky toward teal without affecting anything else in the scene.\n\nSelective Color (Layer > New Adjustment Layer > Selective Color) works similarly but gives you CMYK slider control (Cyan, Magenta, Yellow, Black) within each color range. This is the professional colorist's tool — it lets you, for example, add more yellow to the reds (warming skin tones), remove cyan from the whites (cleaning up casts in highlights), or push blue into the shadows by adding cyan and subtracting yellow from the blacks. The Method dropdown at the bottom offers Relative (adjusts relative to the existing amount) and Absolute (adds a fixed CMYK amount) — Relative is the more natural-looking choice for most work.",
        },
        {
          heading: "Targeting Adjustments with Masks",
          body: "An adjustment layer's mask determines where the adjustment applies. By default it's a white mask (applies everywhere). The real power comes from painting on the mask or loading selections before creating the adjustment. A simple workflow: use the Quick Selection tool (W) to select a subject, then create a Curves adjustment layer — Photoshop automatically uses your selection as the mask, so the tonal adjustment only affects the selected subject.\n\nFor luminosity-targeted adjustments, use the technique from the Advanced Layer Masks lesson: Ctrl/Cmd-click the RGB composite in the Channels panel to load a highlights selection, then create a Color Balance adjustment layer. It will only affect the highlights. For shadow-targeted work, load the same luminosity selection, then go to Select > Inverse (Shift + Ctrl/Cmd + I) to flip the selection to shadows, and create another adjustment layer. This per-luminosity-range color grading is how landscape photographers separate their sky and foreground treatments.",
        },
        {
          heading: "Stacking Adjustments and the Properties Panel",
          body: "Adjustment layers are fully stackable and each one only affects the layers below it (unless you clip it to a specific layer). The order matters: a Hue/Saturation layer above a Curves layer will shift the hues of the already-curved image. Swapping them produces a different result. Experiment with reordering to see which sequence produces the look you want.\n\nThe Properties panel (Window > Properties) is essential for working with adjustment layers. When an adjustment layer is selected, its controls appear here instead of a dialog box, so you can always revisit and tweak any setting at any time. The panel also contains the Clip to Layer button (the downward-pointing square at the bottom) to instantly clip the adjustment to just the layer below, and the mask controls including Density and Feather sliders. To quickly toggle an adjustment layer on and off to compare before/after, click its visibility eye in the Layers panel or press Ctrl/Cmd + Z to undo — but toggling the eye is non-destructive and reversible.",
        },
      ],
    },
    {
      id: "3-6",
      title: "Layer Styles & Effects",
      duration: "14 min",
      description:
        "Use drop shadows, glows, bevels, and overlays to add depth and polish to layers.",
      keyTakeaways: [
        "Apply and customize Drop Shadow and Outer Glow",
        "Use Bevel and Emboss for 3D effects",
        "Copy and paste layer styles between layers",
        "Scale layer effects proportionally",
      ],
      content: [
        {
          heading: "Opening and Navigating Layer Styles",
          body: "Layer styles are non-destructive effects attached directly to a layer. To open the Layer Style dialog, double-click any empty space to the right of a layer's name in the Layers panel (not the thumbnail — that opens other things). The dialog has a column of effect categories on the left: Bevel & Emboss, Stroke, Inner Shadow, Inner Glow, Satin, Color Overlay, Gradient Overlay, Pattern Overlay, Outer Glow, and Drop Shadow. Click the checkbox to enable an effect and click its name to see its controls on the right.\n\nAll layer styles appear listed beneath the layer in the Layers panel when you expand the layer (click the arrow to the right of the layer's fx badge). You can drag individual effects to the trash to remove them, drag them between layers to copy them, or drag the whole Effects group to copy all styles to another layer. The fx badge shows a small thumbnail of which effects are active. To temporarily hide all effects on a layer, click the eye next to the Effects group in the Layers panel.",
        },
        {
          heading: "Drop Shadow: Making Elements Pop",
          body: "Drop Shadow is the most commonly used layer style. In the Layer Style dialog, the key settings are: Blend Mode (Multiply at a dark gray color is the standard natural shadow), Opacity (40–60% is usually more realistic than the default 75%), Angle (sets the light direction — matching this across all layers in your composite is critical), Distance (how far the shadow is offset from the element), Spread (hardens the shadow edge — keep at 0 for natural soft shadows), and Size (the blur radius of the shadow, from sharp 0px to very soft 20px+).\n\nTurn on the Use Global Light checkbox to link this layer's light angle to a global setting — change it in any one layer style and all layers with Use Global Light update simultaneously. This ensures consistent lighting across your whole composition. For a realistic shadow, try: Blend Mode Multiply, Opacity 45%, Angle 120°, Distance 5px, Spread 0%, Size 10px. The Preview checkbox at the top-right of the dialog lets you see changes live on your canvas while you adjust.",
        },
        {
          heading: "Glows, Bevels, and Overlays",
          body: "Outer Glow creates a halo around the layer's content — excellent for making text glow or giving a selected object a highlight. Set the blend mode to Screen for a light glow or use a dark color with Multiply for a dark halo. Inner Glow applies the glow inside the layer's edges. Inner Shadow creates a shadow that falls inside the object's edge, useful for creating inset or recessed effects.\n\nBevel & Emboss gives a 3D raised or carved look. The key controls are Style (Inner Bevel for a raised 3D look), Technique (Smooth is standard; Chisel Hard gives crisp edges), Depth, Size, and the Shading section at the bottom. The Gloss Contour setting under Shading defines the highlight curve and is where a lot of the character comes from — try the Ring preset for a metallic highlight effect. Overlays (Color Overlay, Gradient Overlay, Pattern Overlay) replace the layer's visible color with a flat color, gradient, or pattern while preserving the shape. This is useful for applying consistent branding colors to icons or shapes without repainting them.",
        },
        {
          heading: "Scaling Effects and Saving Styles",
          body: "A common frustration: layer styles are defined in pixel values, so when you scale a layer down the styles look oversized — a 10px Drop Shadow on a large element looks enormous once the element is resized to thumbnail size. The fix is Layer > Layer Style > Scale Effects, which lets you scale all effects proportionally to the new layer size. Enter a percentage (e.g., 50%) and all the pixel values across all effects scale down accordingly. You can also right-click any layer with styles and choose Scale Effects from the context menu.\n\nTo save a combination of styles as a preset, click New Style in the Layer Style dialog and give it a name. It appears in the Styles panel (Window > Styles) for instant one-click application to any layer. The Styles panel ships with preset libraries — click the menu icon to load additional preset collections like Text Effects, Glass Buttons, or Web Styles. To copy all styles from one layer to another quickly: right-click the source layer, choose Copy Layer Style, then right-click the destination layer and choose Paste Layer Style.",
        },
      ],
    },
    {
      id: "3-7",
      title: "Layer Comps",
      duration: "11 min",
      description:
        "Save and switch between multiple layer configurations using Layer Comps for design variations.",
      keyTakeaways: [
        "Create and manage Layer Comps",
        "Use comps to present design variations",
        "Export comps as separate files",
        "Understand what Layer Comps capture",
      ],
      content: [
        {
          heading: "What Layer Comps Capture",
          body: "A Layer Comp is a snapshot of the Layers panel's current state saved inside the document. It records three aspects of each layer: visibility (whether the layer's eye is on or off), position (the layer's X/Y location in the canvas), and appearance (layer styles and blend mode). When you switch between Layer Comps, Photoshop restores the Layers panel to that saved state instantly — turning layers on and off, moving elements, and applying different styles.\n\nOpen the Layer Comps panel via Window > Layer Comps. To create a new comp, set up your Layers panel the way you want it (turn layers on/off, move elements into position), then click the New Layer Comp icon at the bottom of the panel (it looks like a page with a plus). Give it a descriptive name and check which aspects you want to capture: Visibility, Position, and/or Appearance. If you uncheck Position, switching to this comp won't reposition any layers, even if their positions were different when the comp was saved.",
        },
        {
          heading: "Managing and Switching Between Comps",
          body: "To switch between comps, click the empty box to the left of a comp's name in the Layer Comps panel — a small camera icon appears indicating the active comp. You can step forward and backward through comps using the navigation arrows at the bottom of the panel, which is great for quickly flipping through design options in front of a client.\n\nTo update a comp after making changes to the document, click the Update button (the circular arrow icon) at the bottom of the panel while the comp is active. Be careful: if you make a change and switch to another comp without updating, your change is reflected in the document but not saved to any comp — switching comps will restore the old state and you might lose the change. A good habit is to immediately update a comp or create a new one as soon as you make a change you want to preserve.",
        },
        {
          heading: "Exporting Comps and Real-World Uses",
          body: "You can export all your Layer Comps as separate image files via File > Export > Layer Comps to Files. A dialog lets you choose the destination folder, file type (JPEG, PNG, PSD, PDF), quality settings, and whether to include the ICC profile. Each comp becomes a separate file named after the comp's name. There's also File > Export > Layer Comps to PDF which compiles all comps into a single multi-page PDF — perfect for presenting design options to a client as a single attachment.\n\nLayer Comps are best used for scenarios like: A/B testing two color schemes for a website header (one comp per color scheme), presenting a logo in multiple color variants (full color, one-color, reversed), or showing an app screen in light mode vs. dark mode. They're not ideal for complex animation or dramatic layout changes, but for toggling elements and colors in a single design, they're a clean professional solution that keeps everything in one PSD.",
        },
      ],
    },
    {
      id: "3-8",
      title: "Compositing Workflows",
      duration: "18 min",
      description:
        "Build a professional compositing workflow from extraction to final integration.",
      keyTakeaways: [
        "Set up a compositing document structure",
        "Use Select Subject for fast extractions",
        "Refine complex edges like hair",
        "Integrate elements with consistent treatment",
      ],
      content: [
        {
          heading: "Document Setup and Organization",
          body: "Before placing a single pixel, invest two minutes in document structure. Start with a new PSD at your final output size — for print, typically 300 DPI at the output dimensions; for screen, 72–96 DPI at pixel dimensions. Create labeled layer groups (Ctrl/Cmd + G) from the start: Background, Subject, Midground Elements, Foreground, Color Grade, and Textures. Keeping layers in groups prevents the Layers panel from becoming an unmanageable stack of 40 unnamed layers an hour into the project.\n\nSet your color space via Edit > Color Settings. For web output, use sRGB; for print, use Adobe RGB 1998. If you're compositing elements from multiple sources, check that all placed images are in the same color space — a common cause of color mismatches in composites is mixing sRGB and Adobe RGB source files without converting them. When placing images via File > Place Embedded, Photoshop prompts you to handle color space mismatches; always choose Convert to match the document profile.",
        },
        {
          heading: "Subject Extraction: Modern Techniques",
          body: "For fast subject extraction on clean backgrounds, go to Select > Subject. Photoshop's AI analyzes the image and creates a selection around the primary subject automatically. It's remarkably accurate for portraits and recognizable objects. From there, with the selection active, go to Select > Select and Mask (Alt/Option + Ctrl/Cmd + R) to refine the edges.\n\nIn the Select and Mask workspace, the View menu lets you preview the selection against different backgrounds — On Black, On White, On Layers, or with a Marching Ants overlay. Use the Refine Edge Brush (R inside the workspace) and paint along hair or fur edges — Photoshop detects fine strands. Set the Output To dropdown to New Layer with Layer Mask and click OK. This outputs your subject on its own layer with a clean mask, ready for compositing. For difficult backgrounds, try Select > Color Range to select by color, then invert the selection for the subject.",
        },
        {
          heading: "Building the Composite Layer by Layer",
          body: "Place your background image first — this sets the lighting, mood, and color temperature that everything else must match. Convert it to a Smart Object immediately so you can transform it without quality loss. Then place your subject, extract it, and position it in the scene. At this early stage, don't worry about perfect color matching — just get the composition and scale right.\n\nFor each new element, ask three questions: Does the scale make sense? Does the lighting angle match? Does the color temperature match? Scale is checked visually by comparing element sizes against each other and the background perspective. Lighting angle is determined by looking at where highlights and shadows fall on the background — your subject's shadows need to fall in the same direction. Color temperature is adjusted with Color Balance or Photo Filter adjustment layers clipped to each element. This systematic approach prevents you from painting yourself into a corner where the composition is beautiful but physically impossible.",
        },
        {
          heading: "Integration: Making Elements Belong",
          body: "The final step is integration — making all the elements look like they exist in the same environment. Start with a global Color Grade group at the top of the Layers panel containing Curves and Color Balance layers that affect everything (no clipping masks). This unifies the palette. Then add subtle tweaks per element using clipped adjustment layers.\n\nA universal integration technique: sample a neutral color from the background (an area of sky or ambient light), create a new layer above your subject in Color mode, and fill it with that color at very low opacity (5–15%). This tints the subject with the environmental color, making it feel lit by the same light source as the background. Finally, add a slight Gaussian Blur (Filter > Blur > Gaussian Blur, 0.3–0.5px) to any element that needs to match a slightly out-of-focus background — elements that are in sharp focus look pasted-on if the background is even subtly blurry. Apply this as a Smart Filter so it's adjustable.",
        },
      ],
    },
    {
      id: "3-9",
      title: "Perspective Matching",
      duration: "16 min",
      description:
        "Match the perspective of added elements to your background scene for convincing composites.",
      keyTakeaways: [
        "Identify vanishing points in backgrounds",
        "Use the Vanishing Point filter",
        "Transform elements to match perspective",
        "Use Free Transform with perspective mode",
      ],
      content: [
        {
          heading: "Understanding Perspective and Vanishing Points",
          body: "Every photograph taken with a camera captures perspective — parallel lines in the real world converge toward vanishing points in the image. For a composite to look believable, every element you add must conform to the same perspective system as the background. The first step is identifying the vanishing points in your background by looking at strong horizontal lines like building edges, road lines, or table surfaces and tracing where they converge.\n\nFor a one-point perspective scene (looking straight down a hallway, for example), there's a single vanishing point near the center. For a two-point perspective scene (standing at a corner of a building), there are two vanishing points at the left and right edges of the image or beyond. When placing an element, its horizontal lines should converge toward those same vanishing points, and its vertical lines should remain truly vertical (unless you're dealing with three-point perspective, which includes convergence upward or downward as well).",
        },
        {
          heading: "Using the Vanishing Point Filter",
          body: "Photoshop's Vanishing Point filter (Filter > Vanishing Point) is a dedicated tool for working in perspective. After opening it, click four points to define a perspective grid matching your background's dominant plane — click the four corners of a surface like a floor, wall, or table. Photoshop snaps the grid to the correct perspective. If the grid turns blue, the perspective is valid; red or yellow means the angles are wrong and you need to adjust the corner points.\n\nOnce your plane is defined, you can paste elements (paste them first in the regular document so they're on the clipboard, then open Vanishing Point and press Ctrl/Cmd + V to paste inside). The pasted element appears at actual size — drag it onto the perspective plane and it automatically distorts to match the perspective. You can scale it within the plane and it scales in perspective. Click OK when done and the result appears on the active layer. Vanishing Point also lets you clone and heal within a perspective plane, maintaining correct perspective as you paint.",
        },
        {
          heading: "Free Transform Perspective and Distort",
          body: "For simpler perspective matching without the Vanishing Point filter, Free Transform's Distort and Perspective modes are your tools. Select the layer, press Ctrl/Cmd + T for Free Transform. Then right-click inside the transform bounding box to access modes: Perspective adds symmetric distortion (dragging a corner moves the opposite corner too to create converging lines), while Distort lets you move each corner handle independently for full control.\n\nA practical workflow: place a rectangular texture or sign element, then use Free Transform > Distort to drag each corner to match the corners of the surface it should sit on in the background. For a poster on a wall in perspective, click each corner of the poster and drag it to match the corresponding corner of where the wall surface is. Hold Ctrl/Cmd while dragging a corner handle in regular Free Transform mode to temporarily switch to Distort, allowing per-corner dragging without switching modes. For precise numeric control, the options bar at the top shows X, Y, W, H, and rotation values you can type into.",
        },
        {
          heading: "Checking Your Work with Grid Overlays",
          body: "After placing an element in perspective, a quick check is to enable View > Show > Grid (press Ctrl/Cmd + Apostrophe to toggle). The regular grid shows straight horizontal and vertical lines — use it to verify that vertical edges on your placed element are truly vertical. Another check: enable View > Extras and draw some Guides (drag from the rulers) along the major receding lines of your background. These guide lines will tell you immediately if your element's edges are parallel or converging to the wrong point.\n\nFor very critical perspective work, create a new blank layer, use the Pen tool (P) or Line tool to draw lines along the background's major edges extending them to where they converge, and mark the vanishing points. Keep this as a reference layer you can toggle on to check each element you add. When a composite looks subtly 'off' but you can't pinpoint why, wrong perspective is often the culprit — even a few degrees of misalignment reads as obviously fake to viewers even when they can't consciously identify the problem.",
        },
      ],
    },
    {
      id: "3-10",
      title: "Matching Light in Composites",
      duration: "17 min",
      description:
        "Analyze and replicate lighting conditions to make composited elements look naturally lit.",
      keyTakeaways: [
        "Identify light source direction and quality",
        "Create digital lighting with dodge and burn",
        "Add rim light and ambient occlusion",
        "Use Curves for targeted lighting adjustments",
      ],
      content: [
        {
          heading: "Analyzing the Light in Your Background",
          body: "Before you can match lighting, you need to read it accurately. Look at the background image and identify: the direction the light is coming from (which side of subjects are bright?), the quality of the light (is it hard-edged like direct sun, or soft and diffuse like an overcast day?), the color temperature (warm golden hour, cool daylight, tungsten indoor?), and whether there are secondary fill lights. Professional lighting analysis often involves squinting at the image to reduce detail and see pure value (light vs. dark) more clearly.\n\nCreate a color sample from the background by using the Eyedropper tool (I) to sample the brightest highlight area and the deepest shadow area in the background. Note the colors — they should inform the color of highlights and shadows you paint onto your subject. In a warm golden-hour image, the highlights will be orange-yellow and the shadows will be blue-violet (the complement, from ambient sky light). In studio lighting, shadows might be neutral gray or colored if fill lights are gelled.",
        },
        {
          heading: "Painting Light with Dodge, Burn, and Overlay Layers",
          body: "The most controllable way to add matching light to a composited subject is with dedicated empty layers in special modes. Create a new layer above your subject (clipped to it), fill it with 50% gray (Edit > Fill > Contents: 50% Gray), and set the blend mode to Overlay or Soft Light. Now paint with white on this layer using a large, soft brush at 10–20% opacity to build up highlights, and paint with black to deepen shadows. The 50% gray is invisible in these modes, so you're building up lighting paint that affects the subject below.\n\nStart with the broad form — a big, soft white brush stroke from the direction of the key light, covering the side of the subject facing the light. Then reduce your brush size and add smaller, brighter accents at the highest points. Finally, deepen shadows on the side facing away from the light and under any overhanging elements (chin, nose, brows). Step back and compare with the background's lighting — the goal is matching the ratio of light to shadow, not just adding light everywhere.",
        },
        {
          heading: "Rim Light and Edge Lighting",
          body: "In most outdoor composites with a bright sky, subjects have a rim light — a bright edge that separates them from the background, caused by the sky acting as a secondary light source. Without this rim light, composited subjects look flat and pasted-on. To add rim light, create a new Overlay or Screen layer clipped to your subject, use a very small, soft brush, and carefully paint a thin bright stroke along the edge of the subject that faces the sky.\n\nThe color of the rim light should match the color of the sky or secondary light source — a blue sky creates a cool blue-white rim, a sunset creates a warm orange rim. Sample the sky color with the Eyedropper and use it as your brush color. For rim lights to look natural they should be subtle (the layer at 40–60% opacity is often enough) and only on the edges directly facing the light source. An edge that faces away from the sky shouldn't have a rim light.",
        },
        {
          heading: "Ambient Occlusion: Where Elements Meet",
          body: "Ambient occlusion is the subtle darkening that occurs where two surfaces are close together, blocking ambient light from reaching the contact zone. In the real world, where a person's feet meet the ground, where a prop touches a table, or where an arm presses against a torso — these contact points are slightly darker than the surrounding area. Ignoring this is one of the most common reasons a composite looks like the subject is 'floating'.\n\nTo add contact shadows, create a new Multiply layer above the background (not clipped to the subject), use a very soft, dark brush at very low opacity (5–10%), and paint in the shadow beneath and around where the subject contacts the background. Work in tiny strokes, building up gradually rather than painting one dark stroke. The contact shadow is darkest right at the contact edge and quickly fades out over a distance of a few pixels to centimeters depending on scale. This single detail — a soft darkening where elements meet the ground or surface — dramatically increases the believability of a composite.",
        },
      ],
    },
    {
      id: "3-11",
      title: "Shadow Creation Techniques",
      duration: "15 min",
      description:
        "Create realistic cast shadows, contact shadows, and drop shadows for composited elements.",
      keyTakeaways: [
        "Create cast shadows from subject silhouettes",
        "Distort shadows to match light direction",
        "Use Motion Blur for realistic shadow softness",
        "Adjust shadow density based on light quality",
      ],
      content: [
        {
          heading: "Types of Shadows in a Composite",
          body: "There are three types of shadows you typically need in a composite: cast shadows (the shadow an object projects onto other surfaces), form shadows (the dark side of an object in a 3D scene, which we covered in the lighting lesson), and contact shadows (the very dark area immediately where the object touches a surface, from ambient occlusion). Cast shadows are the most visually prominent and most often missed in amateur compositing.\n\nTo analyze what a realistic cast shadow should look like, study the existing shadows in your background carefully. Note their angle (matching the light direction), how sharp or soft their edges are (sharp in direct sunlight, very soft on overcast days), how dark they are relative to the surrounding area (typically 40–70% darker), and whether they have any color cast (shadows in daylight are often slightly blue-violet from the sky).",
        },
        {
          heading: "Creating a Cast Shadow from a Silhouette",
          body: "The most reliable method for creating a cast shadow: Ctrl/Cmd-click the subject layer's thumbnail in the Layers panel to load its transparency as a selection. Create a new layer below the subject but above the background. Fill the selection with dark gray or black (Edit > Fill, or Alt/Option + Delete with a dark foreground color). Deselect (Ctrl/Cmd + D). Now go to Edit > Transform > Distort and drag the top center handle to skew the shadow horizontally in the direction the light is casting — for a sun at the upper right, the shadow falls to the lower left, so drag the top handle to the lower left.\n\nAfter distorting the shape, apply Gaussian Blur (Filter > Blur > Gaussian Blur) to soften the shadow edges. The amount of blur depends on the light quality — bright direct sun: 2–5px; soft afternoon light: 10–20px; overcast: 30–50px. Set the shadow layer to Multiply blend mode and reduce Opacity to 40–60%. The Multiply mode makes it interact naturally with whatever surface it falls on, including overlapping gradients and textures in the background.",
        },
        {
          heading: "Making Shadows Realistic with Perspective",
          body: "A flat distorted blur looks like a 2D shadow, not a 3D one. Real cast shadows fall with the correct perspective — they're sharper near the base of the object and softer further away. To simulate this, after creating and blurring your shadow, try this technique: duplicate the shadow layer. On the bottom duplicate, apply more blur (the far-distance shadow). On the top copy, apply less or no blur (the near-contact shadow). Mask the top copy so it only shows near the base, and the bottom shows in the distance. This creates a sharp-at-base, soft-at-distance falloff that matches real-world shadow physics.\n\nFor ground plane shadows (a person standing on a floor), use Motion Blur (Filter > Blur > Motion Blur) instead of or in addition to Gaussian Blur. Set the angle to match the shadow's cast direction and the distance to how far the shadow extends. Motion Blur creates a directional softness that mimics the penumbra of real cast shadows much more convincingly than radial Gaussian Blur alone.",
        },
        {
          heading: "Shadow Color and Blend Mode Variations",
          body: "Pure black shadows look wrong on colored surfaces. Real shadows inherit color from the ambient environment — outdoors, shadows are lit by the sky and have a blue-violet cast; indoors under warm tungsten, shadows have a cooler relative cast; underwater, shadows are greenish. To color your shadow correctly, fill it with a very dark version of the ambient color rather than pure black. For an outdoor scene with a blue sky, use a very dark blue-gray (like #1a1a2e) rather than #000000.\n\nAnother approach is to keep the shadow layer in Multiply mode (which inherits the color of the underlying surface automatically) but add a subtle color to it using a clipped Color Balance or Hue/Saturation adjustment. For outdoor scenes, push the shadow layer slightly toward Blues/Cyans in the midtones with Color Balance. For warmly lit interior scenes, you might push shadows slightly warmer. Keeping shadows in Multiply mode rather than Normal mode is always preferable — it integrates naturally with whatever surface it falls on, even if that surface has complex texture or color variation.",
        },
      ],
    },
    {
      id: "3-12",
      title: "Color Matching in Composites",
      duration: "16 min",
      description:
        "Match colors across composite elements using professional grading techniques.",
      keyTakeaways: [
        "Sample colors from the background for matching",
        "Use Match Color for automated color matching",
        "Apply Color Balance for environmental tinting",
        "Create unified palette with gradient maps",
      ],
      content: [
        {
          heading: "Diagnosing Color Mismatches",
          body: "Color mismatches are often more subtle than perspective errors, which is why they're harder to catch and fix. The most common issues: a subject photographed in cooler indoor light placed in a warm sunset background; a sky from a different season composited over a landscape from another (different blues, different cloud colors); or elements shot on different cameras with different color profiles.\n\nTo diagnose color mismatches accurately, use the Info panel (Window > Info) and the Eyedropper to sample color values from corresponding areas. Compare the shadow color on your subject versus the shadow color in the background — if the subject's shadows are neutral gray (R=G=B) but the background's shadows are blue-tinted, that's your problem. Similarly, compare highlight colors. The HSB (Hue/Saturation/Brightness) readout in the Info panel is useful here — matching the Hue values between corresponding tonal areas tells you what direction you need to push the color.",
        },
        {
          heading: "Automated Color Matching with Match Color",
          body: "Photoshop's Match Color function (Image > Adjustments > Match Color) attempts to transfer the color characteristics of one image onto another automatically. First, make sure both your background and subject are open in Photoshop. With the subject's layer selected, open Match Color. In the Source dropdown, choose your background document. In the Layer dropdown, choose the background layer. Adjust the Luminance and Color Intensity sliders as needed, and Fade the effect if it's too strong.\n\nMatch Color works best when the images have similar tonal characteristics — both outdoor daylight, for example. It struggles when the images are dramatically different in color temperature or tonality. When it works well, it gets you 70–80% of the way there automatically, leaving only fine-tuning with Curves and Color Balance. Note that Match Color permanently changes the pixels, so either apply it to a duplicate layer or use a Smart Object workflow. Always use it as a starting point rather than a final solution.",
        },
        {
          heading: "Manual Color Matching with Curves",
          body: "The most reliable method for color matching is manual Curves adjustments per channel. Create a Curves adjustment layer clipped to your subject. Switch to the Red channel and adjust to warm or cool the subject. Switch to Green channel and adjust for magenta/green shifts. Switch to Blue channel to adjust the warm/cool temperature (adding blue cools, reducing blue warms). Compare the curves adjustments to what the scene requires based on your earlier diagnosis.\n\nA precision workflow: place a neutral gray reference patch in your background image (if shooting a test for compositing, photograph an 18% gray card). Sample the gray card in both images with the Info panel. The RGB values for a neutral gray should be equal across channels. If your subject's gray card reads R:200 G:185 B:170 but the background's reads R:190 G:188 B:186, you need to pull the red down and push the blue up slightly on the subject to match. This mathematical approach removes guesswork from color matching.",
        },
        {
          heading: "Unifying with Gradient Maps and Global Grade",
          body: "Even after per-element color correction, a composite can still look like a collection of separate images because each element has its own color palette. The solution is a global color grade that unifies everything. A powerful technique: add a Gradient Map adjustment layer at the very top of your layer stack (above all elements). Set it to Soft Light at 15–30% opacity. The gradient map replaces the tonal range with colors — a two-color gradient from a dark warm color to a light cool color, for example, creates a cinematic split-tone look across the entire composite uniformly.\n\nAnother unification technique: a Color Lookup Table (LUT) via Layer > New Adjustment Layer > Color Lookup. Photoshop ships with many LUTs in the 3DLUT File dropdown — options like Futuristic Bleak, Crisp Warm, and Moonlight give consistent cinematic treatments to the entire composite at once. Reduce opacity to taste, typically 20–50%. Finally, a slight Hue/Saturation layer at the top with a small Saturation reduction (–10 to –15) often unifies a composite by preventing any one element's colors from standing out as oversaturated relative to the scene.",
        },
      ],
    },
    {
      id: "3-13",
      title: "Non-Destructive Editing Principles",
      duration: "12 min",
      description:
        "Build workflows that preserve original data and allow unlimited revisions at any stage.",
      keyTakeaways: [
        "Never merge or flatten during active projects",
        "Use Smart Objects for all transformations",
        "Apply all adjustments as adjustment layers",
        "Use adjustment layer masks for targeted edits",
      ],
      content: [
        {
          heading: "The Core Principle: Preserve the Original",
          body: "Non-destructive editing means that at any point in your workflow, you can go back and change any decision — a color adjustment, a crop, a blur — without degrading quality or losing previous work. The foundation rule is simple: never permanently alter original pixels. Every time you press Ctrl/Cmd + E to merge, or Image > Adjustments to apply a direct adjustment, or Filter > on a regular layer, you're making a permanent change that can only be undone within the same session's history.\n\nThe history panel (Window > History) gives you up to 1000 steps of undo by default (set in Preferences > Performance > History States), but history is erased when you close the document. Non-destructive workflows preserve your flexibility across sessions, across document saves, and across months of revisions. A client asking for a change three months later should be a minor adjustment, not a rebuild from scratch.",
        },
        {
          heading: "The Non-Destructive Toolkit",
          body: "Your non-destructive toolkit has four essential components. First, Smart Objects: convert everything to a Smart Object before transforming. Second, Adjustment Layers: all tonal and color corrections go on adjustment layers, never via Image > Adjustments (except on a duplicate or Smart Object layer). Third, Layer Masks: all masking and compositing is done with layer masks — never erase pixels with the Eraser tool. Fourth, Smart Filters: all filters applied to Smart Objects so they remain editable.\n\nAdditionally, use non-destructive alternatives to common destructive tools: instead of Crop with Delete Cropped Pixels checked, use Crop with it unchecked (cropped areas are hidden but preserved). Instead of Spot Healing directly on the image layer, use a blank layer above with the healing tool set to Sample All Layers. Instead of drawing directly on a photo, add a new blank layer on top. These habits become automatic with practice and will save you countless hours.",
        },
        {
          heading: "Documenting Your Stack and Saving Versions",
          body: "A non-destructive stack can grow complex — 30+ layers with clipping masks, adjustment layers, and effects. Name every layer clearly: not 'Layer 3' but 'Subject - sky color grade' or 'Background - gaussian blur'. Use color-coded labels (right-click a layer for the color label menu) to categorize layer types: red for original source layers, orange for adjustment layers, green for composite elements. This costs 10 seconds per layer and saves minutes of confusion later.\n\nSave iteratively with version numbers: File > Save As and append _v01, _v02 to your filename. Better yet, use File > Increment and Save (if you have an action set up, or manually save with a new version number) as milestones. This way you always have a fallback to a previous state even if the history is cleared. For critical compositing projects, save a 'working.psd' with all layers and a separate 'final.psd' that's flattened only for delivery. Never overwrite the layered working file with a flattened version.",
        },
      ],
    },
    {
      id: "3-14",
      title: "Groups & Layer Organization",
      duration: "10 min",
      description:
        "Organize complex projects with groups, labels, and smart naming conventions.",
      keyTakeaways: [
        "Use groups to organize related layers",
        "Apply color labels for visual categorization",
        "Understand group blend mode behavior",
        "Use layer search and filtering",
      ],
      content: [
        {
          heading: "Creating and Managing Groups",
          body: "Groups (also called layer folders) contain multiple layers under a single collapsible entry in the Layers panel. To create a group, select multiple layers by clicking the first and Shift-clicking the last (for contiguous layers) or Ctrl/Cmd-clicking individual layers, then press Ctrl/Cmd + G. Alternatively, drag layers onto the folder icon at the bottom of the Layers panel. Groups can be nested inside other groups for hierarchical organization — a 'Subject' group might contain sub-groups for 'Body', 'Head', and 'Hair'.\n\nTo move all layers in a group simultaneously, use the Move tool (V) and click anywhere in the group. To transform the whole group, select the group in the Layers panel and press Ctrl/Cmd + T. The free transform bounding box encompasses all visible content in the group. To enter a group and target individual layers, double-click the group (or click the arrow to expand it) and click the specific layer. Smart tip: hold Ctrl/Cmd and click on the canvas to auto-select the topmost layer or group under your cursor, without having to scroll through the Layers panel.",
        },
        {
          heading: "Group Blend Modes and Pass Through",
          body: "Groups have their own blend mode setting, and this creates an important behavior difference. By default, groups are set to Pass Through, which means the layers inside the group interact with ALL layers below them in the entire document, as if the group didn't exist. This is usually what you want.\n\nIf you change a group's blend mode to Normal (or any other mode), the group is treated as a merged entity — its layers interact with each other inside the group, and the merged result interacts with layers below the group. This is important when you have adjustment layers inside the group: in Pass Through, a Curves layer inside a group affects the entire document below it. In Normal mode, it only affects layers inside the group. Use Normal mode groups to self-contain a set of adjustments, and Pass Through groups when you want transparency in how group layers interact with the overall stack.",
        },
        {
          heading: "Labels, Search, and Filtering",
          body: "Color labels are a fast visual organization tool. Right-click any layer or group and choose a color from the label option at the top of the context menu. Use a consistent system: for example, Red = source images, Orange = masks/extractions, Yellow = adjustment layers, Green = composite elements, Blue = color grade layers, Purple = effect layers. At a glance, you can read your entire Layers panel structure by color.\n\nThe Layers panel has a search bar at the top that's often overlooked. The filter icon (the funnel) lets you filter the panel to show only layers by Kind (Pixel, Adjustment, Type, Shape, Smart Object), by Name, by Effect, by Mode, by Attribute (visible, locked, clipped), or by Color label. When working on a 50-layer document, filtering to show only Smart Object layers instantly isolates your source images. The filter turns the panel bar orange when active, reminding you that not all layers are shown. Click the filter icon again to clear the filter.",
        },
      ],
    },
    {
      id: "3-15",
      title: "Opacity vs. Fill",
      duration: "9 min",
      description:
        "Understand the critical difference between Opacity and Fill, especially with layer styles.",
      keyTakeaways: [
        "Know when Fill creates results Opacity cannot",
        "Use Fill with layer styles for glass effects",
        "Apply Fill creatively for text and overlays",
        "Understand how blend modes interact with each",
      ],
      content: [
        {
          heading: "The Difference Between Opacity and Fill",
          body: "Both Opacity and Fill make a layer transparent, and for layers without layer styles, they produce identical results. But they differ in one critical way: Opacity affects the entire layer, including layer styles. Fill affects only the original pixel or shape content, leaving any layer styles at full intensity.\n\nThe most dramatic demonstration: add a Drop Shadow layer style to a text layer. Now reduce Opacity to 0% — both the text and the shadow disappear. Now restore Opacity to 100% and reduce Fill to 0% instead — the text becomes invisible, but the Drop Shadow remains fully visible and opaque. This is how you create the 'glass text' effect: text with only the Drop Shadow, Bevel, and Stroke visible, with the solid fill of the text itself at 0%. The text is invisible, but its ghost — its border, shadow, and highlight — is there.",
        },
        {
          heading: "Creative Fill Applications",
          body: "The glass text technique is only the beginning. Any layer that carries layer styles can use Fill to make the base content transparent while preserving the style effects. This is used for: embossed patterns (shape filled with a pattern overlay style, Fill at 0% — only the Bevel remains, creating a subtle embossed texture), outlined shapes (Shape layer with a Stroke style, Fill at 0% — only the stroke outline is visible), glowing borders (shape with Outer Glow, Fill at 0%), and translucent UI elements (a frosted glass button effect).\n\nFill is also useful for reducing the intensity of blend mode layers. If you have a layer set to Overlay to boost contrast, and it's too strong even at 100% Opacity, reducing Fill will reduce the effect differently than reducing Opacity — for layers with styles, Fill leaves styles untouched. For regular pixel layers without styles, Opacity and Fill are fully interchangeable, so use whichever is most intuitive in your workflow.",
        },
        {
          heading: "Opacity Shortcuts and Workflow Tips",
          body: "With the Move tool (V) selected, you can change any selected layer's Opacity by pressing a number key: 1 for 10%, 2 for 20%, ..., 0 for 100%. Press two digits quickly for a specific value: press 3 then 5 quickly to set 35%. To adjust Fill with the keyboard, you need the brush tool NOT selected (it has to be a non-painting tool). Press Shift + a number key to set Fill: Shift+5 sets Fill to 50%, Shift+0 sets it to 100%.\n\nA practical compositing application: when adding a color wash or color cast to a subject using a solid Color mode layer, if the effect is too intense at any opacity, remember that it still affects the underlying layer completely in Color mode — reducing opacity tones it down. If you're on an Overlay layer for a lighting effect and it's too harsh, reduce opacity in small increments (use 1 and 2 to nudge in 10% steps) until the lighting looks integrated. These quick keyboard shortcuts speed up the iteration loop enormously.",
        },
      ],
    },
    {
      id: "3-16",
      title: "Advanced Blend If",
      duration: "14 min",
      description:
        "Master the Blend If sliders to blend layers based on their own or underlying tonal values.",
      keyTakeaways: [
        "Use Blend If to remove halos around composited elements",
        "Split the Blend If sliders for soft transitions",
        "Target specific tonal ranges for blending",
        "Combine Blend If with layer masks",
      ],
      content: [
        {
          heading: "Finding and Using Blend If",
          body: "Blend If is a pair of gradient sliders found at the bottom of the Layer Style dialog — accessed by double-clicking a layer's empty area (not the thumbnail, not the name, but the gray area to the right). The dialog opens to the Blending Options section by default, and at the bottom you'll see This Layer and Underlying Layer gradient bars with white and black triangular handles. These sliders control which pixels on the current layer are visible based on their tonal values.\n\nThe This Layer slider controls visibility based on the current layer's own pixel values. Drag the black (shadow) handle to the right: pixels on this layer that are darker than that value become invisible. Drag the white (highlight) handle to the left: pixels brighter than that value become invisible. This is non-destructive masking based purely on luminosity — no painting required. A common use: remove the white background from a texture or adjustment by dragging the white Blend If handle to the left until the highlights become transparent.",
        },
        {
          heading: "Splitting Sliders for Soft Transitions",
          body: "By default, the Blend If sliders create a hard cutoff — pixels are either fully visible or fully invisible. This creates a harsh, unnatural transition. To create a smooth gradual transition, hold Alt (Windows) or Option (Mac) while dragging a triangle handle — it splits into two halves. The two halves define the beginning and end of a gradual transition zone. Pixels between the two halves are partially visible, creating a smooth blend.\n\nFor example, to gently blend a light texture into highlights only: split the white handle on This Layer, dragging one half to the left so the transition zone spans a range of about 50 highlight values (say from 180 to 230). Pixels brighter than 230 are fully visible, pixels from 180–230 are partially visible (smooth fade), and pixels darker than 180 are invisible. This is far more natural than the hard cutoff. The wider the gap between the two split handles, the smoother and more gradual the transition.",
        },
        {
          heading: "Underlying Layer Slider: Advanced Compositing",
          body: "The Underlying Layer slider controls visibility based on the tonality of the layers below — not the current layer itself. Drag the black handle to the right on Underlying Layer: the current layer becomes transparent in areas where the underlying composite is dark. Drag the white handle left: the current layer becomes transparent in areas where the underlying composite is bright. This is powerful because it lets you blend a layer using the scene's existing light information.\n\nA classic application: you have a fire or smoke element photographed on black. You want to blend it into a scene. Set the fire layer to Screen mode (which removes black) but the smoke detail on the dark side still creates a grayish haze over your background. Use the Underlying Layer black handle (split for softness) — drag it to about 50–80 to make the layer transparent everywhere the background is dark, so the smoke only shows over midtones and highlights. This creates a more realistic integration where the smoke naturally fades into dark areas of the scene.",
        },
        {
          heading: "Combining Blend If with Other Techniques",
          body: "Blend If is non-destructive and stacks with layer masks — a layer can have both a painted layer mask AND Blend If settings active simultaneously. The layer mask determines the rough shape of the element, and Blend If refines the tonal blending within that shape. This combination is extremely powerful for complex elements like clouds, smoke, or translucent objects where both edge shape and internal transparency matter.\n\nOne advanced trick: create a texture layer (stone, concrete, fabric) and set up Blend If to only show the texture in the midtones of the underlying scene by splitting both the dark and light ends of the Underlying Layer bar inward. The texture now only appears where the underlying layer has midtone values, creating a subtle midtone texture effect that fades naturally in highlights and shadows — ideal for adding realism to illustrated or CGI backgrounds. Remember that Blend If settings are saved with the layer style, so you can copy/paste layer styles to apply the same blending settings to multiple layers.",
        },
      ],
    },
    {
      id: "3-17",
      title: "Knockout Layers",
      duration: "11 min",
      description:
        "Use Knockout layers to cut through layer groups and reveal content from beneath.",
      keyTakeaways: [
        "Understand Shallow and Deep Knockout",
        "Use Knockout for non-destructive cutouts",
        "Combine Knockout with Fill opacity",
        "Apply Knockout in realistic compositing scenarios",
      ],
      content: [
        {
          heading: "What is a Knockout Layer?",
          body: "Knockout is a blending option that makes a layer cut through layers below it within its group, revealing the layers beneath the group (or even further down the stack). It's found in the Layer Style dialog (double-click a layer's empty area), in the Advanced Blending section: a Knockout dropdown with three settings — None, Shallow, and Deep.\n\nNone is the default — the layer blends normally. Shallow causes the layer to knock out through the group it belongs to, revealing whatever is beneath the group. Deep causes the layer to knock out all the way through to the Background layer. The Knockout effect is determined by the layer's Fill opacity — at 100% Fill, there's no knockout effect visible. Reduce Fill to 0% and the layer becomes a full knockout, punching a hole through to the revealed layer below. This seems counterintuitive at first — you're making pixels invisible to reveal what's below.",
        },
        {
          heading: "Shallow vs. Deep Knockout",
          body: "The difference between Shallow and Deep only matters when the knockout layer is inside a group. Shallow knockout cuts through layers within the same group and stops at the group's bottom — it reveals whatever is directly beneath the group (which might be another group or layer in the main document). Deep knockout cuts through everything, all the way to the Background layer.\n\nA practical example: you have a group containing a textured background, a gradient, and a text layer. You want the text shape to reveal a photo that's beneath the group. Set the text layer to Knockout: Shallow and Fill: 0%. The text cuts through the gradient and textured background layers within the group and reveals the photo beneath the group. If you used Deep instead, it would cut all the way to the flat Background layer at the bottom of the stack, even if there are other layers below the group.",
        },
        {
          heading: "Practical Knockout Applications",
          body: "Knockout layers are excellent for non-destructive text cutouts — where text reveals a different image beneath rather than sitting on top. The advantage over clipping masks is that Knockout works from within a group, pushing visibility down rather than constraining visibility up. Create a group with your text layer set to Knockout: Shallow and Fill: 0%, and add a colored or textured background layer inside the same group. The text shape cuts through the group's content, revealing the image below the entire group.\n\nAnother use: creating a vignetted reveal. Place a large, soft dark circle/ellipse as a Knockout: Shallow layer inside a group, with Fill at 0%. Below the group, place a sharp version of an image; inside the group, place a blurred or differently processed version. The circular shape knocks out through the group's blurred version and reveals the sharp version beneath only in the circular area — a targeted sharpness vignette effect. This entire technique is non-destructive and adjustable at any time by repositioning or resizing the knockout shape.",
        },
      ],
    },
    {
      id: "3-18",
      title: "Linked Layers & Alignment",
      duration: "10 min",
      description:
        "Keep layers in sync using linking, alignment tools, and distribution commands.",
      keyTakeaways: [
        "Link layers to move them together",
        "Use Align and Distribute commands",
        "Auto-align layers for panoramas",
        "Use Smart Guides for precise positioning",
      ],
      content: [
        {
          heading: "Linking Layers for Synchronized Movement",
          body: "Linking layers creates a persistent connection — when you move one linked layer with the Move tool, all layers linked to it move simultaneously. This is different from selecting multiple layers (which is temporary): linking persists even after you click away. To link layers, select them in the Layers panel (Shift-click for a range, Ctrl/Cmd-click for individual layers), then click the Link icon at the bottom of the Layers panel (the chain icon). A small chain icon appears on each linked layer.\n\nTo unlink a single layer from a group, select it and click the Link icon again — it toggles off for that layer only. To unlink all at once, select them all and click the Link icon. Linking is ideal for composite elements that must always move together — a character and their shadow, a logo and its bounding box, a set of UI elements that form a single button. You can still transform linked layers individually (scale one without affecting others) while still moving them as a unit.",
        },
        {
          heading: "Align and Distribute Tools",
          body: "The Align and Distribute commands are in the Move tool's Options bar at the top of the screen (they appear as icon buttons when you have two or more layers selected or a group selected). You can align layers to each other or to the canvas: Align Left, Center, Right, Top, Middle, Bottom edges. Select the layers you want to align, then click the appropriate icon.\n\nTo align to the canvas (not to each other), go to Select > All (Ctrl/Cmd + A) first to select the entire canvas, then use the alignment buttons. The alignment will now position layers relative to the full canvas dimensions. Distribute spacing commands (Distribute Horizontally, Distribute Vertically) make the spacing between selected layers equal — essential for creating clean grids or evenly spaced button rows. Make sure the layer you want to be an anchor (at one end) is not included in your distribution selection, or include all elements and let Photoshop distribute evenly within the spread.",
        },
        {
          heading: "Smart Guides and Precise Positioning",
          body: "Smart Guides appear automatically when you move layers, showing alignment hints to other layers' edges, centers, and spacing. Enable them via View > Show > Smart Guides (or Ctrl/Cmd + U for the extras toggle). When dragging a layer, pink/magenta guide lines appear whenever the layer aligns with another layer's edge or center. A tooltip shows the distance between elements. This makes precise positioning intuitive without needing to measure manually.\n\nFor numeric precision, select a layer and look at the X and Y position fields in the Move tool's Options bar. Type specific pixel values to position a layer exactly. The coordinate system starts at the top-left of the canvas (0,0). Use the reference point icon (the 9-dot grid to the left of the X/Y fields in the Options bar) to choose whether the coordinates reference the layer's top-left corner, center, or another anchor point. For pixel-perfect UI work, enable View > Snap To > Layers and View > Snap To > Document Bounds so dragged layers snap to each other and the canvas edges automatically.",
        },
      ],
    },
    {
      id: "3-19",
      title: "Filter Masks on Smart Filters",
      duration: "12 min",
      description:
        "Control where Smart Filters apply using filter masks for selective non-destructive filtering.",
      keyTakeaways: [
        "Paint on filter masks to limit filter effects",
        "Apply different filter strengths in different areas",
        "Use gradient filter masks for natural fall-offs",
        "Stack multiple Smart Filters with individual masks",
      ],
      content: [
        {
          heading: "How Smart Filter Masks Work",
          body: "When you apply any filter to a Smart Object layer, a Smart Filter mask thumbnail automatically appears to the left of the filter name in the Layers panel. This is a white mask by default, meaning the filter applies everywhere. Painting black on this mask hides the filter in those areas; painting gray creates partial filter application. This gives you non-destructive, localizable filtering — the filter itself is still applied globally and still editable, but its visible effect is controlled by the mask.\n\nTo access the filter mask, click the white mask thumbnail next to the filter's chain icon in the Layers panel. The mask thumbnail gets a highlight border when active. Note that a Smart Object layer has two types of masks: the layer mask (the first white rectangle directly attached to the layer thumbnail at the layer row) and the Smart Filter mask (the white rectangle in the Smart Filters section below the layer). The layer mask hides pixels; the Smart Filter mask hides filter effects but the pixels remain visible.",
        },
        {
          heading: "Selective Sharpening with Filter Masks",
          body: "The classic application is selective sharpening. Apply Smart Sharpen or Unsharp Mask (Filter > Sharpen > Smart Sharpen or Unsharp Mask) to a Smart Object. The filter sharpens the entire image — including skin, which should generally not be sharpened aggressively. Click the Smart Filter mask thumbnail. Use a large soft black brush at 100% opacity and paint over skin areas — the sharpening is hidden there. Paint with white to restore sharpening on eyes, hair, fabric textures, and background details.\n\nFor a portrait, a typical selective sharpening mask: the face and skin is painted black (no sharpening), eyes are left white (full sharpening), hair is white, background sharp areas are white, and soft-focus backgrounds are gray or black. This produces a result where the portrait feels sharp and detailed but skin remains smooth — the result looks natural because it mimics how camera lenses work (eyes in sharpest focus, surrounding areas slightly softer).",
        },
        {
          heading: "Gradient Filter Masks and Multiple Filters",
          body: "You can apply a gradient to a Smart Filter mask exactly as with layer masks — click the Smart Filter mask, grab the Gradient tool (G), and drag a gradient across it. This creates a natural falloff of the filter effect. Apply Gaussian Blur as a Smart Filter, then paint a bottom-to-top gradient on the filter mask so the blur is strongest at the bottom and fades to zero at the top — a tilt-shift style miniaturizing effect where foreground and distance are blurred but a horizontal band in the middle is sharp.\n\nWhen multiple Smart Filters are stacked on the same layer (which is common — you might apply Noise Reduction, then Sharpening, then Camera Raw Filter), each filter has its own individual control in the Layers panel. You can reorder them by dragging — just as with layers, the order of filters matters since they're applied top-to-bottom. Double-click any Smart Filter's name to reopen its dialog and change settings at any time. The combination of stackable, independently maskable, and fully editable Smart Filters makes the Smart Object workflow the professional standard for retouching and compositing.",
        },
        {
          heading: "Camera Raw Filter as a Smart Filter",
          body: "One of the most powerful Smart Filter applications is the Camera Raw Filter (Filter > Camera Raw Filter). When applied to a Smart Object, it opens the full Camera Raw interface — including all the sliders from the Develop module: Exposure, Contrast, Highlights, Shadows, White Balance, HSL color controls, Clarity, Dehaze, Noise Reduction, Lens Correction, and even Curves. Every single adjustment is stored as an editable Smart Filter.\n\nDouble-click the Camera Raw Filter smart filter name at any time to reopen the full Camera Raw dialog and adjust any setting. This effectively turns any layer in Photoshop into an editable Camera Raw develop node. The filter mask lets you apply these Camera Raw adjustments selectively — for example, apply a strong exposure reduction using Camera Raw Filter, then mask it to apply only to the sky area, functioning as a highly flexible graduated filter effect. Combine Camera Raw Filter with color grading curves and a global sharpening filter, and you have a full non-destructive development pipeline for any layer in your composite.",
        },
      ],
    },
    {
      id: "3-20",
      title: "Final Compositing Project",
      duration: "20 min",
      description:
        "Apply every skill from this path to create a complete professional composite from scratch.",
      keyTakeaways: [
        "Plan and execute a multi-element composite",
        "Apply lighting, color, and shadow integration",
        "Build a non-destructive layer architecture",
        "Deliver a polished final composite",
      ],
      content: [
        {
          heading: "Planning Your Composite",
          body: "Before opening Photoshop, spend time planning on paper or with rough sketches. Decide on your concept, the background scene, the primary subject, and any secondary elements. Identify the light source and direction in your chosen background — this single decision drives every other technical choice. Gather your source images, checking that they're all compatible in terms of resolution (no placing a 1MP phone snapshot into a 36MP professional background), color space, and general lighting plausibility.\n\nCreate a reference board of the composite you want to achieve and reference images showing similar lighting, mood, and color. Professional compositors never start without references. Set up your Photoshop document at the final output resolution and color space before placing anything. Create your group structure: Background, Primary Subject, Secondary Elements, Ground Shadows, Color Grade, Final Adjustments. Name the groups and color-label them now, before the stack gets complex.",
        },
        {
          heading: "Building the Foundation: Background and Subject",
          body: "Place your background as a Smart Object via File > Place Embedded. If it needs any straightening or cropping, use Free Transform (Ctrl/Cmd + T) now. Apply Camera Raw Filter (Filter > Camera Raw Filter) as a Smart Filter to dial in the background's tone and color, creating the lighting reference that everything else will match.\n\nExtract your primary subject using Select > Subject followed by Select > Select and Mask for refinement. Output to New Layer with Layer Mask. Immediately convert the extracted subject to a Smart Object — right-click the layer and choose Convert to Smart Object. Place it in the scene, scale it to the correct size relative to the background's perspective. At this stage, focus only on size and rough position — don't try to perfect the color match or lighting yet. Establish the composition first.",
        },
        {
          heading: "Integration: Light, Shadow, and Color",
          body: "With the composition established, work through the integration checklist systematically. First, create cast shadows: Ctrl/Cmd-click the subject thumbnail to load the selection, create a new layer below the subject (above the background), fill with dark color, deselect, transform to match light direction, apply Motion Blur, set to Multiply mode, adjust opacity. Add a subtle contact shadow at the base.\n\nNext, add lighting to the subject: create a 50% gray Overlay layer clipped to the subject. Paint highlights on the light-facing side using a large soft white brush, and deepen shadows on the dark side with black. Add rim light along the edge facing the sky. Then address color: create a Curves adjustment layer clipped to the subject. Match the color temperature per-channel. Add a Color Balance adjustment layer (clipped) to push the shadows and highlights toward the scene's ambient colors. Finally, add a Color mode layer (clipped) and paint with a very dark, desaturated version of the background's ambient light color at 5–10% opacity to give the subject the environmental color tint.",
        },
        {
          heading: "Final Grade and Delivery",
          body: "With all elements integrated, add the global unifying grade at the top of the stack (outside all groups, so it affects everything). A minimal but effective global grade: a Curves adjustment layer for final contrast and tonal balance; a Selective Color or Color Balance for final hue refinement; a Hue/Saturation layer with Saturation reduced by –5 to –10 to prevent oversaturation; and a subtle Noise layer (new layer, Edit > Fill > 50% Gray, Filter > Noise > Add Noise, set to Overlay at 3–8% opacity) to unify the grain across all elements.\n\nFor delivery, check your composite at 100% zoom (Ctrl/Cmd + 1) and look critically at all edges, shadows, and tonal transitions. Common issues to address: halos around extracted subjects (use Blend If or refine the layer mask), floating elements with no contact shadow, color mismatches in shadows. Once satisfied, save your layered PSD as the master file. For delivery, use File > Export > Export As (or Save for Web for screen output) to produce the final JPEG, PNG, or TIFF. If delivering for print, go to Edit > Convert to Profile and convert to the printer's required color profile (often CMYK with a specific paper profile) before exporting.",
        },
        {
          heading: "Reviewing and Critiquing Your Work",
          body: "The professional habit that separates good compositors from great ones is self-critique before delivery. Step away from the composite for at least 30 minutes, then look at it fresh. Better yet, view it on a different screen or print a proof — issues that are invisible on your editing monitor become obvious on paper or a different display. Ask yourself: does the subject look like they belong in this environment, or do they look pasted in? Do the shadows make physical sense? Is the color palette unified?\n\nSpecifically check: zoom in to 100% on all mask edges for halos, fringing, or rough selections. Toggle your color grade layers off and on — is the difference too dramatic or too subtle? View the composite in black and white (add a temporary Hue/Saturation adjustment layer with Saturation at –100) to check that the tonal values of the subject match the background in value — if the subject is much lighter or darker in grayscale than the background, it will look wrong in color too. Make notes, return to the layers, fix the issues, and repeat the review cycle. This iterative self-critique is how professional composites are built.",
        },
      ],
    },
  ],
};
