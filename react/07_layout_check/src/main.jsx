import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { store } from './app/store'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
		</BrowserRouter>
	</QueryClientProvider>
//   </React.StrictMode>,
)
