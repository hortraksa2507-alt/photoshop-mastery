import { PathData } from "./types";

export const path2: PathData = {
  id: 2,
  title: "Selection & Masking Mastery",
  level: "Beginner",
  levelColor: "var(--level-beginner)",
  description:
    "Learn every selection technique from basic marquee to complex hair masking with Select & Mask.",
  lessons: [
    {
      id: "2-1",
      title: "Selection Fundamentals",
      duration: "10 min",
      description:
        "Understand what selections are, why they matter, and the core concepts that underpin every selection tool in Photoshop.",
      keyTakeaways: [
        "Selections define the area Photoshop will affect with any edit",
        "Marching ants indicate the active selection boundary",
        "Selections can be saved, loaded, and modified at any time",
        "Feathering softens the edge of a selection for natural blending",
      ],
      content: [
        {
          heading: "What Is a Selection?",
          body: "A selection is a defined region of your image that tells Photoshop: 'only work inside here.' When you paint, apply a filter, adjust color, or delete pixels, the effect stays within the boundaries of your selection. Think of it like using masking tape before you paint a wall — everything outside the tape stays clean.\n\nIn Photoshop, an active selection is shown by a moving dashed border called 'marching ants.' Wherever you see those animated dashes, that is the edge of your current selection. If no selection is active, every edit you make affects the entire layer.",
        },
        {
          heading: "Why Selections Are the Foundation of Everything",
          body: "Imagine you have a photo of a red car and you want to change just the car's color to blue — not the sky, not the road, just the car. Without a selection, any color adjustment would affect the entire image. With a precise selection around the car, you can shift its hue while leaving everything else untouched. Selections give you surgical control.\n\nSelections are also the backbone of compositing (combining images), retouching (fixing specific areas), and masking (non-destructively hiding parts of a layer). Every advanced technique in Photoshop ultimately relies on knowing how to select the right area accurately.",
        },
        {
          heading: "Core Concepts You Must Know",
          body: "Feathering is the process of softening the edge of a selection. A hard-edged selection (feather = 0px) creates a sharp, crisp cutout. A feathered selection (e.g., feather = 10px) creates a gradual fade at the edge, which looks natural when you paste a subject onto a new background. You can set feathering before you draw a selection in the Options Bar at the top, or apply it afterward via Select > Modify > Feather.\n\nAnti-aliasing is a subtler setting — it smooths the very edge pixels of a curved or diagonal selection so it doesn't look jagged. Always keep anti-aliasing turned on unless you have a specific reason not to. You'll find this checkbox in the Options Bar for most selection tools.\n\nSelection mode buttons in the Options Bar let you control how a new selection interacts with an existing one. New Selection (the default) replaces any existing selection. Add to Selection (hold Shift while drawing) grows the selection. Subtract from Selection (hold Alt/Option) removes an area. Intersect with Selection (hold Shift+Alt/Option) keeps only the overlapping region.",
        },
        {
          heading: "Pro Tips for Beginners",
          body: "Press Ctrl+D (Windows) or Cmd+D (Mac) to deselect everything at any time. This is one of the most-used shortcuts in Photoshop — get it into muscle memory now.\n\nTo reselect the last selection you had active, press Ctrl+Shift+D (Cmd+Shift+D on Mac). Photoshop remembers your last selection even after you deselect it, which is a huge time-saver.\n\nYou can hide the marching ants without losing the selection by pressing Ctrl+H (Cmd+H). The selection is still active — you just can't see the border. This is useful when the moving dashes are distracting you while painting or retouching.",
        },
      ],
    },
    {
      id: "2-2",
      title: "Marquee Tools Deep Dive",
      duration: "12 min",
      description:
        "Master the Rectangular and Elliptical Marquee tools, including fixed aspect ratios, fixed sizes, and adding or subtracting from selections.",
      keyTakeaways: [
        "Hold Shift while drawing to constrain to a perfect square or circle",
        "Hold Alt/Option to draw from the center outward",
        "Use Fixed Size mode to select an exact pixel dimension every time",
        "Combine marquee shapes with Add/Subtract modes for complex geometric selections",
      ],
      content: [
        {
          heading: "Meet the Marquee Tools",
          body: "The Marquee tools are Photoshop's most straightforward selection tools. Press M on your keyboard to activate the Rectangular Marquee. Press Shift+M to toggle between the Rectangular and Elliptical Marquee. You'll also find the Single Row and Single Column Marquee options in the toolbar flyout — these select a single horizontal or vertical line of pixels, which is occasionally useful for fixing scan lines or creating pixel-art borders.\n\nTo draw a rectangular selection, simply click and drag across your canvas. Release the mouse button and the marching ants appear. To reposition the selection while you're still drawing it, hold the Spacebar, move your mouse, then release the Spacebar to continue resizing.",
        },
        {
          heading: "Constraining and Centering",
          body: "Hold Shift while dragging a Rectangular Marquee to constrain it to a perfect square. Hold Shift while dragging an Elliptical Marquee to constrain it to a perfect circle. This single shortcut saves enormous time when you need to select circular objects like coins, wheels, or portrait crops.\n\nHold Alt (Windows) or Option (Mac) while dragging to draw the selection outward from the center rather than from a corner. Combine both modifiers — Shift+Alt/Option — to draw a perfectly constrained square or circle from its center point. This is invaluable when you know where the center of an object is and want to grow the selection equally in all directions.",
        },
        {
          heading: "Style Modes: Normal, Fixed Ratio, Fixed Size",
          body: "In the Options Bar at the top of the screen, you'll find a Style dropdown with three options. Normal is the default — you draw freely in any proportion. Fixed Ratio lets you type a Width and Height ratio (for example, W: 16, H: 9) so every selection you draw automatically locks to that aspect ratio. This is perfect for selecting areas to crop to a specific video or social media format.\n\nFixed Size is the most precise mode: you type an exact pixel Width and Height (for example, W: 300 px, H: 200 px), and a single click places a selection of exactly that size. Use this when you need to cut out tiles, thumbnails, or any repeating element at a consistent dimension. After clicking, you can still click and drag to reposition the selection before releasing.",
        },
        {
          heading: "Combining Selections for Complex Shapes",
          body: "No single marquee drag is limited to one rectangle or ellipse. Use Add to Selection mode (click the second icon in the Options Bar, or hold Shift) to draw additional shapes that merge into your existing selection. For example, draw a rectangle, then Shift-draw an overlapping rectangle to create an L-shape or T-shape.\n\nUse Subtract from Selection mode (third icon, or hold Alt/Option) to remove areas. Draw a large rectangle, then Alt-drag a smaller rectangle inside it to create a frame-shaped selection with a hollow center. Mastering these combinations means you can build surprisingly complex geometric selections without needing any advanced tools.",
        },
        {
          heading: "Pro Tips",
          body: "After drawing a selection, you can move it by clicking inside the selected area and dragging — as long as you're still on a selection tool (not the Move tool). This moves the selection boundary without moving any pixels.\n\nUse Select > Transform Selection to scale, rotate, or warp the selection boundary itself. This is different from Free Transform (Ctrl+T / Cmd+T), which moves the actual pixels. Transform Selection only reshapes the marching ants, leaving your layer untouched.",
        },
      ],
    },
    {
      id: "2-3",
      title: "Lasso Tools Mastery",
      duration: "14 min",
      description:
        "Use the Lasso, Polygonal Lasso, and Magnetic Lasso tools to make freehand and edge-snapping selections around irregular shapes.",
      keyTakeaways: [
        "The Lasso draws freehand — good for rough, organic selections",
        "The Polygonal Lasso connects straight-line segments — perfect for angular objects",
        "The Magnetic Lasso automatically snaps to edges based on contrast",
        "Press Delete/Backspace while using the Polygonal or Magnetic Lasso to undo the last anchor point",
      ],
      content: [
        {
          heading: "Three Lassos, Three Use Cases",
          body: "Press L to activate the Lasso tool group. Shift+L cycles through all three: the standard Lasso, the Polygonal Lasso, and the Magnetic Lasso. Knowing which one to reach for in a given situation is the key skill this lesson builds.\n\nThe standard Lasso is purely freehand — you click and drag, and Photoshop records your mouse path exactly. When you release the mouse, the selection closes automatically. It's fast but imprecise, making it best suited for quick rough selections that you'll refine later, or for adding or subtracting irregular blobs from an existing selection.",
        },
        {
          heading: "The Polygonal Lasso: Your Best Friend for Straight Edges",
          body: "The Polygonal Lasso works by placing anchor points. Click once to set a point, move your mouse, click again to set the next point, and Photoshop draws a straight line between them. Continue clicking around your subject until you return to the starting point — when your cursor shows a small circle, click to close the selection.\n\nThis tool excels on architectural photography (buildings, windows, doors), product photos with flat sides (boxes, books, electronics), and any scene with straight or gently curved lines. Imagine selecting a window from a building facade — the Polygonal Lasso lets you click precisely at each corner, creating perfectly straight edges with no wobbly lines.\n\nIf you make a mistake, press Delete or Backspace to remove the most recent anchor point. Keep pressing to undo multiple points. Press Escape to cancel the selection entirely.",
        },
        {
          heading: "The Magnetic Lasso: Edge-Snapping Selection",
          body: "The Magnetic Lasso is like a smart freehand tool — it automatically hugs the edge of your subject as you move the cursor near it, based on color and contrast differences between the subject and background. Click once to start, then slowly trace around the edge of your subject without clicking again. Photoshop places anchor points automatically wherever it detects a strong edge.\n\nIn the Options Bar, you have three important settings. Width determines how far from your cursor Photoshop looks for edges (10 px is a good default; reduce it to 2–5 px on subjects with intricate edges). Contrast sets how strong a color difference must be before Photoshop considers it an edge (10% works for high-contrast scenes; increase to 20–30% for busy backgrounds). Frequency controls how often Photoshop places automatic anchor points (higher numbers = more points and more precision).\n\nIf the Magnetic Lasso hugs the wrong edge, click manually to force an anchor point at the correct location. If it goes wildly off course, press Delete to remove the last anchor and retrace that section.",
        },
        {
          heading: "Switching Between Lasso Tools Mid-Selection",
          body: "A powerful but underused technique is switching between lasso types during a single selection. While using the Polygonal Lasso, hold Alt (Windows) or Option (Mac) and click-drag to temporarily switch to the freehand Lasso for a curved section. Release the modifier to return to Polygonal mode. This lets you handle mixed subjects — for example, a car with straight door panels but a curved hood — in a single pass.\n\nSimilarly, while using the Magnetic Lasso, hold Alt/Option and click to place manual anchor points as if using the Polygonal Lasso, giving you control when the automatic snapping fails. Mastering these mid-selection switches separates confident Photoshop users from beginners.",
        },
        {
          heading: "Refining Lasso Selections",
          body: "Lasso selections are rarely perfect on the first pass — and that's fine. After closing a selection, use Add to Selection (Shift+drag) to lasso in any missed areas around the edges. Use Subtract from Selection (Alt/Option+drag) to lasso out any background that crept in. Work in small strokes around the problem areas rather than redrawing the whole selection.\n\nFor organic subjects like people, animals, or plants, a Lasso selection is usually just your starting point. After getting a reasonable outline, open Select > Select and Mask to refine the edge using dedicated edge-detection tools — which you'll learn in detail in Lesson 2-5.",
        },
      ],
    },
    {
      id: "2-4",
      title: "Magic Wand & Quick Selection",
      duration: "12 min",
      description:
        "Leverage color-based and AI-driven selection tools to select regions quickly with minimal manual effort.",
      keyTakeaways: [
        "Magic Wand selects pixels of similar color in one click",
        "Tolerance controls how wide a color range is included — higher = more pixels",
        "Quick Selection paints a selection that expands to follow edges automatically",
        "Use Refine Edge after Quick Selection for clean, professional cutouts",
      ],
      content: [
        {
          heading: "Magic Wand: Click to Select by Color",
          body: "Press W to activate the Magic Wand tool (or Shift+W to cycle to Quick Selection). The Magic Wand selects all pixels within a similar color range to wherever you click. Click on the blue sky in a photo, and Photoshop instantly selects all pixels that are close to that shade of blue. It is at its best on images with large, uniform color areas — a solid-color background, a clear sky, or a product on a white background.\n\nThe most important setting is Tolerance, found in the Options Bar. Tolerance ranges from 0 to 255. A low value (e.g., 10) selects only pixels very close in color to where you clicked — a narrow range. A high value (e.g., 80) selects a much broader range of similar colors. Start at 32 (the default) and adjust based on your results. If your selection misses areas it should include, increase Tolerance. If it grabs too much, lower it.",
        },
        {
          heading: "Contiguous vs. All Layers",
          body: "The Contiguous checkbox in the Options Bar is critical. When checked (the default), the Magic Wand only selects pixels of similar color that are physically connected to where you clicked — it cannot jump across intervening pixels of a different color. This is usually what you want: clicking the sky selects the sky without accidentally also selecting a blue shirt worn by someone in the foreground.\n\nUncheck Contiguous to select all pixels of similar color anywhere in the image, even if they're isolated from each other. This is useful when you want to select all instances of a specific color in one click — for example, selecting every white pixel in a flat logo to change the color.\n\nThe Sample All Layers checkbox tells the Magic Wand to consider colors from every visible layer when determining the selection, rather than just the currently active layer. Keep this unchecked unless you specifically need it, as it can produce unexpected results.",
        },
        {
          heading: "Quick Selection: Paint Your Selection",
          body: "The Quick Selection tool (W or Shift+W) works differently from the Magic Wand. Instead of clicking a single point, you paint over the area you want to select. As you drag, Photoshop uses edge detection to automatically expand the selection outward, finding natural boundaries between your subject and the background. It is significantly more intuitive and powerful than the Magic Wand for complex subjects.\n\nUse a larger brush (press ] to increase, [ to decrease) for big open areas in the middle of your subject, and switch to a smaller brush for tight edges. If the selection bleeds into the background, hold Alt/Option to switch to Subtract mode and paint over the mistake to remove it. The plus (+) and minus (–) icons in the Options Bar do the same thing — Shift+click adds to selection, Alt/Option+click subtracts.",
        },
        {
          heading: "Pro Tips and When to Use Each Tool",
          body: "Use the Magic Wand when your subject sits against a uniform background (white studio backdrop, clear sky, solid-color wall). Click the background, then invert the selection with Ctrl+Shift+I (Cmd+Shift+I) to select the subject instead. This 'select the background, then invert' approach is often faster than trying to directly select a complex subject.\n\nUse Quick Selection for most real-world subjects — people, products, animals — where the background has some variation. It handles these much better than the Magic Wand. After making your Quick Selection, always follow up with Select > Select and Mask to clean the edges. The Object Selection tool (also in the W group, press Shift+W to cycle) goes even further — draw a loose rectangle around your subject and Photoshop's AI identifies and selects it automatically. For portraits especially, try Object Selection first as it often produces excellent results in under two seconds.",
        },
      ],
    },
    {
      id: "2-5",
      title: "Select & Mask Workspace",
      duration: "18 min",
      description:
        "Explore Photoshop's dedicated Select & Mask workspace to refine edges, handle hair and fur, and output clean masks.",
      keyTakeaways: [
        "Access Select & Mask via Select > Select and Mask or press Alt+Ctrl+R",
        "Smart Radius automatically adjusts the detection zone at complex edges",
        "The Refine Edge Brush recovers fine hair, fur, and wispy details",
        "Output to Layer Mask for non-destructive results you can adjust later",
      ],
      content: [
        {
          heading: "What Is Select & Mask and Why You Need It",
          body: "Select & Mask is a dedicated workspace within Photoshop designed entirely for one purpose: refining the edge of a selection so it looks professional when cut out. Basic selection tools give you a reasonable starting shape, but the edges are often slightly too hard, slightly off, or missing fine details like hair strands or feathers. Select & Mask is where you fix all of that.\n\nTo open it, go to Select > Select and Mask, or press Alt+Ctrl+R (Alt+Cmd+R on Mac). You can also click the 'Select and Mask' button that appears in the Options Bar whenever a selection tool is active. The workspace replaces your normal canvas view with a special environment showing your subject against a customizable background.",
        },
        {
          heading: "Navigating the Interface",
          body: "On the left side of the Select & Mask workspace is a small toolbar. The top tool is the Quick Selection brush — you can continue painting your selection here. Below it is the Refine Edge Brush, which is the most important tool in the entire workspace. Below that are the standard Lasso and Polygonal Lasso for manual adjustments, and a Hand tool for panning.\n\nOn the right side is the Properties panel. At the top, change the View Mode to see your selection against different backgrounds: Onion Skin (semi-transparent), Marching Ants, Overlay (red tint over unselected areas), Black, White, Black and White (shows the mask itself), and On Layers (shows transparency). Use White or Black when checking edge quality, and On Layers when checking how the cutout will look on a new background. Press F to cycle through view modes quickly.",
        },
        {
          heading: "Edge Detection: Smart Radius and the Refine Edge Brush",
          body: "In the Properties panel, find the Edge Detection section. The Radius slider controls how wide a zone around your selection edge Photoshop analyzes for fine details. For a subject with a hard, clean edge (like a car), keep this low (1–3 px). For soft, complex edges (hair, fur, feathers), increase the radius to 20–50 px and enable Smart Radius. Smart Radius automatically makes the detection zone wider where the edge is complex and narrower where it is clean — you get the best of both worlds.\n\nThe Refine Edge Brush (press R, or click the second icon in the left toolbar) is the magic wand of this workspace. Paint it over areas of your image where fine details are being lost — typically around hair, fur, or tree leaves against the sky. As you paint, Photoshop re-analyzes that area at a pixel level, recovering wispy strands and transparent areas that would have been destroyed by a standard selection. Use a large brush and paint loosely over the hair area — you don't need to be precise. Let Photoshop do the work.",
        },
        {
          heading: "Global Refinements and Output Settings",
          body: "The Global Refinements section contains four sliders. Smooth reduces jagged or bumpy edges — use a value of 2–5 for subtle smoothing without losing shape. Feather adds a soft blur to the edge, useful for blending the subject into a new background (0.5–1.5 px is usually sufficient; more makes the edge look blurry). Contrast sharpens soft or hazy edges, effectively the opposite of Feather. Shift Edge moves the selection boundary inward (negative values) or outward (positive values). Moving it inward by 1–3 px often removes a faint halo of background color from around the subject's edge.\n\nAt the bottom of the Properties panel is the Output Settings section. The most important decision here is what to output to. Choose 'Layer Mask' to apply the refined selection as a mask on your current layer — this is non-destructive, meaning you can go back and adjust the mask at any time. Choose 'New Layer with Layer Mask' to duplicate the layer and apply the mask there, preserving the original. Avoid 'Selection' or 'New Layer' if you want to maintain flexibility. Check 'Decontaminate Colors' when you see color fringing (background color bleeding into edge pixels) — this replaces edge pixels with colors sampled from the interior of the subject.",
        },
        {
          heading: "A Complete Hair Cutout Workflow",
          body: "Here is a step-by-step workflow for cutting out a person with detailed hair. First, use Quick Selection to paint over the person, including the hair area. Don't worry about capturing every strand perfectly. Open Select & Mask (Alt+Ctrl+R). Switch the View to White so you can clearly see the edge against a bright background.\n\nEnable Smart Radius and increase the Radius to about 30–50 px for hair. Switch to the Refine Edge Brush and paint over all the hair, especially the flyaways and the transition zone between hair and background. Watch as Photoshop recovers individual strands. If too much background is being included, switch back to the Quick Selection brush and subtract the problem area. Apply a Shift Edge of –2 px to tighten the overall edge. Set Decontaminate Colors to about 50% if you see color fringing. Output to New Layer with Layer Mask and click OK. Your subject now sits on a transparent background with professional-quality hair edges.",
        },
      ],
    },
    {
      id: "2-6",
      title: "Color Range Selection",
      duration: "12 min",
      description:
        "Use Select > Color Range to select all pixels of a particular color or tone across an entire image with precise control.",
      keyTakeaways: [
        "Color Range selects based on color similarity across the whole image",
        "Fuzziness is like Tolerance — higher values select a broader color range",
        "Use the eyedropper modifiers to add or subtract colors from the range",
        "Localized Color Clusters limits the selection to a specific region of the image",
      ],
      content: [
        {
          heading: "What Is Color Range and When to Use It",
          body: "Go to Select > Color Range to open this powerful dialog. Color Range is similar to the Magic Wand but operates across the entire image simultaneously and gives you much finer control over what gets included. Instead of a single click with a fixed tolerance, you sample one or more colors and see a live preview of exactly which pixels fall within your defined range.\n\nColor Range is ideal when you need to select all instances of a specific color — all the reds in a fashion photo, all the sky in a landscape, all the shadows in a portrait. It is also invaluable for selecting skin tones (use the Skin Tones preset in the Select dropdown) or for making targeted color corrections using Hue/Saturation adjustments on a specific color family.",
        },
        {
          heading: "Using the Dialog: Fuzziness and Eyedroppers",
          body: "When the Color Range dialog opens, your cursor becomes an eyedropper. Click anywhere in the image preview (or on the main canvas) to sample a color. The white areas in the dialog's black-and-white preview represent what is currently selected; black areas are unselected; grey areas are partially selected.\n\nThe Fuzziness slider (ranging from 0 to 200) controls how broadly Photoshop expands from your sampled color. A Fuzziness of 40 selects colors fairly similar to your sample. A Fuzziness of 120 casts a much wider net, potentially selecting colors that only loosely resemble your sample. Drag the slider while watching the preview to find the sweet spot where your target is fully white and the background is fully black.\n\nThe three eyedropper buttons in the dialog are essential. The plain eyedropper sets a new sample, replacing the previous one. The + eyedropper (or hold Shift and click) adds another color to the selection — use this to sample multiple shades of your subject. The – eyedropper (or hold Alt/Option and click) removes a color from the selection — use this when unwanted areas are being included. Click multiple times with the + eyedropper to build a comprehensive color range that covers your subject.",
        },
        {
          heading: "Preset Colors and Localized Color Clusters",
          body: "The Select dropdown at the top of the Color Range dialog offers preset options beyond sampling colors manually. Reds, Yellows, Greens, Cyans, Blues, and Magentas each target a specific color family based on the standard color wheel. Highlights, Midtones, and Shadows select based on luminosity (brightness) rather than color — extremely useful for luminosity-based masking and targeted tonal adjustments. Skin Tones uses a preset range calibrated to human skin, and Detect Faces can be checked alongside Skin Tones to further limit the selection to facial skin areas.\n\nThe Localized Color Clusters checkbox (available when sampling manually) is a powerful feature that prevents Color Range from selecting matching colors in irrelevant parts of the image. Check it and adjust the Range slider to set how far from your sample points Photoshop will look. Set Range to around 50–60% to concentrate the selection near your sample areas while excluding matching colors in distant parts of the image. This is extremely helpful for studio portraits where the backdrop and the subject share similar tones.",
        },
        {
          heading: "Pro Tips for Color Range",
          body: "After clicking OK, Color Range outputs a standard selection (marching ants). You can then proceed to adjust, fill, mask, or apply any Photoshop operation to the selected area. One powerful workflow is: use Color Range to select a colored object, then open Hue/Saturation (Ctrl+U / Cmd+U) and shift the Hue to change just that object's color.\n\nFor maximum control, combine Color Range with layer masks. Make your Color Range selection, then click the Add Layer Mask button at the bottom of the Layers panel. This converts your color-based selection into an editable, non-destructive mask. You can then paint on the mask with a black or white brush to manually fix any areas that Color Range got wrong.",
        },
      ],
    },
    {
      id: "2-7",
      title: "Channels as Selections",
      duration: "15 min",
      description:
        "Understand how Photoshop's color channels relate to selections, and learn to create and save custom alpha channels for complex selections.",
      keyTakeaways: [
        "Every saved selection is stored as a grayscale alpha channel",
        "White areas in a channel = selected; black = unselected; grey = partially selected",
        "Load a channel as a selection by Ctrl/Cmd-clicking its thumbnail",
        "Painting on an alpha channel with black or white refines the selection with precision",
      ],
      content: [
        {
          heading: "Understanding Color Channels",
          body: "Open the Channels panel by going to Window > Channels. For a standard RGB image, you'll see four entries: RGB (the composite), Red, Green, and Blue. Each channel is a grayscale image representing the intensity of that color at every pixel — bright areas in the Red channel mean those pixels have a lot of red; dark areas mean they have little red.\n\nThis grayscale nature is exactly what makes channels so powerful for selections. In Photoshop's selection language, white = fully selected, black = fully unselected, and shades of grey = partially selected. When you save a selection, Photoshop stores it as a grayscale image in a new channel called an alpha channel. You can then load it as a selection any time by Ctrl+clicking (Cmd+clicking) its thumbnail.",
        },
        {
          heading: "Saving and Loading Selections via Channels",
          body: "After making any selection using any selection tool, save it permanently by going to Select > Save Selection. Give it a meaningful name (e.g., 'Subject' or 'Hair Mask') and click OK. Photoshop creates a new alpha channel — you'll see it appear at the bottom of the Channels panel as a grayscale thumbnail.\n\nTo reload a saved selection at any time, go to Select > Load Selection and choose the channel from the dropdown, or simply Ctrl+click (Cmd+click) the alpha channel thumbnail in the Channels panel. This is one of the most valuable habits in professional Photoshop work: save your complex selections before you close the file (saved with .PSD format) so you never have to rebuild them from scratch.",
        },
        {
          heading: "Finding the Best Channel for a Selection",
          body: "One of the most powerful selection techniques in existence uses existing color channels as a starting point for complex masks — particularly for hair and trees against the sky. Click on each individual channel (Red, Green, Blue) in the Channels panel to see the grayscale version. Look for the channel that shows the most contrast between your subject and the background — often the Blue or Green channel for portraits, or the Red channel for certain landscapes.\n\nOnce you find the best channel, drag it down to the New Channel button at the bottom of the Channels panel to duplicate it into a new alpha channel. Now you have a grayscale copy you can freely edit. Use Curves (Ctrl+M / Cmd+M) or Levels (Ctrl+L / Cmd+L) to push the contrast further — drag the black point right and the white point left until the subject is pure white and the background pure black (or vice versa). Paint over any remaining grey areas with a black or white brush to complete the mask. When done, Ctrl+click the alpha channel to load it as a selection.",
        },
        {
          heading: "Painting on Alpha Channels",
          body: "Once you have an alpha channel (either saved from a selection or created from a color channel), you can paint directly on it to refine the mask. Click the alpha channel's name in the Channels panel to make it the active channel. Press B for the Brush tool. Paint with white to add to the selection (make more pixels selected), paint with black to remove from the selection (make pixels unselected), and paint with grey to create partial selection (feathered or semi-transparent areas).\n\nPress D to set foreground/background to default black and white, then press X to swap which one you're painting with. This painting workflow gives you absolute, pixel-level control over your selection that no automated tool can match. After you finish painting the alpha channel, click the RGB composite channel at the top of the Channels panel to restore normal color view, then Ctrl+click (Cmd+click) your alpha channel thumbnail to load it as an active selection.",
        },
        {
          heading: "Pro Tips: Channel Calculations",
          body: "For extremely complex masks, explore Image > Apply Image and Image > Calculations. These advanced commands let you mathematically combine two channels (or layers) using blend modes like Multiply, Screen, or Overlay to generate high-contrast alpha channels that would be impossible to create by hand. While these are advanced features, understanding the concept — that selections are just greyscale images you can treat like any other greyscale image — unlocks enormous creative and technical power in Photoshop.",
        },
      ],
    },
    {
      id: "2-8",
      title: "Pen Tool Selections",
      duration: "20 min",
      description:
        "Create mathematically precise paths with the Pen tool and convert them into pixel-perfect selections for the cleanest possible cutouts.",
      keyTakeaways: [
        "Pen tool paths are vector-based — they can be scaled and adjusted without quality loss",
        "Click to create corner anchor points; click-and-drag to create smooth curve points",
        "Convert a closed path to a selection by pressing Ctrl/Cmd+Enter",
        "The Pen tool produces the cleanest selections for hard-edged subjects like products",
      ],
      content: [
        {
          heading: "Why the Pen Tool for Selections?",
          body: "The Pen tool (press P) creates paths — mathematical curves defined by anchor points rather than pixels. Because paths are resolution-independent, a pen path you draw around a product can be resized, adjusted, and repurposed infinitely without any degradation. More importantly, paths produce the cleanest, smoothest selection edges of any method in Photoshop. For product photography, automotive retouching, and package design where you need a flawlessly clean cutout, the Pen tool is the professional standard.\n\nThe trade-off is speed — the Pen tool requires practice and takes longer than Quick Selection or Color Range. But for images where absolute edge precision matters, no other tool compares. Many commercial retouchers use the Pen tool for 90% of their cutout work.",
        },
        {
          heading: "Anchor Points: Corners vs. Curves",
          body: "The fundamental skill with the Pen tool is understanding the difference between two types of anchor points. A corner point is created by clicking once without dragging — it creates a sharp angle in the path. A smooth point is created by clicking and dragging — it creates a curved segment, and the direction you drag determines the direction and steepness of the curve.\n\nWhen you click-and-drag to create a smooth point, two direction handles extend from the anchor point like a barbell. The handles control the curve on either side of the point. Drag the handle in the direction you want the curve to go. Practice this key rule: drag each new handle in the direction your path is heading to create a natural-looking curve.\n\nTo convert a smooth point to a corner point (breaking the curve), hold Alt/Option and click on the anchor point. To convert a corner point to a smooth point, hold Alt/Option and click-and-drag from the anchor point to pull out handles.",
        },
        {
          heading: "Drawing a Complete Path",
          body: "Start by clicking once (don't drag) to place your first anchor point at a distinct corner of your subject. Then trace around the object, clicking to place corner points at each corner and clicking-and-dragging to create curves along rounded edges. Work in a clockwise direction by convention.\n\nTo close the path, hover your cursor over the first anchor point until a small circle appears next to the Pen cursor, then click. The path is now closed. You'll see it in the Paths panel (Window > Paths) as a Work Path. Double-click 'Work Path' in the panel to save and name it — saved paths are stored in your .PSD file permanently.\n\nTo convert the closed path into a selection, press Ctrl+Enter (Cmd+Enter on Mac), or right-click on the path in the Paths panel and choose Make Selection. In the Make Selection dialog, set Feather to 0 for a hard edge, or 0.5–1 px for an extremely subtle softness that looks natural at screen resolution.",
        },
        {
          heading: "Editing Paths and the Direct Selection Tool",
          body: "After drawing a path, you will almost certainly need to refine it. The Direct Selection tool (press A, or hold Ctrl/Cmd while the Pen is active) lets you click and drag individual anchor points to reposition them. Drag direction handles to adjust curves. To add a new anchor point to an existing path segment, hover the Pen tool over the segment until a plus sign appears, then click. To remove an anchor point, hover over an existing point until a minus sign appears, then click.\n\nZoom in to at least 100% (Ctrl+1 / Cmd+1) when editing paths so you can see exactly where the path falls relative to the subject's edge. A common professional technique is to place the path just inside the subject's edge by about 0.5 px — this prevents any background fringe from appearing in the final cutout.",
        },
        {
          heading: "The Curvature Pen Tool: An Easier Alternative",
          body: "If the traditional Pen tool feels difficult at first, try the Curvature Pen tool (also accessed with P, or Shift+P to cycle). Unlike the traditional Pen tool, the Curvature Pen automatically creates smooth curves between points — you just click to place points and the tool figures out the curves for you. You can drag points to adjust them afterward. It's less precise than the traditional Pen for complex paths, but far more intuitive for beginners and still produces far cleaner results than any pixel-based selection tool.\n\nUse the Curvature Pen to learn the general workflow of path-based selection, then graduate to the traditional Pen tool once you're comfortable with the concept of anchor points and direction handles.",
        },
      ],
    },
    {
      id: "2-9",
      title: "Layer Mask Fundamentals",
      duration: "14 min",
      description:
        "Learn to create, apply, and edit layer masks — the non-destructive way to hide and reveal parts of any layer in Photoshop.",
      keyTakeaways: [
        "Layer masks hide pixels non-destructively — the original pixels are always preserved",
        "Black conceals, white reveals — paint on the mask with these two colors to control visibility",
        "Alt/Option-click the mask thumbnail to view the mask in isolation",
        "Shift-click the mask thumbnail to temporarily disable it for before/after comparison",
      ],
      content: [
        {
          heading: "What Is a Layer Mask?",
          body: "A layer mask is a grayscale image attached to a layer that controls that layer's visibility. Wherever the mask is white, the layer shows fully. Wherever the mask is black, the layer is completely hidden. Wherever the mask is grey, the layer is partially transparent. The key insight is that the mask hides pixels without deleting them — the original pixel data is completely preserved. You can paint the mask white again at any time to bring back any hidden area.\n\nThis non-destructive nature is what makes layer masks the professional's choice over the Eraser tool. The Eraser permanently deletes pixels. A layer mask never touches the original pixels. If you make a mistake or change your mind months later, you can always paint the mask back to reveal what you thought was gone.",
        },
        {
          heading: "Creating a Layer Mask",
          body: "There are several ways to add a layer mask. The most common: select the layer in the Layers panel, then click the Add Layer Mask button (the rectangle with a circle inside it) at the bottom of the Layers panel. This adds a white mask that reveals the entire layer — nothing is hidden yet.\n\nIf you have an active selection before clicking the Add Layer Mask button, Photoshop creates a mask that reveals only the selected area and hides everything else. This is the most common workflow: make a selection using any selection tool, then click Add Layer Mask to instantly convert that selection into a mask. To invert this (hide the selected area and reveal the outside), hold Alt/Option when clicking the Add Layer Mask button.\n\nYou can also go to Layer > Layer Mask > Reveal All (adds a white/empty mask), Layer > Layer Mask > Hide All (adds a black/fully-hiding mask), or Layer > Layer Mask > Reveal Selection / Hide Selection when a selection is active.",
        },
        {
          heading: "Editing a Layer Mask: Black, White, and Grey",
          body: "To edit a layer mask, click the mask thumbnail in the Layers panel (it looks like a greyscale rectangle to the right of the layer's color thumbnail). A white border appears around it, indicating the mask is active and ready to be edited — not the layer itself. Press B for the Brush tool, set your foreground color to black, and paint on the canvas. Wherever you paint black on the mask, the layer becomes transparent. Press X to swap to white and paint to restore visibility. Press D first to reset colors to default black and white if they've changed.\n\nUse a soft brush for smooth, feathered transitions and a hard brush for crisp, clean edges. Reduce the brush Opacity to 50–80% when you want to gradually fade an edge — multiple strokes of a semi-opaque black brush create a progressive fade rather than a sudden cutoff.",
        },
        {
          heading: "Viewing, Disabling, and Applying Masks",
          body: "Alt+click (Option+click on Mac) on the mask thumbnail in the Layers panel to view the mask by itself in black and white — this lets you see exactly what your mask looks like and spot any problem areas. Alt+click again to return to the normal layer view.\n\nShift+click the mask thumbnail to temporarily disable the mask — the layer becomes fully visible, showing you what it looked like without masking. A red X appears over the thumbnail to indicate it's disabled. Shift+click again to re-enable it. This is perfect for before/after comparisons.\n\nRight-click the mask thumbnail for additional options: Apply Layer Mask permanently bakes the mask into the layer pixels (destructive — only do this as a final step if you're certain), Delete Layer Mask removes it entirely, and Add Mask to Selection / Subtract Mask from Selection use the mask's white areas to modify your current selection.",
        },
        {
          heading: "Linking and Unlinking the Mask",
          body: "By default, a layer and its mask are linked together (shown by the chain icon between their thumbnails in the Layers panel). When you move or transform the layer with the Move tool, the mask moves with it. Click the chain icon to unlink them — now you can move the layer independently from the mask, or transform just the mask without moving the pixels. Re-click to link them again.\n\nUnlinking is useful when you've masked a person onto a background and want to reposition just the person without disturbing the mask, or when you want to resize the mask separately from the image to adjust how much of the layer is visible.",
        },
      ],
    },
    {
      id: "2-10",
      title: "Advanced Masking Techniques",
      duration: "16 min",
      description:
        "Go beyond basic masks with luminosity masking, clipping masks, vector masks, and techniques for realistic compositing.",
      keyTakeaways: [
        "Luminosity masks target highlights, midtones, or shadows with extreme precision",
        "Clipping masks confine a layer's content to the shape of the layer below",
        "Vector masks use Pen tool paths for resolution-independent, scalable mask edges",
        "Gradient masks create natural, photographic blends between exposures or images",
      ],
      content: [
        {
          heading: "Gradient Masks for Natural Blends",
          body: "A gradient on a layer mask creates a seamless fade — one of the most natural-looking transitions in compositing. Add a white-filled mask to a layer. Press G for the Gradient tool, ensure the gradient is set to Foreground to Background (black to white), and drag across the mask. The layer will fade from fully visible to fully transparent in a smooth gradient.\n\nThis technique is essential for landscape photography: exposure blend a bright sky exposure with a correctly-exposed foreground by placing the sky image on top, adding a mask, and dragging a gradient from black at the bottom (hiding the sky layer's bright ground) to white at the top (showing the sky layer's correctly-exposed sky). The gradient transition line can be repositioned by drawing a new gradient — each drag replaces the previous one. For more organic blends, use a soft brush after the gradient to manually blend the transition zone.",
        },
        {
          heading: "Clipping Masks",
          body: "A clipping mask is a relationship between two or more layers where the bottom layer's shape acts as a mask for all the layers clipped to it. Any content in the upper (clipped) layer only shows where the lower (base) layer has pixels. To create one, place the layer you want to clip directly above its base layer in the Layers panel, then go to Layer > Create Clipping Mask, or press Alt+Ctrl+G (Alt+Cmd+G on Mac). In the Layers panel, the clipped layer shows a small indented arrow pointing to the layer below it.\n\nClipping masks are widely used for text effects (clip a texture or photo inside text letters), for applying adjustments only to a single layer below (clip an adjustment layer so it affects only the layer directly beneath, not all layers), and for product mockups (clip a pattern or design inside a product shape layer).",
        },
        {
          heading: "Vector Masks",
          body: "In addition to the standard pixel-based layer mask, layers can also carry a vector mask based on a Pen tool path. Vector masks produce mathematically perfect, infinitely scalable edges — no pixelation, no matter how much you enlarge the canvas or resize the layer. To add one, draw a closed path with the Pen tool, then go to Layer > Vector Mask > Current Path. The path becomes a mask that clips the layer to the path's shape.\n\nTo edit the vector mask, use the Direct Selection tool (A) to move anchor points or adjust curves. Vector masks appear in the Layers panel as a third thumbnail (after the layer and the pixel mask thumbnails). You can have both a pixel mask and a vector mask on the same layer simultaneously — Photoshop combines them, showing only areas that both masks reveal.",
        },
        {
          heading: "Luminosity Masking Basics",
          body: "Luminosity masking is a technique for selecting based on brightness values, allowing you to target only the brightest highlights, only the darkest shadows, or only the mid-range tones — with extremely smooth, natural transitions. The selections are created from the image's own color channel data, so they perfectly conform to every highlight and shadow in the photograph.\n\nThe simplest luminosity selection: go to the Channels panel and Ctrl+click (Cmd+click) the RGB composite channel thumbnail. Photoshop loads a selection where brighter pixels are more selected and darker pixels are less selected. Invert it (Ctrl+Shift+I) for a shadow selection. This selection can then be used with Curves adjustments to brightening only highlights or darkening only shadows with a naturalness that a flat tonal adjustment cannot replicate. More advanced luminosity masks are created by intersecting this basic selection with itself (Ctrl+Alt+clicking the RGB channel multiple times) to progressively narrow the tonal range.",
        },
        {
          heading: "Combining Masks for Complex Composites",
          body: "Real-world compositing often requires combining multiple masking techniques on a single project. A common workflow for placing a person onto a new background: use Quick Selection + Select & Mask for the body (pixel mask), use the channel technique to isolate the hair (alpha channel loaded as a second mask), use a gradient mask to blend the feet with the ground plane, and use luminosity masking to match the overall tone and lighting between subject and background.\n\nThink of masking as a layered, iterative process rather than a single step. Start with the easiest, most automated approach to get the general shape, then layer increasingly precise techniques on top to handle the difficult areas. No single tool handles every masking challenge — expertise is knowing which combination of tools to apply to each specific problem.",
        },
      ],
    },
    {
      id: "2-11",
      title: "Selection Shortcuts & Tips",
      duration: "8 min",
      description:
        "A power-user's guide to the essential keyboard shortcuts, hidden tricks, and workflow optimizations for selections and masks.",
      keyTakeaways: [
        "Ctrl/Cmd+D deselects; Ctrl/Cmd+Shift+D reselects the last selection",
        "Ctrl/Cmd+Shift+I inverts a selection instantly",
        "Select > Modify offers Expand, Contract, Smooth, Border, and Feather",
        "Focus on a small set of shortcuts daily until they are automatic",
      ],
      content: [
        {
          heading: "The Essential Selection Shortcuts",
          body: "Memorizing these shortcuts will measurably speed up your Photoshop workflow. Ctrl+A (Cmd+A) selects all pixels on the current layer. Ctrl+D (Cmd+D) deselects. Ctrl+Shift+D (Cmd+Shift+D) reselects the last active selection. Ctrl+Shift+I (Cmd+Shift+I) inverts the selection — if you've selected the background, invert to select the subject instead. Ctrl+H (Cmd+H) hides the marching ants without deselecting, useful when the dashes visually interfere with your work.\n\nWhen using selection tools: Shift+drag adds to the selection. Alt/Option+drag subtracts from the selection. Shift+Alt/Option+drag intersects with the selection (keeps only the overlap). These modifier keys work across virtually all selection tools.",
        },
        {
          heading: "Select > Modify Commands",
          body: "Go to Select > Modify for a suite of commands that reshape an existing selection mathematically. Expand grows the selection boundary outward by a specified number of pixels — use 1–2 px to ensure you've captured edge pixels that the selection might have missed. Contract shrinks the selection inward — use 1–3 px to pull the selection edge away from the background to avoid color fringing. Smooth rounds off sharp corners and bumpy edges in the selection by a specified radius.\n\nBorder creates a selection that is only the outline of your current selection — if you had a circle selected, Border gives you a ring. Feather softens the edge by blending a specified number of pixels. A key tip: Select > Modify > Expand followed by Select > Modify > Feather (with feather equal to the expansion amount) creates a very natural-looking selection fade.",
        },
        {
          heading: "Transform, Grow, and Similar",
          body: "Select > Transform Selection lets you scale, rotate, skew, or distort the selection boundary itself — separate from any pixels. Press Enter to confirm the transformation. Select > Grow expands the selection to include adjacent pixels of similar color (like repeating the Tolerance search of the Magic Wand outward from the current edge). Select > Similar expands to include all pixels of similar color anywhere in the image, not just adjacent ones.\n\nSelect > Edit in Quick Mask Mode (or press Q) is a hidden gem. It converts the current selection into a red overlay that you can paint on with any painting or drawing tool, then press Q again to convert back to a selection. Quick Mask lets you use the Brush, Gradient, or even Filter commands to shape your selection — far more flexible than using selection tools alone. This is worth practicing separately to build confidence.",
        },
        {
          heading: "Focus Areas and Object Selection Tricks",
          body: "Select > Focus Area automatically selects the in-focus areas of an image, determined by detecting sharp pixel areas versus blurred ones. This is powerful for portraits with a blurred background (bokeh) — Photoshop can often select just the sharp subject automatically. Adjust the In-Focus Range slider in the dialog to capture more or fewer pixels based on their sharpness.\n\nThe Object Selection tool (W) now uses Adobe Sensei AI to identify and select objects. Draw a loose rectangle or lasso around any object and Photoshop identifies and selects it precisely. Combine this with Select > Select and Mask for a fast, high-quality workflow that handles most subjects in under 30 seconds. When the Object Selection is active, hovering over objects in the canvas often shows a real-time subject detection preview — click when the right area highlights blue.",
        },
      ],
    },
    {
      id: "2-12",
      title: "Project: Complex Cutout",
      duration: "22 min",
      description:
        "Apply everything from this path in a complete, end-to-end project: cutting out a person with detailed hair from a complex background and compositing them onto a new scene.",
      keyTakeaways: [
        "Combine multiple selection methods for different parts of the same subject",
        "Always work non-destructively with layer masks — never permanently erase pixels",
        "Match lighting and color between subject and background for a believable composite",
        "Zoom in to 100% or more when evaluating and fixing fine edge details",
      ],
      content: [
        {
          heading: "Project Overview and Setup",
          body: "In this project you will create a professional composite: take a portrait photo with a complex background and place the subject convincingly onto an entirely different background scene. This single project exercises every major technique covered in this learning path — selection tools, Select & Mask, channel masking, layer masks, and edge refinement.\n\nOpen your portrait photo in Photoshop. Duplicate the background layer immediately (Ctrl+J / Cmd+J) and work on the duplicate — this preserves the original pixels as a safety net. Rename the duplicate layer 'Subject.' Open the Layers panel (F7) and the Channels panel (Window > Channels) so both are visible. Set your canvas zoom to Fit on Screen (Ctrl+0 / Cmd+0) to see the full image.",
        },
        {
          heading: "Phase 1: Initial Subject Selection",
          body: "Select the Object Selection tool (press W). Hover over your subject — Photoshop will highlight them blue as it detects the main subject. Click once. Photoshop's AI creates an initial selection that covers the body well but likely has imperfect hair edges and may miss some fine details around the clothing.\n\nCheck the selection by going to Select > Select and Mask (Alt+Ctrl+R). Set the View to White so you can assess the cutout quality against a bright background. Look critically at three zones: the solid body areas (should be fully opaque, no gaps), the hair or fur edges (likely frayed or missing detail), and any fine details like fingers, jewelry, or fabric texture (may have rough edges). Make mental notes of what needs attention in each zone before you start refining.",
        },
        {
          heading: "Phase 2: Refining the Edges in Select & Mask",
          body: "Inside Select & Mask, enable Smart Radius in the Edge Detection section. Set the Radius to about 30–40 px. Select the Refine Edge Brush (press R) and use a medium-large brush (about 60–80 px) to paint over all the hair, flyaways, and any other complex edge areas. Paint a second pass with a smaller brush over the most detailed hair regions. Watch the edge quality transform as Photoshop recovers individual strands.\n\nFor areas where the selection has expanded into the background, switch to the Quick Selection tool (within Select & Mask) and hold Alt/Option to subtract — paint over the problem area to push the selection back to the correct edge. Apply a Shift Edge of about –2 px in the Global Refinements section to tighten the overall boundary and eliminate background fringing.\n\nIn the Output Settings section, check Decontaminate Colors (set to about 50%) to eliminate background color cast from edge pixels. Set Output to New Layer with Layer Mask and click OK. You now have a masked layer with refined edges.",
        },
        {
          heading: "Phase 3: Channel Masking for Problem Hair Areas",
          body: "After the Select & Mask refinement, zoom in to 100% (Ctrl+1 / Cmd+1) and inspect the hair edge carefully. If any areas still look rough or have visible background pixels bleeding through, you'll use the channel technique to fix them. Go to the Channels panel. Click the Red, Green, and Blue channels one by one and identify which shows the most contrast between the hair and the background in the problem zone — usually Blue or Green for portrait photography.\n\nDuplicate the best channel by dragging it to the New Channel button. Target the duplicated alpha channel. Apply Levels (Ctrl+L / Cmd+L): drag the black-point slider right until the background area in the problem zone is pure black, then drag the white-point slider left until the hair in that zone is pure white. Paint any remaining grey areas of the background pure black with a hard brush, and paint the body of the subject pure white if needed. Ctrl+click (Cmd+click) the alpha channel to load it as a selection. Go back to the composite RGB view. On the Subject layer, Shift+click the existing layer mask thumbnail to load the channel selection and merge it with the existing mask for a blended improvement.",
        },
        {
          heading: "Phase 4: Compositing and Color Matching",
          body: "Drag your background image into the document. Place the background layer below the Subject layer in the Layers panel. Use the Move tool (V) to position and scale the subject within the new scene. Press Ctrl+T (Cmd+T) to Free Transform the subject layer if you need to resize — hold Shift to constrain proportions.\n\nNow the critical step: color matching. The subject's lighting and color must match the new background or the composite will look fake. Add a Curves adjustment layer (Layer > New Adjustment Layer > Curves), clip it to the Subject layer (Alt+Ctrl+G / Alt+Cmd+G), and make subtle adjustments to match the contrast and color temperature of the background light. Add a Hue/Saturation adjustment layer and clip it too — use this to shift the subject's color slightly toward the background's color palette.\n\nFor the finishing touch, add a subtle shadow under the subject. Create a new layer below Subject, use the Elliptical Marquee to draw a flat oval where the feet meet the ground, fill it with black (Alt+Delete / Option+Delete), deselect (Ctrl+D / Cmd+D), apply Gaussian Blur (Filter > Blur > Gaussian Blur) with a radius of 15–25 px, and reduce the layer Opacity to 30–50%. This grounding shadow makes the composite far more believable. Congratulations — you've completed a professional-grade composite using the full toolkit of this learning path.",
        },
      ],
    },
  ],
};
