// Google Apps Script Web App URL
// You'll need to replace this with your actual Google Apps Script URL
export const GOOGLE_SHEETS_WEBHOOK_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

// Instructions for setting up Google Sheets integration:
// 1. Create a new Google Sheet for collecting waitlist signups
// 2. Go to Extensions > Apps Script
// 3. Replace the code with the following:
/*
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
*/
// 4. Save and deploy as Web App
// 5. Set "Execute as" to yourself and "Who has access" to "Anyone"
// 6. Copy the deployment URL and paste it above