import { Suspense } from 'react'
import { ErrorBoundary } from "react-error-boundary"
import Error from '../components/error'
import useSession from '../hooks/useSession'
import { Navigate } from 'react-router-dom'
import Loader from '../components/loader/loader'

const PublicRoute = (props) => {
    const { children } = props;
    const { isAuthenticated } = useSession();

    if (isAuthenticated) {
        return <Navigate to="/" />;
    };

    return (
        <ErrorBoundary fallback={<Error content="An Error Occured in The Application!"></Error>}>
            <Suspense fallback={<Loader />}>
                {children}
            </Suspense>
        </ErrorBoundary>
    )
}

export default PublicRoute
