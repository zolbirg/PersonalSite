import UnderDevelopment from '../shared/UnderDevelopment';
import { Engineer } from '../homePages/components/achievements/dataAchievements.js';

export default function EngineerPage() {
  return (
    <UnderDevelopment
      title={Engineer.title}
      description="Раздел в разработке. Скоро здесь появится что-то интересное."
    />
  );
}
