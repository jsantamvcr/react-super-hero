import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        console.log('User logged in');
        navigate('/marvel', {
            replace: true
        });
    }

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center">Login Page</h1>
                <hr/>

                <button className="btn btn-primary"
                        onClick={onLogin}
                >Login

                </button>

            </div>
        </>
    );
};
