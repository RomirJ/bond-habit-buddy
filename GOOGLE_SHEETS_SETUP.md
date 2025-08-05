# Google Sheets Waitlist Setup Guide

Follow these steps to connect your waitlist form to Google Sheets:

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "DailyDrop Waitlist"
4. In the first row, add these headers:
   - A1: Timestamp
   - B1: Email
   - C1: Referral Source
   - D1: User Agent
   - E1: Consent

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Add timestamp
    var timestamp = new Date();
    
    // Append row with data
    sheet.appendRow([
      timestamp,
      data.email,
      data.referralSource || 'website',
      data.userAgent || '',
      data.consent ? 'Yes' : 'No'
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("Waitlist webhook is active");
}
```

4. Save the project (Ctrl+S or Cmd+S)
5. Name it "DailyDrop Waitlist Handler"

## Step 3: Deploy as Web App

1. Click the **Deploy** button > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "DailyDrop Waitlist Handler"
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Authorize** the app when prompted
7. Copy the **Web app URL** that appears

## Step 4: Update Your Code

1. Open `/src/config/googleSheets.ts`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the URL you copied
3. Save the file

## Step 5: Test

1. Submit a test email through your waitlist form
2. Check your Google Sheet - you should see a new row with the submission

## Troubleshooting

- If submissions aren't appearing, check the Apps Script editor's execution logs
- Make sure the Web App is deployed with "Anyone" access
- The form will still work with Supabase even if Google Sheets fails

## Security Note

The Google Apps Script runs under your Google account but only has access to the specific spreadsheet. The "Anyone" setting only means anyone can send data to your webhook - they cannot read or modify your sheet directly.