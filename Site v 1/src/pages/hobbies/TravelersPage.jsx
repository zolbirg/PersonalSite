import TravelersPageContent from './TravelersPageContent.jsx';

export default function TravelersPage() {
  return (
    <main>
      {/* Основной контент страницы путешествий вынесен в отдельный компонент */}
      {/* чтобы сохранить читаемость и возможность переиспользования. */}
      <TravelersPageContent />
    </main>
  );
}

