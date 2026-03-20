import { useLayoutEffect } from 'react';
import {
  FiBox,
  FiBriefcase,
  FiCpu,
  FiImage,
  FiLayers,
  FiMail,
  FiSettings,
  FiUsers,
} from 'react-icons/fi';
import {
  SiAdobephotoshop,
  SiArduino,
  SiAutocad,
  SiCoreldraw,
  SiCplusplus,
  SiFigma,
  SiNotion,
  SiSketchup,
} from 'react-icons/si';

import ScrollReveal from '../../assets/components/animations/ScrollReveal.jsx';
import classes from './engineerPage.module.scss';

const HERO_METRICS = [
  { value: '12+', label: 'лет инженерного и операционного опыта' },
  { value: '4+', label: 'лет собственных производств' },
  { value: '6+', label: 'лет в управлении командами и проектами' },
  { value: '3', label: 'направления на одной производственной базе' },
];

const CAREER_TIMELINE = [
  {
    period: '18+ лет',
    title: 'Монтаж дверей: старт в профессии',
    text: 'Первая работа в строительной компании. Работал установщиком дверей и получил фундаментальный строительный и инженерный опыт на реальных объектах.',
  },
  {
    period: 'Следующий этап',
    title: 'Рост до руководителя',
    text: 'Прошёл путь по карьерной лестнице от исполнителя до руководителя бригады и небольшого отдела.',
  },
  {
    period: 'Около 23 лет',
    title: 'Первый бизнес: производство панелей',
    text: 'Открыл производство панелей для дверей. Работал со станками (ЧПУ, форматно-раскроечный, термопресс), управлял командой от 3 до 7 человек.',
  },
  {
    period: 'Примерно в 27 лет',
    title: 'Второе производство: Macrowood и декорации',
    text: 'Личный бренд детских игрушек Macrowood (деревянные пазлы и линейка продуктов) и отдельное направление — изготовление интерактивных декораций для выставок, музеев и витрин.',
  },
  {
    period: 'Параллельно',
    title: 'Корпоративные мероприятия и операционное управление',
    text: 'В event-компании вырос от инструктора на площадке до руководителя всей операционной деятельности: координация больших групп сотрудников и участников.',
  },
];

const DECOR_POINTS = [
  'Интерактивные и подвижные конструкции для выставок, музеев и магазинных витрин — от идеи до монтажа на площадке.',
  'Сценарии взаимодействия посетителей с объектом, проработка узлов, безопасность и повторяемость работы в экспозиции.',
  'Связка инженерии и «витринного» визуала: дерево, фурнитура, приводы, электроника и микроконтроллеры при необходимости.',
  'Единичные авторские объекты под конкретную площадку — в том же производственном контуре, что и серийная линейка игрушек.',
];

const PROCESS_STEPS = [
  { id: '01', title: 'Бриф и идея', text: 'Фиксация задачи, ограничений площадки и сроков.' },
  { id: '02', title: 'Проектирование', text: 'Чертежи, CAD-модели, подбор материалов и механики.' },
  { id: '03', title: 'Прототип', text: 'Проверка узлов, сценариев и надёжности конструкции.' },
  { id: '04', title: 'Производство', text: 'Организация работ, станки, контроль качества.' },
  { id: '05', title: 'Запуск', text: 'Монтаж, настройка и сдача в заявленные сроки.' },
];

const ENGINEERING_SKILLS = [
  { icon: <SiAutocad />, name: 'AutoCAD', level: 88 },
  { icon: <SiCoreldraw />, name: 'CorelDRAW', level: 84 },
  { icon: <SiAdobephotoshop />, name: 'Photoshop', level: 72 },
  { icon: <SiSketchup />, name: 'SketchUp', level: 70 },
  { icon: <FiBox />, name: 'SolidWorks', level: 72 },
  { icon: <SiFigma />, name: 'Figma', level: 68 },
  { icon: <SiNotion />, name: 'Notion', level: 74 },
  { icon: <SiArduino />, name: 'Arduino IDE', level: 78 },
  { icon: <FiCpu />, name: 'Микроконтроллеры', level: 76 },
  { icon: <FiSettings />, name: 'ЧПУ и CAM-процессы', level: 90 },
  { icon: <SiCplusplus />, name: 'Программирование', level: 64 },
];

const CASES = [
  {
    title: 'Интерактивные декорации для выставок и музеев',
    challenge: 'Нестандартные подвижные объекты, жёсткие сроки и ограничения площадки, нужна слаженная работа проектирования и монтажа.',
    solution: 'Разбил задачу на этапы, синхронизировал производство и людей на площадке, контролировал узлы и сценарий экспозиции.',
    result: 'Объекты вводились в график и работали в режиме экспозиции без провалов по ключевым узлам.',
  },
  {
    title: 'Бренд Macrowood',
    challenge: 'С нуля придумать продуктовую линейку и довести её до реальных изделий на своём производстве.',
    solution: 'Идея, конструкция пазлов, визуальный стиль бренда, технологии и выпуск под одной крышей.',
    result: 'Продукт полностью придуман и реализован мной в рамках производства.',
  },
  {
    title: 'Задачи, которые казались «невозможными»',
    challenge: 'На старте ограничения по срокам, бюджету или технике делали проект малореалистичным.',
    solution: 'Декомпозиция, подбор людей под этапы, поэтапный план и жёсткий контроль сроков.',
    result: 'Доводил такие проекты до финала в заявленные рамки по времени и качеству результата.',
  },
];

const VISUAL_STORY = [
  {
    title: 'Старт в строительстве',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Производственный цикл',
    image: 'https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Инженерное проектирование',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Лидерство на площадке',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Креатив и интерактив',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Финальная реализация',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80',
  },
];

export default function EngineerPage() {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <main className={classes.page}>
      <section className={classes.hero}>
        <div>
          <ScrollReveal direction="left" delay={0.05}>
            <p className={classes.eyebrow}>Инженерный бэкграунд</p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.1}>
            <h1 className={classes.hero__title}>
              От монтажника дверей до полного цикла: проектирование, производство, люди
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className={classes.hero__desc}>
              Запускал производства, вёл бренд Macrowood, делал интерактивные декорации для площадок
              и выстраивал операционные процессы. Обычно брал на себя весь путь — от идеи до ввода в
              эксплуатацию — и отвечал за результат целиком.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal direction="scale" delay={0.12}>
          <div className={classes.hero__imageWrap}>
            <img
              className={classes.hero__image}
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80"
              alt="Инженерная работа и производство"
            />
          </div>
        </ScrollReveal>
      </section>

      <section className={classes.metrics}>
        {HERO_METRICS.map((item, index) => (
          <ScrollReveal
            key={item.label}
            direction="up"
            delay={index * 0.08}
            className={classes.metricsItem}
          >
            <article className={classes.metricCard}>
              <p className={classes.metricCard__value}>{item.value}</p>
              <p className={classes.metricCard__label}>{item.label}</p>
            </article>
          </ScrollReveal>
        ))}
      </section>

      <section className={classes.section}>
        <ScrollReveal direction="up">
          <div className={classes.sectionHead}>
            <h2 className={classes.sectionTitle}>
              Путь <span>роста</span>
            </h2>
            <p className={classes.sectionSub}>
              От монтажа до управления производством и операциями — каждый этап добавлял инженерную и
              управленческую глубину.
            </p>
            <div className={classes.divider} />
          </div>
        </ScrollReveal>
        <div className={classes.timeline}>
          {CAREER_TIMELINE.map((item, index) => (
            <ScrollReveal key={item.title} direction="left" delay={index * 0.07}>
              <article className={classes.timeline__item}>
                <span className={classes.timeline__dot} aria-hidden="true" />
                <p className={classes.timeline__period}>{item.period}</p>
                <h3 className={classes.timeline__title}>{item.title}</h3>
                <p className={classes.timeline__text}>{item.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className={classes.section}>
        <ScrollReveal direction="up">
          <div className={classes.sectionHead}>
            <h2 className={classes.sectionTitle}>
              Производства <span>и бренд</span>
            </h2>
            <p className={classes.sectionSub}>
              Три разных направления на одной производственной базе: от дверных панелей до собственного
              бренда игрушек Macrowood и производства декораций.
            </p>
            <div className={classes.divider} />
          </div>
        </ScrollReveal>
        <div className={classes.threeCol}>
          <ScrollReveal direction="up" className={classes.threeColItem}>
            <article className={classes.storyCard}>
              <FiLayers className={classes.storyCard__icon} />
              <h3>Первое производство: панели для дверей</h3>
              <p>
                Бизнес работал около четырёх лет. В составе базы: фрезерный ЧПУ, форматно-раскроечный
                станок, термопресс и другие узлы. В разное время в подчинении от 3 до 7 человек.
              </p>
            </article>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.06} className={classes.threeColItem}>
            <article className={classes.storyCard}>
              <FiBriefcase className={classes.storyCard__icon} />
              <h3>Бренд Macrowood</h3>
              <p>
                Личный бренд детских игрушек Macrowood — в том числе деревянные пазлы и другие форматы.
                Продуктовая линейка полностью придумана и реализована мной: от идеи и конструкции до
                выпуска на своём производстве.
              </p>
            </article>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.12} className={classes.threeColItem}>
            <article className={classes.storyCard}>
              <FiImage className={classes.storyCard__icon} />
              <h3>Декорации и интерактив</h3>
              <p>
                На той же производственной базе делались интерактивные декорации для выставок, музеев и
                витрин: подвижные фигуры, сценические решения и объекты с механикой и электроникой.
                Проектирование, изготовление и монтаж под задачу площадки.
              </p>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className={classes.section}>
        <ScrollReveal direction="up">
          <div className={classes.sectionHead}>
            <h2 className={classes.sectionTitle}>
              Декорации <span>и интерактив</span>
            </h2>
            <p className={classes.sectionSub}>
              Отдельная линия работ поверх бренда игрушек — объекты для экспозиций и ритейла, где важны
              механика, сроки и впечатление зрителя.
            </p>
            <div className={classes.divider} />
          </div>
        </ScrollReveal>
        <div className={classes.decorSection}>
          <ScrollReveal direction="up">
            <ul className={classes.decorList}>
              {DECOR_POINTS.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className={classes.section}>
        <div className={classes.operations}>
          <ScrollReveal direction="left">
            <div>
              <div className={classes.sectionHead}>
                <h2 className={classes.sectionTitle}>
                  Операции <span>и люди</span>
                </h2>
                <p className={classes.sectionSub}>
                  Параллельно производствам развивался в компании корпоративных мероприятий: от
                  инструктора до руководителя всей операционной деятельности.
                </p>
                <div className={classes.divider} />
              </div>
              <p className={classes.operations__text}>
                На площадках приходилось выстраивать работу больших групп сотрудников и участников,
                синхронизировать роли и сроки в динамичной среде — близко к тому, как ведётся
                производственный и монтажный процесс, только в формате событий.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className={classes.operations__stats}>
              <article>
                <FiUsers />
                <h3>Масштаб команд</h3>
                <p>Координация людей, ролей и зон ответственности на площадке.</p>
              </article>
              <article>
                <FiSettings />
                <h3>Процессы под давлением сроков</h3>
                <p>Синхронизация задач и подрядчиков в условиях жёсткого расписания.</p>
              </article>
              <article>
                <FiCpu />
                <h3>Системное мышление</h3>
                <p>Разбиение сложного на этапы, контроль рисков и финальный результат.</p>
              </article>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={classes.section}>
        <ScrollReveal direction="up">
          <div className={classes.sectionHead}>
            <h2 className={classes.sectionTitle}>
              Инструменты <span>и стек</span>
            </h2>
            <p className={classes.sectionSub}>
              Kompas, AutoCAD, CorelDRAW, Photoshop, SketchUp, SolidWorks; Figma и Notion для макетов и
              процессов; Arduino IDE, микроконтроллеры и десятки CAM- и ЧПУ-контуров — всё это
              складывалось в возможность закрывать задачи разной сложности.
            </p>
            <div className={classes.divider} />
          </div>
        </ScrollReveal>
        <div className={classes.skillMatrix}>
          {ENGINEERING_SKILLS.map((skill, index) => (
            <ScrollReveal key={skill.name} direction="up" delay={index * 0.06}>
              <article className={classes.skillRow}>
                <div className={classes.skillRow__title}>
                  <span>{skill.icon}</span>
                  <p>{skill.name}</p>
                </div>
                <div className={classes.skillRow__bar}>
                  <div style={{ width: `${skill.level}%` }} />
                </div>
                <strong>{skill.level}%</strong>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className={classes.section}>
        <ScrollReveal direction="up">
          <div className={classes.sectionHead}>
            <h2 className={classes.sectionTitle}>
              От идеи <span>до запуска</span>
            </h2>
            <p className={classes.sectionSub}>
              Типичная схема, по которой вёл проекты, когда отвечал за цикл целиком.
            </p>
            <div className={classes.divider} />
          </div>
        </ScrollReveal>
        <div className={classes.pipeline}>
          {PROCESS_STEPS.map((step, index) => (
            <ScrollReveal key={step.id} direction="up" delay={index * 0.05}>
              <article className={classes.pipeline__item}>
                <span>{step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className={classes.section}>
        <ScrollReveal direction="up">
          <div className={classes.sectionHead}>
            <h2 className={classes.sectionTitle}>
              Когда «невозможно» <span>становилось сделанным</span>
            </h2>
            <p className={classes.sectionSub}>
              Несколько характерных ситуаций — без рекламы услуг, только фактура опыта.
            </p>
            <div className={classes.divider} />
          </div>
        </ScrollReveal>
        <div className={classes.caseGrid}>
          {CASES.map((item, index) => (
            <ScrollReveal key={item.title} direction="up" delay={index * 0.08}>
              <article className={classes.caseCard}>
                <h3>{item.title}</h3>
                <p>
                  <strong>Ситуация:</strong> {item.challenge}
                </p>
                <p>
                  <strong>Как шёл:</strong> {item.solution}
                </p>
                <p>
                  <strong>Итог:</strong> {item.result}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className={classes.section}>
        <ScrollReveal direction="up">
          <div className={classes.sectionHead}>
            <h2 className={classes.sectionTitle}>
              Визуальный <span>контекст</span>
            </h2>
            <p className={classes.sectionSub}>
              Подборка образов в духе этапов пути (можно позже заменить на личные фото и чертежи).
            </p>
            <div className={classes.divider} />
          </div>
        </ScrollReveal>
        <div className={classes.gallery}>
          {VISUAL_STORY.map((item, index) => (
            <ScrollReveal key={item.title} direction="scale" delay={index * 0.04}>
              <article className={classes.galleryCard}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div>
                  <FiImage />
                  <p>{item.title}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className={classes.closing}>
        <ScrollReveal direction="up">
          <h2 className={classes.closing__title}>
            Готов браться за задачи <span>любой сложности</span>
          </h2>
          <p className={classes.closing__text}>
            Даже если на старте они кажутся невыполнимыми — привык разбирать их на этапы, подключать
            нужных людей и доводить до финала с ответственностью за результат. Так работал в
            производстве, на площадках и в проектах полного цикла.
          </p>
          <a href="mailto:Kaninroman@mail.ru" className={classes.closing__mail}>
            <FiMail aria-hidden />
            Kaninroman@mail.ru
          </a>
        </ScrollReveal>
      </section>
    </main>
  );
}
