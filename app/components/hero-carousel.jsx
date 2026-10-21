'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Icon from './ui-icon';

const STORE_URL = 'https://smartstore.naver.com/kwdt-sasak-dog';
const slides = [
  { label: 'HAIR SCISSORS · 헤어 미용 가위', title: '매일의 커트를 바꾸는,', accent: '내 손에 맞는 가위.', description: '헤어 가위 선택부터 구입 후 관리까지, 30년 경력의 가위닥터와 함께하세요.', image: '/images/hero-hair-autumn.png', alt: '크림색 린넨 위의 미용 가위와 빗, 헤어 가위 컬렉션 연출 이미지', action: '헤어 가위 살펴보기' },
  { label: 'PET GROOMING · 애견미용 가위', title: '섬세한 라인을 위한,', accent: '다음 한 자루.', description: '손에 익을 새로운 가위를 만나보세요. 애견미용 가위는 스마트스토어에서 확인하실 수 있습니다.', image: '/images/hero-pet-autumn.png', alt: '따뜻한 가을 색감의 린넨 위 애견미용 커브 가위 연출 이미지', action: '애견 가위 살펴보기' },
  { label: 'AFTER CARE · 구매 후에도 함께', title: '가위를 고르는 순간부터,', accent: '오래 쓰는 날까지.', description: '3일 안심 체험, 1년 무상 케어, 평생 책임 관리. 구매 고객을 위한 안심 케어를 확인하세요.', image: '/images/hero-sharpening-autumn.png', alt: '숫돌 위의 미용 가위, 구매 후 관리 서비스 연출 이미지', action: '스마트스토어에서 구매' },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const startPoint = useRef(null);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!playing || hovered || focused || reducedMotion) return;
    const timer = window.setTimeout(() => setActive(value => (value + 1) % slides.length), 6500);
    return () => window.clearTimeout(timer);
  }, [active, playing, hovered, focused, reducedMotion]);

  function goTo(value) {
    setPlaying(false);
    setActive((value + slides.length) % slides.length);
  }

  return <section className="hero-carousel" aria-label="가위닥터 가위 쇼핑 안내" aria-roledescription="캐러셀" tabIndex={0}
    onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true); }} onPointerLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    onKeyDown={event => { if (event.target !== event.currentTarget) return; if (event.key === 'ArrowRight') { event.preventDefault(); goTo(active + 1); } if (event.key === 'ArrowLeft') { event.preventDefault(); goTo(active - 1); } }}>
    <h1 className="sr-only">헤어·애견 가위 구매는 가위닥터 사사끼</h1>
    <div className="carousel-viewport">
      <div className="carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {slides.map((slide, index) => <div className="carousel-slide" key={slide.image} role="group" aria-roledescription="슬라이드" aria-label={`${index + 1} / ${slides.length}: ${slide.label}`} aria-hidden={active !== index} inert={active !== index}>
          <div className="carousel-copy">
            <p className="eyebrow"><Icon name="scissors"/>{slide.label}</p>
            <h2>{slide.title}<br/><span>{slide.accent}</span></h2>
            <p className="carousel-description">{slide.description}</p>
            <p className="carousel-caption">헤어·애견 가위 판매 · 구매 후 A/S까지</p>
            <div className="carousel-actions"><a className="button" href={STORE_URL} target="_blank" rel="noopener noreferrer"><Icon name="package"/>{slide.action} ↗<span className="sr-only"> · 스마트스토어, 새 창</span></a><a className="text-link" href="#care-benefits">구매 혜택 보기 ↗</a></div>
          </div>
          <div className="carousel-image" onPointerDown={event => { startPoint.current = { x: event.clientX, y: event.clientY }; event.currentTarget.setPointerCapture(event.pointerId); }}
            onPointerCancel={() => { startPoint.current = null; }}
            onPointerUp={event => { const start = startPoint.current; startPoint.current = null; if (!start) return; const dx = event.clientX - start.x; const dy = event.clientY - start.y; if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) goTo(active + (dx < 0 ? 1 : -1)); }}>
            <Image src={slide.image} alt={slide.alt} fill priority={index === 0} sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1000px) 48vw, 520px" draggable={false}/>
            <span className="carousel-image-label">G A W I  D O C T O R <span>SCISSOR COLLECTION</span></span>
          </div>
        </div>)}
      </div>
    </div>
    <div className="carousel-toolbar">
      <span className="carousel-region">가위 선택부터 A/S까지 · 가위닥터 사사끼</span>
      <div className="carousel-controls">
        <button type="button" onClick={() => goTo(active - 1)} aria-label="이전 광고">←</button>
        <div className="carousel-dots" aria-label="광고 선택">{slides.map((slide, index) => <button type="button" key={slide.image} aria-label={`${index + 1}번 광고: ${slide.label}`} aria-current={active === index ? 'true' : undefined} className={active === index ? 'is-active' : ''} onClick={() => goTo(index)}><span/></button>)}</div>
        <button type="button" onClick={() => goTo(active + 1)} aria-label="다음 광고">→</button>
        {!reducedMotion && <button type="button" className="carousel-play" onClick={() => setPlaying(value => !value)} aria-label={playing ? '자동 재생 정지' : '자동 재생 시작'}>{playing ? 'Ⅱ' : '▶'}</button>}
        <span className="carousel-counter" aria-live={playing ? 'off' : 'polite'}>{String(active + 1).padStart(2, '0')} / 03</span>
      </div>
    </div>
    <div className="carousel-credentials"><span><Icon name="award"/><strong>30년</strong> 가위 연마 경력</span><span><Icon name="users"/><strong>3일</strong> 구매 고객 안심 체험</span><span><Icon name="shield"/>구매 후 1년 무상 케어</span></div>
  </section>;
}
