export default [
  {
    key: "has_point_person",
    label: "Will there be an accessibility point person at your event?",
    help: "This is someone who is a part of your organization or hired specifically to help direct people to accessible seating, entrances, open doors etc. This is not someone who is a personal care attendant.",
    type: "radio",
    initial: '',
    required: true,
    options: [ 'Yes', 'No' ],
  },
  {
    key: "point_person_info",
    label: "Supplement information on this accessibility point person?",
    type: "input",
    initial: '',
  },
  {
    key: "selected_modules",
    label: "Select the relevant content for the event to see your tailored accessibility guide.",
    help: "This tool is divided into different modules that will help you plan for accessibility depending on the content of the event you are hosting.",
    type: "module-checkbox-group",
    // type: "checkbox-group",
    initial: ["audio_visual", "communication"],
    options: [
      {
        label: "Audio & Visual Accessibility (required)",
        value: "audio_visual",
        checked: true,
        disabled: true,
      },
      {
        label: "Communication Accessibility (required)",
        value: "communication",
        checked: true,
        disabled: true,
      },
      {
        label: "Physical Accessiblity",
        value: "physical"
      },
      {
        label: "Covid-19 Safety",
        value: "covid"
      }
    ]
  },
  {
    key: "event_type",
    label: "What type of event are you hosting?",
    help: "Hybrid is the most accessible type of event that is currently most needed by many people with disabilities",
    type: "radio",
    required: true,
    options: [
      "The event is fully online",
      "The event is a hybrid of online & in-person",
      "The event is fully in person",
    ],
    initial: "",
  }
]
