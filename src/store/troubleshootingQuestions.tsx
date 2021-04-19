export const QUESTIONS = {
  // A list of questions. The key can be arbitrary
  INITIAL_QUESTION: {
    // (Optional) A description that will show up *before* the question. A couple use cases of this are:
    // - Providing context for the question that will be asked
    // - Instructing the user to do something (e.g. turn the device off/on again); then the question would simply be
    //     something like "Is it working now? (Yes/No)"
    description: "",
    
    // (Required) The question to ask
    question: "What's wrong?",

    // (Required) A set of answer choices to provide to the user.
    // Each key is the text that will be displayed for that answer choice;
    // each value is the key for a follow-up question that will be asked if that choice is selected.
    options: {
      "An appliance is not functioning": "WHICH_APPLIANCE",
      "An appliance is not charging": "CHARGING_ERROR",
      "Lights turn out earlier than they used to": "BAD_LIGHT",
      "Lights turn out in the middle of the night": "BAD_LIGHT",
      "1 or more lights do not work at all": "BROKEN_LIGHT",
      "No appliances or lights work": "ALL_BROKEN",
      "The display screen is blank": "RESTART_DEVICE",
      "Solar suitcase is not working": "ALL_BROKEN",
      "I see error codes": "ERROR_CODE_FLOW",
    }
  },
  WHICH_APPLIANCE: {
    description: "",
    question: "Which appliance is not functioning?",
    options: {
      "Phone charger": "",
      "Head Lamp": "",
      "Fetal Doppler": "",
      "Thermometer": "",
      "Rechargeable battery": "",
    }
  }
};