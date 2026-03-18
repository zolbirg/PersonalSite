import { useState } from 'react';
import classes from './travelers.module.scss';
import { FALLBACK_IMAGE } from './travelImages.js';

const FILTERS = [
  { id: 'all', label: 'Все' },
  { id: 'Кавказ', label: 'Кавказ' },
  { id: 'Турция', label: 'Турция и Кипр' },
  { id: 'Балканы', label: 'Балканы' },
  { id: 'Средняя Азия', label: 'Средняя Азия' },
  { id: 'Россия', label: 'Россия' },
];

export default function PhotoGallery({ images }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredImages =
    activeFilter === 'all'
      ? images
      : images.filter((image) => image.tag === activeFilter);

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
          {filteredImages.map((image) => (
            <div key={image.id} className={classes.galleryItem}>
              <img
                src={image.src}
                alt={image.alt}
                className={classes.galleryItemImg}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = FALLBACK_IMAGE;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
