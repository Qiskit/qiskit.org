export function sortEvents<T extends { startDate: string }>(events: T[]): T[] {
  return events
    .filter((event) => event.startDate)
    .sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);

      return dateA > dateB ? 1 : dateA < dateB ? -1 : 0;
    });
}
