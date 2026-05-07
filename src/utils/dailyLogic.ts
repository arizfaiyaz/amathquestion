export function getDailyQuestionIndex(totalQuestions: number): number {

  const epoch = new Date('2024-01-01T00:00:00z').getTime();

  const now = new Date();
  const localOffset = now.getTimezoneOffset() * 60000;
  const today = now.getTime() - localOffset;
  const msInDay = 1000 * 60 * 60 * 24;
  const daySinceEpoch = Math.floor((today - epoch) / msInDay);

  return daySinceEpoch % totalQuestions;
}

export function getTimeUntilMidnight() {
  const now = new Date();
  const midnight = new Date();

  //set to next midnight
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight.getTime() - now.getTime();
  return {
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / (1000)) % 60),
  };
}