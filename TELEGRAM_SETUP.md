# Telegram Mini App Setup

## Step 1: Create Your Bot

1. Open Telegram and search for **@BotFather**
2. Send `/newbot`
3. Choose a name: `Photoshop Mastery`
4. Choose a username: `photoshop_mastery_bot` (must end with `bot`)
5. Save the **bot token** you receive

## Step 2: Configure Mini App

1. Send `/mybots` to @BotFather
2. Select your bot
3. Click **Bot Settings** > **Menu Button**
4. Click **Configure menu button**
5. Send the URL: `https://your-vercel-url.vercel.app`
6. Send the button title: `Open App`

## Step 3: Set Up Web App

1. Send `/mybots` to @BotFather
2. Select your bot
3. Click **Bot Settings** > **Menu Button** > **Configure menu button**
4. Or use `/setmenubutton` and provide your deployed URL

## Step 4: Set Bot Description

Send these commands to @BotFather:

```
/setdescription
Master Photoshop with interactive lessons, challenges, and keyboard shortcuts. From beginner to pro — learn at your own pace.

/setabouttext
The premium Photoshop learning app. Interactive lessons, practice challenges, tools encyclopedia, and keyboard shortcuts reference.
```

## Environment Variables

No environment variables needed — the app runs entirely client-side with localStorage for persistence.

## Testing

- **Web**: Visit your deployed URL directly in a browser
- **Telegram**: Open your bot and click the Menu Button to launch the Mini App
- **Dev**: Run `npm run dev` and test at `http://localhost:3000`
