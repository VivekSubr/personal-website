import disco from './assets/disco.jpg'
import estoric from './assets/estoric.jpg'
import kobe1 from './assets/kobe_1.jpg'
import kobe2 from './assets/kobe_2.jpg'
import kobe3 from './assets/kobe_3.jpg'
import travel1 from './assets/travel_1.png'
import travel2 from './assets/travel_2.png'
import travel3 from './assets/travel_3.png'
import warhammer from './assets/warhammer.jpg'
import writingMughal from './assets/writing-mughal.jpg'

type PersonalDetailsPageProps = {
  onBackHref: string
}

type Passion = {
  id: string
  eyebrow: string
  title: string
  blurb: string
  images: string[]
  align?: 'left' | 'right' | 'center'
  link?: { href: string; label: string }
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`

const PASSIONS: Passion[] = [
  {
    id: 'dogs',
    eyebrow: '01 — Companions',
    title: 'Dogs',
    blurb:
      'Have a golden retreiver named Kobe, he is the best.',
    images: [
      kobe1,
      kobe2,
      kobe3,
    ],
    align: 'left',
    link: {
      href: 'https://www.instagram.com/kobee_doobee_dooo?igsh=MXV4Y2tnbmN6cjV1Nw==',
      label: 'See Kobe on Instagram →',
    },
  },
  {
    id: 'writing',
    eyebrow: '02 — Craft',
    title: 'Writing',
    blurb:
      'I do abit of writing/blogging on the side, about any random topic.',
    images: [
      u('photo-1455390582262-044cdead277a'),
      writingMughal,
    ],
    align: 'right',
    link: {
      href: 'https://www.quora.com/profile/Vivek-Subramanian-10',
      label: 'Read on Quora →',
    },
  },
  {
    id: 'travel',
    eyebrow: '03 — Wander',
    title: 'Travel',
    blurb:
      'Travel on occasion, exploring new places and cultures.',
    images: [
      travel1,
      travel2,
      travel3,
    ],
    align: 'left',
  },
  {
    id: 'gaming',
    eyebrow: '04 — Play',
    title: 'Gaming',
    blurb:
      'I am an avid gamer... play mostly for the story though',
    images: [
      disco,
      estoric,
      warhammer,
    ],
    align: 'right',
  },  
]

// Pick a mosaic layout class based on how many images we have.
// The CSS for each variant is defined in App.css.
function mosaicClass(count: number): string {
  if (count <= 1) return 'mosaic--1'
  if (count === 2) return 'mosaic--2'
  if (count === 3) return 'mosaic--3'
  if (count === 4) return 'mosaic--4'
  return 'mosaic--many'
}

function PersonalDetailsPage({ onBackHref }: PersonalDetailsPageProps) {
  return (
    <main className="passions">
      <a className="passions__back" href={onBackHref}>
        ← Back
      </a>

      {/* ── Intro page ── */}
      <section className="passions__intro" aria-label="Personal details intro">
        <div className="passions__intro-inner">
          <p className="details-page__eyebrow">Personal Details</p>
          <h1 className="details-page__title">A bit more about Vivek</h1>
          <p className="details-page__intro">
            This is all about who I am outside of work.
          </p>
          <a className="hero__cta" href={onBackHref}>
            Back to home
          </a>
          <div className="passions__intro-cue" aria-hidden="true">
            Scroll to explore ↓
          </div>
        </div>
      </section>

      {PASSIONS.map((p, idx) => {
        const align = p.align ?? 'left'
        const count = p.images.length
        return (
          <section
            key={p.id}
            className={`passion passion--${align}`}
            aria-label={p.title}
          >
            <div
              className={`passion__mosaic ${mosaicClass(count)}`}
              data-count={count}
              aria-hidden="true"
            >
              {p.images.map((src, i) => (
                <div
                  key={src + i}
                  className="passion__tile"
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
            </div>

            <div className="passion__overlay" />
            <div className="passion__sheen" />

            <div className="passion__content">
              <p className="passion__eyebrow">{p.eyebrow}</p>
              <h2 className="passion__title">{p.title}</h2>
              <p className="passion__blurb">{p.blurb}</p>
              {p.link && (
                <a
                  className="passion__link"
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.link.label}
                </a>
              )}
            </div>

            {idx < PASSIONS.length - 1 && (
              <div className="passion__scroll-cue" aria-hidden="true">
                Scroll
              </div>
            )}
          </section>
        )
      })}
    </main>
  )
}

export default PersonalDetailsPage
