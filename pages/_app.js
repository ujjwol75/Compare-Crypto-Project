import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';
// import 'react-datepicker/dist/react-datepicker.css';
// import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {/* <ToastContainer autoClose={1500} /> */}
      </QueryClientProvider>
    
  )
  }    

export default MyApp  
