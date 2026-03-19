import { PathData } from "./types";

export const path4: PathData = {
  id: 4,
  title: "Color & Tone Correction",
  level: "Intermediate",
  levelColor: "var(--level-intermediate)",
  description:
    "Master histograms, curves, color grading, and professional correction techniques to make every image look its best.",
  lessons: [
    {
      id: "4-1",
      title: "Understanding Histograms",
      duration: "12 min",
      description:
        "Learn to read histograms to diagnose exposure and tonal problems before touching any sliders.",
      keyTakeaways: [
        "Read histogram peaks to identify overexposure and underexposure",
        "Understand the three tonal zones: shadows, midtones, and highlights",
        "Use the histogram panel to monitor changes in real time",
        "Recognize a clipped histogram and what it means for print and screen",
      ],
      content: [
        {
          heading: "What Is a Histogram?",
          body: "A histogram is a bar graph that maps every pixel in your image to a brightness value between 0 (pure black) and 255 (pure white). The height of each bar tells you how many pixels share that brightness level. Tall bars on the left side of the graph represent a large number of dark pixels; tall bars on the right represent bright pixels. The overall shape of the histogram tells the story of your image's tonal distribution at a glance.\n\nTo open the Histogram panel in Photoshop, go to Window > Histogram. Make sure the Channel drop-down at the top of the panel is set to 'Luminosity' for a true brightness reading, or switch to 'RGB' to see an overlay of all three color channels simultaneously. You can also see a live histogram inside Camera Raw and Lightroom-style panels.",
        },
        {
          heading: "Reading the Three Tonal Zones",
          body: "Professionals divide the histogram into three zones. The left third (values 0–85) is the shadow zone. The middle third (values 86–170) is the midtone zone. The right third (values 171–255) is the highlight zone. A well-exposed photograph typically has pixel data spread across all three zones, with no extreme pileup against either edge.\n\nA histogram that is heavily weighted to the left indicates an underexposed or 'dark' image — the photo may look muddy or lack visible detail in shadows. A histogram pushed hard to the right indicates overexposure, where bright areas wash out and lose texture. Neither shape is automatically wrong — a high-key fashion shot intentionally lives on the right — but knowing what 'normal' looks like helps you identify problems faster than trusting your monitor alone.",
        },
        {
          heading: "Clipping: The Silent Detail Killer",
          body: "Clipping occurs when pixel values pile up against the absolute left (0) or absolute right (255) wall of the histogram. Those pixels have lost all recoverable detail — a clipped shadow is pure black with no texture, and a clipped highlight is pure white with no texture. In print this is particularly damaging because ink cannot reproduce zero-detail areas gracefully.\n\nPhotoshop gives you a visual clipping warning inside Camera Raw: hold Alt (Windows) or Option (Mac) while dragging the Exposure or Highlights slider and the canvas turns black. Any colored or white areas that appear represent clipped pixels in that channel. In Levels and Curves, you can also hold Alt/Option while dragging the Input Levels black or white point sliders to trigger the same warning overlay. Your goal is usually to keep the histogram just inside both walls, leaving a small gap on each end.",
        },
        {
          heading: "The Color Channel Histograms",
          body: "Switching the Histogram panel to 'Colors' mode overlays red, green, and blue channel graphs on top of each other. When one color channel's histogram is shifted noticeably left or right compared to the others, your image has a color cast. For example, if the blue channel histogram sits noticeably to the right of red and green, the image likely appears cooler or more blue-tinted than intended.\n\nThis diagnostic technique is invaluable before you start correcting. Instead of guessing why a photo 'looks wrong,' check the color channel histograms first. A skin-tone portrait should have red sitting slightly right of green, with blue slightly left — that is the natural warm bias of human skin. Any deviation from that pattern is a clue about what correction to apply and in which direction.",
        },
      ],
    },
    {
      id: "4-2",
      title: "Levels Deep Dive",
      duration: "13 min",
      description:
        "Go beyond basic brightness adjustments and use Levels to set precise black points, white points, and midtone balance.",
      keyTakeaways: [
        "Set black and white points using the Input Levels sliders",
        "Use the midtone (gamma) slider to shift overall brightness without blowing highlights",
        "Output Levels limit the tonal range for soft or faded looks",
        "The Auto button applies automatic correction — know when to use it and when to avoid it",
      ],
      content: [
        {
          heading: "Opening Levels as an Adjustment Layer",
          body: "Never apply Levels directly to a pixel layer — always use an Adjustment Layer so your edit is non-destructive. Go to Layer > New Adjustment Layer > Levels, or click the Levels icon in the Adjustments panel (Window > Adjustments). This creates a Levels adjustment layer with a layer mask that you can paint on to limit the correction to specific areas.\n\nThe Levels dialog shows the same histogram you saw in the Histogram panel, but now it has three input sliders underneath: a black triangle on the left (currently at 0), a gray triangle in the middle (currently at 1.00), and a white triangle on the right (currently at 255). There are also two Output Levels sliders below the gradient bar at the bottom. These six controls are your complete Levels toolkit.",
        },
        {
          heading: "Setting the Black and White Points",
          body: "The most important use of Levels is setting accurate black and white points to maximize contrast. If your histogram shows a gap on the left — meaning no pixels are truly black — drag the black Input slider right until it reaches the base of the data. Watch the image snap to life with richer shadow detail. For a gap on the right, drag the white Input slider left until it meets the data edge.\n\nFor a photographic still life where the darkest object should be a dark gray fabric at value 20, set the black Input slider to approximately 20. For a product shot where the background should be pure white at 255, drag the white slider left to where the histogram data ends. A practical shortcut: hold Alt (Windows) or Option (Mac) while dragging either end slider to see the clipping preview overlay described in the previous lesson, so you stop exactly at the last pixels before clipping.",
        },
        {
          heading: "The Midtone (Gamma) Slider",
          body: "The gray middle slider controls gamma — the brightness of midtone values — without affecting the black or white point you just set. Dragging it left to a value like 1.50 brightens midtones, lifting the overall feel of the image without blowing out the highlights. Dragging it right to around 0.70 darkens midtones, useful for a dramatic moody look or for correcting a slightly overexposed scene.\n\nFor a typical underexposed indoor portrait, start with black point at 15, white point at 230, and then move the gamma slider left to about 1.30. You will see the skin tones brighten and the background open up without any highlight clipping. This three-slider approach is more controlled than the single Brightness slider in Brightness/Contrast because each slider operates independently.",
        },
        {
          heading: "Output Levels for Intentional Tonal Limiting",
          body: "The Output Levels sliders at the bottom of the Levels dialog limit your tonal range instead of expanding it. Dragging the black Output slider right — say, to 20 — prevents any pixel in the image from reaching true black, creating a lifted shadow or 'faded film' aesthetic. Dragging the white Output slider left to 235 prevents true white, giving a slightly matte finish that is popular in portrait and lifestyle photography.\n\nThis technique is especially useful for preparing images for offset printing. Many print shops request that shadows not go below 5% ink and highlights not exceed 95% to avoid ink pooling or blowout on press. Setting Output Levels to 13 on the shadow end and 242 on the highlight end safely constrains the image to that printable range without changing the visual tonal balance.",
        },
        {
          heading: "The Auto Correction Options",
          body: "Clicking the Auto button in the Levels panel applies an automatic tone correction. Before using it, click the Options button to see the algorithm it uses. The default is 'Enhance Per Channel Contrast,' which separately stretches each RGB channel. This can introduce color casts. For color-neutral correction, choose 'Find Dark and Light Colors' and check 'Snap Neutral Midtones' — this algorithm is far more reliable on photographs.\n\nThe Auto correction is a great starting point for batch processing a series of similarly lit images, but for hero images or client work, set your points manually. Professional retouchers use Auto only on low-priority images or as a diagnostic tool to see what Photoshop thinks the 'correct' values should be, then fine-tune from there.",
        },
      ],
    },
    {
      id: "4-3",
      title: "Curves Mastery",
      duration: "18 min",
      description:
        "Master the most powerful tone and color tool in Photoshop — Curves — for everything from gentle contrast to complex color grading.",
      keyTakeaways: [
        "Add control points to adjust specific tonal ranges independently",
        "Create an S-curve for classic contrast enhancement",
        "Use individual RGB channel curves to correct color casts",
        "The On-Image Adjustment tool lets you click directly on the photo to add curve points",
      ],
      content: [
        {
          heading: "The Curves Interface Explained",
          body: "Add a Curves Adjustment Layer via Layer > New Adjustment Layer > Curves. The diagonal line running from the bottom-left to the top-right of the graph represents a neutral, unchanged image — input values (original) map directly to identical output values. The horizontal axis is input (original brightness) and the vertical axis is output (adjusted brightness). When you push a point on the curve upward, you are telling Photoshop to make pixels of that brightness level lighter. Pulling it downward makes them darker.\n\nYou can add up to 14 control points on the curve by clicking directly on the line. To delete a point, drag it off the edge of the graph or click it and press Delete. The Channel drop-down at the top switches between the composite RGB curve and individual Red, Green, and Blue channel curves — this is where color correction happens.",
        },
        {
          heading: "The Classic S-Curve for Contrast",
          body: "The single most-used Curves technique is the S-curve. Click the curve at approximately the 1/4 mark from the bottom (shadows) and drag it down by about 10 units to darken shadows. Then click at approximately the 3/4 mark from the bottom (highlights) and drag it up by about 10 units to brighten highlights. The resulting S-shape simultaneously deepens shadows and lifts highlights, producing crisp, punchy contrast without crushing the midtones.\n\nFor a precise S-curve, try these values: add a point at Input 64, Output 54 (shadow pull-down) and a point at Input 192, Output 202 (highlight push-up). You can type exact values into the Input and Output boxes below the curve graph once a point is selected. A subtle S-curve with shifts of just 8 units each way is ideal for portrait work; a more aggressive version with 20-unit shifts works well for dramatic landscape or product imagery.",
        },
        {
          heading: "Correcting Color Casts with Individual Channels",
          body: "Switch the Channel drop-down to Red. Dragging the midpoint of the Red curve upward adds red to the midtones; dragging it downward removes red and adds cyan. Switch to Green: upward adds green, downward adds magenta. Switch to Blue: upward adds blue, downward adds yellow. Using these relationships, you can neutralize any color cast.\n\nFor a classic fluorescent light cast (green-yellow tinge), lower the Green channel curve midpoint slightly (Input 128, Output 118) and raise the Blue channel curve midpoint a touch (Input 128, Output 135). For a warm orange sunset cast that you need to neutralize for a product shot, lower the Red channel (Input 128, Output 115) and raise the Blue channel (Input 128, Output 140). Always check a neutral gray or white area in the image — it should have equal R, G, and B values when properly corrected.",
        },
        {
          heading: "The On-Image Adjustment Tool",
          body: "The On-Image Adjustment tool is the most intuitive way to use Curves. Click the hand icon with arrows (top-left of the Curves panel) to activate it, then hover your cursor over the photo. Click on any area — a shadow, a midtone skin tone, a bright sky — and Photoshop automatically places a control point on the curve at that exact brightness level. Drag upward to brighten that tonal range, downward to darken it.\n\nFor portrait retouching, activate the on-image tool on the RGB composite curve, click on the subject's skin, and drag up slightly to brighten just the skin tones without affecting shadows or highlights. Then click a shadow area in the background and drag down to deepen it for separation. This workflow takes seconds compared to manually placing points by guessing input values, and it directly connects the adjustment to the visual result you see on screen.",
        },
        {
          heading: "Advanced: Luminosity Blending for Color-Safe Contrast",
          body: "When you apply a Curves S-curve in normal blend mode, it boosts contrast but also increases color saturation as a side effect, which can make skin tones look oversaturated and unnatural. To avoid this, change the Curves Adjustment Layer's blend mode to Luminosity in the Layers panel. Luminosity mode applies only the brightness change from the curve, completely ignoring the saturation shift.\n\nThe reverse trick is also powerful: set a color-only Curves adjustment to Color blend mode. Now the curve affects only color, not brightness — useful when you want to warm or cool an image without changing its overall exposure. Together, stacking a Luminosity Curves layer for contrast and a Color Curves layer for hue work is a core technique in professional retouching workflows, keeping tone and color corrections cleanly separated and independently adjustable.",
        },
      ],
    },
    {
      id: "4-4",
      title: "Brightness & Contrast the Right Way",
      duration: "9 min",
      description:
        "Learn when Brightness/Contrast is appropriate and how its Legacy mode differs from the modern algorithm.",
      keyTakeaways: [
        "Modern Brightness/Contrast uses a non-linear algorithm that protects highlights and shadows",
        "Legacy mode clips aggressively — avoid it for photographs",
        "Brightness/Contrast is best for quick global adjustments, not fine tonal work",
        "Combine with a luminosity mask for targeted corrections",
      ],
      content: [
        {
          heading: "The Old vs. New Algorithm",
          body: "Before Photoshop CS3, the Brightness/Contrast tool used a simple linear shift: increasing Brightness by 50 added 50 to every pixel's value uniformly, clipping anything above 205 to pure white. This was notoriously destructive and the reason experienced users avoided it entirely. The modern algorithm, introduced in CS3 and used by default today, behaves more like a gentle Curves adjustment — it lifts midtones more than it shifts the extreme ends, preserving highlight and shadow detail far better.\n\nTo see the difference, add a Brightness/Contrast Adjustment Layer and check the 'Use Legacy' checkbox in the Properties panel. Drag Brightness to +80 and watch how aggressively the highlights clip compared to the modern mode. Then uncheck Legacy — the image opens up with the same +80 value but retains much more detail in the sky or bright areas. For any photographic work, leave Legacy unchecked.",
        },
        {
          heading: "Practical Use Cases",
          body: "Brightness/Contrast excels at quick global exposure fixes where you need a fast result and the image does not require precise tonal control. If a client sends you a presentation photo that is simply too dark overall, a Brightness adjustment of +25 with a Contrast boost of +15 can fix it in ten seconds. For hero images, editorial work, or anything going to print, reach for Curves instead.\n\nA useful combination is Brightness/Contrast for quick fixes followed by a Curves adjustment to refine the result. Set Brightness to +20 to lift the overall exposure, then add a Curves layer and pull the shadows down slightly to +5 / Output 0 to recover the depth you lost. This two-layer stack gives you the speed of Brightness/Contrast with the precision of Curves as a finishing pass.",
        },
        {
          heading: "Targeted Corrections with Luminosity Masks",
          body: "Brightness/Contrast applied globally affects every pixel equally. For targeted use — for example, brightening only the subject's face without affecting the dark background — paint black on the Brightness/Contrast Adjustment Layer's mask over areas you do not want affected. Use a soft brush at 30–50% opacity for gradual transitions.\n\nFor an even more precise mask, go to Select > Color Range and choose Highlights or Midtones to create a selection based on luminosity. With that selection active, add the Brightness/Contrast Adjustment Layer — Photoshop automatically converts the selection into the layer mask, so the brightness boost applies only to the tonal range you selected. This technique is fast and effective for recovering a face in a backlit portrait without blowing out an already-bright background.",
        },
      ],
    },
    {
      id: "4-5",
      title: "Hue/Saturation Advanced",
      duration: "14 min",
      description:
        "Go far beyond basic saturation boosts — use targeted color range controls to fix individual colors without affecting the rest of the image.",
      keyTakeaways: [
        "Use the color range drop-down to target a single color family",
        "The on-image sampling tool selects the exact hue range from the photo",
        "Colorize mode converts the image to a tinted monochrome",
        "Adjusting Lightness in Hue/Saturation is less precise than Curves — use it sparingly",
      ],
      content: [
        {
          heading: "Targeting Specific Color Ranges",
          body: "The real power of Hue/Saturation lies in its color range targeting. Add a Hue/Saturation Adjustment Layer (Layer > New Adjustment Layer > Hue/Saturation). By default the channel is set to 'Master,' affecting all colors. Click the drop-down and choose Reds, Yellows, Greens, Cyans, Blues, or Magentas to isolate that family.\n\nFor a portrait where the subject's red shirt looks too orange, switch to Reds and drag the Hue slider to -8. The shirt shifts toward true red while skin tones, which also have red in them, are largely protected because skin sits in the yellow-red overlap zone rather than pure red. For a landscape where the grass looks yellow-green instead of vivid green, switch to Yellows and push Hue to +10 to shift yellow toward green, then switch to Greens and increase Saturation by +20 for richness.",
        },
        {
          heading: "The On-Image Sampling Tool",
          body: "For precise targeting beyond the six preset color families, use the on-image sampling eyedropper inside Hue/Saturation. Click the hand/finger icon on the left side of the Properties panel, then click directly on any color in your photo. Photoshop reads the hue at that point and sets the color range automatically, showing you the targeted range as a gradient band at the bottom of the Hue/Saturation dialog.\n\nThe four triangles in the gradient band define the selection feather: the two inner triangles mark the core range (fully affected), and the two outer triangles mark the falloff (partially affected). You can drag these triangles manually to narrow or widen the targeted hue range. Shift-click additional colors on the photo to expand the selection. Alt/Option-click to subtract colors from the selection. For replacing the color of a product — say, changing a blue mug to teal — this tool is faster and more accurate than any manual selection.",
        },
        {
          heading: "Correcting Oversaturation and Skin Tones",
          body: "Oversaturation is one of the most common beginner mistakes. An image saturated globally by +40 may look vivid on a phone screen but look garish when printed. The professional approach is selective saturation: boost only the colors that benefit from richness (sky blues, foliage greens) and reduce or leave untouched the colors that oversaturate quickly (skin tones, reds).\n\nFor skin tones, switch to Reds in Hue/Saturation and reduce Saturation by -10 to -15. Switch to Yellows and reduce by -5. This prevents skin from looking sunburned when you do a global saturation boost. Then switch back to Master and boost Saturation by +15 — the overall image gains vibrancy, but the skin tones remain natural because you pre-reduced their individual channels.",
        },
        {
          heading: "Colorize Mode for Tinted Looks",
          body: "Checking the Colorize checkbox converts the entire image to a monochrome tint, overriding all existing colors. Set Hue to define the color (0 = red, 120 = green, 240 = blue, 30 = warm orange/sepia) and Saturation to control intensity. A Hue of 30 and Saturation of 15 produces a classic sepia tone. Hue 210, Saturation 20 gives a cool blue-tone film look favored in documentary photography.\n\nColorize is best applied as an Adjustment Layer so you can reduce the layer's opacity to blend the tinted version with the full-color original underneath. At 50% opacity, a sepia Colorize layer creates a warm duotone effect without completely removing the original color. This technique is often used in wedding photography to give a warm, timeless feel to selected shots in an album.",
        },
      ],
    },
    {
      id: "4-6",
      title: "Color Balance",
      duration: "11 min",
      description:
        "Use Color Balance to add warmth or coolness to shadows, midtones, and highlights independently for cinematic color grading.",
      keyTakeaways: [
        "Color Balance adjusts shadows, midtones, and highlights independently",
        "The three sliders shift color along Cyan-Red, Magenta-Green, and Yellow-Blue axes",
        "Warm shadows and cool highlights create a classic cinematic split tone",
        "Preserve Luminosity checkbox prevents tonal shifts when making color moves",
      ],
      content: [
        {
          heading: "How Color Balance Works",
          body: "Add a Color Balance Adjustment Layer via Layer > New Adjustment Layer > Color Balance. Three radio buttons at the top — Shadows, Midtones, and Highlights — let you target separate tonal zones. Each zone has three sliders: Cyan/Red, Magenta/Green, and Yellow/Blue. Dragging toward Red adds red to that tonal zone; dragging toward Cyan removes red (adds cyan). The sliders range from -100 to +100, but in practice, moves of more than ±30 quickly become extreme.\n\nAlways keep the 'Preserve Luminosity' checkbox checked. Without it, shifting color also shifts brightness — adding red to the highlights will also brighten them slightly, which is usually undesirable. Preserve Luminosity mathematically maintains the original luminance values while changing only the color balance.",
        },
        {
          heading: "The Cinematic Split Tone Technique",
          body: "The most popular Color Balance technique in film and commercial photography is the orange-teal split tone: warm shadows and cool highlights. Select Shadows and push the Yellow/Blue slider to +15 (toward yellow-orange) and the Cyan/Red slider to +10. Then select Highlights and push the Yellow/Blue slider to -20 (toward blue-teal). This creates the warm shadow / cool highlight separation seen in countless Hollywood blockbusters and Netflix originals.\n\nFor a more subtle version, keep the shadow move at +8 Yellow and the highlight move at -10 Blue. Apply the layer at 70% opacity for a natural blend. This technique works especially well on outdoor portraits, urban cityscapes, and any scene with a mix of warm artificial light and cool daylight — the grading emphasizes and stylizes what is already there in the scene.",
        },
        {
          heading: "Correcting Mixed Lighting",
          body: "Color Balance is particularly effective for fixing images shot under mixed lighting — for example, a room lit by both tungsten lamps (warm) and window light (cool/daylight). The shadows near the lamps are warm-orange while the highlights near the window are blue-cool. Rather than trying to neutralize both with a single white balance correction, you can use Color Balance to push the shadows cooler and the highlights warmer to meet in the middle.\n\nSet Shadows: Cyan/Red to -10 (toward cyan, cooling them), Yellow/Blue to -10. Set Highlights: Cyan/Red to +8, Yellow/Blue to +10 (warming them). The two tonal zones now share a more consistent color temperature, and the image reads as naturally lit even though it technically was not. This approach is faster and more controllable than trying to paint masked corrections over every warm and cool region individually.",
        },
        {
          heading: "Color Balance for Skin Tone Refinement",
          body: "On portrait close-ups, Color Balance in the Midtones zone is excellent for fine-tuning the quality of skin tones. If a subject looks too red or flushed in their skin, switch to Midtones and move the Cyan/Red slider slightly toward Cyan (-8 to -12). If they look pale or desaturated, add a small Red push of +8 and a Yellow push of +5.\n\nFor older, more experienced retouchers, the preferred workflow is: use Curves for major tonal and color corrections, then add a Color Balance layer on top for fine mood adjustments. Curves handles the heavy lifting accurately; Color Balance handles the atmospheric finish. Because Color Balance is applied as a separate non-destructive Adjustment Layer, you can always dial it back by reducing the layer's opacity if a client requests a more neutral look.",
        },
      ],
    },
    {
      id: "4-7",
      title: "Selective Color",
      duration: "13 min",
      description:
        "Fine-tune individual color families with CMYK-based controls for precise corrections that Hue/Saturation cannot achieve.",
      keyTakeaways: [
        "Selective Color uses CMYK ink percentages to adjust each color family",
        "The Relative method changes values proportionally; Absolute shifts by a fixed amount",
        "Target Neutrals and Blacks to correct grays and shadows without touching colors",
        "Invaluable for print preparation and fixing specific object colors",
      ],
      content: [
        {
          heading: "Understanding the CMYK Model in Selective Color",
          body: "Selective Color (Layer > New Adjustment Layer > Selective Color) works differently from every other color tool in Photoshop — it uses a CMYK model regardless of whether your document is RGB. Each color family (Reds, Yellows, Greens, Cyans, Blues, Magentas, Whites, Neutrals, Blacks) can be adjusted using four sliders: Cyan, Magenta, Yellow, and Black. Adding Cyan ink to Reds, for example, pushes those reds toward a cooler, more desaturated tone.\n\nThis CMYK approach is particularly powerful for print professionals preparing images for offset lithography, because it maps directly to the physical inks that the press will use. But it is equally useful in RGB digital work because it allows corrections that are impossible with a simple Hue/Saturation shift — you can add yellow to greens (making foliage warmer) while simultaneously removing cyan (making it less blue-green), achieving a very specific botanical look.",
        },
        {
          heading: "Relative vs. Absolute Method",
          body: "At the bottom of the Selective Color dialog are two radio buttons: Relative and Absolute. Relative (the default) calculates the change as a percentage of the existing ink amount. If a color already contains 50% cyan and you add +20% cyan in Relative mode, the result is 50% + (20% of 50%) = 60% cyan. The change scales proportionally, so it is gentler on areas with less of that color.\n\nAbsolute mode adds or removes the stated flat percentage regardless of existing values. If a color has 50% cyan and you add +20% in Absolute mode, you get exactly 70%. Absolute gives stronger, more predictable results and is preferred when you know exactly how much of a shift you need. Start with Relative for subtle corrections, switch to Absolute when you need a definitive look.",
        },
        {
          heading: "Correcting Foliage, Skies, and Skin",
          body: "For oversaturated yellow-green foliage, choose Yellows in Selective Color. Reduce Yellow by -20 and increase Cyan by +15. This shifts leaves toward a cooler, more natural mid-green. For vivid blue skies that look slightly purple, choose Blues and reduce Magenta by -15 while increasing Cyan by +10 — this pushes the sky toward a purer, cleaner blue.\n\nFor skin tones, the Reds color family is your primary target. To reduce redness in flushed skin, choose Reds and reduce Magenta by -10 and Cyan by -5. To warm cool, pale skin, choose Reds and add Yellow by +12 and reduce Cyan by -8. Then also check the Yellows family and add Yellow by +5 — skin sits in both the red and yellow range depending on complexion, so targeting both gives the most complete correction.",
        },
        {
          heading: "Working with Neutrals and Blacks",
          body: "The Neutrals and Blacks entries in the color family list are special — they target gray and shadow tones rather than a specific hue. Neutrals affect mid-gray values (a mix of R, G, and B that is neither warm nor cool) and are perfect for removing color casts from gray areas like concrete, asphalt, neutral backgrounds, or overcast skies.\n\nTo remove a green cast from a gray concrete wall in an architectural photo, select Neutrals and reduce Cyan by -8 and Green (by adding Magenta) by +12. The Blacks color family targets only the darkest shadow values. Adding a small amount of Cyan (+5) and reducing Yellow (-5) to Blacks gives shadows a slightly cool, cinematic quality — a subtle but effective grading touch. This is far less destructive than trying to color shadows with Curves, because Selective Color limits its effect strictly to those deep shadow tones.",
        },
      ],
    },
    {
      id: "4-8",
      title: "Vibrance vs. Saturation",
      duration: "10 min",
      description:
        "Understand the critical difference between Vibrance and Saturation to boost color without destroying skin tones.",
      keyTakeaways: [
        "Saturation boosts all colors equally, risking skin tone damage",
        "Vibrance boosts unsaturated colors first, protecting already-saturated hues",
        "Combine Vibrance +30 with Saturation -5 for a natural yet punchy look",
        "Negative Vibrance creates a selective desaturation useful for creative looks",
      ],
      content: [
        {
          heading: "The Core Difference",
          body: "Both Vibrance and Saturation are found in the same Adjustment Layer (Layer > New Adjustment Layer > Vibrance). Saturation is a blunt instrument: set it to +50 and every pixel in the image has its saturation increased by exactly 50%, regardless of how saturated it already is. Highly saturated colors clip into pure, neon hues. Skin tones, which are naturally in the orange-yellow zone, quickly become waxy and artificial.\n\nVibrance is intelligent. It uses a non-linear algorithm that identifies the least-saturated colors in the image and boosts them the most, while barely touching colors that are already highly saturated. It also specifically recognizes skin tone hue ranges and protects them from oversaturation. Dragging Vibrance to +70 makes a flat, muted landscape look vivid without the sky turning neon blue or faces turning orange.",
        },
        {
          heading: "Practical Combinations",
          body: "The most popular professional combination is Vibrance +25 to +35 with Saturation at 0 or slightly negative (-5 to -10). The Vibrance boost adds punch and richness to flat areas like midtone colors and shadows, while the slight Saturation reduction pulls back any already-vivid colors that might be edging toward oversaturation. The net result is a more evenly saturated image that looks naturally vivid rather than digitally processed.\n\nFor social media and lifestyle photography, Vibrance +30, Saturation -8 is nearly a universal starting point. For landscape photography where you want maximum impact, Vibrance +40, Saturation +10 works well because there are typically no skin tones to protect. For portraits, stay at Vibrance +20, Saturation -10 or lower to keep skin looking natural under studio or outdoor lighting.",
        },
        {
          heading: "Creative Negative Vibrance",
          body: "Setting Vibrance to a negative value (-40 to -70) while keeping Saturation at 0 produces a selective desaturation effect — the most-saturated colors (vivid blues, greens, reds) drain toward gray while skin tones and less-saturated colors remain more color-rich. This creates the popular 'bleach bypass' or desaturated cinema look seen in films like Saving Private Ryan.\n\nFor a portrait with a negative Vibrance creative grade, try Vibrance -50, Saturation +5. The background colors drain, the sky becomes moody and muted, but the subject's skin retains some warmth because skin tones sit in the protected range. Reduce the Vibrance Adjustment Layer's opacity to 60–70% to keep the effect from looking too heavy, and change the blend mode to Color if you want to preserve the original luminance values.",
        },
      ],
    },
    {
      id: "4-9",
      title: "Camera Raw Filter",
      duration: "17 min",
      description:
        "Apply the full power of Adobe Camera Raw as a filter to any layer — JPEG, PNG, or composited PSD — for complete non-destructive editing.",
      keyTakeaways: [
        "Convert to Smart Object before applying Camera Raw Filter for re-editability",
        "The Basic panel Temp and Tint sliders are the fastest white balance tools",
        "HSL/Color panel targets individual hues more visually than Hue/Saturation",
        "Color Grading panel replaces Split Tone for shadows/midtones/highlights color work",
      ],
      content: [
        {
          heading: "Applying Camera Raw Filter Non-Destructively",
          body: "The Camera Raw Filter (Filter > Camera Raw Filter) brings the full Adobe Camera Raw (ACR) engine to any Photoshop layer, not just raw files. To keep it fully re-editable, first right-click the layer and choose 'Convert to Smart Object.' Then apply Filter > Camera Raw Filter. The filter is added as a Smart Filter — double-click it in the Layers panel at any time to reopen Camera Raw with all your previous settings intact.\n\nIf you skip the Smart Object conversion and apply Camera Raw Filter directly to a pixel layer, the changes are permanently baked in. For client work or anything you may need to revise, always use the Smart Object workflow. The small performance overhead is worth the flexibility. You can also stack multiple Camera Raw Filters as Smart Filters on the same Smart Object layer.",
        },
        {
          heading: "White Balance with Temp and Tint",
          body: "In the Camera Raw Basic panel, the Temperature slider (blue to yellow axis) and Tint slider (green to magenta axis) control white balance. A higher Temperature value (more yellow) warms the image; a lower value (more blue) cools it. Tint corrects green or magenta casts that Temperature alone cannot fix — fluorescent lighting often requires a Tint push toward +15 Magenta alongside a Temperature correction.\n\nFor a quick fix, click the White Balance eyedropper in Camera Raw (keyboard shortcut I) and click on something in the photo that should be neutral gray or white — a white wall, a gray card, a white shirt. Camera Raw instantly adjusts Temp and Tint to make that clicked area neutral. From there, nudge Temperature ±200 to adjust the artistic warmth. For wedding photography on an overcast day, a Temperature of 5800K with Tint +8 typically produces natural, warm skin tones.",
        },
        {
          heading: "Tone Controls: Exposure Through Blacks",
          body: "The six tone sliders in the Basic panel give you control over six distinct tonal zones. Exposure affects the overall midtone brightness (like gamma in Levels). Contrast increases or decreases the difference between light and dark tones. Highlights controls only bright areas — pulling Highlights to -60 recovers blown sky detail without affecting shadows. Shadows lifts or deepens shadow detail — pushing Shadows to +40 opens up underexposed shadow areas while leaving highlights untouched.\n\nWhites sets the absolute white point of the image (like the white Input slider in Levels). Blacks sets the shadow depth (like the black Input slider). A typical starting recipe for an underexposed outdoor photo: Exposure +0.8, Highlights -70, Shadows +50, Whites +20, Blacks -10. This 'contrast expansion' approach recovers dynamic range from both ends simultaneously, which is the foundation of every professional raw processing workflow.",
        },
        {
          heading: "The HSL / Color Panel for Precise Hue Work",
          body: "The HSL/Color panel in Camera Raw offers the most visual and interactive color targeting in the entire Adobe ecosystem. Switch between Hue, Saturation, and Luminance tabs and you see sliders for eight color ranges: Red, Orange, Yellow, Green, Aqua, Blue, Purple, and Magenta. The eight-range system is more granular than Hue/Saturation's six ranges, and the Luminance tab is particularly powerful — it adjusts the brightness of specific colors.\n\nFor a dramatic sky treatment, go to Luminance and pull Blue to -40 and Aqua to -30. The sky darkens while everything else stays the same. For a classic 'orange and teal' portrait grade, go to Hue and shift Orange to +8 (shifts skin toward more golden warmth) and Aqua to -15 (shifts teal toward more blue). In Saturation, push Orange to +15 and Blue to +25. This produces the iconic look in about 30 seconds.",
        },
        {
          heading: "Color Grading Panel for Creative Looks",
          body: "The Color Grading panel (formerly Split Tone) has three color wheels for Shadows, Midtones, and Highlights, plus a global Balance slider. Click the center of a wheel and drag outward to apply a hue and saturation to that tonal zone. Drag toward orange-yellow for warm shadows; drag toward blue-teal for cool highlights. The Balance slider shifts which tones are classified as 'shadows' versus 'midtones,' letting you push the warm zone into a wider or narrower area.\n\nFor a warm summer portrait grade: Shadows wheel — drag to about 30° (warm orange) at 15% saturation. Highlights wheel — drag to 200° (cool blue) at 10% saturation. Midtones wheel — add a touch of 40° (golden yellow) at 8% saturation. This three-zone approach to color grading is far more flexible than Color Balance because each wheel targets luminance-based zones using a perceptual, continuous model rather than hard cutoffs.",
        },
      ],
    },
    {
      id: "4-10",
      title: "Color Lookup Tables (LUTs)",
      duration: "12 min",
      description:
        "Apply cinematic color grades instantly with LUTs, and learn how to manage, create, and blend them professionally.",
      keyTakeaways: [
        "A LUT maps input color values to output values for instant grade application",
        "Use the Color Lookup Adjustment Layer to apply .cube, .3dl, or .look files",
        "Reduce the layer opacity to blend the LUT grade with the original image",
        "LUTs are resolution-independent and work identically at any image size",
      ],
      content: [
        {
          heading: "What Is a LUT and How Does It Work?",
          body: "A Color Lookup Table (LUT) is a mathematical map that takes every possible input color value (R, G, B) and replaces it with a specified output value. Think of it as a pre-built Curves/Color Balance/Hue-Saturation correction stored in a single file. A LUT file (.cube, .3dl, .look, .mga) can encode any combination of tone, contrast, and color shift — from a simple warm-up to a complex multi-stage film emulation — and apply it in a single click at essentially zero processing time.\n\nPhotoshop supports LUTs natively through the Color Lookup Adjustment Layer. Add one via Layer > New Adjustment Layer > Color Lookup. In the Properties panel, choose a 3DLUT File, Abstract, or Device Link from the three drop-down menus. The 3DLUT File drop-down is where you load external .cube or .3dl LUT files. Photoshop ships with dozens of built-in LUTs including cinematic presets like 'Crisp_Warm,' 'Futuristic_Bleak,' and 'FoggyNight.'",
        },
        {
          heading: "Loading and Managing External LUTs",
          body: "To load a custom .cube LUT you downloaded or received from a colorist, click the 3DLUT File drop-down in the Color Lookup Properties panel and choose 'Load 3D LUT.' Navigate to your .cube file and click Open. The LUT applies immediately. To make a LUT available in the drop-down permanently (so you do not have to load it each time), place the .cube file in the folder: Applications > Adobe Photoshop [version] > Presets > 3DLUTs on Mac, or Program Files > Adobe > Adobe Photoshop [version] > Presets > 3DLUTs on Windows. Restart Photoshop and the LUT appears in the list.\n\nFor a production workflow, organize your LUT library into folders by category: 'Film Emulation,' 'Cinematic,' 'Creative,' 'Technical.' Use the Load 3D LUT option for quick one-off tests and the Presets folder for your go-to looks. Many professional LUT packs come with 20–50 files, so staying organized prevents wasting time hunting through a flat list.",
        },
        {
          heading: "Blending LUTs with Opacity and Masks",
          body: "Rarely should a LUT be applied at 100% opacity. Most cinematic LUTs are designed as a starting point, and full-strength application on a client photograph often looks overly processed. Reduce the Color Lookup Adjustment Layer's opacity to between 40% and 70% to blend the graded look with the unmodified image underneath. 50% is often the 'sweet spot' that gives the feel of the grade without looking like a filter.\n\nFor even more control, paint on the Color Lookup layer's mask to prevent the LUT from affecting specific areas. A common technique in portrait work: apply a cinematic LUT at 60% opacity, then paint black on the mask over the subject's face so their skin tones stay natural while the background receives the full grade. This separates the environmental color grade from the subject's color, which is exactly what a professional colorist does when working on a feature film.",
        },
        {
          heading: "Stacking Multiple LUTs for Custom Looks",
          body: "Professional colorists rarely use a single LUT — they stack two or three to build a custom grade. A typical stack might be: first, a technical LUT that corrects the log-encoded footage back to a standard color space; second, a creative LUT that adds the desired mood. In Photoshop for still images, the same principle applies: layer a neutral 'film base' LUT at 50% opacity, then add a 'warm sunset' LUT at 30% opacity above it, and finally a slight 'contrast punch' LUT at 40% opacity on top.\n\nBecause each Color Lookup Adjustment Layer is non-destructive, you can toggle any layer off to hear how the grade sounds without it, adjust opacities independently, or reorder the stack. To flatten a LUT stack into a single reusable file, merge all your adjustments onto a new layer (Ctrl+Alt+Shift+E / Cmd+Option+Shift+E to stamp visible), then export via File > Export > Export As as your reference image to show clients.",
        },
      ],
    },
    {
      id: "4-11",
      title: "Split Toning",
      duration: "13 min",
      description:
        "Apply different colors to the shadows and highlights independently to create dramatic, moody, or vintage photographic looks.",
      keyTakeaways: [
        "Split toning assigns distinct hues to shadow and highlight zones",
        "Classic film looks use warm shadows and cool highlights (or vice versa)",
        "Use Curves in Luminosity mode as a base before applying split tone",
        "Gradient Maps are an alternative split toning method with finer zone control",
      ],
      content: [
        {
          heading: "Split Toning with Color Balance",
          body: "Split toning traditionally meant applying different color tints to the shadow and highlight areas of a black-and-white darkroom print. In digital photography, it extends to color images and creates the characteristic look of many film stocks. The fastest Photoshop approach uses Color Balance: add a Color Balance Adjustment Layer, select Shadows, and push toward warm tones (Yellow +15, Red +10). Then select Highlights and push toward cool tones (Blue +20, Cyan +5). The result is warm, golden shadows and cool, airy highlights — a look closely associated with portrait and lifestyle photography.\n\nThe key to convincing split toning is using complementary colors. Warm shadows (yellow-orange range, roughly 20–40° on the color wheel) pair naturally with cool highlights (blue-teal range, roughly 190–220°). Cool shadows (blue-purple, 220–260°) pair with warm highlights (yellow-orange). Complementary split tones create visual tension and depth; analogous split tones (both ends going warm or both going cool) create more unified, monochromatic-feeling grades.",
        },
        {
          heading: "The Gradient Map Approach",
          body: "An alternative split toning method uses the Gradient Map Adjustment Layer (Layer > New Adjustment Layer > Gradient Map). A Gradient Map replaces every pixel's brightness with a color from the gradient: the darkest pixels receive the leftmost gradient color, the brightest receive the rightmost, and midtones blend between them. Set the gradient's left color to a warm orange-brown (around #5C3A1E) and the right color to a cool pale blue (#C8D8E8). Change the Gradient Map layer's blend mode to Color so it affects only hue and saturation without changing luminance.\n\nThe advantage of Gradient Map over Color Balance for split toning is that you can add multiple color stops to the gradient, creating three-way or even four-way toning. Add a midpoint stop of a slightly green-tinted gray (#8A9B8A) to give midtones a subtle analog-film, cross-processed feel. Adjust opacity to control strength. A Gradient Map at Color blend mode and 40% opacity is one of the most elegant and controllable split toning tools available in Photoshop.",
        },
        {
          heading: "Vintage Film Emulation Split Tones",
          body: "Classic film stocks have characteristic split tone signatures that you can replicate. Kodachrome slides are known for warm, slightly orange shadows and cool, slightly cyan-shifted highlights — add Yellow +12 and Red +8 to Shadows in Color Balance, then Cyan +10 and Blue +15 to Highlights. Fujifilm Velvia transparency film has vivid green-blue highlights and warm, dense shadows — add Cyan +5 and Yellow -10 to Shadows (making them slightly reddish-warm), and add Cyan +15 and Blue +10 to Highlights.\n\nCross-processing (shooting slide film and developing in print film chemistry) creates wild, unpredictable colors. To simulate it: add a Curves Adjustment Layer, switch to the Red channel and create an S-curve, then switch to Green and pull the midpoint down slightly, then switch to Blue and push the shadows up while pulling the highlights down. The erratic per-channel curve mimics the chemical mismatch of cross-process. Combine this with a Color Balance split tone on top for further stylization.",
        },
        {
          heading: "Black and White with Color Toning",
          body: "Split toning is most dramatic on black-and-white conversions. Use the Black & White Adjustment Layer (Layer > New Adjustment Layer > Black & White) to convert the image, then add a Color Balance or Gradient Map above it (or use Hue/Saturation in Colorize mode). Because the Black & White layer removes all color information, the toning layer above it applies purely as a colored wash without fighting existing hues.\n\nFor a classic duotone look used in fine art printing, convert to black and white using the Black & White Adjustment Layer with custom channel mixing (increase Red to +50, decrease Green to -10 for a warm-skin, dramatic-sky conversion). Then add a Gradient Map above it in Color mode: left stop warm sepia (#704214), right stop pale cream (#F5ECD7). The result mimics a classic selenium-toned silver gelatin print from the darkroom era — a timeless look for portfolio and gallery work.",
        },
      ],
    },
    {
      id: "4-12",
      title: "Match Color Between Photos",
      duration: "14 min",
      description:
        "Use Photoshop's Match Color command and manual techniques to create color consistency across a series of photos.",
      keyTakeaways: [
        "Image > Adjustments > Match Color analyzes a source image and applies its tones to the target",
        "The Luminance, Color Intensity, and Fade sliders fine-tune the match",
        "Manual matching uses Curves with neutral sampling for precise control",
        "Color matching is essential for wedding albums, product shoots, and editorial series",
      ],
      content: [
        {
          heading: "Using the Match Color Command",
          body: "Photoshop's built-in Match Color (Image > Adjustments > Match Color) analyzes the color statistics of a source image and applies its color distribution to the active target image. Open both photos in Photoshop — the reference image (the color you like) and the target image (the one to be corrected). Make the target image active, then go to Image > Adjustments > Match Color. In the dialog, set the Source drop-down to the reference file name and the Layer to Background (or whichever layer you want to source from).\n\nNote that Match Color is not available as an Adjustment Layer, meaning it applies directly to pixels — always duplicate your target layer first (Ctrl+J / Cmd+J) and apply Match Color to the copy so you preserve the original. Match Color works best when both images share similar subject matter and lighting conditions. It struggles significantly when comparing a daylight exterior to a studio interior — the tonal ranges are too different for the algorithm to produce a usable result.",
        },
        {
          heading: "Fine-Tuning with Luminance, Intensity, and Fade",
          body: "The Match Color dialog has three sliders: Luminance (range 1–200, default 100) adjusts brightness in the matched result — increase above 100 to brighten, decrease to darken. Color Intensity (range 1–200, default 100) controls how strongly the color match is applied — reduce to 50–70 if the result looks oversaturated. Fade (range 0–100, default 0) blends the matched result back toward the original — increasing to 30–50 gives a more subtle match that retains some of the target's original color character.\n\nFor matching a series of wedding portraits taken in the same venue across a four-hour event (lighting changes from afternoon to evening), use Match Color on each image sourced from the 'hero' image taken at the best light. Set Luminance to 105 (slight brightening to account for darkening as evening approached), Color Intensity to 80 (slightly reduced to prevent oversaturation), and Fade to 25. This combination produces a consistent look that reads as a cohesive series without looking identical and robotic.",
        },
        {
          heading: "Manual Color Matching with Curves",
          body: "For precise control over color matching — especially in product photography where brand colors must be consistent across a catalog — manual Curves matching is more reliable than the automated Match Color command. The process: open both images, use Window > Arrange > 2-Up to view them side by side. Activate the Info panel (Window > Info). Identify a neutral gray area in the reference image and read its R, G, B values using the eyedropper. Ideally, a neutral gray has equal R, G, B values.\n\nOn the target image, click the same neutral gray area. If the Info panel shows R:155 G:168 B:143 (green-heavy cast), you need to bring G down to 155 and bring B up to 155. Add a Curves Adjustment Layer to the target. Switch to the Green channel and pull the midpoint down until the Info panel reads 155 for the sampled point. Switch to Blue and push up until Blue reads 155. The result is a numerically neutral gray that matches the reference — and the rest of the image's colors will follow.",
        },
        {
          heading: "Batch Color Matching for Series Work",
          body: "Once you have a color-matched image looking correct, save the Curves Adjustment Layer settings as a preset. Right-click the Curves adjustment in the Properties panel and choose 'Save Curves Preset.' Name it with the shoot name and date (e.g., 'Smith_Wedding_Reception_Match'). Then open each subsequent image in the series and apply the same preset from the Curves Properties panel's preset menu.\n\nFor even faster batch application, use Photoshop Actions. Record an Action (Window > Actions, click the New Action button) that includes: adding the specific Curves preset, adjusting Vibrance to the standardized setting, and applying any sharpening. Play this Action on each image in the series. For 50+ images, record the Action and then run it via File > Automate > Batch on the entire folder — Photoshop will process every file automatically while you work on other tasks.",
        },
      ],
    },
    {
      id: "4-13",
      title: "Batch Color Correction",
      duration: "15 min",
      description:
        "Automate color correction across hundreds of photos using Actions, Batch Processing, and conditional automations.",
      keyTakeaways: [
        "Record an Action with your color correction workflow for one-click repeatability",
        "File > Automate > Batch applies an Action to an entire folder of images",
        "Image Processor saves batch exports without modifying originals",
        "Conditional Actions use If/Then logic for adaptive processing",
      ],
      content: [
        {
          heading: "Recording a Reusable Color Correction Action",
          body: "Open a representative photo from your batch — ideally one with typical exposure and color balance for the series. Open the Actions panel (Window > Actions) and click the folder icon to create a new Action Set named 'Color Corrections.' Click the page icon to create a new Action, name it (e.g., 'Wedding Reception Correction'), and click Record. Every step you now perform is recorded.\n\nApply your correction workflow: add a Levels Adjustment Layer, set the black point to 12 and white point to 243, click OK. Add a Curves Adjustment Layer and apply your standard S-curve (shadow point: Input 64, Output 54; highlight point: Input 192, Output 202). Add a Vibrance Adjustment Layer set to Vibrance +25, Saturation -8. Flatten the image (Layer > Flatten Image). Save the file (File > Save). Click the Stop button in the Actions panel. You now have a complete, repeatable correction Action.",
        },
        {
          heading: "Running Batch Processing",
          body: "To apply the Action to an entire folder, go to File > Automate > Batch. Set the Play section: Set to your 'Color Corrections' set, Action to 'Wedding Reception Correction.' Set Source to Folder and click Choose to select the input folder containing your raw or JPEG files. Set Destination to Folder, click Choose, and select an output folder (always a different folder from the source — never overwrite originals). Check 'Override Action Save As Commands' if your Action includes a Save step.\n\nIn the File Naming section, you can add custom prefixes, suffixes, or serial numbers to the output filenames. For a client delivery batch, use: Document Name + '_corrected' + extension. Check 'Suppress Color Profile Warnings' and 'Suppress File Open Options Dialogs' to prevent Photoshop from pausing to ask questions for each file. Click OK and Photoshop processes every file in the folder automatically.",
        },
        {
          heading: "Image Processor for Format Conversion",
          body: "For batch export to JPEG or TIFF with size constraints, File > Scripts > Image Processor is faster and safer than Batch. Image Processor does not require an Action and does not modify or save over your source files — it always creates new files in the output folder you specify. Open Image Processor, select your source folder, choose your save location, select JPEG with quality 10 (0–12 scale, equivalent to about 80% quality), optionally check 'Resize to Fit' and enter maximum dimensions (e.g., 2048 x 2048 for web delivery), and check 'Convert Profile to sRGB' for universal display compatibility.\n\nYou can also choose to run an Action inside Image Processor before the export — check 'Run Action' and select your color correction Action from the list. This combines the color correction and format conversion into a single automated pass, taking your raw folder of originals to a delivery-ready JPEG folder without a single manual step. Image Processor can process hundreds of images per hour depending on file size and the complexity of your Action.",
        },
        {
          heading: "Smart Automation with Conditional Actions",
          body: "Photoshop's Conditional Actions (Insert > Conditional in the Actions panel while recording) allow if/then logic based on image properties. For example: If the document is landscape orientation (wider than tall), play one color correction Action; if it is portrait orientation, play a different Action. This is useful when a photoshoot contains a mix of horizontal and vertical compositions that need subtly different tone treatments.\n\nA practical conditional workflow for event photography: create two Actions — 'Reception_Indoor_Correction' (warmer white balance, lower contrast for indoor flash) and 'Reception_Outdoor_Correction' (cooler white balance, higher contrast for outdoor ambient). Set up a Conditional Action that checks the filename or document width/height ratio and routes each image to the appropriate correction. While not perfectly automated (Photoshop's conditional options are limited), this reduces manual intervention from one click per image to zero for a properly organized batch.",
        },
        {
          heading: "Lightroom Integration and Catalog-Based Workflow",
          body: "For photographers managing large volumes (thousands of images), Lightroom's develop settings and Photoshop's batch capabilities complement each other powerfully. Synchronize color corrections across a series in Lightroom, then use Edit > Export with Lightroom Presets to send corrected files to Photoshop for final retouching. Photoshop's batch and Actions system can then handle any specific retouching or output preparation that Lightroom's non-destructive model cannot.\n\nIf your entire workflow stays in Photoshop, use the File > Automate > Photomerge or File > Automate > PDF Presentation commands for final delivery outputs. For the most robust batch pipeline in a pure Photoshop environment, keep Actions simple (avoid complex layer operations that vary by image), always process to a separate output folder, and maintain a log of batch settings used for each client delivery in case files need to be reprocessed.",
        },
      ],
    },
    {
      id: "4-14",
      title: "Final Color Grading Project",
      duration: "20 min",
      description:
        "Apply everything learned in a complete end-to-end color grading workflow on a real photograph, from diagnosis to final delivery.",
      keyTakeaways: [
        "Always diagnose before correcting — read the histogram and identify specific problems",
        "Follow the professional order: neutralize first, then stylize",
        "Use Adjustment Layers exclusively to keep the workflow non-destructive",
        "Export color-managed files with the correct profile for web or print delivery",
      ],
      content: [
        {
          heading: "The Professional Grading Order",
          body: "Professional colorists always follow a specific order: technical correction first, creative grade second. Reversing this order wastes time because creative grades applied to an untreated image must be reworked after the technical fix. The workflow is: (1) White Balance — neutralize color temperature and tint using Camera Raw Filter or Curves. (2) Exposure — fix overall brightness and set black/white points using Levels or Curves. (3) Contrast — add or adjust contrast to match the intended feel. (4) Color Correction — fix any remaining casts using Selective Color or Curves per-channel. (5) Creative Grade — add mood, style, and atmosphere using Color Balance, LUTs, or split toning. (6) Output Sharpening — add final sharpening appropriate for the delivery medium.\n\nThis order ensures each step builds on a clean foundation. Trying to color grade around a bad white balance creates compounding errors that become increasingly hard to untangle.",
        },
        {
          heading: "Step-by-Step: Correcting an Underexposed Portrait",
          body: "Open the underexposed portrait and examine the histogram — you see the data clustered in the left half, barely reaching the center. Add a Camera Raw Filter (convert to Smart Object first). In the Basic panel, push Exposure to +1.2 to lift overall brightness. Pull Highlights to -50 to prevent any bright areas from clipping. Push Shadows to +60 to open up the dark areas of hair and background. Set Whites to +15 and Blacks to -15 for a punchy tonal range. Check Temperature — if the image looks cool (indoor shot without proper WB), push Temperature to 5500K.\n\nSwitch to the HSL panel. Reduce Orange Saturation by -10 and push Orange Luminance to +5 (skin tones are in the orange zone). Increase Blue Saturation by +15 if there is a sky or background blue that needs vibrancy. Exit Camera Raw. Now add a Curves Adjustment Layer on top. Create a gentle S-curve: Input 60/Output 52 for shadows, Input 195/Output 203 for highlights. Set this Curves layer to Luminosity blend mode to avoid oversaturating the colors the Camera Raw filter just balanced.",
        },
        {
          heading: "Creative Grade: Cinema Style",
          body: "With the technical correction complete, apply the creative grade. Add a Color Balance Adjustment Layer: Shadows — Yellow/Blue to +12 (warm), Red/Cyan to +8. Highlights — Yellow/Blue to -18 (cool blue), Red/Cyan to -5. This establishes the orange-teal split tone. Add a Vibrance Adjustment Layer: Vibrance +20, Saturation -5. Add a Color Lookup Adjustment Layer and load a cinematic LUT (try the built-in 'Crisp_Warm.look' or a downloaded film emulation). Set the Color Lookup layer to 45% opacity.\n\nFinally, add a Curves Adjustment Layer at the very top of the stack. Pull the Output Levels bottom slider from 0 to 12 (lifts blacks for a matte finish). Reduce the composite RGB curve midpoint slightly — Input 128, Output 122 — for a subtle darkening that gives the image a more cinematic, slightly under-lit quality. Your Layers panel should now read from bottom to top: Smart Object with Camera Raw > Curves (Luminosity) > Color Balance > Vibrance > Color Lookup > Curves (Matte Lift).",
        },
        {
          heading: "Reviewing on Different Displays",
          body: "Before delivery, use Photoshop's Proof Colors feature (View > Proof Colors, Ctrl+Y / Cmd+Y) to simulate how the image looks on different output devices. Set the proof profile to sRGB IEC61966-2.1 for web delivery — many monitors used by clients are not color-managed and will display sRGB as-is. If the image looks too yellow or saturated in sRGB preview, reduce the Vibrance or Color Balance layers slightly to ensure it looks correct on a standard consumer display.\n\nFor print delivery, switch the proof profile to your print vendor's ICC profile (loaded via Edit > Color Settings). Check for any oversaturated colors that might shift on press — typically reds and cyans are most affected. If you see a gamut warning (View > Gamut Warning, Shift+Ctrl+Y / Shift+Cmd+Y) with gray overlay, use Hue/Saturation to bring those specific hues within the print gamut.",
        },
        {
          heading: "Final Export for Web and Print",
          body: "For web delivery, go to File > Export > Export As. Choose JPEG, set Quality to 85 (balances file size and sharpness). In the Color Space section, select 'Convert to sRGB' and check 'Embed Color Profile.' Set the size to your required pixel dimensions. Click Export All. sRGB is the universal standard for web images — never deliver web images in AdobeRGB or ProPhoto RGB, as most browsers and social platforms will display them incorrectly.\n\nFor print delivery to a professional lab, flatten the image (Layer > Flatten Image on the duplicate), go to Edit > Convert to Profile, and set Destination Space to your lab's required profile (commonly Adobe RGB 1998 or a lab-specific ICC profile). Save as TIFF with LZW compression, 8-bit or 16-bit depending on the lab's specification, with the color profile embedded. Deliver the TIFF along with a low-resolution JPEG reference preview so the lab technician can verify the intended look on their calibrated monitor before printing.",
        },
      ],
    },
  ],
};
