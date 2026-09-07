import { useMemo, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const pageTitles = {
  '/dashboard': '전체 현황',
  '/overview': '전체 현황',
  '/rehabilitation': '재활관리',
  '/prevention': '예방관리',
  '/athletes': '선수 목록',
  '/teams': '팀 / 단체 관리',
  '/team-visits': '찾아가는 팀 평가',
  '/education': '교육 / 연구협력',
  '/center': '센터 소개',
  '/hospital': '기본정보',
  '/departments': '진료과/클리닉 관리',
  '/doctors': '의료진 관리',
  '/doctors/schedule': '진료일정 관리',
  '/schedule': '의료진 스케줄',
  '/contents': '치료/수술/질환 콘텐츠',
  '/reservations': '온라인 예약',
  '/consultations': '온라인 상담',
  '/complaints': '고객의 소리',
  '/members': '회원 / 멤버십 관리',
  '/sports': '스포츠 전문 분야',
  '/celebrities': '유명인 / 선수 사례',
  '/media': '언론 / 뉴스 관리',
  '/partners/hospitals': '협력 병원',
  '/partners/organizations': '협력단체',
  '/membership': '개인/팀별 멤버십',
  '/athlete-participation': '유명선수 참가 목록',
  '/social': 'SNS / 홍보관리',
  '/transport': '교통안내',
}

export default function AdminLayout() {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const currentPath = useMemo(() => location.pathname, [location.pathname])
  const pageTitle = pageTitles[currentPath] || '관리자 페이지'

  return (
    <div className="admin-shell">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onOpen={() => setSidebarOpen(true)} currentPath={currentPath} />
      <div className="main-panel">
        <Header pageTitle={pageTitle} onSearch={setSearchValue} searchValue={searchValue} onMenuOpen={() => setSidebarOpen(true)} />
        <main className="page-content">
          <Outlet context={{ searchValue }} />
        </main>
      </div>
    </div>
  )
}
