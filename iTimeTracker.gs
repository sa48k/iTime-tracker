function createTriggers() {
   var days = [ScriptApp.WeekDay.MONDAY, ScriptApp.WeekDay.TUESDAY,
               ScriptApp.WeekDay.WEDNESDAY, ScriptApp.WeekDay.THURSDAY,                                            
               ScriptApp.WeekDay.FRIDAY];
   for (var i=0; i<days.length; i++) {
      ScriptApp.newTrigger("unlockTracker")
               .timeBased().onWeekDay(days[i])
               .atHour(8).create();
     
      ScriptApp.newTrigger("lockTracker")
               .timeBased().onWeekDay(days[i])
               .atHour(15).create();
   }
}

function unlockTracker() {                                                                // set to 'any user in domain with link can edit'
  // var ss = SpreadsheetApp.openById("16XE4TVBY7sQtAIpthQksgQ9QMjhwK8eKFY3JzEMK9H4");       // run at 9am every weekday
  var fileId = '16XE4TVBY7sQtAIpthQksgQ9QMjhwK8eKFY3JzEMK9H4';
  DriveApp.getFileById(fileId).setSharing(DriveApp.Access.DOMAIN_WITH_LINK, DriveApp.Permission.EDIT);
}

function lockTracker() {                                                                 // set to 'private, only teachers can view and edit''
//  var ss = SpreadsheetApp.openById("16XE4TVBY7sQtAIpthQksgQ9QMjhwK8eKFY3JzEMK9H4");      // run at 3pm every weekday
  var fileId = '16XE4TVBY7sQtAIpthQksgQ9QMjhwK8eKFY3JzEMK9H4';
  DriveApp.getFileById(fileId).setSharing(DriveApp.Access.PRIVATE, DriveApp.Permission.VIEW);
  SpreadsheetApp.openById(fileId).addEditors(['andy@amesbury.school.nz', 'kieron@amesbury.school.nz', 'kalesha@amesbury.school.nz', 'hazel@amesbury.school.nz', 'demelza@amesbury.school.nz']); // Use SpreadsheetApp's addEditor method to avoid sending notification email
}