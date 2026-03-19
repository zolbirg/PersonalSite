const TRAVEL_START_DATE = new Date(2022, 8, 11); // 11 сентября 2022

function toMidnightLocal(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

// forms: [singular(one), few(2-4), many(5+)]
export function pluralizeRu(count, forms) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms[1];
  return forms[2];
}

export function calcTravelDuration(now = new Date()) {
  const start = toMidnightLocal(TRAVEL_START_DATE);
  const current = toMidnightLocal(now);

  const diffMs = current.getTime() - start.getTime();
  const days = Math.max(0, Math.floor(diffMs / (24 * 60 * 60 * 1000)));

  // Полные календарные годы: сколько раз прошла дата 11 сентября с момента старта.
  let years = current.getFullYear() - start.getFullYear();
  const passedAnniversaryThisYear =
    current.getMonth() > start.getMonth() ||
    (current.getMonth() === start.getMonth() && current.getDate() >= start.getDate());
  if (!passedAnniversaryThisYear) years -= 1;
  years = Math.max(0, years);

  return { years, days };
}

