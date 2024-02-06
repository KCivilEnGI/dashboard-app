import { Route, Routes } from 'react-router-dom';

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoices from './scenes/invoices';
import Form from './scenes/form';
import FAQ from './scenes/faq';
import Bar from './scenes/bar';
import Pie from './scenes/pie';
import Line from './scenes/line';
import Geography from './scenes/geography';
import Calendar from './scenes/calendar';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path="/dashboard-app" element={<Dashboard />} />
              <Route path="/dashboard-app/team" element={<Team />} />
              <Route path='/dashboard-app/contacts' element={<Contacts />} />
              <Route path='/dashboard-app/invoices' element={<Invoices />} />
              <Route path='/dashboard-app/form' element={<Form />} />
              <Route path='/dashboard-app/faq' element={<FAQ />} />
              <Route path='/dashboard-app/bar' element={<Bar />} />
              <Route path='/dashboard-app/pie' element={<Pie />} />
              <Route path='/dashboard-app/line' element={<Line />} />
              <Route path='/dashboard-app/geography' element={<Geography />} />
              <Route path='/dashboard-app/calendar' element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
