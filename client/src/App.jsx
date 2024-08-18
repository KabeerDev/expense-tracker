import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout/layout'
import Router from './router'
import ToastProvider from './context/ToastProvider'
import AuthProvider from './context/AuthProvider'
import PageProvider from './context/PageProvider'

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastProvider>
          <PageProvider>
            <AuthProvider>
              <Layout>
                <Router />
              </Layout>
            </AuthProvider>
          </PageProvider>
        </ToastProvider>
      </BrowserRouter>
    </>
  )
}

export default App
