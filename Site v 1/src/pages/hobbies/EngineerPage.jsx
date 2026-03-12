import { Engineer } from '../homePages/components/achievements/dataAchievements.js';

export default function EngineerPage() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">{Engineer.title}</h2>
        <p>{Engineer.text}</p>
      </div>
    </section>
  );
}

