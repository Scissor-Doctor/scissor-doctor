import Image from 'next/image';
import Icon from './components/ui-icon';
import HeroCarousel from './components/hero-carousel';

const STORE_URL = 'https://smartstore.naver.com/kwdt-sasak-dog';

export default function Home() {
  return <>
    <header className="header">
      <a className="brand-badge" href="#" aria-label="가위닥터 사사끼 로고, 페이지 맨 위로"><Image src="/images/scissor-doctor-logo.png" alt="파란색 SD 모노그램과 가위 문양" width={60} height={72}/><span className="brand-name"><small>SINCE 1995</small><strong>가위닥터</strong></span></a>
      <nav aria-label="주요 메뉴"><a href="#shop"><Icon name="scissors"/>가위 쇼핑</a><a href="#care-benefits"><Icon name="shield"/>구매 혜택</a><a href="#services"><Icon name="scissors"/>연마·수리</a><a href="#about"><Icon name="user"/>장인 소개</a><a href="#contact"><Icon name="phone"/>상담 문의</a><a className="store-nav-link" href={STORE_URL} target="_blank" rel="noopener noreferrer"><Icon name="package"/>가위 구매<span className="sr-only"> · 스마트스토어, 새 창</span> ↗</a></nav>
    </header>
    <main>
      <HeroCarousel/>
      <section id="shop" className="shop-section" aria-labelledby="shop-title">
        <div className="section-heading"><div><p className="eyebrow">FIND YOUR SCISSORS</p><h2 id="shop-title">당신의 다음 가위를 만나보세요.</h2></div><p>헤어부터 애견미용까지, 용도에 맞는 선택.</p></div>
        <div className="shop-grid">
          <a className="shop-card" href={STORE_URL} target="_blank" rel="noopener noreferrer">
            <div className="shop-image"><Image src="/images/hero-hair-autumn.png" alt="미용 가위와 빗을 배치한 헤어 가위 연출 이미지" fill sizes="(max-width: 700px) calc(100vw - 48px), 550px"/></div>
            <div className="shop-card-copy"><p className="eyebrow">HAIR SCISSORS</p><h3>헤어 미용 가위</h3><p>매일 손에 쥐는 한 자루, 내 손에 맞게.</p><span className="shop-card-action">스마트스토어에서 살펴보기 ↗<span className="sr-only"> · 새 창</span></span></div>
          </a>
          <a className="shop-card" href={STORE_URL} target="_blank" rel="noopener noreferrer">
            <div className="shop-image"><Image src="/images/hero-pet-autumn.png" alt="린넨 위에 놓인 애견미용 커브 가위 연출 이미지" fill sizes="(max-width: 700px) calc(100vw - 48px), 550px"/></div>
            <div className="shop-card-copy"><p className="eyebrow">PET GROOMING SCISSORS</p><h3>애견미용 가위</h3><p>부드러운 라인과 섬세한 마무리를 위해.</p><span className="shop-card-action">스마트스토어에서 살펴보기 ↗<span className="sr-only"> · 새 창</span></span></div>
          </a>
        </div>
        <p className="shop-disclaimer">이미지는 연출 이미지입니다. 실제 판매 상품과 가격·재고·구매 조건은 스마트스토어에서 확인해주세요.</p>
      </section>
      <section id="care-benefits" className="care-benefits" aria-labelledby="care-benefits-title">
        <div className="care-heading">
          <p className="eyebrow">AFTER CARE BENEFIT · 가위 구매 고객 혜택</p>
          <h2 id="care-benefits-title">안심하고 써보세요.<br/><span>가위닥터 안심 케어 보증</span></h2>
          <p>비용과 리스크는 가위닥터가 안겠습니다.<br/>원장님은 직접 써보고 결정하세요.</p>
        </div>
        <ol className="care-benefit-grid">
          <li>
            <div className="care-card-top"><span className="care-number">01</span><Icon name="package"/></div>
            <h3>3일 안심 체험</h3>
            <p>직접 써보고 손에 맞지 않으면<br/>기준 내 반품·교환을 도와드립니다.</p>
            <span className="care-card-label">직접 써보고 결정하세요</span>
          </li>
          <li>
            <div className="care-card-top"><span className="care-number">02</span><Icon name="shield"/></div>
            <h3>1년 무상 케어</h3>
            <p>정상적인 사용 중 발생한 제품 문제는 구입 후 1년간 무상 A/S를 제공합니다.</p>
            <span className="care-card-label">구입 후 1년 무상 A/S</span>
          </li>
          <li>
            <div className="care-card-top"><span className="care-number">03</span><Icon name="scissors"/></div>
            <h3>평생 책임 관리</h3>
            <p>제품 수명이 다하는 날까지 가위닥터 기준 혜택으로 지속 관리해 드립니다.</p>
            <span className="care-card-label">오래 쓰는 가위의 곁에서</span>
          </li>
        </ol>
        <div className="care-conditions">
          <Icon name="clipboard"/>
          <div><h3>조건 안내</h3><p>제품 훼손, 구성품 누락, 임의 분해, 비정상 사용 흔적이 있는 경우 반품·교환이 제한될 수 있습니다.</p><p>가위 구매 고객을 위한 혜택입니다. 적용 기준과 관리 혜택의 자세한 내용은 구매 전 상담해주세요.</p></div>
        </div>
        <div className="store-purchase">
          <p>내 손에 맞는 헤어·애견 가위를 만나보세요.</p>
          <div className="store-purchase-actions">
            <a className="button store-button" href={STORE_URL} target="_blank" rel="noopener noreferrer"><Icon name="package"/>스마트스토어에서 가위 구매 <span aria-hidden="true">↗</span><span className="sr-only"> · 새 창</span></a>
            <a className="text-link" href="tel:01065644992">구매·케어 혜택 전화 상담</a>
          </div>
        </div>
      </section>

      <section className="brand-introduction" aria-labelledby="introduction-title">
        <p className="eyebrow">30년 경력 · 가위닥터 사사끼</p>
        <h2 id="introduction-title">제대로 A/S 받으면,<br/>미용이 즐거워집니다.</h2>
        <div className="introduction-copy">
          <p>국내 가위 A/S 최고 전문가를 자부하는 가위닥터 사사끼입니다. 30년의 경험으로 가위날 손상 없이 날을 재생합니다.</p>
          <p>가위가 얼마나 좋아지는지 보여드리겠습니다. 불만족 시 가위값 환불·배상을 약속할 만큼 자신 있게 A/S해 드립니다.</p>
        </div>
        <p className="introduction-services">헤어 가위 · 애견 가위 판매 및 A/S · 클리퍼 날 연마</p>
        <div className="introduction-contact">
          <p><Icon name="phone"/><span>대표 상담 <a href="tel:01065644992">010-6564-4992</a> · <a href="tel:01096444689">010-9644-4689</a></span></p>
          <p><Icon name="pin"/><span>부산광역시 수영구 광남로172번길 10, 민락화신맨션 2동 102호</span></p>
        </div>
      </section>
      <section id="services" className="services">
        <div className="section-heading"><div><p className="eyebrow">구매 후에도 든든한 전문 케어</p><h2>좋은 가위, 오래 쓰실 수 있도록.</h2></div><p>미용 가위와 애견 가위, 연마부터 수리까지.</p></div>
        <div className="service-grid">
          <article><div className="service-art service-photo"><Image src="/images/scissor-sharpening-autumn.png" alt="숫돌 위에 놓인 일자 미용 가위, 정밀 연마 서비스 이미지" fill sizes="(max-width: 700px) calc(100vw - 48px), 360px"/></div><p className="service-type"><Icon name="scissors"/>01 / 정밀 연마</p><h3>무뎌진 날을 다듬다</h3><p>잘 들지 않는 미용·애견 가위의 날을 연마합니다.<br/>매일의 커트를 위한 섬세한 손길.</p></article>
          <article><div className="service-art service-photo"><Image src="/images/scissor-restoration-autumn.png" alt="가을 햇살이 비치는 크림색 린넨 위 커브 가위, 날 복원 서비스 이미지" fill sizes="(max-width: 700px) calc(100vw - 48px), 360px"/></div><p className="service-type"><Icon name="sparkles"/>02 / 날 복원</p><h3>절삭감을 되살리다</h3><p>날을 섬세하게 다듬는 정밀 복원.<br/>가위날 하나에도 30년의 경험을 담습니다.</p></article>
          <article><div className="service-art service-photo"><Image src="/images/scissor-repair-autumn.png" alt="숱 가위와 정밀 드라이버, 수리 A/S 서비스 이미지" fill sizes="(max-width: 700px) calc(100vw - 48px), 360px"/></div><p className="service-type"><Icon name="wrench"/>03 / 수리 · A/S</p><h3>불편한 가위를 살피다</h3><p>사사끼 코리아 가위 A/S와 타사 가위 수리.<br/>미용·애견 가위의 불편을 상담해주세요.</p></article>
        </div>
        <div className="service-notes" aria-label="수리 서비스 안내">
          <div><span className="note-icon"><Icon name="package"/></span><h3>택배 접수 가능</h3><p>택배로 가위 수리를 맡기실 수 있습니다.<br/>발송 전 전화로 접수 안내를 받아주세요.</p></div>
          <div><span className="note-icon"><Icon name="users"/></span><h3>대량 수리 할인</h3><p>미용학원 등 대량 수리 요청 시 할인 적용.<br/>수량과 가위 종류를 말씀해주세요.</p></div>
          <div><span className="note-icon"><Icon name="shield"/></span><h3>불만족 시 가위값 환불·배상</h3><p>수리 결과에 대한 책임을 약속합니다.<br/>불편한 점이 있다면 연락해주세요.</p></div>
        </div>
      </section>
      <section id="repair-process" className="repair-process" aria-labelledby="repair-process-title">
        <div className="section-heading"><div><p className="eyebrow">수리 접수 안내</p><h2 id="repair-process-title">맡기기 전 상담부터, 수리 후 반송까지.</h2></div><p>택배를 보내기 전, 먼저 전화해주세요.</p></div>
        <ol className="repair-steps">
          <li><span className="step-number" aria-hidden="true">01</span><h3><Icon name="phone"/>전화 상담</h3><p>가위 종류와 수량, 불편한 점을 알려주세요. 접수 방법과 발송 안내를 도와드립니다.</p></li>
          <li><span className="step-number" aria-hidden="true">02</span><h3><Icon name="package"/>가위 발송</h3><p>상담 후 안내받은 주소로 보내주세요. 가위날을 보호해 포장하고 연락처를 함께 적어주세요.</p></li>
          <li><span className="step-number" aria-hidden="true">03</span><h3><Icon name="clipboard"/>상태·비용 안내</h3><p>가위 상태를 확인한 뒤 수리 가능 여부와 비용을 안내합니다. 내용을 확인하고 작업을 진행합니다.</p></li>
          <li><span className="step-number" aria-hidden="true">04</span><h3><Icon name="truck"/>수리·반송</h3><p>연마·복원·수리를 마친 가위를 반송합니다. 사용 후 궁금한 점은 전화로 문의해주세요.</p></li>
        </ol>
        <div className="process-contact"><p>작업 기간과 배송비는 접수 상담 시 확인해주세요.</p><a className="text-link" href="tel:01065644992">접수 상담 010-6564-4992 ↗</a></div>
      </section>
      <section id="about" className="about"><Image className="about-portrait" src="/images/scissor-doctor-portrait-autumn.png" alt="가위닥터 장인 소개 초상화" width={112} height={140}/><p className="eyebrow">SINCE 1995 · 30년, 가위와 함께한 시간</p><h2>한 길을 걸어온 장인.<br/>그 곁의 약 1,000명.</h2><p>안녕하세요. 가위닥터 사사끼, 대표 김태희입니다.<br/>30년 동안 쌓아온 경험으로 가위날을 정교하게 복원합니다.<br/>손에 익은 가위가 제 역할을 할 수 있도록,<br/>오늘도 가위 하나에 집중합니다.</p><span className="brand-sign">가위닥터 사사끼</span><p className="owner">대표 김태희</p></section>
      <section id="contact" className="contact"><div><p className="eyebrow">가위닥터 사사끼 상담실</p><h2>가위가 예전 같지 않다면.</h2><p>연마·날 복원·수리부터 택배 접수까지 친절하게 안내해드립니다.<br/>가위 종류와 불편한 점을 말씀해주세요.</p><p className="secondary-service">미용·애견 가위는 스마트스토어에서 확인하세요. 현장 출장 판매는 전화로 문의해주세요.</p></div><div className="contact-actions"><a className="button store-button" href={STORE_URL} target="_blank" rel="noopener noreferrer"><Icon name="package"/>스마트스토어에서 가위 구매 <span aria-hidden="true">↗</span><span className="sr-only"> · 새 창</span></a><a className="phone" href="tel:01065644992" aria-label="가위닥터 사사끼 전화 상담 010-6564-4992"><Icon name="phone"/>010-6564-4992 <span aria-hidden="true">↗</span></a><a className="phone" href="tel:01096444689" aria-label="가위닥터 사사끼 전화 상담 010-9644-4689"><Icon name="phone"/>010-9644-4689 <span aria-hidden="true">↗</span></a><a className="text-link" href="https://blog.naver.com/kuh4689/222617975844" target="_blank" rel="noopener noreferrer">가위닥터 사사끼 작업 이야기 ↗</a></div></section>
    </main>
    <footer className="business-footer">
      <div className="footer-heading"><a className="logo" href="#"><Icon name="scissors"/>가위닥터 사사끼<span>·</span></a><p>가위 연마 · 날 복원 · 수리 전문</p></div>
      <dl className="business-info" aria-label="사업자 정보">
        <div><dt>상호</dt><dd>가위닥터 사사끼 가위</dd></div>
        <div><dt>대표자</dt><dd>김태희</dd></div>
        <div><dt>사업자등록번호</dt><dd>656-15-01771</dd></div>
        <div className="business-address"><dt><Icon name="pin"/>사업장 주소</dt><dd>부산광역시 수영구 광남로172번길 10, 2동 102호 (민락동, 화신맨션)</dd></div>
        <div><dt><Icon name="phone"/>상담 전화</dt><dd><a href="tel:01065644992">010-6564-4992</a> · <a href="tel:01096444689">010-9644-4689</a></dd></div>
        <div><dt>업종</dt><dd>미용가위 수리 · 미용가위 소매 · 전자상거래(미용가위)</dd></div>
      </dl>
      <small>© {new Date().getFullYear()} 가위닥터 사사끼</small>
    </footer>
    <aside className="mobile-contact-bar" aria-label="빠른 가위 구매 및 상담">
      <a className="mobile-store-link" href={STORE_URL} target="_blank" rel="noopener noreferrer"><Icon name="package"/><span>가위 구매 <strong>스마트스토어 ↗</strong></span><span className="sr-only"> · 새 창</span></a>
      <a className="mobile-call-link" href="tel:01065644992" aria-label="가위닥터 사사끼 전화 상담 010-6564-4992">
        <Icon name="phone"/>
        <span>전화 상담 <strong>010-6564-4992</strong></span>
      </a>
    </aside>
  </>;
}
