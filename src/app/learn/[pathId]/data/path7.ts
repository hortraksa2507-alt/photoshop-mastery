import { PathData } from "./types";

export const path7: PathData = {
  id: 7,
  title: "Automation & Efficiency",
  level: "Pro",
  levelColor: "var(--level-pro)",
  description:
    "Actions, scripts, batch processing, and workflow optimization for production environments.",
  lessons: [
    {
      id: "7-1",
      title: "Why Automation Changes Everything",
      duration: "10 min",
      description:
        "Understand the philosophy of automation in professional Photoshop workflows and learn where to find every automation tool Photoshop offers.",
      keyTakeaways: [
        "Identify the three pillars of Photoshop automation: Actions, Scripts, and Batch Processing",
        "Understand when automation saves time versus when manual work is faster",
        "Navigate the Actions panel, Scripts menu, and Automate submenu",
        "Set realistic expectations for what Photoshop automation can and cannot do",
      ],
      content: [
        {
          heading: "The Cost of Repetition",
          body: "Every professional photographer, designer, or retoucher eventually hits the same wall: they spend more time doing repetitive tasks than doing creative work. Resizing 300 product images, watermarking a wedding gallery of 800 photos, converting a folder of PSDs to web-ready JPEGs — these tasks take hours when done manually and minutes when automated.\n\nPhotoshop's automation ecosystem has three major pillars. Actions are recorded sequences of commands that replay with a single click or keyboard shortcut. Scripts are JavaScript programs that go beyond what Actions can do, adding logic, conditionals, and file system access. Batch Processing ties these tools together, letting you run an Action or Script across an entire folder of files automatically.\n\nUnderstanding which tool to reach for is the first skill. A simple resize-and-export workflow is perfect for an Action. A workflow that reads filenames, generates text layers from a spreadsheet, and saves files with custom names needs a Script. A workflow that processes every file in a client's delivery folder needs Batch Processing.",
        },
        {
          heading: "Finding Automation Tools in Photoshop",
          body: "All automation tools live in a few predictable places. Open the Actions panel via Window > Actions (or press Alt+F9 on Windows, Option+F9 on Mac). This is your command center for recording, editing, and running Actions. The panel ships with a Default Actions set that demonstrates what Actions look like — expand it to see entries like 'Vignette (selection)' and 'Wood Frame 50 pixel'.\n\nFor batch operations, go to File > Automate. This submenu contains Batch (runs an Action on a folder), Create Droplet (saves a batch process as a draggable application), Fit Image, Merge to HDR Pro, Lens Correction, and more. File > Scripts gives access to built-in scripts like Image Processor (an extremely useful resize-and-export utility) and Export Layers to Files.\n\nFor advanced users, File > Scripts > Browse lets you load any external JavaScript (.jsx) file directly into Photoshop. The Script Events Manager (File > Scripts > Script Events Manager) lets you trigger scripts automatically when specific Photoshop events occur, such as every time a document is saved.",
        },
        {
          heading: "A Mindset for Automation",
          body: "Before you record your first Action, adopt the right mindset: think in terms of procedures, not one-off steps. When you're about to do a task for the third time, ask yourself whether you'll ever do it again. If the answer is yes, automate it now.\n\nThe second mental shift is to design workflows with clean inputs and clean outputs. Automation breaks when files have unexpected color modes (your Action sharpens an RGB image but encounters a CMYK file), unexpected layer structures (your Action merges layers but the document has no layers to merge), or unexpected canvas sizes (your positioning commands assume a specific document size). The best automated workflows include a brief manual quality-check step at the end — trust the automation for 95% of the work, but always sample-check the results.\n\nFinally, document your automations. Add descriptive names to your Actions, organize them into labeled sets, and keep a plain-text note of what each Script does and what file types it expects. Future you will be grateful.",
        },
      ],
    },
    {
      id: "7-2",
      title: "Recording Your First Action",
      duration: "14 min",
      description:
        "Record, name, and run a complete Action from scratch, understanding exactly what gets captured and what gets skipped.",
      keyTakeaways: [
        "Record an Action that resizes, sharpens, and exports a JPEG",
        "Understand which commands are recordable and which are not",
        "Use Insert Menu Item to capture non-recordable commands",
        "Set action playback speed and enable/disable individual steps",
      ],
      content: [
        {
          heading: "Setting Up the Actions Panel",
          body: "Before recording, create a dedicated Action set to keep your work organized. In the Actions panel, click the folder icon at the bottom (or choose New Set from the panel menu). Name it something meaningful like 'My Production Actions' or 'Client Deliverables'. Sets are like folders — they keep Actions grouped so you can export and import entire collections as .atn files.\n\nNow create a new Action inside that set. Click the New Action button (the page icon at the bottom of the panel). In the dialog, give the Action a descriptive name such as 'Resize to 1200px Web JPEG'. Assign a Function Key shortcut if you want one-key access — for example, F2 with the Shift modifier. You can also assign a color label for quick visual identification in Button Mode. Click Record. The red recording dot in the panel confirms you are now recording every command you execute.",
        },
        {
          heading: "Recording a Practical Resize Workflow",
          body: "With recording active, perform a sequence that reflects a real delivery workflow. First, flatten the document: Layer > Flatten Image. Next, resize: Image > Image Size. In the dialog, make sure Resample is checked, set the dropdown to Bicubic Sharper (for reduction), set Width to 1200 pixels, and click OK. This ensures the longest edge is 1200px regardless of orientation — though for true longest-edge logic you will need a script, which you'll learn in lesson 7-7.\n\nNow apply a final sharpening pass: Filter > Sharpen > Smart Sharpen. Set Amount to 80%, Radius to 0.8px, and Reduce Noise to 10%. Click OK. Finally, export: File > Export > Export As. Set Format to JPEG, Quality to 85, and click Export. Choose your output folder and click Save.\n\nStop recording by clicking the square Stop button at the bottom of the Actions panel. Your Action is now saved. Open a fresh image, click your Action's name, and press the Play button (triangle) to confirm it runs correctly.",
        },
        {
          heading: "What Gets Recorded and What Doesn't",
          body: "Not every Photoshop operation is recordable. Tool-based actions — painting with the Brush, making Pen Path adjustments, using the Healing Brush — are generally not recorded as repeatable, position-independent steps. View commands like zooming and scrolling are not recorded by default (though you can enable this in Actions panel preferences). Some dialog boxes record only when you interact with them, while others record the settings you chose.\n\nWhen a command is not directly recordable, use Insert Menu Item. While recording is paused (you can pause by clicking Stop, make the non-recordable step, then continue recording), go to the Actions panel menu and choose Insert Menu Item. Navigate to the desired menu command and click OK. This inserts a placeholder that will open that command's dialog when the Action plays back, requiring user input each time. This is useful for commands like Select Color Range, which need contextual adjustments.\n\nTo insert a stop — a pause that shows the user a message — go to the panel menu and choose Insert Stop. Type your message (e.g., 'Make any manual cleanup selections now, then press Play to continue') and optionally check Allow Continue to give the user a button to resume without stopping.",
        },
        {
          heading: "Testing and Refining Your Action",
          body: "Always test Actions on disposable copies of files before running them on originals. Open three or four different test images with varying sizes, color modes, and layer structures. Run the Action on each. Check the results. If something goes wrong, you do not need to re-record from scratch — you can edit individual steps, which is covered in the next lesson.\n\nFor Actions you will run frequently, test edge cases: what happens if the document is already flattened? What if it's in CMYK mode? What if it's a very small file — 400px wide — where the resize step would actually enlarge it? Knowing the failure modes of your Action lets you either handle them gracefully (using Conditional Actions, covered in lesson 7-6) or document them clearly so colleagues know the expected input.",
        },
      ],
    },
    {
      id: "7-3",
      title: "Editing & Organizing Actions",
      duration: "12 min",
      description:
        "Master the art of modifying recorded Actions without starting over, and build a professional, portable Actions library.",
      keyTakeaways: [
        "Edit individual steps in an existing Action by double-clicking",
        "Reorder, duplicate, and delete Action steps",
        "Enable and disable steps with the checkmark column",
        "Save and load Action sets as .atn files for portability",
      ],
      content: [
        {
          heading: "Editing Steps Without Re-recording",
          body: "One of the most valuable skills in Actions management is editing existing steps rather than re-recording entire workflows. To change the settings of a recorded step, double-click the step name in the Actions panel. For most steps, this reopens the original dialog — for example, double-clicking 'Image Size' reopens the Image Size dialog showing the values you originally set. Change them and click OK to update the step.\n\nTo reorder steps, simply drag them up or down within the Action. To duplicate a step, drag it to the New Action button at the panel bottom, or Option-drag (Alt-drag on Windows) it to its new position. To delete a step, select it and click the trash icon, or drag it to the trash. To temporarily disable a step without deleting it, click the checkmark in the leftmost column of that step — an empty checkbox means the step will be skipped during playback.",
        },
        {
          heading: "Adding Steps to an Existing Action",
          body: "You are not limited to editing existing steps — you can insert entirely new steps into a recorded Action at any position. Click on the step immediately before where you want to insert new steps (the new recording will be inserted after the selected step). Then click the Record button at the bottom of the panel. Photoshop enters record mode again. Perform the new commands you want to add, then click Stop. The new steps are inserted immediately after the step you selected.\n\nThis technique is essential when a workflow evolves. Suppose your export Action needs to add a copyright metadata entry before saving. Select the step just before the Export step, click Record, navigate to File > File Info, enter the copyright text, click OK, then stop recording. The metadata step is now part of the Action at exactly the right position.\n\nYou can also insert a playback speed modifier. From the panel menu, choose Playback Options. Setting this to Step By Step makes each command execute and screen-refresh individually, which is useful for debugging. Accelerated (the default) is fastest for production use.",
        },
        {
          heading: "Organizing and Exporting Action Sets",
          body: "A professional Actions library uses well-named sets that reflect their purpose: 'Web Delivery', 'Print Prep', 'Social Media Resizes', 'Client Watermarking'. Within each set, name Actions descriptively — 'Instagram Square 1080px' is far more useful than 'Action 1'.\n\nTo save a set for portability or backup, select the set's folder in the Actions panel, then choose Save Actions from the panel menu. Photoshop saves the entire set as a .atn file, which can be emailed to colleagues, stored in a shared drive, or backed up. To load Actions on another machine, choose Load Actions from the same menu and navigate to the .atn file.\n\nTo share just a subset of Actions, you cannot save individual Actions — only entire sets. The workaround is to create a new temporary set, duplicate the Actions you want to share into it, save that set, then delete the temporary set. This is a common pain point that professional studios work around by standardizing on complete set files.",
        },
      ],
    },
    {
      id: "7-4",
      title: "Batch Processing Folders of Images",
      duration: "15 min",
      description:
        "Process hundreds of images automatically using the Batch command and Image Processor, with proper error handling and output organization.",
      keyTakeaways: [
        "Use File > Automate > Batch to run Actions across folders",
        "Configure source and destination settings correctly",
        "Use Image Processor for quick multi-format exports",
        "Handle errors gracefully with the error log option",
      ],
      content: [
        {
          heading: "The Batch Command: Core Settings",
          body: "File > Automate > Batch is the engine that transforms a single-file Action into a folder-wide processing pipeline. The dialog has four main sections: Play, Source, Destination, and Errors.\n\nIn the Play section, choose the Set and Action you want to run. In the Source section, choose Folder and click Choose to navigate to your input folder. Check 'Include All Subfolders' if your images are organized in subfolders (useful for wedding galleries sorted by hour). Check 'Suppress File Open Options Dialogs' to prevent Camera Raw from pausing on each raw file — the current Camera Raw defaults will be applied silently. Check 'Suppress Color Profile Warnings' to prevent mismatched profile dialogs from halting the batch.\n\nIn the Destination section, choose Folder and specify an output directory separate from your source. Never batch-process in place without thoroughly testing your Action first — there is no undo for a batch operation. Check 'Override Action 'Save As' Commands' to ensure the Batch command controls where files are saved, overriding any hardcoded save path in your Action.",
        },
        {
          heading: "File Naming in Batch Processing",
          body: "The File Naming section of the Batch dialog lets you construct output filenames dynamically. You can combine up to six fields: the original document name, serial numbers (starting from any number), serial letters, dates, custom text, and file extensions. For example: Document Name + '_web_' + 2-Digit Serial Number + Extension produces 'portrait001_web_01.jpg', 'portrait002_web_02.jpg', and so on.\n\nFor a real-world wedding delivery workflow, you might set: '2024-Smith-Wedding_' + 3-Digit Serial Number + '.jpg'. This produces a clean numbered sequence — '2024-Smith-Wedding_001.jpg' through '2024-Smith-Wedding_500.jpg' — regardless of what the original camera filenames were.\n\nSerial numbers reset each time you run a batch, starting from whatever Starting Serial # you specify. If you run the batch in multiple segments (source folder 1, then source folder 2), set the starting number for the second run to where the first run ended to maintain a continuous sequence.",
        },
        {
          heading: "Image Processor: The Quick Export Tool",
          body: "For the common task of exporting images to JPEG, PSD, and TIFF simultaneously — at multiple sizes — Image Processor (File > Scripts > Image Processor) is faster than building a custom Action. It has a streamlined four-step interface.\n\nStep 1: Choose your source folder. Step 2: Choose whether to save in the same location (creates subfolders) or in a specific folder. Step 3: Check the file types you want to export. For JPEG, set quality (1–12, where 12 is maximum quality) and optionally constrain to a maximum width and height. For PSD, choose whether to maximize compatibility. For TIFF, choose LZW compression. Step 4: Optionally specify an Action to run on each image before saving.\n\nImage Processor's killer feature is its simultaneous multi-format output. Check JPEG at 2000px, JPEG at 800px, and PSD with one click, and it creates three output subfolders — JPEG, JPEG (2), and PSD — with all three versions of every file. For a photographer delivering web previews, print-size JPEGs, and archival PSDs from a single shoot, this saves enormous amounts of time.",
        },
        {
          heading: "Error Handling and Logging",
          body: "In the Errors section of the Batch dialog, choose 'Log Errors to File' rather than 'Stop for Errors'. With Stop for Errors, a single corrupt file halts the entire overnight batch run. With Log Errors to File, Photoshop records the filename and error message, skips the problem file, and continues processing the remaining 499 images. In the morning, you check the log, manually re-process the handful of problem files, and the job is done.\n\nCommon batch errors include: files locked or in use by another application, files with unexpected color modes (16-bit files when the Action expects 8-bit), files with no layers when the Action expects a layered structure, and files that are too small for a minimum-size constraint in a resize step. Designing Actions to be robust to these cases — using Conditional Actions (lesson 7-6) and mode conversion steps — dramatically reduces error log entries.\n\nAfter any large batch run, open the output folder, sort by file size, and spot-check the smallest files. Corrupt or failed exports often produce zero-byte or unusually small files that are easy to catch with a quick size sort.",
        },
      ],
    },
    {
      id: "7-5",
      title: "Creating Droplets for One-Click Processing",
      duration: "12 min",
      description:
        "Build Droplets — standalone applications that process images when files are dragged onto them — and deploy them across a team.",
      keyTakeaways: [
        "Create a Droplet from any Action using File > Automate > Create Droplet",
        "Configure Droplet destination and naming options",
        "Deploy Droplets to team members who don't know Photoshop automation",
        "Understand Droplet limitations and troubleshooting",
      ],
      content: [
        {
          heading: "What Is a Droplet?",
          body: "A Droplet is a tiny standalone application — a .exe on Windows or an application bundle on Mac — that encapsulates an Action and its Batch settings. When a user drags image files or a folder onto the Droplet icon, Photoshop launches (if it isn't already open), processes every dragged file through the embedded Action, and saves the results. The user never needs to know that Photoshop Actions, Batch Processing, or automation exists.\n\nDroplets are invaluable in production studios. A photographer's assistant can drag each day's shoot folder onto a 'Proof Sheet Export' Droplet and generate client previews without knowing anything about Photoshop's automation system. A social media manager can drag campaign assets onto a 'Resize for Instagram' Droplet and get correctly sized outputs in seconds. Droplets democratize Photoshop automation beyond power users.",
        },
        {
          heading: "Creating a Droplet",
          body: "Go to File > Automate > Create Droplet. The dialog is nearly identical to the Batch dialog. At the top, click Choose to specify where the Droplet application file will be saved — the Desktop is a natural choice for shared tools.\n\nIn the Play section, select your Set and Action. In the Destination section, choose a specific output folder rather than 'Save and Close' (which would overwrite the originals). Set up your file naming convention. In the Errors section, choose 'Log Errors to File' and specify a log file location.\n\nClick OK, and Photoshop generates the Droplet application. Test it immediately: drag a handful of test images onto the Droplet icon. Photoshop will open, process them, and save them to your designated output folder. If the results look correct, the Droplet is ready for deployment.",
        },
        {
          heading: "Deploying and Maintaining Droplets",
          body: "Droplets are tied to the version of Photoshop that created them and to the machine's Action set. If you email a Droplet to a colleague, they must have the same Actions loaded in their Photoshop installation, or the Droplet will fail. The safer deployment method is to share both the Droplet and the .atn Action set file together, with instructions to load the Actions first.\n\nOn Mac, Droplets created on Windows need to be updated before they will run, and vice versa. Open Photoshop on the target platform, go to File > Automate > Create Droplet, and recreate the Droplet from the same Action. It takes 30 seconds and ensures cross-platform compatibility.\n\nWhen an Action that a Droplet references is updated, the Droplet does not automatically update — it retains the Action settings from when it was created. To update a Droplet, open it in Photoshop by dragging it onto the Photoshop icon while holding Option (Mac) or Alt (Windows). This opens the Droplet settings dialog where you can modify any setting and re-save. This is also how you can modify where the Droplet saves output files without recreating it from scratch.",
        },
      ],
    },
    {
      id: "7-6",
      title: "Conditional Actions: If/Then Automation",
      duration: "15 min",
      description:
        "Build smart Actions that make decisions based on document properties, enabling robust automation that handles varied inputs gracefully.",
      keyTakeaways: [
        "Insert Conditional steps using the Actions panel menu",
        "Use all 12 built-in conditions including document orientation and color mode",
        "Route different file types to different sub-Actions",
        "Chain multiple Conditional Actions for complex decision trees",
      ],
      content: [
        {
          heading: "The Problem with Unconditional Actions",
          body: "A simple resize Action always resizes to, say, 1200 pixels wide. But what about portrait-orientation images? Resizing width to 1200px makes a portrait image 1200px wide and perhaps 1800px tall — much larger than intended. What about images that are already small? The resize step would enlarge them, reducing quality.\n\nConditional Actions solve these problems by routing execution based on the document's properties at runtime. A Conditional step evaluates a condition — Is orientation landscape? Is document width greater than 1200px? Is color mode CMYK? — and then plays one Action if true and another Action if false. This turns a brittle, one-size-fits-all Action into a robust workflow that handles varied inputs correctly.",
        },
        {
          heading: "Inserting a Conditional Step",
          body: "While recording or editing an Action, choose Insert Conditional from the Actions panel menu. The Conditional dialog has three fields: If Current, Then Play Action, and Else Play Action.\n\nThe 'If Current' dropdown offers 12 conditions: Document Is Landscape, Document Is Portrait, Document Is Square, Document Is Open, Document Mode Is, Document Profile Is, Document Depth Is, Document Has Unsaved Changes, Document Is Saved, Document Name Is, Layer Name Is, and Layer Kind Is.\n\nFor a real-world landscape/portrait routing example: set 'If Current' to 'Document Is Landscape', set 'Then Play Action' to your 'Resize Width to 1200px' Action, and set 'Else Play Action' to your 'Resize Height to 1200px' Action. Now this single Conditional step handles both orientations correctly. The key requirement is that the Actions referenced in Then and Else must already exist in your Actions panel before you insert the Conditional.",
        },
        {
          heading: "Chaining Conditions for Complex Workflows",
          body: "Real production workflows often need multiple conditions. Consider a workflow that should: (1) convert CMYK files to sRGB, (2) flatten layered files, (3) resize only if the image is larger than the target size, and (4) apply different sharpening for photos versus illustrations. Each of these decisions needs its own Conditional step.\n\nBuild this as a master Action that contains four Conditional steps in sequence. Condition 1: If Document Mode Is CMYK, Then play 'Convert to sRGB', Else play 'Do Nothing' (an empty Action). Condition 2: If Layer Kind Is 'Layer Group' (meaning the document has layers), Then play 'Flatten Document', Else play 'Do Nothing'. Condition 3 and 4 follow the same pattern.\n\nThe 'Do Nothing' Action is a common pattern: create an empty Action in your set named 'Do Nothing' with zero steps. Reference it as the Else Action whenever you want conditional behavior with no alternative path. This keeps Conditional steps clean and readable.",
        },
        {
          heading: "Testing Conditional Logic",
          body: "Testing Conditional Actions requires deliberately creating files that exercise each branch. For an orientation-based Conditional, test with a landscape image (should trigger the Then branch), a portrait image (should trigger the Else branch), and a square image (Photoshop considers square images as landscape, which is worth knowing and sometimes surprising).\n\nFor mode-based Conditions, open a CMYK TIFF, an RGB JPEG, and a Grayscale PNG. Run the master Action on each and verify that the correct sub-Action fired. Enable Step By Step playback (Actions panel menu > Playback Options) during testing — this slows execution and makes it visually clear which branch was taken.\n\nDocument your Conditional Action's assumptions in a Stop comment. Insert a Stop at the beginning of the Action with a message like: 'Expected input: RGB or CMYK images, flattened or layered, minimum 800px on shortest side. Results may be unexpected for files outside these parameters.'",
        },
      ],
    },
    {
      id: "7-7",
      title: "Introduction to Photoshop Scripting",
      duration: "18 min",
      description:
        "Write your first JavaScript (ExtendScript) programs to automate tasks that Actions cannot handle, including file system access, text manipulation, and conditional logic.",
      keyTakeaways: [
        "Understand the difference between Actions and Scripts",
        "Write basic JSX scripts using the ExtendScript Toolkit or VS Code",
        "Access and manipulate document properties, layers, and text via scripting",
        "Run scripts from File > Scripts > Browse and from the Script Events Manager",
      ],
      content: [
        {
          heading: "Why Scripts Go Beyond Actions",
          body: "Actions are powerful but dumb — they replay a fixed sequence of commands with no ability to read values, make calculations, or interact with the file system in complex ways. Scripts are full programs. They can read filenames and use that text to populate a text layer. They can query an image's dimensions and calculate a proportional resize. They can loop through all open documents and process them differently based on their names. They can read data from a CSV file and use it to generate dozens of variants of a design automatically.\n\nPhotoshop's scripting language is ExtendScript, which is based on JavaScript ES3 with Adobe-specific extensions. If you know any JavaScript, you can write Photoshop scripts. Even without JavaScript experience, the structured nature of the Photoshop object model makes it learnable in a single session.",
        },
        {
          heading: "Your First Script: Rename and Save",
          body: "Open a text editor (VS Code with the ExtendScript Debugger extension is the modern choice; Adobe's legacy ExtendScript Toolkit still works). Create a file named rename_save.jsx. The .jsx extension is conventional for ExtendScript files.\n\nHere is a complete, useful script:\n\n```javascript\n// rename_save.jsx\n// Saves the active document as a JPEG with a suffix appended to the filename.\n\nvar doc = app.activeDocument;\nvar originalName = doc.name.replace(/\\.[^.]+$/, ''); // Strip extension\nvar outputFolder = Folder.selectDialog('Choose output folder');\n\nif (outputFolder !== null) {\n  var outputPath = outputFolder.fsName + '/' + originalName + '_web.jpg';\n  var jpegOptions = new JPEGSaveOptions();\n  jpegOptions.quality = 10; // 1-12 scale\n  jpegOptions.embedColorProfile = true;\n  jpegOptions.formatOptions = FormatOptions.STANDARDBASELINE;\n  doc.saveAs(new File(outputPath), jpegOptions, true);\n  alert('Saved: ' + outputPath);\n}\n```\n\nRun this by going to File > Scripts > Browse and selecting your .jsx file. The script prompts for an output folder and saves the active document as a JPEG named originalfilename_web.jpg.",
        },
        {
          heading: "The Photoshop Object Model",
          body: "Everything in Photoshop is accessible through a hierarchy of objects. At the top is the global `app` object. `app.documents` is a collection of all open documents. `app.activeDocument` is the frontmost document. From a document object, you access `doc.layers` (all layers), `doc.width`, `doc.height`, `doc.colorProfileName`, and `doc.path` (the file's location on disk).\n\nLayers are accessed by index or name: `doc.layers[0]` is the topmost layer. `doc.layers.getByName('Background')` finds a specific layer by name. For text layers, `layer.kind === LayerKind.TEXT` is true, and `layer.textItem.contents` gives you the text string — which you can set: `layer.textItem.contents = 'New text here'`.\n\nThe most practical reference is the Photoshop CC Scripting Guide (available from Adobe's developer documentation site as a PDF). It lists every object, property, and method available. For day-to-day scripting, keep the Photoshop DOM Reference open — it is a searchable HTML reference that shows all available properties for each object type.",
        },
        {
          heading: "Practical Script: Longest-Edge Resize",
          body: "Here is the script that solves the landscape/portrait resize problem that Conditional Actions handle awkwardly — in just a few lines of JavaScript:\n\n```javascript\n// longest_edge_resize.jsx\n// Resizes the active document so its longest edge equals TARGET_PX.\n\nvar TARGET_PX = 1200;\nvar doc = app.activeDocument;\n\n// Flatten and convert to 8-bit if needed\ndoc.flatten();\nif (doc.bitsPerChannel !== BitsPerChannelType.EIGHT) {\n  doc.bitsPerChannel = BitsPerChannelType.EIGHT;\n}\n\nvar w = doc.width.as('px');\nvar h = doc.height.as('px');\n\nif (w > h) {\n  // Landscape: constrain by width\n  doc.resizeImage(UnitValue(TARGET_PX, 'px'), null, null,\n    ResampleMethod.BICUBICSHARPER);\n} else {\n  // Portrait or square: constrain by height\n  doc.resizeImage(null, UnitValue(TARGET_PX, 'px'), null,\n    ResampleMethod.BICUBICSHARPER);\n}\n\nalert('Resized. New size: ' + doc.width.as('px') + ' x '\n  + doc.height.as('px') + ' px');\n```\n\nThis script handles landscape, portrait, and square images correctly with no Conditional Actions required. Save it, load it once via File > Scripts > Browse, and then use the Script Events Manager or an Action's 'Insert Menu Item' to include it in larger automated workflows.",
        },
      ],
    },
    {
      id: "7-8",
      title: "Data-Driven Graphics with Variables",
      duration: "16 min",
      description:
        "Create template documents that auto-populate with data from a CSV file, enabling mass-production of personalized graphics like certificates, badges, and social media cards.",
      keyTakeaways: [
        "Define Variables for text, pixel replacement, and visibility",
        "Create a properly formatted CSV data set file",
        "Preview and apply data sets within a template document",
        "Batch-export all data set variants using File > Export > Data Sets as Files",
      ],
      content: [
        {
          heading: "Variables and Data Sets Explained",
          body: "Photoshop Variables let you link layer properties to named placeholders. A text layer's content can be a variable — so instead of 'John Smith', the layer displays whatever name is in the current data set. A Smart Object's pixel content can be a variable — so instead of a placeholder headshot, the layer displays a specific person's photo. A layer's visibility can be a variable — so certain elements appear or disappear based on the data.\n\nA Data Set is one complete set of variable values — essentially one row of your spreadsheet. If you have 50 employees to generate ID badge graphics for, you have 50 Data Sets. Each Data Set specifies each employee's name, job title, department color swatch (as a visibility variable on colored layers), and photo filename. Running the export operation generates 50 PSD or PNG files, one per Data Set, with all the correct values populated automatically.",
        },
        {
          heading: "Setting Up the Template Document",
          body: "Build your template document as you would any design, but with placeholder content. Create a text layer for the recipient's name, name it 'recipient_name' in the Layers panel. Create a text layer for the title, name it 'recipient_title'. Add a Smart Object for the photo, name it 'recipient_photo'. Clear naming is essential because the variable name must exactly match what you will use in the CSV.\n\nGo to Image > Variables > Define. The dialog lets you declare each layer's variable. Select the 'recipient_name' layer in the dropdown. Check 'Text Replacement' and give the variable the name `recipientName` (no spaces; use camelCase). Select the 'recipient_photo' Smart Object layer. Check 'Pixel Replacement' and name the variable `recipientPhoto`. For the pixel replacement, choose 'Fit' or 'Fill' to control how the replacement image scales into the layer bounds.\n\nClick Next (or go to Image > Variables > Data Sets) to begin entering or importing data.",
        },
        {
          heading: "Creating and Importing the CSV Data Set",
          body: "The CSV file for Photoshop Variables has a specific format. The first row contains variable names exactly as defined — `recipientName,recipientTitle,recipientPhoto`. Each subsequent row is one Data Set. For the photo variable, the value must be either an absolute file path or a filename relative to the location you will specify during import.\n\nExample CSV:\n```\nrecipientName,recipientTitle,recipientPhoto\nSarah Chen,Senior Designer,/photos/sarah_chen.jpg\nMarcus Williams,Art Director,/photos/marcus_williams.jpg\nAnna Kowalski,UX Researcher,/photos/anna_kowalski.jpg\n```\n\nIn Photoshop, go to Image > Variables > Data Sets. Click the import icon (the folder icon next to 'Data Set'). Navigate to your CSV. In the import options, confirm the encoding (UTF-8 for most modern files) and check the column separator. After import, use the Data Set dropdown at the top of the dialog to preview each person's card. The document updates live as you switch between Data Sets, letting you spot any formatting issues before exporting.",
        },
        {
          heading: "Exporting All Variants",
          body: "Once all Data Sets look correct in preview, go to File > Export > Data Sets as Files. Choose an output folder. Set the file naming: you can use the Data Set name (which Photoshop assigns as the row number by default, or as a named column if you add a 'dataSetName' column to your CSV). Choose the file format — Photoshop (PSD) for layered output, or PNG for flat web graphics.\n\nClick OK. Photoshop iterates through every Data Set, populates the template, and saves one file per Data Set. For 50 employees, this generates 50 correctly named, individually personalized files in seconds. The original template document is unchanged.\n\nFor high-volume production — 500+ records — this workflow is dramatically faster than the equivalent mail-merge operation in other software, because Photoshop's output is a resolution-independent, layer-structured graphic rather than a formatted text document. Graphic designers producing event tickets, conference badges, personalized marketing collateral, or course completion certificates use this workflow daily.",
        },
      ],
    },
    {
      id: "7-9",
      title: "Keyboard Shortcuts & Custom Workspaces",
      duration: "10 min",
      description:
        "Eliminate menu navigation from your daily workflow by customizing keyboard shortcuts and saving tailored workspaces for different project types.",
      keyTakeaways: [
        "Customize any keyboard shortcut using Edit > Keyboard Shortcuts",
        "Create shortcuts for menu items, panel items, and tools",
        "Save and switch between named Workspaces via Window > Workspace",
        "Export and import keyboard shortcut sets as .kys files",
      ],
      content: [
        {
          heading: "Custom Keyboard Shortcuts",
          body: "Every minute you spend moving the mouse to a menu is time you could be designing. Edit > Keyboard Shortcuts (Alt+Shift+Ctrl+K on Windows, Option+Shift+Command+K on Mac) opens the full shortcut editor. It has three tabs: Application Menus, Panel Menus, and Tools.\n\nTo assign a shortcut, navigate the tree to find the command, click on it, and press the key combination you want. If the combination is already in use, Photoshop warns you and tells you what it is currently assigned to. You can accept the reassignment (the old command loses its shortcut) or choose a different key combo.\n\nPowerful shortcuts to set up for a retouching workflow: assign Merge Visible (Shift+Ctrl+E) if it isn't already set, assign Select > Subject to something like Alt+Ctrl+S, and assign Filter > Camera Raw Filter to a single function key like F3. Save your shortcut set with a name like 'My Production Shortcuts' — Photoshop saves it as a .kys file that can be backed up and shared.",
        },
        {
          heading: "Custom Workspaces",
          body: "A Workspace is a saved arrangement of panels, panel sizes, and tool options. Photoshop ships with built-in workspaces for Photography, Painting, Graphic Design, Typography, and others. Each rearranges panels to prioritize the tools relevant to that workflow.\n\nBuild your own by opening, arranging, and sizing the panels you use most. For a retouching workspace: open Layers, Properties, Channels, Histogram, and History panels. Dock Layers and Properties together in one column, Channels and Histogram together in another. Collapse tools you rarely use. When the layout is perfect, go to Window > Workspace > New Workspace, name it (e.g., 'Retouching'), check 'Keyboard Shortcuts' and 'Menus' if you want those settings saved too, and click Save.\n\nNow you can switch between 'Retouching', 'Typography', and 'Web Design' workspaces instantly via the workspace switcher in the top right of the screen or via Window > Workspace. When panels get accidentally moved, reset any workspace instantly via Window > Workspace > Reset [Workspace Name].",
        },
        {
          heading: "Custom Menus for Streamlined Navigation",
          body: "Edit > Menus (Alt+Shift+Ctrl+M) lets you hide menu items you never use and color-highlight the ones you use constantly. This reduces visual clutter and makes important commands easier to find.\n\nFor a web-focused designer, you might hide all the Print-related commands (Print with Preview, Print One Copy, etc.) and all the 3D menu items. Highlight the commands you use most in bright yellow — Export As, Image Size, Save for Web (Legacy), Layer > New Layer from Group — so they jump out of long menus.\n\nCustom menus are saved per Workspace. This means your 'Retouching' workspace can have a leaner File menu (hidden print options) while your 'Print Production' workspace shows every print command. Switch workspaces and the menus change to match the task. Combined with custom keyboard shortcuts and panel arrangements, a fully customized workspace environment can save 15–20 minutes per working day — hours per month.",
        },
      ],
    },
    {
      id: "7-10",
      title: "Final Project: Complete Automated Workflow",
      duration: "20 min",
      description:
        "Build a complete, production-ready automated workflow that combines Actions, Scripts, Batch Processing, and Conditional logic to process a simulated professional image delivery job.",
      keyTakeaways: [
        "Chain multiple automation tools into a single end-to-end pipeline",
        "Design a workflow that handles JPEG, TIFF, and raw file inputs",
        "Implement error logging and quality-check checkpoints",
        "Deliver a finished set of web, print, and social media derivatives from a single source folder",
      ],
      content: [
        {
          heading: "Project Brief: Wedding Gallery Delivery",
          body: "The project scenario: you have received a folder of 200 mixed-format source files from a photographer — a combination of .jpg edited exports, .tif high-resolution files, and a few leftover .psd files. You need to deliver three output packages: (1) Web gallery: sRGB JPEG, longest edge 2048px, quality 85, with metadata; (2) Social media package: sRGB JPEG, 1080x1080 square crop with white borders, watermarked; (3) Print package: AdobeRGB TIFF, longest edge 4000px, flattened, with embedded profile.\n\nThis is a realistic production scenario that requires three different Actions, Conditional logic for handling different input formats, a Script for the longest-edge resize, and three separate Batch runs. Building this end-to-end is the capstone exercise for everything learned in this path.",
        },
        {
          heading: "Building the Three Processing Actions",
          body: "Start with the Web Gallery Action. Record the following sequence: convert to sRGB (Edit > Convert to Profile > sRGB IEC61966-2.1), run the longest_edge_resize.jsx script via Insert Menu Item (pointing to File > Scripts > Browse), apply Smart Sharpen at 75%/0.8px, export as JPEG quality 85 to the /output/web/ folder.\n\nFor the Social Media Action, record: convert to sRGB, use Insert Menu Item to run a custom square_crop_1080.jsx script (which calculates the center crop and adds white canvas padding), apply a watermark by placing a saved Watermark Smart Object via File > Place Linked, flatten, export as JPEG quality 90 to /output/social/.\n\nFor the Print Action: convert to AdobeRGB (Edit > Convert to Profile > Adobe RGB 1998), run resize to 4000px longest edge, apply Unsharp Mask at 120%/1.0px/0, flatten, save as TIFF with LZW compression to /output/print/. Keep the three Actions in a 'Wedding Delivery' set.",
        },
        {
          heading: "Assembling the Master Batch Pipeline",
          body: "Create a Master Action that uses Conditional steps to handle the three input formats differently before routing to the correct output Action. The Master Action begins with: Conditional — if Document Depth Is 16-bit, Then play 'Convert to 8-bit', Else 'Do Nothing'. Then: Conditional — if Document Mode Is CMYK, Then play 'Convert to RGB', Else 'Do Nothing'.\n\nThen run all three processing Actions sequentially from within this Master Action by using Insert Menu Item (pointing to each sub-Action's playback). Since Actions can call other Actions, the Master Action becomes an orchestrator that handles format normalization and then delegates to the three specialized output Actions.\n\nCreate three Batch runs — one for each output Action — all pointed at the same source folder, with error logging enabled and output to the three separate subfolders. Run them sequentially overnight or in sequence. When complete, the /output/ folder contains all three packages ready for delivery.",
        },
        {
          heading: "Review, QA, and Documentation",
          body: "After the batch runs complete, open the error log. Address any failures manually. Open the output folders and sort by file size — files that are unexpectedly small (under 50KB for 2048px web JPEGs, for example) may be failed exports or images that were too small to begin with. Sample-check 5% of files visually: open random selections in each output folder and confirm they look correct.\n\nDocument the workflow in a plain-text README saved alongside the Action set files: what inputs are expected, what Photoshop version the scripts require, what the output folder structure should be, and how to run each Batch. Good documentation means you — or a colleague — can re-run this exact workflow six months from now without having to reverse-engineer it.\n\nFinally, save the entire 'Wedding Delivery' Action set as a .atn file and store the two .jsx scripts in the same folder. Zip the folder and save it as a workflow template. This template represents hours of setup work that you will never have to repeat for similar delivery jobs.",
        },
      ],
    },
  ],
};
