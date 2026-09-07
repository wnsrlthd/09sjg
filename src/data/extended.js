export const members = Array.from({ length: 15 }, (_, index) => ({
  id: `M-${String(index + 1).padStart(4, '0')}`,
  name: ['김하늘', '이도윤', '박서준', '최유진', '정시우'][index % 5],
  phone: `010-2${String(index + 1).padStart(3, '0')}-45${String(index + 10).padStart(2, '0')}`,
  type: ['일반회원', '스포츠회원', '선수회원', 'VIP', '협력기관 회원'][index % 5],
  joinedAt: `2026.${String((index % 8) + 1).padStart(2, '0')}.${String((index % 25) + 1).padStart(2, '0')}`,
  lastVisit: `2026.09.${String((index % 7) + 1).padStart(2, '0')}`,
  reservations: index + 1,
  status: index === 4 ? '휴면' : index === 9 ? '탈퇴' : '정상',
}))

export const memberships = [
  { name: '일반', description: '기본 회원 등급', benefit: '건강 콘텐츠 및 예약 관리', discount: '0%', priority: '일반', enabled: true },
  { name: '스포츠', description: '스포츠 활동 회원을 위한 등급', benefit: '스포츠 콘텐츠 우선 안내', discount: '5%', priority: '일반', enabled: true },
  { name: '선수', description: '선수 회원을 위한 등급', benefit: '일정 상담 우선 안내', discount: '10%', priority: '우선', enabled: true },
  { name: 'VIP', description: '프로토타입용 우수 회원 등급', benefit: '전담 문의 채널', discount: '15%', priority: '최우선', enabled: true },
]

const sportNames = ['축구', '태권도', '복싱', '야구', '농구', '배드민턴']
const sportSpecialties = [
  ['발목 부상', '무릎 부상', '햄스트링', '근육 손상', '스포츠 재활'],
  ['발목', '무릎', '고관절', '인대 손상', '스포츠 손상 재활'],
  ['손목', '팔꿈치', '어깨', '근육 손상', '스포츠 외상'],
  ['어깨', '팔꿈치', '손목', '허리', '투구 관련 스포츠 손상'],
  ['발목', '무릎', '아킬레스건', '근육 손상', '점프 관련 부상'],
  ['어깨', '팔꿈치', '손목', '무릎', '발목'],
]
export const sports = sportNames.map((name, index) => ({
  id: index + 1,
  name,
  specialties: sportSpecialties[index],
  doctors: [index % 3, (index + 2) % 6].map((doctorIndex) => ({ name: ['김철수', '이서윤', '박민준', '오하나', '강준호', '최영수'][doctorIndex], title: '스포츠의학 전문의' })),
}))

export const celebrityCases = [
  ['손흥민', '축구', '공격수'], ['이강인', '축구', '미드필더'], ['황희찬', '축구', '공격수'], ['이대훈', '태권도', '겨루기'],
  ['허훈', '농구', '가드'], ['안세영', '배드민턴', '단식'], ['박인비', '골프', '프로 골퍼'], ['우상혁', '육상 / 높이뛰기', '높이뛰기'],
].map(([name, sport, position], index) => ({
  id: index + 1, name, sport, position, affiliation: '공개 스포츠 콘텐츠', title: `${sport} 선수 맞춤형 예방관리 콘텐츠`, type: '스포츠 선수 콘텐츠', description: '공개된 치료 이력을 의미하지 않는 선수 관리 콘텐츠입니다.', period: '공개 콘텐츠', visible: index < 6, sourceUrl: 'https://bonebridge.example.com/source',
}))

export const mediaItems = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1, title: ['스포츠 손상 예방에 대한 전문의 인터뷰', '선수 재활과 회복을 말하다', '건강한 운동을 위한 칼럼'][index % 3], doctor: ['김철수', '이서윤', '박민준'][index % 3], outlet: ['프로토타입 뉴스', '스포츠 메디컬 저널', '병원 공식 채널'][index % 3], type: ['기사', '뉴스', '인터뷰', '방송', '칼럼', '학술활동'][index % 6], date: `2026.09.${String((index % 10) + 1).padStart(2, '0')}`, summary: '공개 콘텐츠를 관리하기 위한 프로토타입 데이터입니다. 실제 보도 사실을 의미하지 않습니다.', visible: index < 7, url: 'https://example.com/prototype-media',
}))

export const partnerHospitals = [
  { id: 1, name: ' 병원', region: '서울특별시', specialty: '정형외과 · 재활의학', cooperation: '스포츠 손상 진료 협력', contact: '협력 담당자', phone: '02-000-0000', startedAt: '2026.03.01', status: '협력중', logo: '병원' },
  { id: 2, name: '고려대학교 병원', region: '서울특별시', specialty: '정형외과 · 재활의학', cooperation: '선수 재활 연계', contact: '협력 담당자', phone: '02-000-0000', startedAt: '2026.03.15', status: '협력중', logo: '병원' },
  { id: 3, name: '전주 고려병원', region: '전북특별자치도 전주시', specialty: '스포츠의학 · 재활', cooperation: '스포츠 재활 프로그램 협력', contact: '협력 담당자', phone: '063-000-0000', startedAt: '2026.04.01', status: '협력중', logo: '병원' },
  { id: 4, name: '서울 삼성병원', region: '서울특별시', specialty: '정형외과 · 재활의학', cooperation: '진료 및 재활 연계', contact: '협력 담당자', phone: '02-000-0000', startedAt: '2026.04.15', status: '협력중', logo: '병원' },
  { id: 5, name: '부산대학교 병원', region: '부산광역시', specialty: '스포츠의학 · 재활', cooperation: '선수 평가 및 연구 협력', contact: '협력 담당자', phone: '051-000-0000', startedAt: '2026.05.01', status: '협력중', logo: '병원' },
]
export const partnerOrganizations = [
  { id: 1, name: '수원시', type: '공공기관', region: '경기도 수원시', cooperation: '지역 스포츠·건강 프로그램 협력', contact: '협력 담당자', phone: '031-000-0000', startedAt: '2026.04.01', status: '협력중', logo: '공공' },
  { id: 2, name: '국민건강보험', type: '공공기관', region: '경기도 수원시', cooperation: '건강 및 공공협력 프로그램', contact: '협력 담당자', phone: '031-000-0000', startedAt: '2026.04.10', status: '협력중', logo: '건강' },
  { id: 3, name: '수원 스포츠과학회', type: '스포츠기관', region: '경기도 수원시', cooperation: '선수 예방관리와 교육 협력', contact: '기관 담당자', phone: '031-000-0000', startedAt: '2026.05.01', status: '협력중', logo: '스포츠' },
  { id: 4, name: '수원대학교 재활학과', type: '교육기관', region: '경기도 수원시', cooperation: '현장실습·연구 프로젝트', contact: '학과 담당자', phone: '031-000-0000', startedAt: '2026.05.15', status: '협력중', logo: '교육' },
  { id: 5, name: '본브릿지 스포츠 파트너스', type: '기업', region: '경기도 수원시', cooperation: '스포츠 장비와 컨디셔닝 협력', contact: '기업 담당자', phone: '031-000-0000', startedAt: '2026.06.01', status: '협력예정', logo: '기업' },
]