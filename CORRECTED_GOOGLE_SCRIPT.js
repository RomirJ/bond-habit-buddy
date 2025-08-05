// CORRECTED GOOGLE APPS SCRIPT
// Copy this entire script and replace your current script in Google Apps Script

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
}  // <- This closing brace was missing in your original script