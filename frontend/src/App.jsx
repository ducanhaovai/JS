import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import AgentLayout from './component/Layout/AgentLayout';
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

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/agent" element={<AgentLayout />}>
            <Route index element={<HomePage />} />
            <Route path="jobs" element={<JobsPage />} />
            <Route path="jobs/:jobId" element={<JobsDetail />} />
            <Route path="candidates" element={<CandidatesPage />} />
            <Route path="nominations" element={<NominationsPage />} />
            <Route path="payment-history" element={<PaymentHistoryPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="hotline" element={<HotlinePage />} />
          </Route>
          <Route path="/" element={<Navigate to="/agent" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
