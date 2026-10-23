import './fonts.css';
import './globals.css';

export const metadata = {
  title: '가위닥터 사사끼 | 헤어·애견 가위 판매 및 전문 A/S',
  description: '헤어·애견 가위 구매부터 전문 A/S까지, 가위닥터 사사끼. 30년 경력의 김태희 대표가 미용·애견 가위 연마와 날 복원을 안내합니다. 사사끼 및 타사 가위 A/S, 택배 접수, 대량 수리 상담. 010-6564-4992 / 010-9644-4689.',
  applicationName: '가위닥터 사사끼',
  openGraph: {
    title: '내 손에 맞는 가위, 가위닥터 사사끼',
    description: '전국 및 부산 가위 연마·수리. 30년 장인의 정밀 날 복원. 대표 김태희 · 010-6564-4992 / 010-9644-4689',
    siteName: '가위닥터 사사끼',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return <html lang="ko"><body>{children}</body></html>;
}
