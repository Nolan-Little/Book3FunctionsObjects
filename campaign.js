const campaign = {
   district: "4th congressional district",
   
   platform: {
     taxes: "libertarian.",
     jobs:"We need more.",
     infrastructure:"Seems good to me.",
     healthcare:"People need this.",
     crimeAndEnforcement: "Crime bad, enforcement good."
   },

   donationlink: "mycampaign.com/givememoneyplz",
   
   
   eventCalender: [
     {
        eventName: "Hand shake summit",
        eventLocation: "Hand shake center.",
        eventDate: "10/14/19",
        eventTime: "7:00 - 9:00",
     },
     {
        eventName: "Talky Talky",
        eventLocation: "The Listening room",
        eventDate: "Next week",
        eventTime: "On the hour",
     },
     {
        eventName: "Say Hello, Make Friends",
        eventLocation: "Community Center",
        eventDate: "12/25/18",
        eventTime: "Until Santa leaves",
     },
   ],
   
   
   volunteerInfo: [
     {
        name: "Joe Smith",
        address: {
            houseNumber: 1,
            street: "Here Ave",
            city: "Placeville",
            zip: 11111,
        },
        email: "joesmith@gmail.com",
        phone: 9999999999,
        availability: "Next week.",
        activities: "Phones, doors, baby holding."
     },
     {
        name: "Jane Watserface",
        address: {
          houseNumber: 1,
          street: "Here Ave",
          city: "Placeville",
          zip: 11111,
        },
        email: "watsajane@this.com",
        phone: 99999999999,
        availability: "Anytime",
        activities: "Kicking the doors down, yelling, talking nicely."
     },
     {
        name: "tough mike",
        address: {
          houseNumber: 1,
          street: "Here Ave",
          city: "Placeville",
          zip: 11111,
      },
        email: "toughguy27@hotmail.com",
        phone: 9999999999,
        availability: "All Day",
        activities: "Being intimidating, also yelling."
     }
   ],

   biography: "insert giant block of lorem ipsum here",

   imageGallery: {
      headshot: "headshot.url",
      family: "familyPhoto.url",
      consituent: "fanphoto.url"
   },

   missionStatement: "Kick much ass, eat much more cake.",

   voterRegistrationLink: "votenow.com"

}

function addImage(newImage, newLink) {
  campaign.imageGallery[newImage] = newLink;
  console.log(campaign.imageGallery);
}

addImage("husband", "husbandpic.url")

function addEvent(name, location, date, time){
  campaign.eventCalender.push({
    eventName: name,
    eventLocation: location,
    eventDate: date,
    eventTime: time
  })
  console.log(campaign.eventCalender);
}
addEvent("party", "Here","tomorrow", "forever");

function changePlatform(platform, stance) {
  campaign.platform[platform] = stance;
  console.log(campaign.platform);
}

changePlatform("taxes", "Less.");