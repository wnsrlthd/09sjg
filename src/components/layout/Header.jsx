import { Bell, Search, UserCircle2 } from 'lucide-react'
import symbol from '../../assets/bonbridge-symbol.svg'

export default function Header({ pageTitle, onSearch, searchValue, onMenuOpen }) {
  return (
    <header className="top-header">
      <div className="header-left">
        <button type="button" className="header-menu-btn" aria-label="메뉴 열기" onClick={onMenuOpen}>
          <span />
          <span />
          <span />
        </button>
        <img className="header-brand-symbol" src={symbol} alt="본브릿지 재활센터 심볼" />
        <h1>{pageTitle}</h1>
      </div>

      <div className="header-actions">
        <div className="header-search">
          <Search size={16} />
          <input
            type="text"
            value={searchValue}
            onChange={(event) => onSearch(event.target.value)}
            placeholder="검색"
          />
        </div>

        <button type="button" className="icon-btn" aria-label="알림">
          <Bell size={18} />
        </button>

        <div className="profile-box">
          <UserCircle2 size={24} />
          <div>
            <strong>홍길동</strong>
            <small>수원 본브릿지 종합재활센터</small>
          </div>
        </div>
      </div>
    </header>
  )
}
