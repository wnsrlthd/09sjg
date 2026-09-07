import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import Dashboard from './pages/Dashboard/Dashboard'
import HospitalInfo from './pages/Hospital/HospitalInfo'
import DepartmentManagement from './pages/Departments/DepartmentManagement'
import DoctorManagement from './pages/Doctors/DoctorManagement'
import DoctorSchedule from './pages/Doctors/DoctorSchedule'
import MedicalContent from './pages/Contents/MedicalContent'
import ReservationManagement from './pages/Reservations/ReservationManagement'
import ConsultationManagement from './pages/Consultations/ConsultationManagement'
import CustomerVoice from './pages/Complaints/CustomerVoice'
import { CelebritiesPage, MediaPage, MembersPage, PartnerPage, SportsPage } from './pages/Extended/ManagementPages'
import { SocialPage, TransportPage, SchedulePage } from './pages/Final/FinalPages'
import { AthletesPage, CenterInfoPage, CenterOverviewPage, EducationPage, PreventionPage, RehabilitationPage, TeamVisitPage, TeamsPage } from './pages/Center/CenterPages'
import { AthleteParticipationPage } from './pages/Center/CenterPages'
import MembershipManagement from './pages/Membership/MembershipManagement'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rehabilitation" element={<RehabilitationPage />} />
          <Route path="/prevention" element={<PreventionPage />} />
          <Route path="/athletes" element={<AthletesPage />} />
          <Route path="/athlete-participation" element={<AthleteParticipationPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/team-visits" element={<TeamVisitPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/center" element={<CenterInfoPage />} />
          <Route path="/overview" element={<CenterOverviewPage />} />
          <Route path="/hospital" element={<HospitalInfo />} />
          <Route path="/departments" element={<DepartmentManagement />} />
          <Route path="/doctors" element={<DoctorManagement />} />
          <Route path="/doctors/schedule" element={<DoctorSchedule />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/contents" element={<MedicalContent />} />
          <Route path="/reservations" element={<ReservationManagement />} />
          <Route path="/consultations" element={<ConsultationManagement />} />
          <Route path="/complaints" element={<CustomerVoice />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/celebrities" element={<CelebritiesPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/partners/hospitals" element={<PartnerPage />} />
          <Route path="/partners/organizations" element={<PartnerPage organization />} />
          <Route path="/membership" element={<MembershipManagement />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/transport" element={<TransportPage />} />
          <Route path="*" element={<div className="page-container"><div className="card-section"><h2>페이지를 찾을 수 없습니다.</h2></div></div>} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
