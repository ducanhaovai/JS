import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import AgentLayout from './component/Layout/AgentLayout';
import AdminLayout from './component/Layout/AdminLayout';
import HomePage from './page/Agent/HomePage';
import JobsPage from './page/Agent/JobsPage';
import CandidatesPage from './page/Agent/CandidatesPage';
import NominationsPage from './page/Agent/NominationsPage';
import PaymentHistoryPage from './page/Agent/PaymentHistoryPage';
import ContactPage from './page/Agent/ContactPage';
import FAQPage from './page/Agent/FAQPage';
import TermsPage from './page/Agent/TermsPage';
import HotlinePage from './page/Agent/HotlinePage';
import JobsDetail from './page/Agent/JobsDetail';
import AddCandidate from './page/Agent/AddCandidate';
import Dashboard from './page/Admin/Dashboard';
import CollaboratorsPage from './page/Admin/CollaboratorsPage';
import AddCollaboratorPage from './page/Admin/AddCollaboratorPage';
import CollaboratorRankingPage from './page/Admin/CollaboratorRankingPage';
import AdminCandidatesPage from './page/Admin/CandidatesPage';
import AdminAddCandidatePage from './page/Admin/AddCandidatePage';
import AdminJobsPage from './page/Admin/JobsPage';
import AdminAddJobPage from './page/Admin/AddJobPage';
import AdminNominationsPage from './page/Admin/NominationsPage';
import AdminAddNominationPage from './page/Admin/AddNominationPage';
import PaymentsPage from './page/Admin/PaymentsPage';
import CompaniesPage from './page/Admin/CompaniesPage';
import AddCompanyPage from './page/Admin/AddCompanyPage';
import ReportsPage from './page/Admin/ReportsPage';
import AccountsPage from './page/Admin/AccountsPage';
import CampaignsPage from './page/Admin/CampaignsPage';
import AddCampaignPage from './page/Admin/AddCampaignPage';
import EmailsPage from './page/Admin/EmailsPage';
import SettingsPage from './page/Admin/SettingsPage';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {/* Agent Routes */}
          <Route path="/agent" element={<AgentLayout />}>
            <Route index element={<HomePage />} />
            <Route path="jobs" element={<JobsPage />} />
            <Route path="jobs/:jobId" element={<JobsDetail />} />
            <Route path="candidates" element={<CandidatesPage />} />
            <Route path="candidates/create" element={<AddCandidate />} />
            <Route path="nominations" element={<NominationsPage />} />
            <Route path="payment-history" element={<PaymentHistoryPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="hotline" element={<HotlinePage />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="collaborators" element={<CollaboratorsPage />} />
            <Route path="collaborators/new" element={<AddCollaboratorPage />} />
            <Route path="collaborators/ranking" element={<CollaboratorRankingPage />} />
            <Route path="candidates" element={<AdminCandidatesPage />} />
            <Route path="candidates/create" element={<AdminAddCandidatePage />} />
            <Route path="jobs" element={<AdminJobsPage />} />
            <Route path="jobs/create" element={<AdminAddJobPage />} />
            <Route path="nominations" element={<AdminNominationsPage />} />
            <Route path="nominations/create" element={<AdminAddNominationPage />} />
            <Route path="payments" element={<PaymentsPage />} />
            <Route path="companies" element={<CompaniesPage />} />
            <Route path="companies/create" element={<AddCompanyPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="accounts" element={<AccountsPage />} />
            <Route path="campaigns" element={<CampaignsPage />} />
            <Route path="campaigns/create" element={<AddCampaignPage />} />
            <Route path="emails" element={<EmailsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          <Route path="/" element={<Navigate to="/agent" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
