import { Suspense } from 'react'
import { ErrorBoundary } from "react-error-boundary"
import Error from '../components/error'
import useSession from '../hooks/useSession'
import { Navigate } from 'react-router-dom'
import Loader from '../components/loader/loader'
import { ErrorImg } from '../assets'

const LOGIN_PATH = '/signin';
const PrivateRoute = (props) => {
    const { children, redirectTo = LOGIN_PATH } = props;
    const { isAuthenticated, LoadingUserData } = useSession();

    if (LoadingUserData) {
        return null;
    };

    if (!isAuthenticated) {
        return <Navigate to={redirectTo} />;
    };

    return (
        <ErrorBoundary fallback={<Error isImage={true} img={ErrorImg} />}>
            <Suspense fallback={<Loader />}>
                {children}
            </Suspense>
        </ErrorBoundary>
    )
}

export default PrivateRoute
