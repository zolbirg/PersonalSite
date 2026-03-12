import { Travelers } from '../homePages/components/achievements/dataAchievements.js';

export default function TravelersPage() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">{Travelers.title}</h2>
        <p>{Travelers.text}</p>
      </div>
    </section>
  );
}

