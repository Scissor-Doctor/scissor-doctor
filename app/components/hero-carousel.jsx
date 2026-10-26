'use client';

import { useEffect, useRef, useState } from 'react';
import Icon from './ui-icon';

const STORE_URL = 'https://smartstore.naver.com/kwdt-sasak-dog';

export default function HeroCarousel() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    function update() {
      if (preference.matches) video.pause();
      else video.play().catch(() => {});
    }
    update();
    preference.addEventListener('change', update);
    return () => {
      preference.removeEventListener('change', update);
      video.pause();
    };
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  }

  return <section className="hero-carousel video-hero" aria-labelledby="hero-title">
    <div className="carousel-viewport">
      <div className="carousel-slide">
        <div className="carousel-copy">
          <p className="eyebrow"><Icon name="scissors"/>GAWI DOCTOR · SCISSOR COLLECTION</p>
          <h1 id="hero-title">매일의 커트를 바꾸는,<br/><span>내 손에 맞는 가위.</span></h1>
          <p className="carousel-description">헤어·애견 가위 선택부터 구입 후 관리까지,<br/>30년 경력의 가위닥터와 함께하세요.</p>
          <p className="carousel-caption">영상으로 살펴보는 애견미용 가위 사용 모습</p>
          <div className="carousel-actions">
            <a className="button" href={STORE_URL} target="_blank" rel="noopener noreferrer"><Icon name="package"/>스마트스토어에서 가위 구매 ↗<span className="sr-only"> · 새 창</span></a>
            <a className="text-link" href="#care-benefits">구매 혜택 보기 ↗</a>
          </div>
        </div>
        <div className="hero-video-frame">
          <video ref={videoRef} className="hero-video" muted loop playsInline preload="metadata" poster="/images/hero-video-poster.jpg" aria-label="애견미용 가위로 반려견의 털을 다듬는 영상, 무음" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)}>
            <source src="/videos/scissor-doctor-hero.mp4" type="video/mp4"/>
            브라우저에서 영상을 지원하지 않습니다.
          </video>
          {!failed && <button className="hero-video-toggle" type="button" onClick={togglePlayback} aria-label={playing ? '소개 영상 일시 정지' : '소개 영상 재생'}>{playing ? 'Ⅱ 영상 정지' : '▶ 영상 재생'}</button>}
          {failed && <p className="hero-video-error">영상을 불러오지 못했습니다. <a href="/videos/scissor-doctor-hero.mp4">영상 직접 보기</a></p>}
        </div>
      </div>
    </div>
    <div className="carousel-credentials"><span><Icon name="award"/><strong>30년</strong> 가위 연마 경력</span><span><Icon name="users"/><strong>3일</strong> 구매 고객 안심 체험</span><span><Icon name="shield"/>구매 후 1년 무상 케어</span></div>
  </section>;
}
