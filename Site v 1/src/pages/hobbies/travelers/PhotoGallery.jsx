import { useEffect, useMemo, useState } from 'react';
import classes from './travelers.module.scss';
import { FALLBACK_IMAGE } from './travelImages.js';

const FILTERS = [
  { id: 'all', label: 'Все' },
  { id: 'Грузия', label: 'Грузия' },
  { id: 'Турция', label: 'Турция и Кипр' },
  { id: 'Балканы', label: 'Балканы' },
  { id: 'Средняя Азия', label: 'Средняя Азия' },
  { id: 'Россия', label: 'Россия' },
];

export default function PhotoGallery({ images }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeImageId, setActiveImageId] = useState(null);
  const [visibleRows, setVisibleRows] = useState(5);
  const [columns, setColumns] = useState(1);

  const filteredImages = useMemo(
    () =>
      activeFilter === 'all'
        ? images
        : images.filter((image) => image.tag === activeFilter),
    [activeFilter, images]
  );

  useEffect(() => {
    setVisibleRows(5);
  }, [activeFilter]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setColumns(mq.matches ? 3 : 1);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const visibleCount = Math.max(1, visibleRows) * Math.max(1, columns);
  const visibleImages = useMemo(
    () => filteredImages.slice(0, visibleCount),
    [filteredImages, visibleCount]
  );
  const hasMore = filteredImages.length > visibleImages.length;

  const activeImage = useMemo(
    () => filteredImages.find((img) => img.id === activeImageId) ?? null,
    [activeImageId, filteredImages]
  );

  useEffect(() => {
    if (!activeImage) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveImageId(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeImage]);

  return (
    <section className="section">
      <div className="container">
        <header className={classes.galleryHeader}>
          <div>
            <h2 className={classes.galleryTitle}>Фотографии с дороги</h2>
            <p className={classes.galleryIntro}>
              Небольшая выборка кадров из разных этапов: горы Кавказа,
              побережья, Балканы, Средняя Азия и Россия.
            </p>
          </div>
          <div className={classes.galleryFilters}>
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={
                  activeFilter === filter.id
                    ? `${classes.galleryFilter} ${classes.galleryFilterActive}`
                    : classes.galleryFilter
                }
              >
                {filter.label}
              </button>
            ))}
          </div>
        </header>
        <div className={classes.galleryGrid}>
          {visibleImages.map((image) => (
            <button
              key={image.id}
              type="button"
              className={classes.galleryItem}
              onClick={() => setActiveImageId(image.id)}
              aria-label={`Открыть фото: ${image.alt}`}
            >
              <img
                src={encodeURI(image.src)}
                alt={image.alt}
                className={classes.galleryItemImg}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = FALLBACK_IMAGE;
                }}
              />
            </button>
          ))}
        </div>

        {hasMore && (
          <div className={classes.galleryMore}>
            <button
              type="button"
              className={classes.galleryMoreBtn}
              onClick={() => setVisibleRows((r) => r + 5)}
            >
              Показать ещё
            </button>
          </div>
        )}
      </div>

      {activeImage && (
        <div
          className={classes.galleryLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фотографии"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActiveImageId(null);
          }}
        >
          <button
            type="button"
            className={classes.galleryLightboxClose}
            onClick={() => setActiveImageId(null)}
            aria-label="Закрыть"
          >
            ×
          </button>
          <img
            className={classes.galleryLightboxImg}
            src={encodeURI(activeImage.src)}
            alt={activeImage.alt}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = FALLBACK_IMAGE;
            }}
          />
        </div>
      )}
    </section>
  );
}
