import { LayoutDashboard, Building2, Users, CalendarDays, FileText, ClipboardList, Menu, X, Trophy, Network, UserRound, Megaphone, MapPin, BadgeDollarSign, Activity, ShieldCheck, UsersRound, GraduationCap } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import symbol from '../../assets/bonbridge-symbol.svg'

const menuGroups = [
  {
    title: '대시보드',
    items: [{ label: '전체 현황', path: '/dashboard', icon: LayoutDashboard }],
  },
  {
    title: '재활관리',
    items: [
      { label: '재활 프로그램', path: '/rehabilitation', icon: Activity },
      { label: '예방관리', path: '/prevention', icon: ShieldCheck },
    ],
  },
  {
    title: '선수관리',
    items: [
      { label: '선수 목록', path: '/athletes', icon: Users },
      { label: '팀 선수 관리', path: '/teams', icon: UsersRound },
      { label: '유명인/선수', path: '/celebrities', icon: Trophy },
      { label: '유명선수 참가 목록', path: '/athlete-participation', icon: Trophy },
    ],
  },
  {
    title: '팀 / 단체관리',
    items: [
      { label: '학교팀 · 대학팀', path: '/teams', icon: UsersRound },
      { label: '실업팀 · 스포츠클럽', path: '/teams', icon: Trophy },
      { label: '단체 프로그램', path: '/membership', icon: BadgeDollarSign },
      { label: '팀 예약 현황', path: '/team-visits', icon: Activity },
    ],
  },
  {
    title: '전문가 관리',
    items: [
      { label: '재활 전문가', path: '/doctors', icon: Activity },
      { label: '의료진 스케줄', path: '/schedule', icon: CalendarDays },
    ],
  },
  {
    title: '협력 네트워크',
    items: [
      { label: '협력병원', path: '/partners/hospitals', icon: Network },
      { label: '협력단체', path: '/partners/organizations', icon: Network },
      { label: '교육 / 연구협력', path: '/education', icon: GraduationCap },
      { label: '교통안내', path: '/transport', icon: MapPin },
    ],
  },
  {
    title: '멤버십',
    items: [
      { label: '개인/팀별 멤버십', path: '/membership', icon: UserRound },
      { label: '가입 현황', path: '/members', icon: BadgeDollarSign },
    ],
  },
  {
    title: '홍보 / 센터정보',
    items: [
      { label: 'SNS / 홍보관리', path: '/social', icon: Megaphone },
      { label: '센터 소개', path: '/center', icon: Building2 },
      { label: '기본정보', path: '/hospital', icon: Building2 },
      { label: '콘텐츠 관리', path: '/contents', icon: FileText },
      { label: '예약 / 상담', path: '/reservations', icon: ClipboardList },
    ],
  },
]

export default function Sidebar({ isOpen, onClose, onOpen, currentPath }) {
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState(null)
  const firstItemForPath = {}
  menuGroups.forEach((group) => group.items.forEach((item) => {
    if (!firstItemForPath[item.path]) firstItemForPath[item.path] = `${group.title}:${item.label}`
  }))

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div>
            <p className="eyebrow">관리자</p>
            <div className="brand-lockup"><img className="brand-symbol" src={symbol} alt="본브릿지 재활센터 심볼" /><h2>수원 본브릿지<br />종합재활센터</h2></div>
            <p className="brand-tagline">재활 · 예방 · 퍼포먼스</p>
          </div>
          <button type="button" className="mobile-close" onClick={onClose} aria-label="메뉴 닫기">
            <X size={18} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuGroups.map((group) => (
            <div key={group.title} className="nav-group">
              <p className="nav-group-title">{group.title}</p>
              {group.items.map(({ label, path, icon: Icon }) => {
                const itemKey = `${group.title}:${label}`
                return (
                <a
                  key={itemKey}
                  href={`#${path}`}
                  className={`nav-item ${(activeItem === itemKey || (!activeItem && firstItemForPath[path] === itemKey && currentPath === path)) ? 'active' : ''}`}
                  onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    setActiveItem(itemKey)
                    navigate(path)
                    if (onClose) onClose()
                  }}
                >
                  <span className="nav-icon"><Icon size={16} /></span>
                  {label}
                </a>
                )
              })}
            </div>
          ))}
        </nav>
      </aside>

      <button type="button" className="sidebar-toggle" onClick={onOpen} aria-label="사이드바 열기">
        <Menu size={18} />
      </button>
    </>
  )
}
