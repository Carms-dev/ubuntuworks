export default {
  audio_visual: [
    {
      sectionName: "General",
      label: "What language(s) is the event hosted in?",
      type: "input",
      initial: "",
    },
    {
      sectionName: "General",
      label: "What kind of language translation will be available?",
      type: "input",
      initial: "",
      help: "e.g. translation headsets, whisper translation, subtitles on zoom presentations etc",
    },
    {
      sectionName: "General",
      label: "Will there be live captioning?",
      type: "radio",
      initial: "",
      options: ["Yes", "No"],
      help: "Live captioning helps better ensure accessibility for those who experience language and/or audio processing barriers. Live captioning also ensures better accuracy than automated captioning, and allows for more participation (e.g. during Q&A periods, etc)"
    },
    {
      sectionName: "General",
      label: "Will there be captioning on videos shown?",
      type: "radio",
      initial: "",
      options: [
        "Yes",
        "Some",
        "No",
      ],
      help: "There are several different options for captioning videos. Check out this post by Ryerson University. Automated captioning (like available in zoom) is never a good substitute for an ASL/LSQ translator) and closed or open captioning on videos. For more information, see [Ryerson University Guide in Captioning])(https://www.ryerson.ca/accessibility/guides-resources/captioning/)."
    },
    {
      sectionName: "General",
      label: "Will transcriptions be provided to attends?",
      type: "radio",
      initial: "",
      options: [
        "Yes, we can provide transcriptions before the event",
        "Yes, we can provide transcriptions after the event",
        "Yes, upon requested",
        "We can only provide transcriptions for some portions of the event",
        "No",
      ]
    }
  ],
  communication: [
    {
      sectionName: "General",
      label: "Will there be ASL/LSQ interpreter(s)?",
      type: "checkbox-group",
      initial: [],
      options: [
        "ASL (American Sign Language)",
        "LSQ (Langue des signes du Québec)",
        "ASL & LSQ",
        "Available upon request",
      ]
    },
    {
      sectionName: "General",
      label: "Will transcriptions be provided to attends?",
      type: "radio",
      initial: "",
      help: "Interactive badges, help increase communication accessibility. For online and hybrid events you can find creative ways to implement them. Check out Coco's section on 'interactive accessibility' in their accessibility guide.",
      link: "https://coco-net.org/accessibility-guidelines-organizers-facilitators/",
      options: [
        "Yes",
        "No",
        "Not applicable"
      ]
    },
  ],
  physical: [
    {
      sectionName: "General",
      label: "Does the main entrance to the venue feature any of the following? Select all that apply",
      type: "checkbox-group",
      initial: [],
      allowInput: true,
      options: [
        "Door frame is at least 33” wide",
        "Elevator",
        "No stairs or steps to enter venue",
        "No lips or beveles in the entrances that are more tha a half inch",
        "Working automated doors",
        "Permanent fixed ramp",
        "Portable ramp",
      ]
    },
    {
      sectionName: "General",
      label: "Will there be a seperate quiet / chill space available?",
      type: "radio",
      initial: "",
      options: [
        "Yes",
        "No",
      ],
    },
    {
      sectionName: "General",
      label: "What is your events scent policy?",
      type: "radio",
      initial: "",
      options: [
        "We have requested partcipants to reduce the scented products they wear",
        "We have requested partcipants not to wear any scented products",
        "We do not have a policy regarding scent",
      ],
      help: "A scent policy is what you communicate to participants before an event regarding products such as perfume, & other scented body products."
    },
    {
      sectionName: "Within the Venue",
      label: "Mobility device accessibility",
      type: "checkbox-group",
      initial: [],
      options: [
        "Any tables will have at least 2 - 3 vacant spots for mobility devices",
        "If applicable - There are automated doors to all relevant areas where the event is hosted",
        "There will be at least 90” (7.5) feet within the venue for mobility devices to turn around",
        "There will a designated seating area for people using mobility devices",
        "There will integrated areas throughout the seating configuration for people using mobility devices *this is better*",
        "There will be a clear paths that are a minimum 36 inches",
        "Tables / sign in tables etc will be 29” to 34” inches tall",
      ]
    },
    {
      sectionName: "Within the Venue",
      label: "Additional signage in the venue will be (select all that apply)",
      type: "checkbox-group",
      initial: [],
      allowInput: true,
      options: [
        "In large print",
        "Braille",
      ]
    },
    {
      sectionName: "Within the Venue",
      label: "What kind of seating arrangements will there be? (select all that apply)",
      type: "checkbox-group",
      initial: [],
      options: [
        "There will be space directly in front of the real - time captioning screen",
        "There will seats near the front for people near ASL/ LSQ interpreters",
        "Any group discussions will be had in a circle * this increasses audio and visual accessibility if the circle is kept small",
      ]
    },
    {
      sectionName: "Within the Venue",
      label: "Will there be enough seating for all participants?",
      type: "radio",
      initial: "",
      options: [
        "Yes",
        "No",
        "Maybe"
      ],
    },
    {
      sectionName: "Bathrooms",
      label: "Bathrooms - Mobility device accessibility (select all that apply)",
      type: "checkbox-group",
      initial: [],
      allowInput: true,
      options: [
        "Door frame is at least 33” wide",
        "No stairs or steps to enter bathroom",
        "No lips or beveles in the entrances that are more tha a half inch",
        "Working automated doors",
        "Permanent fixed ramp",
        "Portable ramp",
        "Size of washroom permits 2 people and a mobility device * approximately larger than 9 feet *",
      ]
    },
    {
      sectionName: "Bathrooms",
      label: "Will there be gender neutral washrooms available?",
      type: "radio",
      initial: "",
      options: [
        "Yes",
        "Yes, and they are also mobility device accessible *see above*",
        "No"
      ],
    },
    {
      sectionName: "Service Dogs",
      label: "Will there be space for service dogs (e.g. enough room for dogs to sit with their owner)",
      type: "radio",
      initial: "",
      options: [
        "Yes",
        "No"
      ],
    },
    {
      sectionName: "Service Dogs",
      label: "Will there be an accessible outdoor toilet space for service dogs?",
      type: "radio",
      initial: "",
      options: [
        "Yes",
        "No"
      ],
    },
    {
      sectionName: "Transportation",
      label: "Transportation accessibility to event. Select all that apply;",
      type: "radio",
      initial: "",
      options: [
        "There is accessible parking outside the venue",
        "The venue is near an accessible transit stop *If you're unsure and you're in Montreal, you can [check which 18 metro stops have elevator access](https://www.stm.info/en/info/universal-accessibility/elevator-access-metro)",
        "The exit and entryway close to accessible entrance will be clearly marked",
      ],
    },
  ],
  "covid": [
    {
      sectionName: "General",
      label: "Which general Covid-19 safety guidelines is your event implementing?",
      type: "checkbox-group",
      initial: [],
      allowInput: true,
      options: [
        "Covid - 19 vaccine passport / proof of vaccine is required",
        "The event will be held outside",
        "Hand santizer will be on site",
        "Hand washing stations will be available",
        "All of the above",
      ]
    },
    {
      sectionName: "General",
      label: "Will it be possible for participants to stay 6 feet apart from others throughout the event?",
      type: "checkbox-group",
      initial: [],
      allowInput: true,
      options: [
        "Yes",
        "No",
        "Only during portions of the event * e.g not in the line up but when seated*",
      ]
    },
    {
      sectionName: "General",
      label: "Mask wearing will be (select all that apply):",
      type: "radio",
      initial: "",
      options: [
        "Mandatory throughout the event",
        "Mandatory only when moving about the venue",
        "Optional",
      ],
    },
    {
      sectionName: "General",
      label: "If the venue is indoors, is there a filtration or ventilation system?",
      type: "radio",
      initial: "",
      options: [
        "Yes",
        "No",
        "Unsure",
      ],
    },
  ]
}
