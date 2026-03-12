import { Developer } from '../homePages/components/achievements/dataAchievements.js';

export default function DeveloperPage() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">{Developer.title}</h2>
        <p>{Developer.text}</p>
      </div>
    </section>
  );
}

