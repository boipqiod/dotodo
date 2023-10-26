export const useAuth = () => {
  const login = (email: string, password: string) => {
    console.log('login', email, password);
  };

  return {
    login,
  };
};
