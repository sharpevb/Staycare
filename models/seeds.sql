use staycare;

INSERT INTO members(`name`, `membertype`,`email`,`dob`,`phone`,FamilyId,
 `textaddress`,`allergies`,`medication`,`image`, `createdat`, `updatedat`)
VALUES ('Herman','Parent','Herman.Munster@Scaryway.com', null,'804-555-1213',1,
'Herman.Munster@Scaryway.com',null,null,null,curtime(),curtime());

INSERT INTO members(`name`, `membertype`,`email`,`dob`,`phone`,FamilyId,
 `textaddress`,`allergies`,`medication`,`image`, `createdat`, `updatedat`)
VALUES ('Lily','Parent','Lily.Munster@Scaryway.com', null,'804-555-1214',1,
'Lily.Munster@Scaryway.com',null,null,null,curtime(),curtime());

INSERT INTO members(`name`, `membertype`,`email`,`dob`,`phone`,FamilyId,
 `textaddress`,`allergies`,`medication`,`image`, `createdat`, `updatedat`)
VALUES ('Eddie','Child',null, '2019-10-09',null,1,
null,'Peanuts','N/A',null,curtime(),curtime());

INSERT INTO activities(`activitycode`, `activitydate`,`time`,`result1`,`result2`,`MemberId`, `createdat`, `updatedat`)
VALUES ('Diaper',curdate(),'10:00', 'BM',null,3,curtime(),curtime());

INSERT INTO activities(`activitycode`, `activitydate`,`time`,`result1`,`result2`,`MemberId`, `createdat`, `updatedat`)
VALUES ('Diaper',curdate(),'13:00', 'Wet',null,3,curtime(),curtime());

INSERT INTO activities(`activitycode`, `activitydate`,`time`,`result1`,`result2`,`MemberId`, `createdat`, `updatedat`)
VALUES ('Diaper',curdate(),'15:00', 'Wet',null,3,curtime(),curtime());

INSERT INTO activities(`activitycode`, `activitydate`,`time`,`result1`,`result2`,`MemberId`, `createdat`, `updatedat`)
VALUES ('Food',curdate(),'11:30', 'Chicken, french fries, apple sauce','all',3,curtime(),curtime());

INSERT INTO activities(`activitycode`, `activitydate`,`time`,`result1`,`result2`,`MemberId`, `createdat`, `updatedat`)
VALUES ('Food',curdate(),'14:30', 'Animal crackers','all',3,curtime(),curtime());

INSERT INTO activities(`activitycode`, `activitydate`,`time`,`result1`,`result2`,`MemberId`, `createdat`, `updatedat`)
VALUES ('Sleep',curdate(),'12:30', '13:30',null,3,curtime(),curtime());

INSERT INTO activities(`activitycode`, `activitydate`,`time`,`result1`,`result2`,`MemberId`, `createdat`, `updatedat`)
VALUES ('Notes',curdate(),null,'Eddie was an angel as always', null,3,curtime(),curtime());