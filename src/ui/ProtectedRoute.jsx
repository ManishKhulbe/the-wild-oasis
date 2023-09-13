import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";

const FullPage = styled.div` 
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1 load the authenticated user
  const { isLoading, isAuthenticated } = useUser();
  //2 if no authenticated user redirect to /login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login"); // navigate should be called not in top order it should be in callback and in other function.
  }, [isAuthenticated,isLoading, navigate]);

  //3 while loading show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
//4 if there is a user , render the app
  if(isAuthenticated) return children;
}

export default ProtectedRoute;
