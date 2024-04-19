import { rrulestr } from "rrule";

// Function to convert RRule to events array
const rruleToEvents = (rruleString, title, startDate, endDate) => {
  const rrule = rrulestr(rruleString);

  const events = rrule.between(startDate, endDate).map((date) => ({
    title: title,
    start: date,
    end: new Date(date.getTime() + 12 * 60 * 60 * 1000), // Assume 12 hrs
  }));

  return events;
};

// Note, "hour" is always in UTC. For now, base 9AM on ET time offset.
const rruleString = "RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR,SA;BYHOUR=13;DTSTART=19800101T090000Z;UNTIL=20801231T180000Z"; // Example RRule string
const title = "Work"; // Title for the events
const startDate = new Date("1980-01-01"); // Start date for generating events
const endDate = new Date("2080-12-31"); // End date for generating events

const events = rruleToEvents(rruleString, title, startDate, endDate);

export default events;