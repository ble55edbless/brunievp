import { HashRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./pages/NotFound";
import { Coffee } from "lucide-react";

function ErrorFallback({ error, resetErrorBoundary }: { error: any; resetErrorBoundary: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-primary-50 space-y-8">
      <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center text-red-500">
        <Coffee className="w-12 h-12" />
      </div>
      <h1 className="text-3xl font-serif text-dark-choco">Что-то пошло не так</h1>
      <p className="text-primary-800/70 font-light max-w-md">{error.message}</p>
      <button onClick={resetErrorBoundary} className="px-6 py-2 bg-dark-choco text-white rounded-full">
        Попробовать снова
      </button>
    </div>
  );
}

export function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ErrorBoundary>
  );
}
