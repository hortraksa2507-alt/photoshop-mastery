import { PathData } from "./types";

export const path5: PathData = {
  id: 5,
  title: "Professional Retouching",
  level: "Advanced",
  levelColor: "var(--level-advanced)",
  description:
    "Industry-standard retouching techniques used by fashion and portrait photographers.",
  lessons: [
    {
      id: "5-1",
      title: "Non-Destructive Retouching Setup",
      duration: "14 min",
      description:
        "Build a solid foundation by setting up your Photoshop workspace to allow infinite undos and edits without ever damaging original pixels.",
      keyTakeaways: [
        "Always work on duplicate layers or Smart Objects",
        "Use adjustment layers instead of direct edits",
        "Name and group layers clearly for complex retouching projects",
        "Smart Objects allow non-destructive filter application",
      ],
      content: [
        {
          heading: "Why Non-Destructive Workflow Is Non-Negotiable",
          body: "Professional retouchers never touch original pixels. The moment you paint directly onto a Background layer, clone directly onto it, or apply a destructive filter, you lose the ability to revise your work cleanly. Clients frequently request changes weeks after delivery — a slightly different crop, a softer look, or a restored feature that was over-retouched. Without a non-destructive structure, those revisions mean starting from scratch.\n\nThe core philosophy is simple: every edit you make should be stored on its own layer or adjustment layer, fully separate from the original image data. This means you can turn any edit on or off, reduce its opacity, or delete it entirely without affecting anything else. When you build this habit from the start, even the most complex multi-hour retouch remains completely flexible.",
        },
        {
          heading: "Layer Structure for a Professional Retouch",
          body: "Begin every retouch by duplicating your Background layer immediately (Cmd/Ctrl + J) and renaming it 'Original — Do Not Touch'. Lock this layer by clicking the lock icon in the Layers panel. This is your safety net. All retouching happens on layers above this.\n\nCreate a logical group structure using Layer Groups (Cmd/Ctrl + G). A typical portrait retouch might use groups labeled: 'Cleanup' (for healing and cloning work), 'Skin' (for frequency separation and smoothing), 'Dodge & Burn', 'Color & Tone', and 'Final Adjustments'. Within each group, individual layers are named by their purpose — for example, 'Spot Healing — Blemishes', 'Clone — Hair Strand Removal', or 'D&B — Mid-tones'. This naming discipline takes seconds but saves enormous time when a client requests a revision on a specific area.",
        },
        {
          heading: "Smart Objects and Adjustment Layers",
          body: "Convert your working layer to a Smart Object (right-click the layer, choose 'Convert to Smart Object') before applying any filter. When a filter is applied to a Smart Object, it appears as a Smart Filter below the layer thumbnail — it can be double-clicked to re-open the filter dialog at any time, adjusted, or deleted. This is how you apply Camera Raw as a filter non-destructively: Filter > Camera Raw Filter on a Smart Object layer.\n\nAdjustment layers — found via Layer > New Adjustment Layer or the half-circle icon at the bottom of the Layers panel — are the only correct way to make tonal and color corrections in a retouching workflow. Curves, Hue/Saturation, Color Balance, and Selective Color adjustments all live on their own layers with built-in masks. Clip them to the layer below (Option/Alt + click between layers) to restrict their effect to just that layer.",
        },
        {
          heading: "Saving and File Formats",
          body: "Save your master retouch file as a PSD or TIFF to preserve all layers. Never flatten and save over the original. Use File > Save As and add a version suffix like '_retouch_v1.psd'. When delivering to clients, export a flattened JPEG or TIFF separately using File > Export > Export As, keeping your layered master file completely intact.\n\nFor complex projects with hundreds of layers, consider using Photoshop's Layer Comps (Window > Layer Comps) to save different states of visibility and positioning. This allows you to switch between, for example, a 'Natural' look and a 'High Fashion' look within the same document, showing clients both versions from a single file.",
        },
      ],
    },
    {
      id: "5-2",
      title: "Spot Healing vs. Healing Brush",
      duration: "12 min",
      description:
        "Master the critical differences between Photoshop's healing tools and know exactly when to use each one for flawless skin retouching.",
      keyTakeaways: [
        "Spot Healing Brush is best for isolated blemishes with clean surrounding skin",
        "Healing Brush gives you manual source control for complex areas",
        "Always work on a new empty layer with 'Sample All Layers' checked",
        "Brush size should closely match the imperfection size",
      ],
      content: [
        {
          heading: "Understanding How Healing Tools Work",
          body: "Both the Spot Healing Brush (J) and the Healing Brush share the same underlying technology: they blend texture, color, and luminosity from a source area into the target area. Unlike the Clone Stamp, which copies pixels exactly, healing tools perform a mathematical blend — they replace the texture of the target but adopt its surrounding color and luminosity. This is what makes them appear seamless rather than patchy.\n\nThe key difference is how the source is determined. The Spot Healing Brush automatically analyzes the surrounding pixels and synthesizes a source — you simply click or paint and Photoshop figures out the blend. The Healing Brush requires you to manually define the source by Option/Alt-clicking on a clean area before painting. Manual control sounds like extra work, but it becomes essential when the auto-detection fails near edges, shadows, or areas with heavy texture variation.",
        },
        {
          heading: "Setting Up Your Healing Layer",
          body: "Create a new blank layer above your image and name it 'Spot Healing'. In the options bar at the top, make sure 'Sample All Layers' is checked (or 'Current & Below' if you want to limit the sampling range). This is critical — without it, the tool will only sample from the active layer, which is empty, and nothing will happen.\n\nSet your brush hardness to 0% for most skin work. The brush size should be just slightly larger than the blemish you're targeting. For the Spot Healing Brush, use 'Content-Aware' mode in the options bar — this uses Photoshop's content-aware algorithm for a more intelligent fill, especially on textured skin. For the Healing Brush, set Mode to 'Normal' and Source to 'Sampled'.",
        },
        {
          heading: "Spot Healing Best Practices",
          body: "The Spot Healing Brush excels at removing isolated blemishes — pimples, small scars, sensor dust, stray hairs crossing skin. For a single blemish, simply paint over it in one or two strokes. For elongated marks like scratch scars, paint along the length of the mark in the direction of the skin texture to avoid a blob artifact.\n\nAvoid using the Spot Healing Brush near high-contrast edges such as the hairline, the edge of lips, the crease of a nostril, or the corner of an eye. The algorithm will grab pixels from both sides of the edge and blend them together, creating smearing. In these areas, switch to the Healing Brush and manually source from within the same region, staying parallel to the edge.",
        },
        {
          heading: "Healing Brush for Precision Work",
          body: "For the Healing Brush, source selection is everything. Option/Alt-click on a patch of skin that matches the texture, pore density, and color of the area you want to fix. Ideally, source from the same plane of the face — if retouching the left cheek, source from the right cheek or nearby forehead, not from a completely different zone with different skin character.\n\nWhen working on areas with directional texture — such as fine lines on the forehead or stubble on the jaw — hold the brush consistent with the texture direction. Make short, deliberate strokes rather than sweeping across a large area. Re-source frequently (Option/Alt-click again) to avoid repetitive pattern artifacts that appear as obvious cloning. After completing a healing pass, zoom out to 50% and check the result — artifacts are often invisible at 100% but obvious at a wider view.",
        },
      ],
    },
    {
      id: "5-3",
      title: "Clone Stamp Advanced Techniques",
      duration: "16 min",
      description:
        "Go beyond basic cloning to use the Clone Stamp tool with precision control over alignment, opacity, and blending for complex retouching scenarios.",
      keyTakeaways: [
        "Use Aligned mode to maintain consistent source offset while painting",
        "Reduce opacity to 30-50% for gradual, natural-looking fills",
        "Clone Stamp Source panel allows multiple saved sources",
        "Use with Blend Modes for invisible texture transplants",
      ],
      content: [
        {
          heading: "When to Choose Clone Stamp Over Healing",
          body: "The Clone Stamp (S) copies pixels exactly from a source to a destination — there is no color or luminosity blending like the Healing Brush. This makes it the right tool when you need pixel-accurate replacement: removing a logo from a background, eliminating a power line from a sky, filling a gap in a uniform texture like brick, tile, or fabric, or removing an element near a hard edge where the Healing Brush would smear.\n\nIn portrait retouching, the Clone Stamp is used more sparingly than healing tools, but it shines for hair work — replacing a gap in an eyebrow, filling in sparse eyelashes, or cleaning up a hairline. It is also the preferred tool for extending backgrounds, because you can source a clean section and tile it seamlessly.",
        },
        {
          heading: "Aligned Mode and Source Control",
          body: "In the options bar, 'Aligned' mode keeps the source offset locked to the destination brush — as you lift and repaint, the source point moves in parallel with your strokes. This is ideal for covering large areas because the source and destination maintain their spatial relationship, preventing repetitive patterns. Uncheck 'Aligned' when you want every stroke to sample from the exact same source point — useful for precisely replacing one specific element.\n\nOpacity is your most powerful control. At 100%, the Clone Stamp makes a hard, often detectable copy. Drop it to 40-60% and make multiple passes — each pass adds a little more of the source, and the gradual build-up integrates far more naturally. For skin texture transplants, 20-30% opacity with 5-10 strokes gives you the realism of the source area without the tell-tale copy look.",
        },
        {
          heading: "Using the Clone Source Panel",
          body: "Open Window > Clone Source to access a panel that stores up to five different source points simultaneously. This is invaluable on complex retouches where you need to pull from multiple distinct areas. Click each icon in the Clone Source panel before Option/Alt-clicking to define that source slot. You can then switch between saved sources by clicking their icons without having to re-sample.\n\nThe Clone Source panel also offers Transform controls — you can scale the source (enter percentage values in the W and H fields) and rotate it (enter degrees in the rotation field). This allows you to, for example, clone a hair strand and flip it horizontally to fill the opposite side, or scale down a texture patch to better match a smaller area. Enable 'Show Overlay' in the panel to see a semi-transparent preview of the source before you paint.",
        },
        {
          heading: "Advanced Blending Techniques",
          body: "Clone Stamp with the Lighten or Darken blend modes in the options bar allows you to perform selective cloning. In Lighten mode, the stamp only affects pixels darker than the source — useful for lightening specific shadows or brightening skin tone patches without altering lighter areas. Darken mode does the opposite. This technique is used by retouchers to smooth uneven skin tone without a Healing Brush pass.\n\nFor hard-edge scenarios like removing a subject from a busy background, combine Clone Stamp with a selection. Make a rough selection around the area you want to fill, then refine it with Select > Modify > Feather (2-4 pixels). With the selection active, use Clone Stamp at full opacity to fill the area — the selection boundary contains the cloning precisely. Deselect (Cmd/Ctrl + D) and check the edges. This workflow prevents the common Clone Stamp problem of accidentally painting over important areas.",
        },
      ],
    },
    {
      id: "5-4",
      title: "Content-Aware Fill & Move",
      duration: "15 min",
      description:
        "Harness Photoshop's AI-powered content-aware tools to remove objects, extend backgrounds, and reposition elements with photorealistic results.",
      keyTakeaways: [
        "Content-Aware Fill workspace gives precise control over sampling area",
        "Content-Aware Move works best with simple, repeating backgrounds",
        "Always refine results with healing tools after AI fill",
        "Selection quality directly determines fill quality",
      ],
      content: [
        {
          heading: "Content-Aware Fill Workspace Deep Dive",
          body: "Content-Aware Fill has evolved far beyond the original Edit > Fill > Content-Aware option. The dedicated workspace (Edit > Content-Aware Fill, or Shift + F5, available after making a selection) gives you full control over which parts of the image Photoshop is allowed to sample from when generating the fill. In the workspace, green overlay shows sampling areas and the tool on the left lets you paint to include or exclude regions.\n\nBefore opening the workspace, make your selection slightly larger than the object you want to remove — include a few pixels of surrounding background. Lasso tool or Quick Selection work well. Once inside the workspace, use the Sampling Brush Tool (B) to exclude areas you don't want to pull from — for example, exclude another person's face, a logo, or a shadow that would be incorrectly tiled into the fill area. The preview panel on the right updates in real time as you adjust the sampling zone.",
        },
        {
          heading: "Output Settings and Multi-Pass Fills",
          body: "In the Content-Aware Fill workspace, the Output Settings panel lets you output to 'New Layer', 'Duplicate Layer', or 'Current Layer'. Always choose 'New Layer' — this keeps your fill completely editable and non-destructive. You can then mask, paint over, or delete the fill layer without touching the original.\n\nFor complex objects on varied backgrounds, a single Content-Aware Fill pass is rarely perfect. The professional approach is a multi-pass workflow: run the fill, output to a new layer, identify the problem areas (usually seams, repeated texture patterns, or incorrect color matching), and run a second fill on just those problem areas. Use the Lasso to select only the imperfect section, feather by 5-10 pixels (Select > Modify > Feather), and run Content-Aware Fill again. Repeat until clean, then finish with the Healing Brush for any residual artifacts.",
        },
        {
          heading: "Content-Aware Move Tool",
          body: "The Content-Aware Move Tool (nested under the Healing Brush, or press J to cycle to it) lets you select an element, drag it to a new position, and have Photoshop automatically fill the gap left behind and blend the moved element into its new surroundings. In the options bar, Mode set to 'Move' physically relocates the selection. Mode set to 'Extend' is useful for stretching backgrounds or extending hair.\n\nFor best results, make your selection generous — include some background around the subject you're moving. Set Structure to 4-5 (higher values preserve more of the selection's original structure) and Color to 5-7 (higher values blend the color of the moved element with its new surroundings more aggressively). After the move, the original position is filled using the same algorithm as Content-Aware Fill. Use Edit > Undo (Cmd/Ctrl + Z) repeatedly to compare options, as the algorithm has some randomness — running it multiple times can yield better results.",
        },
        {
          heading: "Practical Scenarios and Limitations",
          body: "Content-Aware tools work best on organic, non-repeating backgrounds: natural foliage, sand, water, sky, and rough textures. They struggle with hard geometric patterns — tile floors, brick walls, architectural lines — because the AI synthesis rarely creates seamless joins. In these cases, Clone Stamp with careful manual alignment gives more predictable results.\n\nA common real-world use case is removing a distracting element from a wedding or environmental portrait — a rubbish bin, an exit sign, or an electrical outlet behind a subject. Select the element with the Lasso, feather by 10-15 pixels, run Content-Aware Fill with a clean sampling zone, and finish with the Healing Brush for any visible seams. For a magazine-scale output (300 dpi, 20 megapixels), always zoom to 100% to inspect fill quality before delivery, as imperfections invisible at fit-to-screen view become obvious in print.",
        },
      ],
    },
    {
      id: "5-5",
      title: "Frequency Separation Explained Simply",
      duration: "18 min",
      description:
        "Learn the industry's most powerful skin retouching technique by separating texture from color and tone for completely natural-looking results.",
      keyTakeaways: [
        "Frequency separation splits skin into texture (high frequency) and color/tone (low frequency) layers",
        "Always use Apply Image with correct settings for 16-bit vs 8-bit files",
        "Retouch low frequency with Gaussian Blur and painting; high frequency with Clone/Heal",
        "Over-smoothing on the low frequency layer destroys natural skin character",
      ],
      content: [
        {
          heading: "The Concept: What Frequency Separation Actually Does",
          body: "Every image contains two types of information layered on top of each other: low-frequency information (the broad areas of color, tone, and gradation — the blush on a cheek, the shadow under a jaw, the overall color of skin) and high-frequency information (fine detail — pores, hair, fine lines, texture). In a standard photograph these two types of information are merged into the same pixels, which is why retouching skin tone while preserving texture is so difficult.\n\nFrequency separation physically separates these two frequencies onto two different layers. The low-frequency layer contains only the color and tone gradients — it looks like a blurred, posterized version of the skin. The high-frequency layer contains only the texture and detail — it looks like a grey, embossed version of the skin with all color removed. Once separated, you can smooth the color and tone on the low-frequency layer without touching the texture at all. The result is flawlessly even skin that still reads as real skin — not plastic, not airbrushed.",
        },
        {
          heading: "Setting Up Frequency Separation Step by Step",
          body: "Start by duplicating your image layer twice. Name the bottom duplicate 'Low Frequency' and the top duplicate 'High Frequency'. Select the Low Frequency layer and go to Filter > Blur > Gaussian Blur. The radius depends on the resolution and skin detail in your image — for a high-resolution portrait (24+ megapixels), start with a radius of 8-12 pixels. Blur until the skin texture is completely removed and only smooth color gradients remain. Click OK.\n\nNow select the High Frequency layer. Go to Image > Apply Image. In the dialog, set Layer to 'Low Frequency', set Blending to 'Subtract', Scale to 2, and Offset to 128. For 8-bit files, these are the exact values. For 16-bit files, set Blending to 'Subtract', Scale to 2, and Offset to 0 — the math is different for 16-bit. Click OK. The High Frequency layer will now appear grey and embossed. Finally, change the High Frequency layer's blend mode to 'Linear Light'. At this point, the image should look identical to the original — if it does, the setup is correct.",
        },
        {
          heading: "Retouching the Low Frequency Layer",
          body: "Select the Low Frequency layer. This is where you fix uneven skin tone, redness, discoloration, and broad shadows without disturbing pores or fine texture. Use a large, soft brush (hardness 0%) with the Mixer Brush Tool (B, cycle to Mixer Brush) set to 'Wet' at 30% and 'Mix' at 50% to blend skin tones together. Paint in the direction of skin gradients — along cheekbones, down the forehead — to seamlessly even out color transitions.\n\nAlternatively, use a low-opacity Brush Tool (B) sampling color from clean skin areas (Option/Alt-click to sample) and painting over discolored regions. Work with 10-15% opacity and build up gradually. The Patch Tool also works excellently on the Low Frequency layer — it blends source and destination seamlessly on smooth data. Never use aggressive tools like the Sponge or Smudge on this layer, as they destroy the gradient quality that makes skin look three-dimensional.",
        },
        {
          heading: "Retouching the High Frequency Layer",
          body: "Select the High Frequency layer. This is where you remove specific texture imperfections — a pimple's raised texture, an acne scar, a deep pore, a stray hair crossing skin. Because this layer is in Linear Light blend mode on top of the solid, blurred Low Frequency layer, anything you paint here directly affects the visible result.\n\nUse the Clone Stamp Tool (S) at 100% opacity to clone clean skin texture over imperfections. The source and destination should be nearby skin with similar texture character — sourcing from a cheek to fix the forehead can look inconsistent because pore size varies. For particularly coarse areas, use the Healing Brush with a manually sampled source. After texture cleanup on the High Frequency layer and tone work on the Low Frequency layer, merge both layers (Cmd/Ctrl + E) and continue with other retouching steps. The combined result should look like the person at their best — not like a different person.",
        },
        {
          heading: "Common Mistakes and How to Avoid Them",
          body: "The most common error in frequency separation is over-smoothing the Low Frequency layer. New retouchers often blend the skin tones so completely that the face loses all depth and volume — cheekbones flatten, the nose loses dimension, natural shadows are erased. Remember that what you're evening out is unwanted discoloration, not sculpted shadow. Use restraint: reduce brush opacity, compare frequently by toggling the High Frequency layer's visibility, and check your work at 25-50% zoom where the overall face reads more naturally.\n\nAnother frequent error is using the wrong Apply Image settings. If you forget to switch to Subtract mode (using Add by mistake), or enter wrong Scale/Offset values, the two layers will not correctly reconstruct the original when combined, and the image will shift in color or brightness. Always verify by temporarily turning both layers to normal mode and using a flat 50% gray as a sanity check — if Apply Image was applied correctly, the High Frequency layer at normal mode should look exactly like a grey emboss of the original.",
        },
      ],
    },
    {
      id: "5-6",
      title: "Dodge & Burn for Portraits",
      duration: "17 min",
      description:
        "Shape and sculpt facial features using luminosity painting on a 50% gray layer, the technique used by top retouchers worldwide.",
      keyTakeaways: [
        "Always dodge and burn on a 50% gray layer set to Overlay or Soft Light mode",
        "Use extremely low opacity brushes (3-8%) for gradual, natural shaping",
        "Dodge (lighten) highlights; Burn (darken) shadows to enhance facial dimension",
        "Separate layers for subtle and strong D&B give more control",
      ],
      content: [
        {
          heading: "Setting Up the Gray Layer Method",
          body: "The professional dodge and burn technique does not use Photoshop's Dodge and Burn tools directly on pixel layers — those tools increase contrast in ways that can introduce unnatural color shifts over many strokes. Instead, create a new layer: go to Layer > New Layer (or Option/Alt + click the New Layer icon), check the box 'Fill with Overlay-neutral color (50% gray)', and set the Mode to Soft Light. Name this layer 'D&B Soft' and click OK.\n\nA 50% neutral gray is completely invisible in Soft Light or Overlay blend mode — the layer appears to not exist at all. But when you paint white onto this gray layer (which dodges, or lightens the image) or paint black onto it (which burns, or darkens the image), the tonal changes become visible through the blend mode. Because you're painting onto a completely separate gray layer, you can reduce its opacity at any time, erase mistakes with the Eraser, and toggle its visibility to compare before and after — all without any permanent change to your image.",
        },
        {
          heading: "Brush Settings for Natural Results",
          body: "Select the Brush Tool (B). Set Hardness to 0% and Opacity to 3-5% for subtle blending work (the absolute maximum you should use for fine skin D&B is 8%). Flow can remain at 100%. Switch your foreground color to white for dodging (lightening) and black for burning (darkening). Use the X key to toggle between white and black quickly.\n\nBrush size matters significantly. For global facial shaping — lifting a highlight on the cheekbone, deepening the shadow under the jawline — use a brush that is roughly one-quarter to one-third of the face width. For local micro-contouring — adding catchlight depth to individual pores, defining a lip edge, sharpening an eyebrow — use a much smaller brush at 10-20 pixels. The large brush creates macro dimension; the small brush creates micro texture that reads as depth and sharpness.",
        },
        {
          heading: "Portrait Contouring with D&B",
          body: "Think of dodge and burn as digital make-up for the light. Areas that should appear to advance toward the viewer get dodged (lightened): the center of the forehead, the top of the cheekbones, the bridge of the nose, the Cupid's bow of the upper lip, the chin tip, and the whites of the eyes. Areas that should recede get burned (darkened): the sides of the nose, the temples, the hollow of the cheeks, below the lower lip, and any double-chin area.\n\nFor a headshot or beauty portrait, work in two passes. The first pass (Soft Light gray layer, 3-5% opacity, large brush) establishes the broad luminosity shape — give the face its three-dimensional volume by gently lifting highlights and settling shadows. The second pass (a second gray layer, also Soft Light) handles micro-contrast — small strokes around individual features that sharpen edges and increase the illusion of detail. Working on two separate layers gives you independent opacity control over the two passes.",
        },
        {
          heading: "Ethical and Aesthetic Considerations",
          body: "Dodge and burn is a technical tool but also an aesthetic decision. Aggressive contouring can make a face look over-structured, mask-like, or inconsistent with the lighting in the rest of the photograph. Always reference the existing light direction in the image and reinforce that logic rather than inventing new shadows. If the key light is from camera-left, the shadows should be deeper on the right side of the face — burning the left cheek as well would contradict the image's lighting and look unreal.\n\nFor editorial and fashion work, a more sculpted D&B is acceptable because the audience understands the stylized nature of the medium. For wedding and family portraiture, the goal is to make the subject look like the best version of themselves — natural, glowing, and recognizable. Always get a second set of eyes on heavy D&B work, because after an hour of micro-adjustments it becomes difficult to perceive the full scope of the changes. Toggle the visibility of all D&B layers at once to see the unretouched version and recalibrate your perception.",
        },
      ],
    },
    {
      id: "5-7",
      title: "Skin Smoothing Without Losing Texture",
      duration: "16 min",
      description:
        "Explore multiple approaches to skin smoothing — from surface blur to luminosity masks — while preserving the realistic pore texture that makes portraits believable.",
      keyTakeaways: [
        "Surface Blur smooths gradients while preserving edges better than Gaussian Blur",
        "Luminosity masks target smooth skin tones while skipping texture edges automatically",
        "Always apply smoothing at reduced opacity — 40-70% is a common starting point",
        "Frequency separation remains the gold standard for texture-preserving smoothing",
      ],
      content: [
        {
          heading: "Why Skin Smoothing Goes Wrong",
          body: "Over-smoothed skin is the most recognizable sign of amateur retouching. It creates the 'plastic face' effect — skin that reads as a texture-free surface, like rubber or wax, rather than living tissue. This happens when retouchers apply Gaussian Blur, the Skin Smoothing function in Lightroom, or aggressive Healing Brush passes that remove not just blemishes but the micro-pore texture that signals biological reality to viewers.\n\nThe goal of skin smoothing is not to eliminate texture — it is to even out color variation and reduce the visual noise of minor imperfections while leaving the underlying pore structure completely intact. The eye perceives smoothness from tonal consistency, not from texture removal. When you even out the discoloration between a red patch and the surrounding skin, the face reads as smooth even if the pore texture is unchanged.",
        },
        {
          heading: "Surface Blur Technique",
          body: "Duplicate your image layer and go to Filter > Blur > Surface Blur. Surface Blur has two controls: Radius (how wide the blur spreads) and Threshold (how much tonal difference an edge must have before it's protected from blurring). A high Threshold protects hard edges like the eye, nostril, and hairline from blurring; a low Threshold blurs almost uniformly. For skin, try Radius 10-15 and Threshold 10-15 as a starting point, adjusting until skin gradients smooth without the facial features blurring.\n\nConvert the layer to a Smart Object before applying Surface Blur so it is non-destructive. After applying, reduce the layer's opacity to 50-60%. Then add a black layer mask (Option/Alt + click the Add Mask icon to fill with black, hiding the effect entirely). Paint with a white, soft brush at 80-100% opacity over the skin areas only — cheeks, forehead, chin — to reveal the smoothing effect exclusively where needed. Leave eyes, lips, eyebrows, nostrils, and any areas with fine detail at black (hidden).",
        },
        {
          heading: "Luminosity Mask Smoothing",
          body: "Luminosity masks target pixels based on their brightness value, allowing you to restrict your smoothing to just the mid-tone skin tones while automatically skipping dark edges (where pores, hair, and lines create high-contrast texture). Create a luminosity mask by Cmd/Ctrl-clicking the image thumbnail in the Layers panel to load a luminosity selection based on brightness. Then go to Select > Modify > Contract by 2-3 pixels and feather by 5 pixels to clean up the selection edges.\n\nWith the selection active, create a Surface Blur or Gaussian Blur Smart Object filter, and the blur will only affect the selected luminosity range. The self-masking quality of luminosity selection means the hardest, most textured edges are automatically excluded — the smoothing applies to the broad tonal areas and self-tapers at transitions. This is a more automated approach than frequency separation but produces excellent results for tight deadlines.",
        },
        {
          heading: "Combining Methods for Best Results",
          body: "Top retouchers typically combine techniques. The base skin tone evenness comes from frequency separation on the low-frequency layer (broad color/tone work). Secondary skin smoothing via Surface Blur or a luminosity-masked blur layer addresses any remaining overall skin noise. Dodge and burn then restores dimension that was softened by the smoothing step.\n\nA practical workflow for a beauty close-up: complete frequency separation first to remove blemishes and even skin tone. Then duplicate the merged skin result, convert to Smart Object, apply Surface Blur at 40% layer opacity with a mask revealing only skin. Finally, run a gentle D&B pass to restore the facial volume softened by smoothing. At each step, zoom to 50% and 25% to evaluate the cumulative effect — individual steps look reasonable at 100%, but stacked together they can create over-processing that is only visible at reduced zoom.",
        },
      ],
    },
    {
      id: "5-8",
      title: "Eye Enhancement",
      duration: "15 min",
      description:
        "Transform eyes from flat to compelling using precise brightening, sharpening, iris detail enhancement, and catchlight refinement techniques.",
      keyTakeaways: [
        "Curves adjustment with luminosity mask targets the iris selectively",
        "High Pass sharpening on the iris increases perceived detail dramatically",
        "White area brightening must stay natural — blue/grey cast ruins the effect",
        "Catchlight position at 10 or 2 o'clock reads as most natural and flattering",
      ],
      content: [
        {
          heading: "Isolating the Eye for Retouching",
          body: "Eye retouching requires surgical precision — the effects must be completely contained within the eye area and blended seamlessly with the surrounding skin. Use the Lasso Tool (L) to draw a loose selection around one eye, feather it generously (Select > Modify > Feather, 15-20 pixels) so that all adjustments fade naturally at the selection boundary. Work on each eye separately and in separate layers so you can balance them independently.\n\nFor the iris specifically, the Elliptical Marquee Tool (M) is faster and more precise. Hold Shift to constrain to a circle, draw the selection aligned to the iris edge, and feather by 3-5 pixels. All iris-specific adjustments — saturation boosts, contrast increases, sharpening — should be applied within this circular selection to avoid spilling onto the surrounding eye white and skin.",
        },
        {
          heading: "Brightening the Eye Whites",
          body: "Select the whites of the eye using the Lasso tool or Quick Selection. Feather by 5-8 pixels. Create a Hue/Saturation adjustment layer clipped to this selection: reduce Saturation by -15 to -25 to remove any yellow or red cast, and increase Lightness by +5 to +10. The eye whites should appear clean and bright, not glowing white — the goal is to remove bloodshot redness and scleral yellowing while maintaining the natural slight grey-blue tonality of a real eye white.\n\nAvoid using Curves or Levels at high intensity on eye whites — bright white eyes can look alien or digitally enhanced. If the original image shows redness from bloodshot eyes, use the Healing Brush or Clone Stamp on the individual red veins (at 50-100% zoom) before any global adjustment, then apply the Hue/Saturation layer for overall color correction.",
        },
        {
          heading: "Enhancing the Iris",
          body: "For iris enhancement, use Curves (Layer > New Adjustment Layer > Curves) with an S-curve to increase contrast within the iris selection. Pull the shadows slightly down and the highlights slightly up to make the iris pattern more vivid. Use Hue/Saturation to boost iris color: create a selection of the iris, add Hue/Saturation, and increase Saturation by +10 to +20 depending on the desired look. For green or hazel eyes, a slight Hue shift of +5 in either direction can intensify the color beautifully.\n\nFor sharpening, merge the eye area onto a new layer (Cmd/Ctrl + Shift + Alt/Option + E to stamp visible), then go to Filter > Other > High Pass. Set Radius to 3-5 pixels. Change the layer blend mode to Overlay or Soft Light. Mask everything except the iris. This creates a sharpness effect on the iris texture that makes eyes appear strikingly detailed without artificially over-processed.",
        },
        {
          heading: "Catchlight Enhancement and Removal",
          body: "Catchlights — the specular highlights reflected from light sources in the eye — are crucial for making eyes appear alive and engaged. A portrait with no catchlights appears flat and lifeless; a portrait with well-positioned catchlights draws viewers immediately to the subject's gaze. Ideal catchlight position is at 10 o'clock or 2 o'clock (upper left or upper right quadrant of the iris), which mimics natural overhead or fill light and reads as most pleasing.\n\nIf the image has multiple distracting catchlights (from windows, multiple flashes, overhead fluorescent banks), remove the unwanted ones using the Healing Brush or Clone Stamp at low opacity, sourcing from the adjacent iris area. If catchlights are missing, paint them: create a new layer, use a small soft white brush at 60-80% opacity, and click once in the appropriate position. Reduce the layer's opacity to 40-60% so the catchlight reads as real light rather than a painted white spot. For authenticity, give the catchlight a very slight shape that echoes the light source — square for a window, round for a ring flash.",
        },
      ],
    },
    {
      id: "5-9",
      title: "Teeth Whitening & Lip Enhancement",
      duration: "13 min",
      description:
        "Subtly improve the smile area with professional-grade teeth whitening and lip color enhancement that looks natural and polished.",
      keyTakeaways: [
        "Reduce yellow channel saturation for teeth — avoid pure white which looks fake",
        "Lip color adjustments use Hue/Saturation with a precise mask",
        "Small lip shape corrections use Liquify at very low pressure",
        "Always match the enhancement level to the style of the overall image",
      ],
      content: [
        {
          heading: "Selecting the Teeth Precisely",
          body: "Begin with the Quick Selection Tool (W) to paint over the teeth area. Zoom to at least 100% so you can see exactly where the teeth boundaries are. After the initial selection, use Select and Mask (Select > Select and Mask) to refine the edges — increase Edge Detection Radius to 2-3 pixels and use the Refine Edge Brush along the gum line to capture the irregular boundary between teeth and gum. Output to 'Selection' and click OK.\n\nFeather the final selection by 1-2 pixels (Select > Modify > Feather) to soften the adjustment boundary. A crisp selection edge on teeth brightening is very visible and looks retouched. The soft edge allows the effect to taper naturally into the gum and lip area.",
        },
        {
          heading: "Whitening Without the Bleached Look",
          body: "With the teeth selected, create a Hue/Saturation adjustment layer. In the channel dropdown, switch from 'Master' to 'Yellows'. Reduce the Yellows Saturation by -30 to -50 — this specifically removes the yellow cast from teeth without affecting the overall image. Then increase Lightness in the Yellows channel by +5 to +10. Return to 'Master' channel and increase Lightness by +5 to +10 overall.\n\nThe common mistake is increasing Lightness too aggressively in all channels, producing teeth that glow white or have a blue-white cast. Real teeth are not pure white — they have a warm ivory quality even when very clean. Aim for a Lightness increase that makes the teeth look clean and healthy, not bleached. Reduce the adjustment layer's overall opacity to 70-85% to further soften the effect, and zoom out to evaluate within the context of the full face before finalizing.",
        },
        {
          heading: "Lip Color and Saturation Enhancement",
          body: "Select the lips using the Lasso Tool with a feather of 3-5 pixels, carefully following the vermillion border (the lip edge). Create a Hue/Saturation adjustment layer. For a natural enhancement, increase Saturation by +15 to +25 in the Reds channel to deepen the natural lip color. A slight Hue shift of -3 to -5 (toward red, away from orange) adds richness to lips that photograph with a coral or peachy tone.\n\nFor a more editorial or fashion look, use a Curves adjustment layer on the lips selection: create an S-curve to add contrast, then use Color Balance to shift the lip tone — adding slightly more red/magenta in the midtones creates a deeper, fuller lip appearance. Use Selective Color (Layer > New Adjustment Layer > Selective Color) on the Reds channel to fine-tune — decrease Yellow in Reds to push toward cool pink, or increase Yellow to move toward warm coral. These adjustments are powerful; use them at 50-70% layer opacity to prevent an obviously made-up look.",
        },
        {
          heading: "Lip Shape Refinement",
          body: "Minor lip shape asymmetries — one corner slightly lower, the upper lip thinner on one side — can be addressed with Filter > Liquify at very low Forward Warp Tool pressure (10-15%). Work at 50-75% zoom so you can see the full lip context. Use a brush size roughly equal to the area you want to nudge, and make single, short pushes rather than dragging strokes. The key is that the adjustment should be imperceptible as a warp — if it reads as a shape change, it's too much.\n\nFor any sharpening of the lip edge (the Cupid's bow or the lower lip boundary), use a small Dodge brush at 5% opacity on a Soft Light gray layer to slightly brighten the lip edge highlight, and a small Burn brush at 5% to slightly darken just outside the lip edge. This micro-contrast sharpens the lip boundary without changing its actual shape or requiring any Liquify work. This technique also works to enhance lip fullness — brightening the center of the lip and darkening the corners creates the visual illusion of more volume.",
        },
      ],
    },
    {
      id: "5-10",
      title: "Hair Retouching & Flyaways",
      duration: "14 min",
      description:
        "Clean up distracting flyaway hairs, add shine and volume, and deal with complex hair-against-sky extractions using advanced layer techniques.",
      keyTakeaways: [
        "Flyaways against skin are handled with Clone Stamp or Healing Brush",
        "Flyaways against complex backgrounds require manual painting with a Hair Brush",
        "Hair shine is added with a dodge pass on a Soft Light gray layer",
        "Color consistency is achieved with Hue/Saturation clipped to hair selection",
      ],
      content: [
        {
          heading: "Removing Flyaways Against Skin",
          body: "Flyaway hairs crossing skin are among the most common retouching tasks in portrait work. When a stray hair falls across a cheek, forehead, or neck and the background is skin, the Healing Brush is your fastest tool. Option/Alt-click on clean skin nearby (same tone and texture zone), then paint over the hair strand using short strokes following the direction of the underlying skin texture. For thin hairs on smooth skin, one pass at the default brush size is sufficient. For thick or dark hairs, you may need two healing passes — the first pass removes most of the strand, and the second targets the remaining edge artifacts.\n\nFor dense hair clusters near the hairline, the Clone Stamp at 60-80% opacity is more predictable than the Healing Brush, which can smear when multiple strands overlap. Work from the base of the flyaway toward the tip in short strokes, re-sourcing (Option/Alt-click) every few strokes to prevent repetitive texture. After clone work, do a final Healing Brush pass at low opacity to blend the edges.",
        },
        {
          heading: "Flyaways Against Complex Backgrounds",
          body: "When flyaways cross a complex background — sky, foliage, a patterned wall — the only truly clean solution is to paint them out by hand. Use a very small brush (2-4 pixels, hardness 20-30%) and Option/Alt-click to sample the background color exactly behind the hair strand. Then paint in short segments over the hair, re-sampling frequently as the background color changes. This is painstaking work but produces the cleanest result.\n\nAn alternative approach uses the Background Eraser Tool: create a duplicate of the Background layer, select the Background Eraser (under the Eraser, press E to cycle), set Sampling to 'Continuous', Limits to 'Find Edges', Tolerance to 20-30%, and paint along the flyaway strands. The tool samples the color under the hotspot (center of the cursor) and erases similarly-colored pixels within the tolerance range — it selectively removes hair color while preserving the background. This works well when the hair and background are clearly different in color, less well when the two are similar.",
        },
        {
          heading: "Adding Hair Shine and Dimension",
          body: "Hair that photographs flat or lifeless benefits from a targeted dodge pass to simulate the natural specular shine of healthy hair. On a Soft Light 50% gray layer, use a large soft white brush (hardness 0%, opacity 5-8%) and paint gentle strokes along the main flow direction of the hair — typically from the parting down to the ends, or from the crown down to the sides. The shine should follow the hair's natural catchlight positions, not be applied uniformly.\n\nFor dark hair, a second burn pass on the shadow edges of the hair (where the volume turns away from the light) adds depth and separation. Paint with a small black brush at 5% opacity along the outer edges and strand divisions. The combination of dodged highlights and burned shadows creates the impression of glossy, voluminous hair even if the original photograph was somewhat flat.",
        },
        {
          heading: "Hair Color Consistency",
          body: "Fashion and beauty work often requires the hair color to be perfectly consistent throughout the frame — even if the real hair has natural variation, hot spots from the flash, or green tint from foliage reflection. Create a selection of the hair using Color Range (Select > Color Range, sample the hair color, adjust Fuzziness to 40-60%) or by manual Lasso with feathering. Refine the selection using Select and Mask to capture the fine hair edge detail.\n\nWith the hair selection active, add a Hue/Saturation adjustment layer. Use the Hue slider to shift the overall tone (useful for correcting color cast from environmental bounce light), Saturation to enrich or reduce intensity, and Lightness to match hair brightness to its surroundings. For split-toning effects in editorial work — warming highlights, cooling shadows — use a Color Balance adjustment layer on the same hair selection, adjusting Highlights and Shadows channels independently. Keep all adjustments under the hair selection mask to prevent color contamination on the background or skin.",
        },
      ],
    },
    {
      id: "5-11",
      title: "Body Reshaping with Liquify",
      duration: "18 min",
      description:
        "Learn how to use Liquify responsibly and technically precisely to make subtle body adjustments that remain within ethical retouching boundaries.",
      keyTakeaways: [
        "Liquify's Face-Aware Liquify handles facial features with smart constraints",
        "Forward Warp at low pressure (10-20%) for body work prevents distortion artifacts",
        "Always watch background straight lines for tell-tale warping",
        "Ethical retouching respects the subject's natural body and the audience's perception",
      ],
      content: [
        {
          heading: "Ethical Framework for Body Retouching",
          body: "Body retouching is the most ethically charged area of professional retouching. The industry has grappled with its consequences — images that present impossible body standards, that misrepresent reality to audiences, and that can contribute to body image issues in viewers. As a professional retoucher, you will encounter clients who request changes that go beyond technical correction into fundamental alteration of a person's body shape.\n\nThe professional standard in most editorial markets has shifted toward minimal body retouching: fixing technically unavoidable issues (clothing pulling, posture compression, lens distortion) rather than reshaping the body itself. Many publications and advertising clients now have explicit policies against body manipulation. Before performing any body reshaping, clarify with your client what changes are requested and why, and whether those changes serve the subject's interests as well as the client's. For personal portrait work, always discuss what the subject wants — not what you think looks better.",
        },
        {
          heading: "Setting Up Liquify Non-Destructively",
          body: "Always perform Liquify on a Smart Object layer — this stores the Liquify warp as a Smart Filter, meaning you can re-open Liquify at any time (double-click the Smart Filter) to adjust or remove the warp. To create a Smart Object from your current working layer, right-click the layer and select 'Convert to Smart Object'. If you need to Liquify a merged version of multiple layers, use Cmd/Ctrl + Shift + Option/Alt + E to stamp all visible layers onto a new layer, then convert that to a Smart Object.\n\nIn the Liquify dialog (Filter > Liquify, or Shift + Cmd/Ctrl + X), key settings for body work: Forward Warp Tool (W), Pressure 10-20%, Rate (for Push Left/Right tools) 50-70%. A lower pressure means each brush stroke moves pixels less — essential for gradual, natural-looking changes. Reconstruct Tool (R) allows you to selectively erase Liquify distortion in areas that were over-worked.",
        },
        {
          heading: "Technically Correct Body Liquify",
          body: "The most common technically correct use of Liquify in body retouching is correcting lens distortion artifacts: wide-angle lenses barrel-distort subjects at the edges of the frame, making them appear disproportionately wide. In these cases, narrowing the edges of a subject is correcting a technical camera issue, not altering their actual body shape. This is analogous to lens correction for architectural distortion and is considered acceptable retouching.\n\nClothing adjustments are another legitimate use case: a jacket that pulled open during the shoot, a shirt that bunched at the waist, a gown that folded awkwardly due to posture. These are staging problems that would have been fixed on set with more time — Liquify corrects the clothing, not the body. For these adjustments, use Forward Warp at 15% pressure with a brush size roughly equal to the area to be moved, and make slow, deliberate pushes of 5-10 pixels at a time.",
        },
        {
          heading: "Avoiding Artifacts and Checking Your Work",
          body: "The signature tell of heavy Liquify work is distorted straight lines in the background — door frames, window edges, floor lines, and architectural elements that bow unnaturally around the retouched area. Before applying Liquify, identify all straight lines near the subject. After your warp work, zoom out and scan these lines carefully. If they show any bend or curve, use the Reconstruct Tool to gently restore the background to straight while keeping the subject adjustment.\n\nA second artifact is skin texture stretching: when an area is warped significantly, the texture within that area stretches and the pixel density decreases, creating a smooth, smeared appearance inconsistent with adjacent skin. If this occurs, use the Healing Brush or Clone Stamp after Liquify to transplant appropriate skin texture from nearby areas onto the stretched zone. Finally, examine the edges of moved clothing or silhouettes — they should have the same edge sharpness as unretouched areas. Excessive warping often softens edges; a small amount of sharpening (Filter > Sharpen > Unsharp Mask, Amount 30%, Radius 1.5px) applied with a mask to the affected area can restore natural edge character.",
        },
      ],
    },
    {
      id: "5-12",
      title: "Background Cleanup & Extension",
      duration: "17 min",
      description:
        "Master background retouching from simple cleanup to complex canvas extension, creating seamless environments that frame your subjects perfectly.",
      keyTakeaways: [
        "Shoot with camera on tripod for easy background extension via panorama stitch",
        "Content-Aware Fill is the fastest tool for background removal and extension",
        "Gradients and noise addition help background extensions match original",
        "Subject/background edge consistency is critical for believable extensions",
      ],
      content: [
        {
          heading: "Background Cleanup Fundamentals",
          body: "Clean backgrounds are essential for headshots, product photography, and fashion work. Even a studio background against a seamless paper backdrop often has scuff marks, fold shadows, or gradient inconsistency that needs retouching. For seamless paper backgrounds, select the blemished area with a generous Lasso, feather by 20-30 pixels, and run Content-Aware Fill — for smooth, gradated paper, the AI fill is usually near-perfect.\n\nFor more textured backgrounds like wood, stone, or fabric, the Clone Stamp with Aligned mode and low opacity (40-60%) is more controllable than Content-Aware Fill, which can create visible pattern interruptions on strongly textured surfaces. Sample from a nearby clean area that matches the local texture direction and color, and build the fill gradually. Always inspect at 100% zoom for seaming or pattern repetition.",
        },
        {
          heading: "Canvas Extension Strategy",
          body: "To extend the canvas area (add space around an existing photograph for composition or print bleed requirements), go to Image > Canvas Size and increase the canvas dimensions. This adds transparent or background-colored space around the image. The challenge is filling this new space with background that matches the original.\n\nFor solid, gradated, or simple backgrounds (studio, sky, plain wall), the fastest approach: flatten the extended canvas area to its own selection, run Content-Aware Fill with a generous sampling zone from the original background, and refine with Clone Stamp. For more complex backgrounds, the Patch Tool on large feathered selections works well — select the new empty area, switch to the Patch Tool, drag the selection over a clean source area, and release.",
        },
        {
          heading: "Matching Noise and Grain",
          body: "A technically correct background extension fails if the noise characteristics don't match. Original camera sensor noise has a specific grain pattern at a specific frequency — synthetically generated fill areas often appear smooth and clean by comparison, immediately revealing the extension boundary.\n\nAfter completing the background fill, select the extended area with a feathered Lasso. Add a Noise layer (Filter > Noise > Add Noise on a new layer, Amount 2-4%, Gaussian, Monochromatic). Reduce this noise layer's opacity until it matches the noise level in the original image. Use a zoom to 100% and compare noise patterns in original and extended areas side by side. The extended area's noise should be the same grain size and density, though it does not need to be identical — just visually consistent.",
        },
        {
          heading: "Edge Consistency at Subject Boundaries",
          body: "The most critical area when extending a background is the boundary between the original background and the new extended background, particularly where the subject's silhouette meets the background. If the original image has a slight drop shadow, rim light, or shadow falloff behind the subject, the extended background must continue that same lighting logic — it should not abruptly change brightness or color at the edge of the subject's original silhouette.\n\nUse a large Dodge or Burn brush (hardness 0%, opacity 5%) on the extended background to match its luminosity and color gradation to the original background immediately adjacent to the subject. Paint broadly across the junction line — there should be no visible step. If there is a rim light or background gradient in the original, use a Curves adjustment layer masked to the extended area to recreate that luminosity gradient, matching it by eye against the original.",
        },
      ],
    },
    {
      id: "5-13",
      title: "Removing Objects from Scenes",
      duration: "16 min",
      description:
        "Develop a systematic approach to removing distracting objects from photographs, from simple single-pass fills to complex multi-layer reconstructions.",
      keyTakeaways: [
        "Analyze what's behind the object before choosing your removal strategy",
        "Work from large objects to small in multi-element removals",
        "Use layer masks to trial different fill approaches without committing",
        "Reference images help reconstruct background that's fully occluded",
      ],
      content: [
        {
          heading: "Pre-Analysis: Understanding What's Behind the Object",
          body: "Before touching any tools, study the area around the object you need to remove. Ask: what background should logically exist in the space the object is occupying? For a simple removal — a tourist in an otherwise empty plaza, a bin on a clean pavement — the background is clearly visible on all sides, and you can reconstruct it by extending what's already visible. For a complex removal — a street sign embedded against an intricate building façade, a power line crossing a variegated sky with clouds — the background is either partially visible or entirely occluded and must be reconstructed from reference.\n\nIn the second case, look for visual continuity clues: the direction of a brick course continuing behind the sign, the curve of a cloud that would logically extend past the power line, the perspective of a road surface. The more you understand what should be there, the more convincingly you can fill it.",
        },
        {
          heading: "The Layered Removal Workflow",
          body: "Create a new blank layer above your image for all removal work — do not paint directly onto the original. Select the object to be removed using a generous Lasso selection with 10-15 pixel feather. Run Edit > Content-Aware Fill, output to a new layer, and evaluate the result. In most cases with simple backgrounds, this single step produces an 80-90% clean result.\n\nFor the remaining 10-20%, use a combination of Clone Stamp and Healing Brush on the output layer. Zoom to 100% and work section by section, from the largest/most obvious artifacts down to the smallest edge seams. At each step, zoom out to 25-50% to check for macro-level inconsistencies that are invisible at 100% — tonal jumps, pattern repetition, color casts — before continuing at 100%.",
        },
        {
          heading: "Complex Multi-Element Removals",
          body: "When removing multiple overlapping elements — for example, clearing all signage from a street scene — work in order from largest to smallest, and from background to foreground in depth. Remove the element furthest from camera first (it is simpler background, usually) so that when you later remove a foreground element, the background behind it is already clean.\n\nFor each element, use a separate fill or healing layer, kept separate for revision flexibility. After all elements are removed, do a final integration pass with the Healing Brush on a composite layer to unify the texture and tone across all filled areas. Zoom out to the full image at 25% and assess the scene as a whole — does it read as a natural, unmodified photograph?",
        },
        {
          heading: "Reconstructing Obscured Detail",
          body: "When an object fully occludes important background content — a hand covering part of a face, a car blocking an architectural feature — reconstruction is required. Search for reference within the same image: the other side of the face, a different section of the same building façade. If the image is one of a series from the same shoot, check adjacent frames for the obscured element.\n\nFor bilateral symmetry (faces, architecture), flip sections of the image to reconstruct the obscured side. Copy the visible portion (for example, the right half of a face), paste it as a new layer, flip horizontally (Edit > Transform > Flip Horizontal), position it over the obscured area, and blend it in with a gradient mask and Healing Brush transitions. This technique works remarkably well for faces and any symmetrical element, but requires careful attention to lighting direction — a flipped face has highlights and shadows reversed, so you may need to use a Curves adjustment on the flipped section to correct the light direction.",
        },
      ],
    },
    {
      id: "5-14",
      title: "Portrait Lighting Enhancement",
      duration: "17 min",
      description:
        "Reshape and enhance the lighting on portrait subjects using Curves, dodge and burn, and gradient tools to simulate professional studio lighting in post.",
      keyTakeaways: [
        "Dodge and burn creates the foundational sculpting for lighting enhancement",
        "Radial gradients simulate additional fill light or rim light",
        "Color of light must be consistent across the image — check shadows vs. highlights",
        "Camera Raw Radial Filter offers fast, camera-based lighting control",
      ],
      content: [
        {
          heading: "Diagnosing Lighting Problems in Portraits",
          body: "Before enhancing portrait lighting, diagnose what's wrong with the existing light. Common problems include: flat, frontal lighting with no shadow dimensionality; harsh, high-contrast lighting with overpowering shadows; inconsistent mixed color temperatures from multiple light sources; background and subject lit differently in brightness or color; and catch-light issues (too many, too few, wrong position).\n\nEach problem has a specific solution. Flat lighting is fixed with dodge and burn to sculpt shadows and highlights back onto the face. Harsh lighting is fixed with luminosity-masked Curves lifts on the shadow areas. Mixed color temperature is addressed with selective Hue/Saturation adjustments or Color Balance. Background/subject balance is corrected with gradient masks and targeted Curves. Understanding the diagnosis first prevents applying the wrong technique.",
        },
        {
          heading: "Simulating Butterfly/Paramount Lighting",
          body: "Butterfly lighting (the glamour standard in beauty photography) places the key light directly above and in front of the face, creating a characteristic butterfly-shaped shadow under the nose and defining the cheekbones. If your portrait was shot with less flattering light, you can simulate this pattern in post.\n\nCreate a luminosity selection of the face (Cmd/Ctrl-click the image thumbnail, then Select > Modify > Contract 10px, Feather 20px). Create a Curves adjustment layer on this selection. Gently lift the overall curve to brighten the face. Then paint black into the mask on the sides of the face (temples, outer cheeks, jaw edges) using a large soft brush at 30-40% opacity, so the brightening fades at the face edges. This concentrates the lightening in the center-forward planes, mimicking the hot-spot of a frontal overhead light.",
        },
        {
          heading: "Adding Rim Light in Post",
          body: "Rim light (a backlight creating a luminous edge around the subject's silhouette) dramatically separates a subject from the background and adds a professional, studio quality to an image. To simulate rim light in Photoshop, create a new Soft Light layer and use a medium-sized soft white Brush (opacity 8-12%) to paint along one edge of the subject's silhouette — typically the side opposite the key light.\n\nFor more precise rim light control, use a Curves adjustment layer with a gradient mask: create a gradient that is white along one side of the subject and black everywhere else, so the brightening curves effect is concentrated at the edge. The gradient must follow the body's contour, which usually requires additional masking with the brush. A warm rim light (add slight yellow-red cast using the Color Balance in Highlights channel of the Curves layer) on a cool-key-lit subject is a cinematic combination common in fashion editorials.",
        },
        {
          heading: "Using Camera Raw Filter for Lighting Overhaul",
          body: "For comprehensive lighting enhancement, the Camera Raw Filter (Filter > Camera Raw Filter on a Smart Object layer) offers powerful localized tools. The Radial Filter (press R inside Camera Raw) creates an elliptical selection on which you can adjust Exposure, Highlights, Shadows, Temperature, Tint, and Clarity independently of the rest of the image. Add a Radial Filter over the face, set the Effect to 'Inside' or 'Outside' the ellipse, and increase exposure by +0.3 to +0.5 to lift the face luminosity relative to the background.\n\nMultiple Radial Filters can stack — place one over the face to brighten it, one over the eyes to increase clarity and sharpness, and one over the background to darken it slightly and increase the visual separation between subject and environment. Feather the radial filter edge at 80-100% so transitions are invisible. This workflow is fastest for editorial turnaround where a complete lighting overhaul is needed quickly without complex layer masking.",
        },
      ],
    },
    {
      id: "5-15",
      title: "Color Grading for Portraits",
      duration: "15 min",
      description:
        "Apply cinematic and editorial color grades to portraits while preserving skin tone accuracy using professional Curves, Color Lookup, and split-toning techniques.",
      keyTakeaways: [
        "Always protect skin tones when applying color grades — check the Info panel",
        "Split toning (warm highlights, cool shadows) is the most universally flattering grade",
        "Color Lookup Tables provide fast cinematic grades with a single layer",
        "Reduce color grade layer opacity to blend between the original and the grade",
      ],
      content: [
        {
          heading: "Color Theory for Portrait Grading",
          body: "Portrait color grading serves two purposes: emotional tone (warm grades feel intimate and nostalgic; cool grades feel editorial and modern) and technical correction (fixing white balance drift, recovering skin color accuracy). Unlike grading a landscape or architecture image, portrait grading must always pass the skin tone test — skin tones that read as grey, green, or violet destroy the humanity of the image regardless of how stylish the grade looks on the background.\n\nThe safest color grading approach for portraits is split toning: assigning one color to the highlights and a complementary or contrasting color to the shadows. The most universally flattering split for portraits is warm highlights (golden yellow, slight orange) and cool shadows (teal, cyan, or slight blue-green). This combination flatters most skin tones by pushing them toward the warm zone and creates visual depth through color temperature contrast.",
        },
        {
          heading: "Curves-Based Color Grading",
          body: "Open a Curves adjustment layer (Layer > New Adjustment Layer > Curves). In Curves, the channel dropdown (set to RGB by default) can be switched to Red, Green, or Blue individually. To create a warm highlight / cool shadow grade: select Red channel, raise the highlight end of the curve slightly and lower the shadow end. Select Blue channel, lower the highlight end slightly (reduces blue in highlights, adding warmth) and raise the shadow end slightly (adds blue/cool to shadows). Select Green channel and make minor adjustments — a slight mid-tone raise in Green adds a filmic lushness.\n\nThis channel-by-channel Curves approach gives precise control and is reversible at any time. Save your favorite grades as Curves presets (click the preset folder icon in the Properties panel) for consistent application across a series. For a cohesive gallery — wedding series, editorial package — applying the same saved Curves preset to every image creates visual harmony.",
        },
        {
          heading: "Color Lookup Tables (LUTs)",
          body: "Color Lookup adjustment layers (Layer > New Adjustment Layer > Color Lookup) apply a 3D LUT — a mathematically defined color transform — to the entire image with one click. Photoshop ships with a library of cinematic and editorial LUTs accessible from the '3DLUT File' dropdown, including 'Candlelight', 'Crisp Warm', 'Late Sunset', 'Moonlight', and several Kodak and Fuji film emulations.\n\nThe workflow: add a Color Lookup layer, choose a LUT that fits the mood, then immediately reduce the layer's opacity to 30-60%. A LUT at 100% opacity is almost always too strong — the full-strength version exists as a starting point, and the opacity reduction is how you dial in the subtlety. Additionally, clip a Hue/Saturation adjustment layer above the Color Lookup and reduce the Saturation by -5 to -10, as LUTs often oversaturate skin. Finally, paint black into the Color Lookup mask on any area where the LUT is degrading the skin tone.",
        },
        {
          heading: "Protecting Skin Tones During Grading",
          body: "Always monitor skin tone values during color grading using the Info Panel (Window > Info). Click the eyedropper to place a Sample Point on the skin tone you want to protect — a mid-tone skin area on the cheek is a good reference. The Info panel shows the RGB values at this sample point in real time as you adjust. Healthy skin tones have a characteristic relationship: the Red channel value should be highest, followed by Green, then Blue — for example, R:210, G:175, B:155. When these values deviate (Green equals or exceeds Red, or Blue approaches Green values), the skin begins to read as unnatural.\n\nFor editorial and high-fashion work, some departure from natural skin tone is stylistically acceptable and intentional. The key is consistency and control — the skin should look exactly the way you intend it to look, not accidentally degraded by an aggressive grade. If a LUT shifts skin into unacceptable territory, use a Selective Color adjustment layer above the LUT to correct specifically within the Reds and Yellows channels (where skin tones live), pulling back any unwanted hue shifts without changing the rest of the grade.",
        },
      ],
    },
    {
      id: "5-16",
      title: "High-End Beauty Retouching Workflow",
      duration: "22 min",
      description:
        "Walk through a complete magazine-level beauty retouching workflow from raw import to final delivery, applying all techniques in sequence.",
      keyTakeaways: [
        "A systematic order of operations prevents earlier steps undoing later work",
        "Check work regularly at 25-50% zoom to evaluate the portrait as a whole",
        "Final sharpening and noise reduction are applied as the last step before export",
        "Deliver in both natural and retouched versions when working with clients",
      ],
      content: [
        {
          heading: "Workflow Order of Operations",
          body: "A professional beauty retouch follows a strict order to prevent inefficiency. Working the wrong sequence — for example, running frequency separation before removing large blemishes, or color grading before completing all tonal work — causes every subsequent step to work against itself. The correct order is: (1) Global technical corrections in Camera Raw (exposure, white balance, lens distortion); (2) Large blemish removal (Spot Healing and Healing Brush); (3) Frequency separation (overall skin evenness and texture cleanup); (4) Dodge and burn (macro facial sculpting, then micro detail); (5) Eye enhancement; (6) Lip and teeth; (7) Hair; (8) Background work; (9) Color grading; (10) Final sharpening, noise reduction, and export.\n\nEach phase is completed fully before moving to the next. Jumping between phases creates a fragmented result and makes it difficult to assess the cumulative effect of each technique. Time discipline matters in commercial work — establish checkpoint intervals (every 20-30 minutes, zoom out to 25% for a full-face assessment) to prevent over-retouching.",
        },
        {
          heading: "Camera Raw Foundation Pass",
          body: "Open your raw file in Camera Raw (Camera Raw opens automatically for RAW files, or access it via Filter > Camera Raw Filter on a JPEG Smart Object). Make these global corrections first: set Exposure so the histogram has no clipping in either direction. Adjust White Balance to correct any color temperature drift — use the White Balance Tool to click on a neutral grey area, or manually set Temperature and Tint. Apply Profile Corrections (Lens Corrections panel, check 'Enable Lens Profile Corrections') to remove barrel/pincushion distortion and vignetting.\n\nIn the Detail panel, apply careful noise reduction if shooting ISO is 1600 or above — Luminance 30-40, Color 25, keeping Detail high to preserve skin texture. Avoid over-applying noise reduction as it pre-smooths skin and makes subsequent frequency separation less effective. Apply a moderate sharpening (Amount 40-50, Radius 1.0, Detail 25, Masking 70-80) to establish a crisp foundation. Click Done and continue retouching in Photoshop.",
        },
        {
          heading: "Skin Phase: Blemishes to Full Separation",
          body: "Begin skin retouching by addressing everything visible at 100% zoom that is temporary and unwanted: active blemishes, whiteheads, temporary redness, broken capillaries, and minor cuts or marks. Use Spot Healing for isolated marks and Healing Brush for complex areas. Work across the full face before moving on — do not start frequency separation while there are large blemishes remaining, as they will compound the low-frequency layer work.\n\nSet up frequency separation as described in lesson 5-5. On the Low Frequency layer, work for even skin tone using the Mixer Brush (wet 30%, mix 50%) across cheeks, forehead, and chin. On the High Frequency layer, use Clone Stamp (60% opacity) to transplant clean texture over coarser blemish areas. Evaluate at 50% zoom: the skin should now look even and smooth. If over-smoothed, paint black into the frequency separation group's mask to recover original skin character in areas that were over-worked.",
        },
        {
          heading: "Final Integration and Export",
          body: "After all retouching phases are complete, perform a final integration check. Stamp all layers into a single new layer (Cmd/Ctrl + Shift + Option/Alt + E), convert to Smart Object, and apply Filter > Camera Raw Filter for a final pass: micro-adjust exposure, add a gentle S-curve for clarity, and apply subtle color grading at the Camera Raw level for a consistent, integrated look.\n\nFor sharpening, apply Filter > Sharpen > Smart Sharpen (Amount 80-120%, Radius 0.8-1.2px, Reduce Noise 10%) to the stamped Smart Object with a mask protecting out-of-focus areas. Check Shadows and Highlights in the Smart Sharpen dialog to prevent sharpening halos. For final delivery, go to File > Export > Export As, select JPEG, set Quality to 90-100 for print or 70-80 for web, and ensure the color space is Adobe RGB for print or sRGB for web/screen. Never flatten and overwrite the master PSD.",
        },
      ],
    },
    {
      id: "5-17",
      title: "Before/After Comparison Techniques",
      duration: "10 min",
      description:
        "Present your retouching work professionally using split-screen comparisons, layer comps, and client-ready presentation techniques.",
      keyTakeaways: [
        "Layer Comps save layer visibility states for quick before/after switching",
        "Split-screen comparisons are best created with two document windows",
        "Client delivery includes both final and natural versions",
        "Watermark your proofs and always keep the PSD master",
      ],
      content: [
        {
          heading: "Using Layer Comps for Internal Review",
          body: "Layer Comps (Window > Layer Comps) allow you to save different layer visibility configurations within the same document. Create two comps: 'Before' (with all retouching layers and adjustment layers turned off, showing only the original) and 'After' (with all layers at their final state). Toggle between them by clicking their icons in the Layer Comps panel. This is the fastest way to review and present before/after within Photoshop during the retouching process.\n\nLayer Comps also capture layer position and blending mode state in addition to visibility. This means you can save multiple different versions of a retouch — for example, 'Natural', 'Editorial', and 'High Fashion' — each with different active layers, and switch between them instantly. When presenting to clients in person or via screen share, Layer Comps provide a seamless, professional comparison experience.",
        },
        {
          heading: "Side-by-Side Window Comparison",
          body: "For a direct split-screen comparison within Photoshop, open the same file twice: go to Window > Arrange > New Window for [filename] — this opens a second window displaying the same document. Arrange both windows side by side using Window > Arrange > Tile All Vertically. In one window, hide all retouching layers to show the before state; in the other, show all layers for the after state. Both windows display the same file, so any change in one is reflected in the other — but you can set independent zoom and pan positions.\n\nTo scroll both windows synchronously, go to Window > Arrange > Match Zoom and Location for 'All' — useful for comparing different areas of a large portrait at consistent magnification. This setup is particularly useful for showing clients specific areas of improvement at 100% zoom while also keeping the full-face context visible at fit-to-screen.",
        },
        {
          heading: "Client-Ready Proof Delivery",
          body: "When sending proofs for client review, export the before and after versions as separate JPEGs, named clearly: 'Portrait_Lastname_BEFORE.jpg' and 'Portrait_Lastname_AFTER.jpg'. Reduce the proof resolution to approximately 1500-2000px on the long edge — enough to evaluate quality without delivering full-resolution files before payment. Add a subtle watermark using a white, semi-transparent text layer or a logo layer set to Luminosity or Screen blend mode at 30-40% opacity.\n\nFor high-end commercial clients, deliver proofs as a multi-page PDF using File > Automate > PDF Presentation — add both the before and after files to the presentation, with the subject name and date in the PDF's document properties. This creates a single-file deliverable that clients can review on any device. Always retain the full-resolution layered PSD regardless of what proofs you send — client revision requests often come weeks or months after initial delivery.",
        },
      ],
    },
    {
      id: "5-18",
      title: "Final Retouching Project",
      duration: "22 min",
      description:
        "Apply every technique learned in this path to complete a full professional retouch of a complex portrait, from initial assessment to final delivery-ready file.",
      keyTakeaways: [
        "Real professional retouching integrates all techniques in a logical, efficient sequence",
        "Time management matters: know which areas need most attention",
        "Client briefs define the style and intensity of retouching",
        "A strong portfolio retouch demonstrates your skill to future clients",
      ],
      content: [
        {
          heading: "Project Brief and Image Assessment",
          body: "This final project simulates a real commercial retouching assignment: a beauty headshot intended for a cosmetics brand's print advertisement. The brief specifies: impeccable skin with full pore texture preserved, enhanced eyes with intense iris detail, perfectly even lip color, hair with high gloss and no flyaways, clean neutral background, warm-neutral color grade consistent with the brand palette, and delivery at 300 dpi in Adobe RGB for full-page magazine print.\n\nBegin with a thorough image assessment before opening a single tool. At fit-to-screen zoom, note: overall exposure and white balance; major blemishes and skin tone irregularities; eye and lip condition; hair issues; background problems; and existing light quality. Write a brief mental or physical checklist of everything that needs addressing, and estimate time per area. This pre-retouching analysis prevents wasted effort on secondary issues before major issues are addressed.",
        },
        {
          heading: "Executing the Full Retouch Sequence",
          body: "Follow the workflow order established in lesson 5-16 precisely. Begin in Camera Raw: correct exposure (ensure the histogram peak sits around +1/3 to +2/3 exposure to open the skin tones for retouching), set white balance to D55-D65 for neutral studio look, apply lens corrections, and set conservative sharpening and noise reduction. Click Done to bring into Photoshop.\n\nDuplicate and lock the original. Build your layer group structure: Cleanup, Skin, D&B, Features, Hair, Background, Grade. In the Cleanup group, address all blemishes and temporary marks using Spot Healing and Healing Brush on empty layers with 'Sample All Layers'. In the Skin group, execute frequency separation — blur the Low Frequency layer at a radius appropriate to the file resolution, apply Image with Subtract blending, set High Frequency to Linear Light, and retouch both layers. In the D&B group, create two 50% gray Soft Light layers for macro and micro dodge and burn and work the facial sculpting for 10-15 minutes minimum.",
        },
        {
          heading: "Feature and Hair Refinement",
          body: "In the Features group, complete eye enhancement: brighten and color-correct whites with a masked Hue/Saturation layer, enhance iris with a masked Curves S-curve, and apply High Pass sharpening to the iris on a Linear Light layer. Check catchlight position and paint or refine as needed. Execute teeth whitening with a Yellows Saturation reduction and Lightness increase. Enhance lip color with a Reds Saturation boost and optional Hue shift.\n\nIn the Hair group, remove flyaways methodically — starting with those crossing skin (Healing Brush) and those crossing background (manual paint sampling). Add a shine pass on a Soft Light gray layer using gentle dodging along the main hair flow. Check for hot spots from the flash and burn them down slightly. Verify that the hair tone is consistent from root to tip — color variation from hot-spot reflection can be corrected with a Selective Color or Hue/Saturation adjustment layer masked to the affected section.",
        },
        {
          heading: "Background, Grade, and Final Delivery",
          body: "In the Background group, clean any marks or irregularities on the seamless paper backdrop using Content-Aware Fill and Clone Stamp. Check that the vignette (natural or added) frames the face correctly — if the corners are too bright or distracting, add a gentle vignette using a Curves layer with an inverted radial gradient mask, darkening the outer 20% of the frame by -0.3 to -0.5 stops.\n\nIn the Grade group, apply a Curves adjustment with warm highlights (Red channel lift) and cool shadows (Blue channel shadow raise, subtle) to create the brand's warm-neutral signature. Add a Color Lookup adjustment at 30-40% opacity for a cinematic final touch. Stamp all layers (Cmd/Ctrl + Shift + Option/Alt + E), apply Smart Sharpen, and export as a 300 dpi TIFF in Adobe RGB for print, plus a 1500px JPEG sRGB proof for client approval. Archive the full PSD with all layers intact. This completed project is your portfolio piece demonstrating professional-grade retouching capability.",
        },
      ],
    },
  ],
};
