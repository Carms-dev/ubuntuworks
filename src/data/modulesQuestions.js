export default {
  audio_visual: [
    {
      key: "language",
      label: "What language(s) is the event hosted in?",
      type: "input",
      initial: "",
    },
    {
      key: "translation",
      label: "What kind of language translation will be available?",
      type: "input",
      initial: "",
      help: "e.g. translation headsets, whisper translation, subtitles on zoom presentations etc",
    },
    {
      key: "live_caption",
      label: "Will there be live captioning?",
      type: "radio",
      initial: "",
      options: ["Yes", "No"],
      help: "Live captioning helps better ensure accessibility for those who experience language and/or audio processing barriers. Live captioning also ensures better accuracy than automated captioning, and allows for more participation (e.g. during Q&A periods, etc)"
    },
    {
      key: "video_caption",
      label: "Will there be captioning on videos shown?",
      type: "radio",
      initial: "",
      options: [
        "Yes",
        "Some",
        "No",
      ],
      help: "There are several different options for captioning videos. Check out this post by Ryerson University. Automated captioning (like available in zoom) is never a good substitute for an ASL/LSQ translator) and closed or open captioning on videos. For more information https://www.ryerson.ca/accessibility/guides-resources/captioning/"
    },
    {
      key: "transcription",
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
      key: "interpreter",
      label: "Will there be ASL/LSQ interpreter(s)?",
      type: "checkbox-group",
      initial: [],
      options: [
        {
          label: "ASL (American Sign Language)",
          value: "ASL",
        },
        {
          label: "LSQ (Langue des signes du Québec)",
          value: "LSQ",
        },
        {
          label: "ASL & LSQ",
          value: "ASL & LSQ",
        },
        {
          label: "Available upon request",
          value: "Available upon request",
        }
      ]
    },
    {
      key: "transcription",
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
      key: "entrance",
      label: "Does the main entrance to the venue feature any of the following? Select all that apply",
      type: "checkbox-group",
      initial: [],
      options: [
        {
          label: "",
          value: "",
        }
      ]
    },
    {
      key: "language",
      label: "Supplement information on main entrance",
      type: "input",
      initial: "",
    },
  ]
}
